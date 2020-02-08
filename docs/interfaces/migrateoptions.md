[yammy](../README.md) › [MigrateOptions](migrateoptions.md)

# Interface: MigrateOptions

## Hierarchy

* **MigrateOptions**

  ↳ [ConfigFile](configfile.md)

## Index

### Properties

* [autoClose](migrateoptions.md#optional-autoclose)
* [changelog](migrateoptions.md#optional-changelog)
* [dir](migrateoptions.md#optional-dir)

## Properties

### `Optional` autoClose

• **autoClose**? : *undefined | false | true*

Defined in src/index.ts:32

Closes DB connection after migrations are applied or rolled back.

**`default:`** true

___

### `Optional` changelog

• **changelog**? : *undefined | string*

Defined in src/index.ts:27

Collection which is used to store migration history

**`default`** '__changelog__'

___

### `Optional` dir

• **dir**? : *undefined | string*

Defined in src/index.ts:22

Directory with migrations, relative to your program cwd or absolute

**`default`** 'migrations'
