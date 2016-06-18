class Lspi {
  createRecord(recordName) {
    const recordCheck = this.getRecord(recordName)
    if (recordCheck) { 
      console.log(`The record: "${recordName}" already exists!`) 
    } else if (!recordCheck) {
      localStorage.setItem(recordName, JSON.stringify({}))
    }
  }

  createRecords() {
    Array.from(arguments).map(record => this.createRecord(record))
  }

  updateRecord(recordName, data) {
    localStorage.setItem(recordName, JSON.stringify(data))
  }

  updateRecords() {
    return Array.from(arguments).map(arg => { this.updateRecord(arg[0], arg[1]) })
  }

  getRecord(recordName) {
    return JSON.parse(localStorage.getItem(recordName))
  }

  getRecords() {
    return Array.from(arguments).map(record => { this.getRecord(record) })
  }

  deleteRecord(recordName) {
    localStorage.clear(recordName)
  }

  deleteRecords() {
    return Array.from(arguments).map(record => { this.deleteRecord(record) })
  }
}

const lspi = new Lspi