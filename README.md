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

### Usage

#### CLI

As other migration tools it provides common CLI interface that's similar to them.

#### API

You can use this module inside your program or application. It was designed to be used in this way.

## API docs

See [docs](./docs/README.md)

## License

MIT