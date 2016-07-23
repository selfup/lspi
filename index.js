class Lspi {
  createRecord(recordName) {
    const recordCheck = this.getRecord(recordName)
    if (recordCheck) { 
      console.log(`The record: "${recordName}" already exists!`) 
    } else if (!recordCheck) {
      localStorage.setItem(recordName, JSON.stringify({}))
    }
  }

  updateRecord(recordName, data) {
    localStorage.setItem(recordName, JSON.stringify(data))
  }
  
    updateStringRecord(recordName, string) {
    localStorage.setItem(recordName, string)
  }

  getRecord(recordName) {
    return JSON.parse(localStorage.getItem(recordName))
  }

  deleteRecord(recordName) {
    localStorage.removeItem(recordName)
  }
}

const lspi = new Lspi
