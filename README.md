
# Local Storage Programming Interface

### Basic ORM for local storage that can save you time!

```javascript
const Lspi = require('lspi')
const lspi = new Lspi()

lspi.createEmptyRecordObject("testOne")
// #=> "{}"
// Now you can add keys to the result of getRecord

lspi.createEmptyRecordObject("testTwo")
// #=> "[]"
// Now you can manipulate the array store with getRecord

lspi.getRecord("testOne")
// #=> {}

lspi.getRecord("testTwo")
// #=> []

// If you already have your object built and want to store it:
// Also if you want to update what is in localStorage:
lspi.setRecord("testThree", { someKey: "some value" })
// #=> "{"someKey": "some value"}"

// If you want to store a raw string
lspi.setStringRecord("testFour", "this is what I want to store")
// #=> "this is what I want to store"

lspi.getStringRecord("testFour")
// #=> "testFour"

lspi.deleteRecord("testOne")
// #=> undefined
// this will clear an exact record from local storage for your webpage

lspi.dropAll() 
// #=> undefined
// Drops ALL localStorage records associated to your webpage
```

### License: MIT