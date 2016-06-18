
# Local Storage Programming Interface

### Basic ORM for local storage that can save you time!

```javascript
lspi.createRecord("testOne")
// Now that you have created a record try grabbing it

lspi.getRecord("testOne")
// This returns an empty object. Now we add a real object

lspi.updateRecord("testOne", {test: "Basic data for the 'testOne' record"})
// Now let's see what that really looks like

lspi.getRecord("testOne")
// Ok cool! You are using a high level API for the LocalStorage API. Think of this as an ORM!

lspi.deleteRecord("testOne")
// Now you don't have any more data. Feel free to use this in your projects!
```

### License: MIT