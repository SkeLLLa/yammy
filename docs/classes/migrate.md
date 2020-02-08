[yammy](../README.md) › [Migrate](migrate.md)

# Class: Migrate

## Hierarchy

* **Migrate**

## Index

### Constructors

* [constructor](migrate.md#constructor)

### Accessors

* [status](migrate.md#status)

### Methods

* [close](migrate.md#close)
* [down](migrate.md#down)
* [init](migrate.md#init)
* [up](migrate.md#up)

## Constructors

###  constructor

\+ **new Migrate**(`__namedParameters`: object, `migrateOptions`: [MigrateOptions](../interfaces/migrateoptions.md)): *[Migrate](migrate.md)*

Defined in src/index.ts:86

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`options` | undefined &#124; MongoClientOptions | - |
`uri` | string | "mongodb://localhost" |

▪`Default value`  **migrateOptions**: *[MigrateOptions](../interfaces/migrateoptions.md)*= {}

**Returns:** *[Migrate](migrate.md)*

## Accessors

###  status

• **get status**(): *Array‹[MigrationStatus](../interfaces/migrationstatus.md)›*

Defined in src/index.ts:102

Get migrations status

**Returns:** *Array‹[MigrationStatus](../interfaces/migrationstatus.md)›*

migrations status

## Methods

###  close

▸ **close**(): *Promise‹void›*

Defined in src/index.ts:258

Closes DB connection

**Returns:** *Promise‹void›*

___

###  down

▸ **down**(`howMany`: number): *Promise‹void›*

Defined in src/index.ts:210

Rollbacks migrations

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`howMany` | number | Infinity | how many migrations to roll back  |

**Returns:** *Promise‹void›*

___

###  init

▸ **init**(): *Promise‹void›*

Defined in src/index.ts:115

Initializes migrations

**Returns:** *Promise‹void›*

___

###  up

▸ **up**(`howMany`: number): *Promise‹void›*

Defined in src/index.ts:155

Applies migrations

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`howMany` | number | Infinity | how many migrations to apply  |

**Returns:** *Promise‹void›*
