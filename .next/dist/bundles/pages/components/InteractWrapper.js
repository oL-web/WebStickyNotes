module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNotes", function() { return addNotes; });
var addNotes = function addNotes(notes) {
  return function (dispatch) {
    dispatch({
      type: "ADD_NOTES",
      payload: notes
    });
  };
};

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNote", function() { return deleteNote; });
var deleteNote = function deleteNote(id) {
  return function (dispatch) {
    dispatch({
      type: "DELETE_NOTE",
      payload: id
    });
  };
};

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_interactjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_interactjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_interactjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cuid__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_uwp_CommandBar__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_uwp_CommandBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_uwp_CommandBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_uwp_AppBarButton__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_uwp_AppBarButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_uwp_AppBarButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_uwp_AppBarSeparator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_uwp_AppBarSeparator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_uwp_AppBarSeparator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__redux_actions_addNotes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__redux_actions_deleteNote__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var InteractWrapper = function (_React$Component) {
    _inherits(InteractWrapper, _React$Component);

    function InteractWrapper() {
        _classCallCheck(this, InteractWrapper);

        return _possibleConstructorReturn(this, (InteractWrapper.__proto__ || Object.getPrototypeOf(InteractWrapper)).apply(this, arguments));
    }

    _createClass(InteractWrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            __WEBPACK_IMPORTED_MODULE_2_interactjs__(this.refs.interact).draggable({
                inertia: false,
                restrict: {
                    restriction: "self",
                    endOnly: true,
                    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                },
                ignoreFrom: "textarea, [class*='command-bar-commands']",
                autoScroll: true,
                onmove: function (event) {
                    var target = event.target,
                        x = (parseFloat(target.getAttribute('data-x')) || this.props.x || 0) * 1 + event.dx,
                        y = (parseFloat(target.getAttribute('data-y')) || this.props.y || 0) * 1 + event.dy;

                    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                }.bind(this)
            }).resizable({
                edges: { left: true, right: true, bottom: true, top: true },
                restrictEdges: {
                    outer: 'parent',
                    endOnly: true
                },
                restrictSize: {
                    min: { width: 300, height: 300 }
                },
                inertia: true
            }).on('resizemove', function (event) {
                var target = event.target,
                    x = (parseFloat(target.getAttribute('data-x')) || this.props.x || 0) * 1,
                    y = (parseFloat(target.getAttribute('data-y')) || this.props.y || 0) * 1;

                target.style.width = event.rect.width + 'px';
                target.style.height = event.rect.height + 'px';

                x += event.deltaRect.left;
                y += event.deltaRect.top;

                target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            }.bind(this)).on('dragend', function (event) {
                this.saveNote(this.refs.textarea);
            }.bind(this));
        }
    }, {
        key: "saveNote",
        value: function saveNote(e) {
            var _this2 = this;

            var target = e.target || e;
            var storageNotes = JSON.parse(localStorage.notes);
            var noteAlreadyExists = false;
            storageNotes.forEach(function (item) {
                if (item.id === _this2.props.id) {
                    item.msg = target.value;
                    item.x = _this2.refs.interact.getAttribute('data-x') || _this2.props.x;
                    item.y = _this2.refs.interact.getAttribute('data-y') || _this2.props.y;
                    noteAlreadyExists = true;
                }
            });
            if (!noteAlreadyExists) {
                storageNotes.push({
                    id: this.props.id,
                    msg: target.value,
                    x: this.refs.interact.getAttribute('data-x') || this.props.x,
                    y: this.refs.interact.getAttribute('data-y') || this.props.y
                });
            }
            localStorage.notes = JSON.stringify(storageNotes);
        }
    }, {
        key: "createNewNote",
        value: function createNewNote(e) {
            var storageNotes = JSON.parse(localStorage.notes);
            if (storageNotes.length <= 50) {
                var note = {
                    id: __WEBPACK_IMPORTED_MODULE_3_cuid___default()(),
                    msg: "",
                    x: (this.refs.interact.getAttribute('data-x') || this.props.x) * 1 + 350,
                    y: this.refs.interact.getAttribute('data-y') || this.props.y
                };

                storageNotes.push(note);
                localStorage.notes = JSON.stringify(storageNotes);
                this.props.addNotes([note]);
            }
        }
    }, {
        key: "deleteNote",
        value: function deleteNote(e) {
            var _this3 = this;

            var storageNotes = JSON.parse(localStorage.notes);
            storageNotes = storageNotes.filter(function (item) {
                return item.id !== _this3.props.id;
            });
            if (storageNotes.length) {
                localStorage.notes = JSON.stringify(storageNotes);
                this.props.deleteNote(this.props.id);
            }
        }
    }, {
        key: "bringToTop",
        value: function bringToTop(e) {
            e.currentTarget.style["z-index"] = String(Date.now()).slice(-8);
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                {
                    style: {
                        transform: "translate(" + this.props.x + "px, " + this.props.y + "px)",
                        zIndex: String(Date.now()).slice(-8)
                    },
                    onMouseDown: this.bringToTop.bind(this),
                    ref: "interact", className: "jsx-2042595625"
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_uwp_CommandBar___default.a, {
                    style: {
                        touchAction: "none",
                        backgroundColor: this.props.accentColor || "#0078D7",
                        position: "relative"
                    },
                    labelPosition: "collapsed",
                    primaryCommands: [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_uwp_AppBarButton___default.a, { onClick: this.createNewNote.bind(this), icon: "Add", label: "Add note" }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_uwp_AppBarButton___default.a, { onClick: this.deleteNote.bind(this), icon: "Delete", label: "Delete note" })]
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", { ref: "textarea", onChange: this.saveNote.bind(this), defaultValue: this.props.msg, className: "jsx-2042595625"
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: "2042595625",
                    css: ["div.jsx-2042595625{width:300px;height:300px;position:absolute;}", "textarea.jsx-2042595625{margin-top:-48px;padding-top:48px;resize:none;width:100%;height:100%;font-size:18px;border:0;}"]
                })
            );
        }
    }]);

    return InteractWrapper;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        accentColor: state.accent.accentColor,
        notes: state.notes
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps, { addNotes: __WEBPACK_IMPORTED_MODULE_8__redux_actions_addNotes__["addNotes"], deleteNote: __WEBPACK_IMPORTED_MODULE_9__redux_actions_deleteNote__["deleteNote"] })(InteractWrapper));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("interactjs");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-uwp/CommandBar");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-uwp/AppBarButton");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-uwp/AppBarSeparator");

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ })
/******/ ]);