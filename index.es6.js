class Lspi {
  grab(name) {
    return JSON.parse(localStorage[name])
  }

  grabs() {
    return Array.from(arguments).map(e => this.grab(e))
  }

  put(name, data) {
    localStorage[name] = JSON.stringify(data)
  }

  puts() {
    Array.from(arguments).forEach(e => this.put(e[0], e[1]))
  }

  by(name, k, v) {
    return this.grab(name).find(e => e[k] === v)
  }

  where(name, k, v) {
    return this.grab(name).filter(e => e[k] === v)
  }

  whereEitherOr(name, k, v) {
    return this.grab(name).filter(e => e[k[0]] === v || e[k[1]] === v)
  }

  arrayStrongMatch(name, value) {
    return this.grab(name).filter(e => value === e)
  }

  arrayWeakMatch(name, value) {
    return this.grab(name).filter(e => value.includes(e))
  }

  drop(name) {
    delete localStorage[name]
  }

  drops() {
    Array.from(arguments).forEach(e => this.drop(e))
  }

  dropAll() {
    Object.keys(localStorage).forEach(e => delete localStorage(e))
  }
}

module.exports = Lspi
