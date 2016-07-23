class Lspi {
  createEmptyRecordObject(recordName) {
    const recordCheck = localStorage.getItem(recordName)
    if (recordCheck) { 
      console.log(`The record: "${recordName}" already exists!`) 
    } else if (!recordCheck) {
      localStorage.setItem(recordName, JSON.stringify({}))
    }
  }

  createEmptyRecordArray(recordName) {
    const recordCheck = localStorage.getItem(recordName)
    if (recordCheck) { 
      console.log(`The record: "${recordName}" already exists!`) 
    } else if (!recordCheck) {
      localStorage.setItem(recordName, JSON.stringify([]))
    }
  }

  setRecord(recordName, data) {
    localStorage.setItem(recordName, JSON.stringify(data))
  }
  
  setStringRecord(recordName, string) {
    localStorage.setItem(recordName, string)
  }

  getObjectRecord(recordName) {
    return JSON.parse(localStorage.getItem(recordName))
  }

  getStringRecord(recordName) {
    return localStorage.getItem(recordName)
  }

  deleteRecord(recordName) {
    localStorage.removeItem(recordName)
  }
}

module.exports = Lspi
