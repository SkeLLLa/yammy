[yammy](../README.md) › [MigrateOptionsDefaults](migrateoptionsdefaults.md)

# Interface: MigrateOptionsDefaults

## Hierarchy

* **MigrateOptionsDefaults**

## Index

### Properties

* [autoClose](migrateoptionsdefaults.md#autoclose)
* [changelog](migrateoptionsdefaults.md#changelog)
* [dir](migrateoptionsdefaults.md#dir)

## Properties

###  autoClose

• **autoClose**: *boolean*

Defined in src/index.ts:76

Closes DB connection after migrations are applied or rolled back.

**`default:`** true

___

###  changelog

• **changelog**: *string*

Defined in src/index.ts:71

Collection which is used to store migration history

**`default`** '__changelog__'

___

###  dir

• **dir**: *string*

Defined in src/index.ts:66

Directory with migrations, relative to your program cwd or absolute

**`default`** 'migrations'
