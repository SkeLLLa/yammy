[yammy](README.md)

# yammy

## Index

### Classes

* [Create](classes/create.md)
* [Down](classes/down.md)
* [Migrate](classes/migrate.md)
* [Status](classes/status.md)
* [Up](classes/up.md)

### Interfaces

* [ConfigFile](interfaces/configfile.md)
* [DbOptions](interfaces/dboptions.md)
* [MigrateOptions](interfaces/migrateoptions.md)
* [MigrateOptionsDefaults](interfaces/migrateoptionsdefaults.md)
* [Migration](interfaces/migration.md)
* [MigrationFile](interfaces/migrationfile.md)
* [MigrationStatus](interfaces/migrationstatus.md)

### Type aliases

* [MigrationFunction](README.md#migrationfunction)

### Variables

* [CONFIG_NAMES](README.md#const-config_names)

### Functions

* [getConfig](README.md#getconfig)

## Type aliases

###  MigrationFunction

Ƭ **MigrationFunction**: *function*

Defined in src/index.ts:40

Migration function.

**`param`** DB instance.

**`param`** MongoDB session, if passed it will use transaction.

#### Type declaration:

▸ (`db`: Db, `session?`: ClientSession): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`db` | Db |
`session?` | ClientSession |

## Variables

### `Const` CONFIG_NAMES

• **CONFIG_NAMES**: *string[]* = [
  '.yammyrc',
  '.yammyrc.json',
  '.yammyrc.js',
  '.migrationsrc',
  '.migrationsrc.json',
  '.migrationsrc.js',
]

Defined in src/cli-helpers.ts:4

## Functions

###  getConfig

▸ **getConfig**(`file?`: undefined | string): *[ConfigFile](interfaces/configfile.md) | undefined*

Defined in src/cli-helpers.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`file?` | undefined &#124; string |

**Returns:** *[ConfigFile](interfaces/configfile.md) | undefined*
