
# Local Storage Programming Interface

### Basic ORM for local storage that can save you time!

You will need webpack/browserify for this to work!

Super easy to use with React/Angular2/Ember2/Vue.js

***

To add to your `package.json`:

`npm install lspi --save`

```javascript
const Lspi = require('lspi')
const lspi = new Lspi()

lspi.createEmptyRecordObject("testOne")
// Returns undefined
// Stores #=> "{}"
// Now you can add keys to the result of getRecord

lspi.createEmptyRecordArray("testTwo")
// Returns undefined
// Stores #=> "[]"
// Now you can manipulate the array store with getRecord

lspi.getRecord("testOne")
// Returns #=> {}

lspi.getRecord("testTwo")
// Returns #=> []

// If you already have your object built and want to store it:
// Also if you want to update what is in localStorage:
lspi.setRecord("testThree", { someKey: "some value" })
// Returns #=> undefined
// Stores #=> "{"someKey": "some value"}"

// If you want to store a raw string
lspi.setStringRecord("testFour", "this is what I want to store")
// Returns #=> undefined
// Stores #=> "this is what I want to store"

lspi.getStringRecord("testFour")
// Returns #=> "this is what I want to store"

lspi.deleteRecord("testOne")
// Returns #=> undefined
// this will clear an exact record from local storage for your webpage

lspi.dropAll() 
// Returns #=> undefined
// Drops ALL localStorage records associated to your webpage
```

### License: MIT
