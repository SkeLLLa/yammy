import path from 'path';
import { MigrateOptions, DbOptions } from '.';

const CONFIG_NAMES = [
  '.yammyrc',
  '.yammyrc.json',
  '.yammyrc.js',
  '.migrationsrc',
  '.migrationsrc.json',
  '.migrationsrc.js',
];

export interface ConfigFile extends MigrateOptions, DbOptions {}

export function getConfig(file?: string): ConfigFile | undefined {
  const cwd = process.cwd();
  if (file) {
    if (path.isAbsolute(file)) {
      return require(file);
    }
    return require(path.join(cwd, file));
  }
  for (const fileName of CONFIG_NAMES) {
    try {
      return require(path.join(cwd, fileName));
    } catch (ex) {
      // ignore
    }
  }
}
