
# Local Storage Programming Interface

### Basic ORM for local storage that can save you time!

Super easy to use!

Only made for **Objects** and **Arrays**. Storing strings is easy enough :joy:

### Install

`npm install lspi --save`

### Basics

```javascript
const Lspi = require('lspi')
const lspi = new Lspi()

// set string ->
lspi.set('testOne', 'testing')
// Returns -> undefined
// Stores -> "testing"

// get string ->
lspi.get('testOne')
// Returns "testOne"

// set object literal ->
lspi.set('testOne', {})
// Returns -> undefined
// Stores -> "{}"

// get object literal ->
lspi.get('testOne')
// Returns -> {}

// set array ->
lspi.set('testTwo', [])
// Returns -> undefined
// Stores -> "[]"

// get array ->
lspi.get('testTwo')
// Returns -> []

// set array of objects ->
lspi.set('testOne', [{ name: 'test' }, {name: 'test2'}])
// Returns -> undefined
// Stores -> "{"name": "test2"}"

// where query on array of objects ->
lspi.where('testOne', 'name', 'test2')
// Returns -> [{ name: 'test2' }]

//= update state ->
lspi.set('test42', {hey: 'hi'})

lspi.update('test42', {ok: 'new stuff'})
// Returns undefined
// adds ok key and 'new stuff' value to the 'testOne' record

lspi.update('test42', {hey: 'hello'})
// Returns undefined
// updates hey value to 'hello' instead of 'hi'

//= remove data (singular) ->
lspi.drop('testOne')
// Returns -> undefined
// this will delete the 'testOne' record from localStorage

// remove all data ->
lspi.dropAll() 
// Returns -> undefined
// Drops ALL localStorage associated to your domain

// Mutiple set ->
lspi.sets(['test', {wow: 'wow1'}], ['test2', {wow: 'wow2'}])
// Returns -> undefined
// Stores {wow: 'wow1'} in mthe 'test' key
// Stores {wow: 'wow2'} in the 'test2' key

const testDataOne = lspi.get('test')
const testDataTwo = lspi.get('test2')

testDataOne // => {wow: 'wow1'}
testDataTwo // => {wow: 'wow2'}

// Multiple get ->\
lspi.sets(['test', {wow: 'wow'}], ['test2', {wow: 'wow'}])

const testData = lspi.gets('test', 'test2')

testData // => ['test', {wow: 'wow'}], ['test2', {wow: 'wow'}]

// Multiple drop ->
lspi.sets(
  ['test', {wow: 'wow1'}],
  ['test2', {wow: 'wow2'}],
  ['test3', {wow: 'wow3'}]
)

lspi.drops('test', 'test2')
// Returns undefined
// 'test3' -> {wow: 'wow3'} remains
```

### License: MIT
