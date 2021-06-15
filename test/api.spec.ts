import { beforeAll, afterAll, describe, test, expect } from '@jest/globals';
import { MongoMemoryReplSet } from 'mongodb-memory-server';
import Migrate from '../src';
import { MongoClient } from 'mongodb';

let uri: string;
let replSet: MongoMemoryReplSet;
let client: MongoClient;

beforeAll(async () => {
  // setup mem server;
  replSet = new MongoMemoryReplSet({
    replSet: { storageEngine: 'wiredTiger' },
  });
  await replSet.waitUntilRunning();
  uri = await replSet.getUri();
  client = new MongoClient(uri, { useUnifiedTopology: true });
  await client.connect();
});

afterAll(async () => {
  await client.close();
  await replSet.stop();
});

describe('API', () => {
  test('mongo server is running', () => {
    expect(uri).toBeDefined();
    expect(client.isConnected()).toBe(true);
  });

  describe('migration defaults', () => {
    let migrate: Migrate;

    beforeAll(async () => {
      migrate = new Migrate(
        {
          uri,
          options: { useUnifiedTopology: true },
        },
        { dir: './test/test-migrations', autoClose: false }
      );
      await migrate.init();
    });

    afterAll(async () => {
      await migrate.close();
    });

    describe('up', () => {
      test('applies migration', async () => {
        await migrate.up();
        const db = client.db('test');
        await expect(db.collection('test').findOne({ name: 'test-1' })).resolves.toMatchObject({
          name: 'test-1',
        });
        await expect(db.collection('test').findOne({ name: 'test-2' })).resolves.toMatchObject({
          name: 'test-2',
        });
      });
    });

    describe('status', () => {
      test('returns migration status', () => {
        expect(migrate.status).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ fileName: '01.transactions.js', applied: true }),
            expect.objectContaining({ fileName: '02.no-transactions.js', applied: true }),
          ])
        );
      });
    });

    describe('down', () => {
      test('rolls back migration', async () => {
        await migrate.down();
        const db = client.db('test');
        await expect(db.collection('test').findOne({ name: 'test-1' })).resolves.toBeNull();
        await expect(db.collection('test').findOne({ name: 'test-2' })).resolves.toBeNull();
      });
    });
  });

  describe('migration one', () => {
    let migrate: Migrate;

    beforeAll(async () => {
      migrate = new Migrate(
        {
          uri,
          options: { useUnifiedTopology: true },
        },
        { dir: `${__dirname}/test-migrations`, autoClose: false }
      );
      await migrate.init();
    });

    afterAll(async () => {
      await migrate.close();
    });

    describe('up 1', () => {
      test('applies migration', async () => {
        await migrate.up(1);
        const db = client.db('test');
        await expect(db.collection('test').findOne({ name: 'test-1' })).resolves.toMatchObject({
          name: 'test-1',
        });
        await expect(db.collection('test').findOne({ name: 'test-2' })).resolves.toBeNull();
      });
    });

    describe('status', () => {
      test('returns migration status', () => {
        expect(migrate.status).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ fileName: '01.transactions.js', applied: true }),
            expect.objectContaining({ fileName: '02.no-transactions.js', applied: false }),
          ])
        );
      });
    });

    describe('down 1', () => {
      test('rolls back migration', async () => {
        await migrate.down(1);
        const db = client.db('test');
        await expect(db.collection('test').findOne({ name: 'test-1' })).resolves.toBeNull();
        await expect(db.collection('test').findOne({ name: 'test-2' })).resolves.toBeNull();
      });
    });
  });
});
