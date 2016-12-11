const _jsonOrString = (data) => {
  try { return JSON.parse(data) } catch (e) { return data }
}

class Lspi {
  constructor() {
    // MDN polyfill for Object.assign
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    if (typeof Object.assign != 'function') {
      Object.assign = function (target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      };
    }
  }

  get(name) {
    return _jsonOrString(localStorage[name])
  }

  gets() {
    return Array.from(arguments).map(e => this.get(e))
  }

  set(name, data) {
    if (typeof data === 'string') localStorage[name] = data
    localStorage[name] = JSON.stringify(data)
  }

  sets() {
    Array.from(arguments).forEach(e => this.set(e[0], e[1]))
  }

  update(name, obj) {
    this.set(name, Object.assign(this.get(name), obj))
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
    Object.keys(localStorage).forEach(e => delete localStorage[e])
  }
}

module.exports = new Lspi()
