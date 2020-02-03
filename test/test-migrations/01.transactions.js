exports.db = 'test';

const collection = 'test';

/**
 * @param {import('mongodb').Db} db
 */
exports.up = async (db, session) => {
  await db.createCollection(collection);
  await db.collection(collection).insertOne({ name: 'test-1' }, { session });
};
/**
 * @param {import('mongodb').Db} db
 */
exports.down = async (db, session) => {
  await db.collection(collection).deleteOne({ name: 'test-1' }, { session });
  // await db.dropCollection(collection); // mongo mock sucks a bit
};
