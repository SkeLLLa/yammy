[yammy](../README.md) › [ConfigFile](configfile.md)

# Interface: ConfigFile

## Hierarchy

* [MigrateOptions](migrateoptions.md)

* [DbOptions](dboptions.md)

  ↳ **ConfigFile**

## Index

### Properties

* [autoClose](configfile.md#optional-autoclose)
* [changelog](configfile.md#optional-changelog)
* [dir](configfile.md#optional-dir)
* [options](configfile.md#optional-options)
* [uri](configfile.md#optional-uri)

## Properties

### `Optional` autoClose

• **autoClose**? : *undefined | false | true*

*Inherited from [MigrateOptions](migrateoptions.md).[autoClose](migrateoptions.md#optional-autoclose)*

Defined in src/index.ts:32

Closes DB connection after migrations are applied or rolled back.

**`default:`** true

___

### `Optional` changelog

• **changelog**? : *undefined | string*

*Inherited from [MigrateOptions](migrateoptions.md).[changelog](migrateoptions.md#optional-changelog)*

Defined in src/index.ts:27

Collection which is used to store migration history

**`default`** '__changelog__'

___

### `Optional` dir

• **dir**? : *undefined | string*

*Inherited from [MigrateOptions](migrateoptions.md).[dir](migrateoptions.md#optional-dir)*

Defined in src/index.ts:22

Directory with migrations, relative to your program cwd or absolute

**`default`** 'migrations'

___

### `Optional` options

• **options**? : *MongoClientOptions*

*Inherited from [DbOptions](dboptions.md).[options](dboptions.md#optional-options)*

Defined in src/index.ts:14

MongoDB client options

___

### `Optional` uri

• **uri**? : *undefined | string*

*Inherited from [DbOptions](dboptions.md).[uri](dboptions.md#optional-uri)*

Defined in src/index.ts:10

MongoDB connection string

**`default`** 'mongodb://localhost'
