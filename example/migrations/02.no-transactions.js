exports.db = 'test';

const collection = 'test';

/**
 * @param {import('mongodb').Db} db
 */
exports.up = async (db) => {
  await db.collection(collection).insertOne({ name: 'test-2' });
};
/**
 * @param {import('mongodb').Db} db
 */
exports.down = async (db) => {
  await db.collection(collection).deleteOne({ name: 'test-2' });
};
