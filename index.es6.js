class Lspi {
  get(name) {
    return JSON.parse(localStorage[name])
  }

  gets() {
    return Array.from(arguments).map(e => this.get(e))
  }

  set(name, data) {
    localStorage[name] = JSON.stringify(data)
  }

  sets() {
    Array.from(arguments).forEach(e => this.set(e[0], e[1]))
  }

  by(name, k, v) {
    return this.get(name).find(e => e[k] === v)
  }

  where(name, k, v) {
    return this.get(name).filter(e => e[k] === v)
  }

  whereEitherOr(name, k, v) {
    return this.get(name).filter(e => e[k[0]] === v || e[k[1]] === v)
  }

  arrayStrongMatch(name, value) {
    return this.get(name).filter(e => value === e)
  }

  arrayWeakMatch(name, value) {
    return this.get(name).filter(e => value.includes(e))
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

module.exports = new Lspi()
