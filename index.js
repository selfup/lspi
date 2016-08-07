"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lspi = function () {
  function Lspi() {
    _classCallCheck(this, Lspi);
  }

  _createClass(Lspi, [{
    key: "createEmptyRecordObject",
    value: function createEmptyRecordObject(recordName) {
      var recordCheck = this.getStringRecord(recordName);
      if (recordCheck) {
        console.log("The record: \"" + recordName + "\" already exists!");
      } else if (!recordCheck) {
        localStorage.setItem(recordName, JSON.stringify({}));
      }
    }
  }, {
    key: "createEmptyRecordArray",
    value: function createEmptyRecordArray(recordName) {
      var recordCheck = this.getStringRecord(recordName);
      if (recordCheck) {
        console.log("The record: \"" + recordName + "\" already exists!");
      } else if (!recordCheck) {
        localStorage.setItem(recordName, JSON.stringify([]));
      }
    }
  }, {
    key: "setRecord",
    value: function setRecord(recordName, data) {
      localStorage.setItem(recordName, JSON.stringify(data));
    }
  }, {
    key: "setStringRecord",
    value: function setStringRecord(recordName, string) {
      localStorage.setItem(recordName, string);
    }
  }, {
    key: "getRecord",
    value: function getRecord(recordName) {
      return JSON.parse(localStorage.getItem(recordName));
    }
  }, {
    key: "getStringRecord",
    value: function getStringRecord(recordName) {
      return localStorage.getItem(recordName);
    }
  }, {
    key: "deleteRecord",
    value: function deleteRecord(recordName) {
      localStorage.removeItem(recordName);
    }
  }, {
    key: "dropAll",
    value: function dropAll() {
      localStorage.clear();
    }
  }]);

  return Lspi;
}();

module.exports = Lspi;