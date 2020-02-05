import { Db, ClientSession } from 'mongodb';

/**
 * Database name to apply/rollback migration
 */
export const db = 'myDatabase';

/**
 * Function that applies transaction
 * @param db Mongo DB instance
 * @param session Optional session param. If provided Yammy will use transactions.
 */
export async function up(db: Db) {}

/**
 * Function that rolls back transaction
 * @param db Mongo DB instance
 * @param session Optional session param. If provided Yammy will use transactions.
 */
export async function down(db: Db) {}
