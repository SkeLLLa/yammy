import path from 'path';
import { promises as fs } from 'fs';
import { MongoClient, MongoClientOptions, Db, Collection, ClientSession } from 'mongodb';

export interface DbOptions {
  /**
   * MongoDB connection string
   * @default 'mongodb://localhost'
   */
  uri?: string;
  /**
   * MongoDB client options
   */
  options?: MongoClientOptions;
}

export interface MigrateOptions {
  /**
   * Directory with migrations, relative to your program cwd or absolute
   * @default 'migrations'
   */
  dir?: string;
  /**
   * Collection which is used to store migration history
   * @default '__changelog__'
   */
  changelog?: string;
  /**
   * Closes DB connection after migrations are applied or rolled back.
   * @default: true
   */
  autoClose?: boolean;
}

/**
 * Migration function.
 * @param db DB instance.
 * @param session MongoDB session, if passed it will use transaction.
 */
export type MigrationFunction = (db: Db, session?: ClientSession) => Promise<void>;

export interface MigrationStatus {
  fileName: string;
  applied: boolean;
  appliedAt?: Date;
}

export interface Migration {
  db: string;
  up: MigrationFunction;
  down: MigrationFunction;
}

export interface MigrationFile {
  fileName: string;
  migration: Migration;
  db: Db;
  status: Date | null;
}

interface MigrateOptionsDefaults {
  /**
   * Directory with migrations, relative to your program cwd or absolute
   * @default 'migrations'
   */
  dir: string;
  /**
   * Collection which is used to store migration history
   * @default '__changelog__'
   */
  changelog: string;
  /**
   * Closes DB connection after migrations are applied or rolled back.
   * @default: true
   */
  autoClose: boolean;
}

class Migrate {
  private _client: MongoClient;
  private _options: MigrateOptionsDefaults = {
    changelog: '__changelog__',
    dir: 'migrations',
    autoClose: true,
  };
  private _files: Array<MigrationFile> = [];
  constructor(
    { uri = 'mongodb://localhost', options }: DbOptions = {},
    migrateOptions: MigrateOptions = {}
  ) {
    this._client = new MongoClient(uri, options);
    Object.assign(this._options, migrateOptions);
    if (!path.isAbsolute(this._options.dir)) {
      this._options.dir = path.join(process.cwd(), this._options.dir);
    }
  }

  /**
   * Get migrations status
   * @returns migrations status
   */
  get status(): Array<MigrationStatus> {
    return this._files.map(({ fileName, status }) => {
      return {
        fileName,
        applied: !!status,
        appliedAt: status ? status : undefined,
      };
    });
  }

  /**
   * Initializes migrations
   */
  async init(): Promise<void> {
    const files = await fs.readdir(this._options.dir);
    const dbs: Map<string, Collection<any>> = new Map();
    await this._client.connect();

    for (const fileName of files.sort()) {
      const filePath = path.join(this._options.dir, fileName);
      const migration = await import(filePath);

      const db = this._client.db(migration.db);
      const mCollection = db.collection(this._options.changelog);
      dbs.set(migration.name, mCollection);
      const status = await mCollection.findOne({ fileName });

      this._files.push({
        fileName,
        migration,
        db,
        status: status ? status.appliedAt : null,
      });
    }

    await Promise.all(
      Array.from(dbs.values()).map((collection) => {
        return collection
          .createIndex(
            {
              fileName: 1,
            },
            { unique: true, name: 'fileName_1' }
          )
          .catch();
      })
    );
  }

  /**
   * Applies migrations
   * @param howMany how many migrations to apply
   */
  async up(howMany = Infinity): Promise<void> {
    let count = howMany;

    for (const file of this._files) {
      const { migration, db, fileName, status } = file;
      if (status) {
        continue;
      }
      if (count === 0) {
        break;
      }

      const mCollection = db.collection(this._options.changelog);
      count--;
      let session;
      const useTransaction = migration.up.length === 2;
      if (useTransaction) {
        session = this._client.startSession();
        session.startTransaction();
      }
      try {
        const appliedAt = new Date();
        await migration.up(db, session);
        await mCollection.insertOne(
          {
            fileName,
            appliedAt,
          },
          { session }
        );
        if (session) {
          await session.commitTransaction();
        }
        file.status = appliedAt;
      } catch (err) {
        if (session) {
          await session.abortTransaction();
        }
        throw err;
      } finally {
        if (session) {
          session.endSession();
        }
      }
    }

    if (this._options.autoClose) {
      await this.close();
    }
  }

  /**
   * Rollbacks migrations
   * @param howMany how many migrations to roll back
   */
  async down(howMany = Infinity): Promise<void> {
    let count = howMany;
    for (const file of this._files.reverse()) {
      const { migration, db, fileName, status } = file;
      if (!status) {
        continue;
      }
      if (count === 0) {
        break;
      }
      const mCollection = db.collection(this._options.changelog);
      count--;
      let session;
      const useTransaction = migration.up.length === 2;
      if (useTransaction) {
        session = this._client.startSession();
        session.startTransaction();
      }
      try {
        await migration.down(db, session);
        await mCollection.deleteOne(
          {
            fileName,
          },
          { session }
        );
        if (session) {
          await session.commitTransaction();
        }
      } catch (err) {
        if (session) {
          await session.abortTransaction();
        }
        throw err;
      } finally {
        if (session) {
          session.endSession();
        }
      }
    }
    if (this._options.autoClose) {
      await this.close();
    }
  }

  /**
   * Closes DB connection
   */
  async close(): Promise<void> {
    try {
      await this._client.close();
    } catch (err) {
      await this._client.close(true).catch();
    }
  }
}

export default Migrate;
