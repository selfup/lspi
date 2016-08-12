'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _matchOrNot = Symbol('matchOrNot');

var Lspi = function () {
  function Lspi() {
    _classCallCheck(this, Lspi);
  }

  _createClass(Lspi, [{
    key: 'createEmptyRecordObject',
    value: function createEmptyRecordObject(recordName) {
      var check = this.getRecord(recordName);
      if (check) console.log('The record: "' + arg + '" already exists!');
      if (!check) localStorage.setItem(arg, JSON.stringify({}));
    }
  }, {
    key: 'createEmptyRecordObjects',
    value: function createEmptyRecordObjects() {
      var _this = this;

      Array.from(arguments).forEach(function (arg) {
        var check = _this.getRecord(arg);
        if (check) console.log('The record: "' + arg + '" already exists!');
        if (!check) localStorage.setItem(arg, JSON.stringify({}));
      });
    }
  }, {
    key: 'createEmptyRecordArray',
    value: function createEmptyRecordArray(recordName) {
      var check = this.getRecord(recordName);
      if (check) console.log('The record: "' + recordName + '" already exists!');
      if (!check) localStorage.setItem(recordName, JSON.stringify([]));
    }
  }, {
    key: 'createEmptyRecordArrays',
    value: function createEmptyRecordArrays() {
      var _this2 = this;

      Array.from(arguments).forEach(function (arg) {
        var check = _this2.getRecord(arg);
        if (check) console.log('The record: "' + arg + '" already exists!');
        if (!check) localStorage.setItem(arg, JSON.stringify([]));
      });
    }
  }, {
    key: 'setRecord',
    value: function setRecord(recordName, data) {
      try {
        localStorage.setItem(recordName, JSON.stringify(data));
      } catch (error) {
        console.log('ERROR:\n\n' + error + '\n\n:ERROR\n\n');
        console.error('Could not set the "' + recordName + '" Record');
      }
    }
  }, {
    key: 'setRecords',
    value: function setRecords(args) {
      var _this3 = this;

      args.forEach(function (arg) {
        return _this3.setRecord(arg[0], arg[1]);
      });
    }
  }, {
    key: 'setStringRecord',
    value: function setStringRecord(recordName, string) {
      try {
        localStorage.setItem(recordName, string);
      } catch (error) {
        console.log('ERROR:\n\n' + error + '\n\n:ERROR\n\n');
        console.error('Could not set the "' + recordName + '" Record');
      }
    }
  }, {
    key: 'getRecord',
    value: function getRecord(recordName) {
      var obj = JSON.parse(localStorage.getItem(recordName));
      if (!obj) return console.log('The "' + recordName + '" record does not exist!');
      return obj;
    }
  }, {
    key: 'getRecords',
    value: function getRecords() {
      var _this4 = this;

      return Array.from(arguments).map(function (arg) {
        return _this4.getRecord(arg);
      });
    }
  }, {
    key: 'where',
    value: function where(recordName, key, equals) {
      resultArr = [];
      this.getRecord(recordName).forEach(function (record) {
        if (record[key] === equals) {
          resultArr.push(record);
        }
      });
      if (!resultArr[0]) {
        return console.log('No records match k:\'' + key + '\' with v:"' + equals + '"');
      }
      return resultArr;
    }
  }, {
    key: 'whereEitherOr',
    value: function whereEitherOr(recordName, keys, value) {
      resultArr = [];
      this.getRecord(recordName).forEach(function (record) {
        if (record[key[0]] === equals || record[key[1]] === equals) {
          resultArr.push(record);
        }
      });
      if (!resultArr[0]) return this[_matchOrNot](key, equals);
      return resultArr;
    }
  }, {
    key: 'arrayWeakMatch',
    value: function arrayWeakMatch(recordName, query) {
      var record = this.getRecord(recordName);
      var result = [];
      record.forEach(function (el) {
        if (query.includes(el)) result.push(el);
      });
      if (!result[0]) return console.log('No weak matches for ' + query);
      return result;
    }
  }, {
    key: 'arrayStrongMatch',
    value: function arrayStrongMatch(recordName, query) {
      var record = this.getRecord(recordName);
      var result = [];
      record.forEach(function (el) {
        if (query === el) result.push(el);
      });
      if (!result[0]) return console.log('No strong matches for ' + query);
      return result;
    }
  }, {
    key: 'getStringRecord',
    value: function getStringRecord(recordName) {
      var str = localStorage.getItem(recordName);
      if (!str) return console.log('The "' + recordName + '" record does not exist!');
      return str;
    }
  }, {
    key: 'getStringRecords',
    value: function getStringRecords() {
      var _this5 = this;

      return Array.from(arguments).map(function (arg) {
        return _this5.getRecord(arg);
      });
    }
  }, {
    key: 'deleteRecord',
    value: function deleteRecord(recordName) {
      localStorage.removeItem(recordName);
    }
  }, {
    key: 'deleteRecords',
    value: function deleteRecords() {
      var _this6 = this;

      Array.from(arguments).forEach(function (arg) {
        return _this6.deleteRecord(arg);
      });
    }
  }, {
    key: 'dropAll',
    value: function dropAll() {
      localStorage.clear();
    }

    // ** private

  }, {
    key: _matchOrNot,
    value: function value(key, equals) {
      return console.log('No records match k:\'' + key + '\' with v:"' + equals + '"');
    }
  }]);

  return Lspi;
}();

module.exports = Lspi;