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
      console.log(`ERROR:\n\n${error}\n\n:ERROR\n\n`)
      console.error(`Could not set the "${recordName}" Record`)
    }
  }

  setRecords(args) {
    args.forEach(arg => this.setRecord(arg[0], arg[1]))
  }

  setStringRecord(recordName, string) {
    try {
      localStorage.setItem(recordName, string)
    } catch (error) {
      console.log  (`ERROR:\n\n${error}\n\n:ERROR\n\n`)
      console.error(`Could not set the "${recordName}" Record`)
    }
  }

  getRecord(recordName) {
    const obj = JSON.parse(localStorage.getItem(recordName))
    if (!obj) return console.log(`The "${recordName}" record does not exist!`)
    return obj
  }

  getRecords() {
    return Array.from(arguments).map(arg => this.getRecord(arg))
  }

  where(recordName, key, equals) {
    resultArr = []
    this.getRecord(recordName).forEach(record => {
      if (record[key] === equals) {
        resultArr.push(record)
      }
    })
    if (!resultArr[0]) {
      return console.log(`No records match k:'${key}' with v:"${equals}"`)
    }
    return resultArr
  }

  whereEitherOr(recordName, keys, value) {
    resultArr = []
    this.getRecord(recordName).forEach(record => {
      if (record[key[0]] === equals || record[key[1]] === equals) {
        resultArr.push(record)
      }
    })
    if (!resultArr[0]) return false
    return resultArr
  }

  arrayWeakMatch(recordName, query) {
    const record = this.getRecord(recordName)
    let   result = []
    record.forEach(el => { if (query.includes(el)) result.push(el) })
    if (!result[0]) return console.log(`No weak matches for ${query}`)
    return result
  }

  arrayStrongMatch(recordName, query) {
    const record = this.getRecord(recordName)
    let   result = []
    record.forEach(el => { if (query === el) result.push(el) })
    if (!result[0]) return console.log(`No strong matches for ${query}`)
    return result
  }

  getStringRecord(recordName) {
    const str = localStorage.getItem(recordName)
    if (!str) return console.log(`The "${recordName}" record does not exist!`)
    return str
  }

  getStringRecords() {
    return Array.from(arguments).map(arg => this.getRecord(arg))
  }

  deleteRecord(recordName) {
    localStorage.removeItem(recordName)
  }

  deleteRecords() {
    Array.from(arguments).forEach(arg => this.deleteRecord(arg))
  }

  dropAll() {
    localStorage.clear()
  }
}

module.exports = Lspi
