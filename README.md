# Yammy

Yet another MongoDB migration tool. Unlike other utils it designed to be used in program as a module.

- [Yammy](#yammy)
  - [Features](#features)
  - [Installation](#installation)
    - [Requirements](#requirements)
  - [Getting started](#getting-started)
    - [Migration file](#migration-file)
    - [Configuration](#configuration)
    - [Usage](#usage)
  - [API docs](#api-docs)
  - [License](#license)

## Features

* Support multiple databases.
* Has backward compatibility with [migrate-mongo](https://www.npmjs.com/package/migrate-mongo). You'll just need to specify database name in your migrations.
* Simple API interface.
* Supports and uses transactions by default.

## Installation

```
npm i yammy
```

### Requirements

* Node.js `>=8.0.0`
* MongoDB `>=4.0`

## Getting started

### Migration file

Your migration file should implement [Migration interface](./docs/interfaces/migration.md)

```js
/**
 * Target database name
 */
exports.db = 'mydb';

/**
 * Apply migration
 * @param {import('mongodb').Db} db
 * @param {import('mongodb').ClientSession} session
 */
exports.up = async (db, session) => {
  await db.collection('foo').createIndexes(
    [
      {
        key: { bar: 1 },
        name: `bar_1`,
      },
    ],
    { session }
  );
};
/**
 * Rollback migration
 * @param {import('mongodb').Db} db
 * @param {import('mongodb').ClientSession} session
 */
exports.down = async (db, session) => {
  await db.collection('foo').dropIndex(`bar_1`, { session });
};
```

### Configuration

### Usage

## API docs

See [docs](./docs/README.md)

## License

MIT