import path from 'path';
import { promises as fs } from 'fs';
import { MongoClient, MongoClientOptions } from 'mongodb';

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
}

interface MigrateOptionsDefined {
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
}

class Migrate {
  private _client: MongoClient;
  private _options: MigrateOptionsDefined = { changelog: '__changelog__', dir: 'migrations' };
  private _files: Array<string> = [];
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
   * Migration files
   * @returns migration files list
   */
  get files(): Array<string> {
    return this._files;
  }

  /**
   * Initializes migrations
   */
  async init(): Promise<void> {
    this._files = await fs.readdir(this._options.dir);
    this._files = this._files.sort();
    await this._client.connect();
  }

  /**
   * Applies migrations
   * @param howMany how many migrations to apply
   */
  async up(howMany = Infinity): Promise<void> {
    let count = howMany;
    for (const fileName of this._files) {
      if (count === 0) {
        break;
      }
      const filePath = path.join(this._options.dir, fileName);
      const migration = await import(filePath);
      const db = this._client.db(migration.db);
      const mCollection = db.collection(this._options.changelog);
      const appliedMigration = await mCollection.findOne({ file: fileName });
      if (appliedMigration) {
        continue;
      }
      count--;
      await migration.up(db);
      await mCollection.insertOne({
        file: fileName,
        createdAt: new Date(),
      });
    }
    await this.close();
  }

  /**
   * Rollbacks migrations
   * @param howMany how many migrations to roll back
   */
  async down(howMany = Infinity): Promise<void> {
    let count = howMany;
    for (const fileName of this._files.reverse()) {
      if (count === 0) {
        break;
      }
      const filePath = path.join(this._options.dir, fileName);
      const migration = await import(filePath);
      const db = this._client.db(migration.db);
      const mCollection = db.collection(this._options.changelog);
      const appliedMigration = await mCollection.findOne({ file: fileName });
      if (!appliedMigration) {
        continue;
      }
      count--;
      await migration.down(db);
      await mCollection.deleteOne({
        _id: appliedMigration._id,
      });
    }
    await this.close();
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
