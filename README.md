
# Local Storage Programming Interface

### Basic ORM for local storage that can save you time!

Super easy to use!

### Install

`npm install lspi --save`

### Basics

```javascript
const Lspi = require('lspi')
const lspi = new Lspi()

lspi.put('testOne', {})
// Returns -> undefined
// Stores -> "{}"

lspi.grab('testOne')
// Returns -> {}

lspi.put('testTwo', {})
// Returns -> undefined
// Stores -> "[]"

lspi.grab('testTwo')
// Returns -> []

lspi.put('testOne', { name: 'test' })
// Returns -> undefined
// Stores -> "{"someKey": "some value"}"

lspi.by('testOne', 'name', 'test')
// Returns -> { someKey: 'some value' }

lspi.drop('testOne')
// Returns -> undefined
// this will delete the 'testOne' record from localStorage

lspi.dropAll() 
// Returns -> undefined
// Drops ALL localStorage associated to your domain
```

### License: MIT
