/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Queue = _interopRequireDefault(__webpack_require__(1));

var _LinkedList = _interopRequireDefault(__webpack_require__(2));

var _Stack = _interopRequireDefault(__webpack_require__(3));

var _Events = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Queue: _Queue["default"],
  LinkedList: _LinkedList["default"],
  Stack: _Stack["default"]
};
exports["default"] = _default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue =
/*#__PURE__*/
function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this._items = [];
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue() {
      var _this$_items;

      (_this$_items = this._items).push.apply(_this$_items, arguments);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this._items.shift();
    }
  }, {
    key: "front",
    value: function front() {
      return this._items[0];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._items.length === 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this._items.length;
    }
  }]);

  return Queue;
}();

var QueueElement = function QueueElement(element, priority) {
  _classCallCheck(this, QueueElement);

  this.element = element;
  this.priority = priority;
};

var PriorityQueue =
/*#__PURE__*/
function (_Queue) {
  _inherits(PriorityQueue, _Queue);

  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    return _possibleConstructorReturn(this, _getPrototypeOf(PriorityQueue).apply(this, arguments));
  }

  _createClass(PriorityQueue, [{
    key: "enqueue",
    value: function enqueue(element, priority) {
      var queueElement = new QueueElement(element, priority);
      var added = false;

      for (var i = 0; i < this._items.length; i++) {
        if (this._items[i].priority < queueElement.priority) {
          this._items.splice(i, 0, queueElement);

          added = true;
          break;
        }
      }

      if (!added) {
        this._items.push(queueElement);
      }
    }
  }]);

  return PriorityQueue;
}(Queue);

var _default = {
  Queue: Queue,
  PriorityQueue: PriorityQueue
};
exports["default"] = _default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(element) {
  _classCallCheck(this, Node);

  this.element = element;
  this.next = null;
};

var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.length = 0;
    this.head = null;
  }

  _createClass(LinkedList, [{
    key: "append",
    value: function append(element) {
      var node = new Node(element);

      if (this.head === null) {
        this.head = node;
      } else {
        var current = this.head;

        while (current.next) {
          current = current.next;
        }

        current.next = node;
      }

      this.length++;
    }
  }, {
    key: "insert",
    value: function insert(position, element) {
      if (position >= this.length || position < 0) {
        this.append(element);
      } else {
        var current = this.head,
            node = new Node(element);

        if (position === 0) {
          node.next = current;
          this.head = node;
        } else {
          var index = 0,
              previous;

          while (index++ < position) {
            previous = current;
            current = current.next;
          }

          node.next = current;
          previous.next = node;
        }

        this.length++;
      }
    }
  }, {
    key: "removeAt",
    value: function removeAt(position) {
      if (position > -1 && position < this.length) {
        var current = head,
            previous,
            index = 0;

        if (position === 0) {
          this.head = current.next;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }

          previous.next = current.next;
        }

        this.length--;
        return current.element;
      }
    }
  }, {
    key: "remove",
    value: function remove(element) {
      var index = this.indexOf(element);
      return this.removeAt(index);
    }
  }, {
    key: "indexOf",
    value: function indexOf(element) {
      var index = -1,
          current = this.head;

      while (current) {
        index++;

        if (current.element === element) {
          return index;
        }

        current = current.next;
      }

      return -1;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.length === 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this.length;
    }
  }, {
    key: "getHead",
    value: function getHead() {
      return this.head;
    }
  }]);

  return LinkedList;
}();

var _default = {
  LinkedList: LinkedList
};
exports["default"] = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack =
/*#__PURE__*/
function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this._items = [];
  }

  _createClass(Stack, [{
    key: "push",
    value: function push() {
      var _this$_items;

      (_this$_items = this._items).push.apply(_this$_items, arguments);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this._items.pop();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this._items[this._items.length - 1];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._items.length === 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._items.length = 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this._items.length;
    }
  }]);

  return Stack;
}();

var _default = {
  Stack: Stack
};
exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Events =
/*#__PURE__*/
function () {
  function Events() {
    _classCallCheck(this, Events);

    this._events = Object.create(null);
  }

  _createClass(Events, [{
    key: "on",
    value: function on(event, fn) {
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this.on(event[i], fn);
        }
      } else {
        (this._events[event] || (this._events[event] = [])).push(fn);
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(event, fn) {
      if (!arguments.length) {
        this._events = Object.create(null);
        return this;
      }

      if (Array.isArray(event)) {
        for (var _i = 0, l = event.length; _i < l; _i++) {
          this.off(event[_i], fn);
        }

        return this;
      }

      var cbs = this._events[event];

      if (!cbs) {
        return this;
      }

      if (!fn) {
        this._events[event] = null;
        return this;
      }

      var cb;
      var i = cbs.length;

      while (i--) {
        cb = cbs[i];

        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(event, fn) {
      var _this = this;

      function on() {
        _this.off(event, fn);

        fn.apply(_this, arguments);
      }

      on.fn = fn;
      this.on(event, on);
      return this;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var cbs = this._events[event];

      if (cbs) {
        var args = Array.from(arguments).slice(1);

        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i].apply(this, args);
        }
      }

      return this;
    }
  }]);

  return Events;
}();

var _default = {
  Events: Events
};
exports["default"] = _default;

/***/ })
/******/ ]);