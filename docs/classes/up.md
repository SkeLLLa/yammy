[yammy](../README.md) › [Up](up.md)

# Class: Up

## Hierarchy

* Command

  ↳ **Up**

## Index

### Constructors

* [constructor](up.md#constructor)

### Properties

* [argv](up.md#argv)
* [config](up.md#config)
* [ctor](up.md#ctor)
* [debug](up.md#protected-debug)
* [id](up.md#id)
* [_base](up.md#static-_base)
* [aliases](up.md#static-aliases)
* [args](up.md#static-args)
* [description](up.md#static-description)
* [examples](up.md#static-examples)
* [help](up.md#static-help)
* [hidden](up.md#static-hidden)
* [id](up.md#static-id)
* [parse](up.md#static-parse)
* [parserOptions](up.md#static-parseroptions)
* [plugin](up.md#static-plugin)
* [run](up.md#static-run)
* [strict](up.md#static-strict)
* [title](up.md#static-title)
* [usage](up.md#static-usage)

### Methods

* [_help](up.md#protected-_help)
* [_helpOverride](up.md#protected-_helpoverride)
* [_run](up.md#_run)
* [_version](up.md#protected-_version)
* [catch](up.md#protected-catch)
* [error](up.md#error)
* [exit](up.md#exit)
* [finally](up.md#protected-finally)
* [init](up.md#protected-init)
* [log](up.md#log)
* [parse](up.md#protected-parse)
* [run](up.md#run)
* [warn](up.md#warn)

### Object literals

* [flags](up.md#static-flags)

## Constructors

###  constructor

\+ **new Up**(`argv`: string[], `config`: IConfig): *[Up](up.md)*

*Inherited from [Create](create.md).[constructor](create.md#constructor)*

Defined in node_modules/@oclif/command/lib/command.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`argv` | string[] |
`config` | IConfig |

**Returns:** *[Up](up.md)*

## Properties

###  argv

• **argv**: *string[]*

*Inherited from [Create](create.md).[argv](create.md#argv)*

Defined in node_modules/@oclif/command/lib/command.d.ts:9

___

###  config

• **config**: *IConfig*

*Inherited from [Create](create.md).[config](create.md#config)*

Defined in node_modules/@oclif/command/lib/command.d.ts:10

___

###  ctor

• **ctor**: *typeof Command*

*Inherited from [Create](create.md).[ctor](create.md#ctor)*

Defined in node_modules/@oclif/command/lib/command.d.ts:45

___

### `Protected` debug

• **debug**: *function*

*Inherited from [Create](create.md).[debug](create.md#protected-debug)*

Defined in node_modules/@oclif/command/lib/command.d.ts:43

#### Type declaration:

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  id

• **id**: *string | undefined*

*Inherited from [Create](create.md).[id](create.md#static-id)*

Defined in node_modules/@oclif/command/lib/command.d.ts:42

___

### `Static` _base

▪ **_base**: *string*

*Inherited from [Create](create.md).[_base](create.md#static-_base)*

Defined in node_modules/@oclif/command/lib/command.d.ts:11

___

### `Static` aliases

▪ **aliases**: *string[]*

*Inherited from [Create](create.md).[aliases](create.md#static-aliases)*

Defined in node_modules/@oclif/command/lib/command.d.ts:26

An array of aliases for this command

___

### `Static` args

▪ **args**: *object[]* = [{ name: 'count' }]

*Overrides [Status](status.md).[args](status.md#static-optional-args)*

Defined in src/commands/up.ts:23

___

### `Static` description

▪ **description**: *string* = "applies migrations"

*Overrides void*

Defined in src/commands/up.ts:7

___

### `Static` examples

▪ **examples**: *string[] | undefined*

*Inherited from [Create](create.md).[examples](create.md#static-examples)*

Defined in node_modules/@oclif/command/lib/command.d.ts:36

An array of example strings to show at the end of the command's help

___

### `Static` help

▪ **help**: *string | undefined*

*Inherited from [Create](create.md).[help](create.md#static-help)*

Defined in node_modules/@oclif/command/lib/command.d.ts:24

___

### `Static` hidden

▪ **hidden**: *boolean*

*Inherited from [Create](create.md).[hidden](create.md#static-hidden)*

Defined in node_modules/@oclif/command/lib/command.d.ts:21

hide the command from help?

___

### `Static` id

▪ **id**: *string*

*Inherited from [Create](create.md).[id](create.md#static-id)*

Defined in node_modules/@oclif/command/lib/command.d.ts:13

A command ID, used mostly in error or verbose reporting

___

### `Static` parse

▪ **parse**: *boolean*

*Inherited from [Create](create.md).[parse](create.md#static-parse)*

Defined in node_modules/@oclif/command/lib/command.d.ts:29

___

### `Static` parserOptions

▪ **parserOptions**: *object*

*Inherited from [Create](create.md).[parserOptions](create.md#static-parseroptions)*

Defined in node_modules/@oclif/command/lib/command.d.ts:37

#### Type declaration:

___

### `Static` plugin

▪ **plugin**: *IPlugin | undefined*

*Inherited from [Create](create.md).[plugin](create.md#static-plugin)*

Defined in node_modules/@oclif/command/lib/command.d.ts:34

___

### `Static` run

▪ **run**: *Class["run"]*

*Inherited from [Create](create.md).[run](create.md#static-run)*

Defined in node_modules/@oclif/command/lib/command.d.ts:41

instantiate and run the command

___

### `Static` strict

▪ **strict**: *boolean*

*Inherited from [Create](create.md).[strict](create.md#static-strict)*

Defined in node_modules/@oclif/command/lib/command.d.ts:28

When set to false, allows a variable amount of arguments

___

### `Static` title

▪ **title**: *string | undefined*

*Inherited from [Create](create.md).[title](create.md#static-title)*

Defined in node_modules/@oclif/command/lib/command.d.ts:14

___

### `Static` usage

▪ **usage**: *string | string[] | undefined*

*Inherited from [Create](create.md).[usage](create.md#static-usage)*

Defined in node_modules/@oclif/command/lib/command.d.ts:23

An override string (or strings) for the default usage documentation

## Methods

### `Protected` _help

▸ **_help**(): *never*

*Inherited from [Create](create.md).[_help](create.md#protected-_help)*

Defined in node_modules/@oclif/command/lib/command.d.ts:68

**Returns:** *never*

___

### `Protected` _helpOverride

▸ **_helpOverride**(): *boolean*

*Inherited from [Create](create.md).[_helpOverride](create.md#protected-_helpoverride)*

Defined in node_modules/@oclif/command/lib/command.d.ts:69

**Returns:** *boolean*

___

###  _run

▸ **_run**<**T**>(): *Promise‹T | undefined›*

*Inherited from [Create](create.md).[_run](create.md#_run)*

Defined in node_modules/@oclif/command/lib/command.d.ts:46

**Type parameters:**

▪ **T**

**Returns:** *Promise‹T | undefined›*

___

### `Protected` _version

▸ **_version**(): *never*

*Inherited from [Create](create.md).[_version](create.md#protected-_version)*

Defined in node_modules/@oclif/command/lib/command.d.ts:70

**Returns:** *never*

___

### `Protected` catch

▸ **catch**(`err`: any): *Promise‹any›*

*Inherited from [Create](create.md).[catch](create.md#protected-catch)*

Defined in node_modules/@oclif/command/lib/command.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Promise‹any›*

___

###  error

▸ **error**(`input`: string | Error, `options`: object): *void*

*Inherited from [Create](create.md).[error](create.md#error)*

Defined in node_modules/@oclif/command/lib/command.d.ts:49

**Parameters:**

▪ **input**: *string | Error*

▪ **options**: *object*

Name | Type |
------ | ------ |
`code?` | undefined &#124; string |
`exit` | false |

**Returns:** *void*

▸ **error**(`input`: string | Error, `options?`: undefined | object): *never*

*Inherited from [Create](create.md).[error](create.md#error)*

Defined in node_modules/@oclif/command/lib/command.d.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`input` | string &#124; Error |
`options?` | undefined &#124; object |

**Returns:** *never*

___

###  exit

▸ **exit**(`code?`: undefined | number): *never*

*Inherited from [Create](create.md).[exit](create.md#exit)*

Defined in node_modules/@oclif/command/lib/command.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`code?` | undefined &#124; number |

**Returns:** *never*

___

### `Protected` finally

▸ **finally**(`_`: Error | undefined): *Promise‹any›*

*Inherited from [Create](create.md).[finally](create.md#protected-finally)*

Defined in node_modules/@oclif/command/lib/command.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`_` | Error &#124; undefined |

**Returns:** *Promise‹any›*

___

### `Protected` init

▸ **init**(): *Promise‹any›*

*Inherited from [Create](create.md).[init](create.md#protected-init)*

Defined in node_modules/@oclif/command/lib/command.d.ts:62

**Returns:** *Promise‹any›*

___

###  log

▸ **log**(`message?`: undefined | string, ...`args`: any[]): *void*

*Inherited from [Create](create.md).[log](create.md#log)*

Defined in node_modules/@oclif/command/lib/command.d.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |
`...args` | any[] |

**Returns:** *void*

___

### `Protected` parse

▸ **parse**<**F**, **A**>(`options?`: Parser.Input‹F›, `argv?`: string[]): *Parser.Output‹F, A›*

*Inherited from [Create](create.md).[parse](create.md#static-parse)*

Defined in node_modules/@oclif/command/lib/command.d.ts:63

**Type parameters:**

▪ **F**

▪ **A**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Parser.Input‹F› |
`argv?` | string[] |

**Returns:** *Parser.Output‹F, A›*

___

###  run

▸ **run**(): *Promise‹void›*

*Overrides [Create](create.md).[run](create.md#static-run)*

Defined in src/commands/up.ts:25

**Returns:** *Promise‹void›*

___

###  warn

▸ **warn**(`input`: string | Error): *void*

*Inherited from [Create](create.md).[warn](create.md#warn)*

Defined in node_modules/@oclif/command/lib/command.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`input` | string &#124; Error |

**Returns:** *void*

## Object literals

### `Static` flags

### ▪ **flags**: *object*

*Overrides void*

Defined in src/commands/up.ts:9

###  changelog

• **changelog**: *object & object & object* = flags.string({
      description: 'migrations changelog collection',
      env: 'MIGRATIONS_CHANGELOG',
    })

Defined in src/commands/up.ts:13

###  config

• **config**: *object & object & object* = flags.string({
      description: 'migrations custom config file',
      env: 'MIGRATIONS_CONFIG',
    })

Defined in src/commands/up.ts:17

###  dir

• **dir**: *object & object & object* = flags.string({ description: 'migrations directory', char: 'd', env: 'MIGRATIONS_DIR' })

Defined in src/commands/up.ts:12

###  help

• **help**: *object & object* = flags.help({ char: 'h' })

Defined in src/commands/up.ts:10

###  uri

• **uri**: *object & object & object* = flags.string({ description: 'mongo connection string', char: 'u', env: 'MONGO_URL' })

Defined in src/commands/up.ts:11
