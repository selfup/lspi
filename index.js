'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _jsonOrString = function _jsonOrString(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
};

var Lspi = function () {
  function Lspi() {
    _classCallCheck(this, Lspi);

    // MDN polyfill for Object.assign
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    if (typeof Object.assign != 'function') {
      Object.assign = function (target, varArgs) {
        // .length of function is 2
        'use strict';

        if (target == null) {
          // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            // Skip over if undefined or null
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

  _createClass(Lspi, [{
    key: 'get',
    value: function get(name) {
      return _jsonOrString(localStorage[name]);
    }
  }, {
    key: 'gets',
    value: function gets() {
      var _this = this;

      return Array.from(arguments).map(function (e) {
        return _this.get(e);
      });
    }
  }, {
    key: 'set',
    value: function set(name, data) {
      if (typeof data === 'string') localStorage[name] = data;
      localStorage[name] = JSON.stringify(data);
    }
  }, {
    key: 'sets',
    value: function sets() {
      var _this2 = this;

      Array.from(arguments).forEach(function (e) {
        return _this2.set(e[0], e[1]);
      });
    }
  }, {
    key: 'update',
    value: function update(name, obj) {
      this.set(name, Object.assign(this.get(name), obj));
    }
  }, {
    key: 'by',
    value: function by(name, k, v) {
      return this.get(name).find(function (e) {
        return e[k] === v;
      });
    }
  }, {
    key: 'where',
    value: function where(name, k, v) {
      return this.get(name).filter(function (e) {
        return e[k] === v;
      });
    }
  }, {
    key: 'whereEitherOr',
    value: function whereEitherOr(name, k, v) {
      return this.get(name).filter(function (e) {
        return e[k[0]] === v || e[k[1]] === v;
      });
    }
  }, {
    key: 'arrayStrongMatch',
    value: function arrayStrongMatch(name, value) {
      return this.get(name).filter(function (e) {
        return value === e;
      });
    }
  }, {
    key: 'arrayWeakMatch',
    value: function arrayWeakMatch(name, value) {
      return this.get(name).filter(function (e) {
        return value.includes(e);
      });
    }
  }, {
    key: 'drop',
    value: function drop(name) {
      delete localStorage[name];
    }
  }, {
    key: 'drops',
    value: function drops() {
      var _this3 = this;

      Array.from(arguments).forEach(function (e) {
        return _this3.drop(e);
      });
    }
  }, {
    key: 'dropAll',
    value: function dropAll() {
      Object.keys(localStorage).forEach(function (e) {
        return delete localStorage[e];
      });
    }
  }]);

  return Lspi;
}();

module.exports = new Lspi();
