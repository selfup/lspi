const _jsonOrString = (data) => {
  try { return JSON.parse(data) } catch (e) { return data }
}

class Lspi {
  constructor() { // MDN polyfill for Object.assign
    if (typeof Object.assign != 'function') {
      Object.assign = function (target, varArgs) {
        'use strict';
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
          if (nextSource != null) {
            for (var nextKey in nextSource) {
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

  where(name, k, v) {
    return this.get(name).filter(e => e[k] === v)
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
