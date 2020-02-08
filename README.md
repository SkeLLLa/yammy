# Yammy

<a title="Emoji One [CC BY-SA (https://creativecommons.org/licenses/by-sa/4.0)]" href="https://commons.wikimedia.org/wiki/File:Emojione1_1F60B.svg"><img style="float: right" width="256" alt="Emojione1 1F60B" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emojione1_1F60B.svg/256px-Emojione1_1F60B.svg.png"></a>

Yet another MongoDB migration tool. Unlike other utils it designed to be used in program as a module.

- [Yammy](#yammy)
  - [Features](#features)
  - [Installation](#installation)
    - [Requirements](#requirements)
  - [Getting started](#getting-started)
    - [Migration file](#migration-file)
    - [Configuration](#configuration)
      - [Config file](#config-file)
      - [Constructor options](#constructor-options)
    - [Usage](#usage)
      - [CLI](#cli)
      - [API](#api)
  - [API docs](#api-docs)
  - [License](#license)

<div style="clear: both;"></div>

[![NPM Version](https://img.shields.io/npm/v/yammy.svg)](https://www.npmjs.com/package/yammy)
[![Downloads Count](https://img.shields.io/npm/dm/yammy.svg)](https://www.npmjs.com/package/yammy)
[![Vunerabilities Count](https://snyk.io/test/npm/yammy/badge.svg)](https://www.npmjs.com/package/yammy)
[![Build Status](https://gitlab.com/m03geek/yammy/badges/master/pipeline.svg)](https://gitlab.com/m03geek/yammy/commits/master)
[![License](https://img.shields.io/npm/l/yammy.svg)](https://gitlab.com/m03geek/yammy/blob/master/LICENSE)
[![Codecov](https://img.shields.io/codecov/c/gl/m03geek/yammy.svg)](https://codecov.io/gl/m03geek/yammy)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/SkeLLLa/yammy.svg)](https://lgtm.com/projects/g/SkeLLLa/yammy/)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/SkeLLLa/yammy.svg)](https://lgtm.com/projects/g/SkeLLLa/yammy/)

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
* MongoDB 
  * `>=2.6` - for regular migrations
  * `>=4.0` - for transaction support on replica set
  * `>=4.2` - for transaction support on shards

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

See other [examples](./example).

### Configuration

#### Config file

File format: 

```js
module.exports = {
  uri: 'mongodb://localhost',
  changelog: '__changelog__',
  dir: 'migrations',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
```

By default you Yammy supports following file names: `.yammyrc`, `.yammyrc.json`, `.yammyrc.js`, `.migrationsrc`, `.migrationsrc.json`,  `.migrationsrc.js`. Also you can specify your own via `--config=path_to_file`.

Configuration file is used in only CLI mode. If you want to use it in your app you can require it and pass options to constructor like it shown in (Constructor options)[#constructor-options].

#### Constructor options

```js
const migrate = new Migrate(
  { uri: 'mongo://localhost', options: {useNewUrlParser: true} },
  { autoClose: true, dir: './migrations' }
);
```

For more details see [constructor](./deocs/classes/migrate.md#constructor)

### Usage

#### CLI

As other migration tools it provides common CLI interface that's similar to them.

```
USAGE
  $ yammy [COMMAND]

COMMANDS
  autocomplete  display autocomplete installation instructions
  create        get migration status
  down          rolls back migrations
  help          display help for yammy
  status        get migration status
  up            applies migrations
```

Use `yammy -h` or `yammy <command> -h` to see available options.

#### API

You can use this module inside your program or application. It was designed to be used in this way.

```ts
import Migrate from 'yammy';
import config from './.yammyrc.json';

const migrate = new Migrate(
  { uri: config.uri, options: config.options },
  { autoClose: true, changelog: config.changelog, dir: config.dir }
);

await migrate.init();
await migrate.down();
```

See [constructor](./deocs/classes/migrate.md#constructor) for details.

## API docs

See [docs](./docs/README.md)

## License

MIT