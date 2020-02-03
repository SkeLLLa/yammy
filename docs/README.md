[yammy](README.md)

# yammy

## Index

### Classes

* [Migrate](classes/migrate.md)

### Interfaces

* [DbOptions](interfaces/dboptions.md)
* [MigrateOptions](interfaces/migrateoptions.md)
* [MigrateOptionsDefaults](interfaces/migrateoptionsdefaults.md)
* [Migration](interfaces/migration.md)
* [MigrationFile](interfaces/migrationfile.md)
* [MigrationStatus](interfaces/migrationstatus.md)

### Type aliases

* [MigrationFunction](README.md#migrationfunction)

## Type aliases

###  MigrationFunction

Ƭ **MigrationFunction**: *function*

Defined in index.ts:40

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
