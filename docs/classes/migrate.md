[yammy](../README.md) › [Migrate](migrate.md)

# Class: Migrate

## Hierarchy

* **Migrate**

## Index

### Constructors

* [constructor](migrate.md#constructor)

### Accessors

* [files](migrate.md#files)

### Methods

* [close](migrate.md#close)
* [down](migrate.md#down)
* [init](migrate.md#init)
* [up](migrate.md#up)

## Constructors

###  constructor

\+ **new Migrate**(`__namedParameters`: object, `migrateOptions`: [MigrateOptions](../interfaces/migrateoptions.md)): *[Migrate](migrate.md)*

Defined in index.ts:46

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`options` | undefined &#124; MongoClientOptions | - |
`uri` | string | "mongodb://localhost" |

▪`Default value`  **migrateOptions**: *[MigrateOptions](../interfaces/migrateoptions.md)*= {}

**Returns:** *[Migrate](migrate.md)*

## Accessors

###  files

• **get files**(): *Array‹string›*

Defined in index.ts:62

Migration files

**Returns:** *Array‹string›*

migration files list

## Methods

###  close

▸ **close**(): *Promise‹void›*

Defined in index.ts:133

Closes DB connection

**Returns:** *Promise‹void›*

___

###  down

▸ **down**(`howMany`: number): *Promise‹void›*

Defined in index.ts:107

Rollbacks migrations

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`howMany` | number | Infinity | how many migrations to roll back  |

**Returns:** *Promise‹void›*

___

###  init

▸ **init**(): *Promise‹void›*

Defined in index.ts:69

Initializes migrations

**Returns:** *Promise‹void›*

___

###  up

▸ **up**(`howMany`: number): *Promise‹void›*

Defined in index.ts:79

Applies migrations

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`howMany` | number | Infinity | how many migrations to apply  |

**Returns:** *Promise‹void›*
