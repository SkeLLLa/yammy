import { Db, ClientSession } from 'mongodb';

/**
 * Database name to apply/rollback migration
 */
export const db = 'myDatabase';

/**
 * Function that applies transaction
 * @param db Mongo DB instance
 * @param session Optional session param. Remove if you don't need transactions.
 */
export async function up(db: Db, session?: ClientSession) {}

/**
 * Function that rolls back transaction
 * @param db Mongo DB instance
 * @param session Optional session param. Remove if you don't need transactions.
 */
export async function down(db: Db, session?: ClientSession) {}
