/**
 * Database name to apply/rollback migration
 */
exports.db = 'myDatabase';

/**
 * Function that applies transaction
 * @param {import('mongodb').Db} db Mongo DB instance
 * @param {import('mongodb').ClientSession} [session] Optional session param. If provided Yammy will use transactions.
 */
exports.up = async (db) => {};
/**
 * Function that rolls back transaction
 * @param {import('mongodb').Db} db Mongo DB instance
 * @param {import('mongodb').ClientSession} [session] Optional session param. If provided Yammy will use transactions.
 */
exports.down = async (db) => {};
