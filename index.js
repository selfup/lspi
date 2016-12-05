"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lspi = function () {
  function Lspi() {
    _classCallCheck(this, Lspi);
  }

  _createClass(Lspi, [{
    key: "grab",
    value: function grab(name) {
      return JSON.parse(localStorage[name]);
    }
  }, {
    key: "grabs",
    value: function grabs() {
      var _this = this;

      return Array.from(arguments).map(function (e) {
        return _this.grab(e);
      });
    }
  }, {
    key: "put",
    value: function put(name, data) {
      localStorage[name] = JSON.stringify(data);
    }
  }, {
    key: "puts",
    value: function puts() {
      var _this2 = this;

      Array.from(arguments).forEach(function (e) {
        return _this2.put(e[0], e[1]);
      });
    }
  }, {
    key: "by",
    value: function by(name, k, v) {
      return this.grab(name).find(function (e) {
        return e[k] === v;
      });
    }
  }, {
    key: "where",
    value: function where(name, k, v) {
      return this.grab(name).filter(function (e) {
        return e[k] === v;
      });
    }
  }, {
    key: "whereEitherOr",
    value: function whereEitherOr(name, k, v) {
      return this.grab(name).filter(function (e) {
        return e[k[0]] === v || e[k[1]] === v;
      });
    }
  }, {
    key: "arrayStrongMatch",
    value: function arrayStrongMatch(name, value) {
      return this.grab(name).filter(function (e) {
        return value === e;
      });
    }
  }, {
    key: "arrayWeakMatch",
    value: function arrayWeakMatch(name, value) {
      return this.grab(name).filter(function (e) {
        return value.includes(e);
      });
    }
  }, {
    key: "drop",
    value: function drop(name) {
      delete localStorage[name];
    }
  }, {
    key: "drops",
    value: function drops() {
      var _this3 = this;

      Array.from(arguments).forEach(function (e) {
        return _this3.drop(e);
      });
    }
  }, {
    key: "dropAll",
    value: function dropAll() {
      Object.keys(localStorage).forEach(function (e) {
        return delete localStorage(e);
      });
    }
  }]);

  return Lspi;
}();

module.exports = Lspi;
