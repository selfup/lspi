class Lspi {
  createEmptyRecordObject(recordName) {
    const check = this.getRecord(recordName)
    if (check) console.log(`The record: "${arg}" already exists!`)
    if (!check) localStorage.setItem(arg, JSON.stringify({}))
  }

  createEmptyRecordObjects() {
    Array.from(arguments).forEach(arg => {
      const check = this.getRecord(arg)
      if (check) console.log(`The record: "${arg}" already exists!`)
      if (!check) localStorage.setItem(arg, JSON.stringify({}))
    })
  }

  createEmptyRecordArray(recordName) {
    const check = this.getRecord(recordName)
    if (check) console.log(`The record: "${recordName}" already exists!`)
    if (!check) localStorage.setItem(recordName, JSON.stringify([]))
  }

  createEmptyRecordArrays() {
    Array.from(arguments).forEach(arg => {
      const check = this.getRecord(arg)
      if (check) console.log(`The record: "${arg}" already exists!`)
      if (!check) localStorage.setItem(arg, JSON.stringify([]))
    })
  }

  setRecord(recordName, data) {
    try {
      localStorage.setItem(recordName, JSON.stringify(data))
    } catch (error) {
      console.error(`Error setting the "${recordName}" Record`)
    }
  }

  setRecords(args) {
    args.forEach(arg => { this.setRecord(arg[0], arg[1]) })
  }

  setStringRecord(recordName, string) {
    try {
      localStorage.setItem(recordName, string)
    } catch (error) {
      console.error(`Error setting the "${recordName}" Record`)
    }
  }

  getRecord(recordName) {
    const record = JSON.parse(localStorage.getItem(recordName))
    if (!record) return console.log("record does not exist!")
    return record
  }

  getRecords() {
    return Array.from(arguments).map(arg => { this.getRecord(arg) })
  }

  getStringRecord(recordName) {
    const record = localStorage.getItem(recordName)
    if (!record) return console.log("record does not exist!")
    return record
  }

  getStringRecords() {
    return Array.from(arguments).map(arg => { this.getRecord(arg) })
  }

  deleteRecord(recordName) {
    localStorage.removeItem(recordName)
  }

  deleteRecords() {
    Array.from(arguments).forEach(arg => { this.deleteRecord(arg) })
  }

  dropAll() {
    localStorage.clear()
  }
}

module.exports = Lspi
