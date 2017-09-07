'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function jsonOrString(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
}

var Lspi = function () {
  function Lspi() {
    _classCallCheck(this, Lspi);
  }

  _createClass(Lspi, [{
    key: 'get',
    value: function get(name) {
      return jsonOrString(localStorage[name]);
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
    key: 'where',
    value: function where(name, k, v) {
      return this.get(name).filter(function (e) {
        return e[k] === v;
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
