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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
    showSettings: false,
    showShare: false
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "TOGGLE_SETTINGS":
            return _extends({}, state, {
                showSettings: !state.showSettings
            });
        case "TOGGLE_SHARE":
            return _extends({}, state, {
                showShare: !state.showShare
            });
        default:
            return state;
    }
});;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
    accentColor: ""
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "CHANGE_ACCENT":
            return _extends({}, state, {
                accentColor: action.payload
            });

        default:
            return state;
    }
});;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
    notes: []
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "ADD_NOTES":
            var stateObj = _extends({}, state);
            action.payload.forEach(function (item) {
                stateObj.notes.push(item);
            });
            return stateObj;

        case "DELETE_NOTE":
            var obj = _extends({}, state);
            obj.notes = obj.notes.filter(function (item) {
                return item.id !== action.payload;
            });
            return obj;

        default:
            return state;
    }
});;

/***/ }),
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(8);





var initialState = {};

var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a];

var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["default"], initialState, __WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, middleware));

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogReducer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accentReducer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noteReducer__ = __webpack_require__(5);





/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    dialog: __WEBPACK_IMPORTED_MODULE_1__dialogReducer__["default"],
    accent: __WEBPACK_IMPORTED_MODULE_2__accentReducer__["default"],
    notes: __WEBPACK_IMPORTED_MODULE_3__noteReducer__["default"]
}));

/***/ }),
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-uwp/ContentDialog");

/***/ }),
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeAccent", function() { return changeAccent; });
var changeAccent = function changeAccent(color) {
  return function (dispatch) {
    dispatch({
      type: "CHANGE_ACCENT",
      payload: color
    });
  };
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSettings", function() { return toggleSettings; });
var toggleSettings = function toggleSettings() {
  return function (dispatch) {
    dispatch({
      type: "TOGGLE_SETTINGS"
    });
  };
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleShare", function() { return toggleShare; });
var toggleShare = function toggleShare() {
  return function (dispatch) {
    dispatch({
      type: "TOGGLE_SHARE"
    });
  };
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_uwp_Theme__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_uwp_Theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_uwp_Theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_actions_changeAccent__ = __webpack_require__(19);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_uwp_Theme__["Theme"],
                {
                    needGenerateAcrylic: false,
                    theme: Object(__WEBPACK_IMPORTED_MODULE_1_react_uwp_Theme__["getTheme"])({
                        themeName: "dark", // set custom theme
                        accent: this.props.accentColor, // set accent color
                        useFluentDesign: true, // sure you want use new fluent design.
                        userAgent: false,
                        desktopBackgroundImage: "/static/bg1.jpg" // set global desktop background image
                    }) },
                this.props.children
            );
        }
    }]);

    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        accentColor: state.accent.accentColor
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { changeAccent: __WEBPACK_IMPORTED_MODULE_3__redux_actions_changeAccent__["changeAccent"] })(Layout));

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-uwp/Theme");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_find__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cuid__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__InteractWrapper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_actions_addNotes__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var NotesContainer = function (_React$Component) {
    _inherits(NotesContainer, _React$Component);

    function NotesContainer() {
        _classCallCheck(this, NotesContainer);

        return _possibleConstructorReturn(this, (NotesContainer.__proto__ || Object.getPrototypeOf(NotesContainer)).apply(this, arguments));
    }

    _createClass(NotesContainer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            localStorage.notes = localStorage.notes || "[{\"id\":\"" + __WEBPACK_IMPORTED_MODULE_4_cuid___default()() + "\",\"msg\":\"\",\"x\":\"60\",\"y\":\"10\"}]";
            var notesToAdd = JSON.parse(localStorage.notes);

            var sharedNotes = this.props.sharedNotes;
            if (sharedNotes) {
                // for each shared note filter out those withs ids that already exist in local notes
                var nonduplicatedSharedNotes = sharedNotes.filter(function (item) {
                    return !__WEBPACK_IMPORTED_MODULE_3_lodash_find___default()(notesToAdd, function (obj) {
                        return obj.id === item.id;
                    });
                });
                notesToAdd = notesToAdd.concat(nonduplicatedSharedNotes);
            }
            localStorage.notes = JSON.stringify(notesToAdd);
            this.props.addNotes(notesToAdd);
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                {
                    className: "jsx-807935170"
                },
                this.props.notes.notes.map(function (item, index) {
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__InteractWrapper__["default"], { key: item.id, id: item.id, msg: item.msg, x: item.x, y: item.y });
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: "807935170",
                    css: ["div.jsx-807935170{position:absolute;top:0;left:0;width:100%;height:100%;}"]
                })
            );
        }
    }]);

    return NotesContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        notes: state.notes,
        accentColor: state.accent.accentColor
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { addNotes: __WEBPACK_IMPORTED_MODULE_6__redux_actions_addNotes__["addNotes"] })(NotesContainer));

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_actions_toggleSettings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_uwp_ContentDialog__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_uwp_ContentDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_uwp_ContentDialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_uwp_ColorPicker__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_uwp_ColorPicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_uwp_ColorPicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var SettingsContainer = function (_React$Component) {
    _inherits(SettingsContainer, _React$Component);

    function SettingsContainer(props) {
        _classCallCheck(this, SettingsContainer);

        var _this = _possibleConstructorReturn(this, (SettingsContainer.__proto__ || Object.getPrototypeOf(SettingsContainer)).call(this, props));

        _this.changeColor = function (color) {
            __WEBPACK_IMPORTED_MODULE_5__redux_store__["default"].dispatch({ type: "TOGGLE_SETTINGS" });
            __WEBPACK_IMPORTED_MODULE_5__redux_store__["default"].dispatch({
                type: "CHANGE_ACCENT",
                payload: _this.colorPickerColor
            });

            localStorage.accentColor = _this.colorPickerColor;
        };

        _this.colorPickerColor = "#0078D7";
        return _this;
    }

    _createClass(SettingsContainer, [{
        key: "handlePickedColor",
        value: function handlePickedColor(color) {
            this.colorPickerColor = color;
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                null,
                !this.props.dialog.showSettings ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_uwp_ContentDialog___default.a, {
                    title: "Change color accent",
                    statusBarTitle: "Settings",
                    primaryButtonText: "Save",
                    showCloseButton: true,
                    defaultShow: true,
                    primaryButtonAction: this.changeColor,
                    secondaryButtonAction: function secondaryButtonAction() {
                        return __WEBPACK_IMPORTED_MODULE_5__redux_store__["default"].dispatch({ type: "TOGGLE_SETTINGS" });
                    },
                    closeButtonAction: function closeButtonAction() {
                        return __WEBPACK_IMPORTED_MODULE_5__redux_store__["default"].dispatch({ type: "TOGGLE_SETTINGS" });
                    },
                    style: { zIndex: 999999999 },
                    contentNode: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_uwp_ColorPicker___default.a, {
                        defaultColor: this.colorPickerColor,
                        onChangedColor: this.handlePickedColor.bind(this) }) })
            );
        }
    }]);

    return SettingsContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        dialog: state.dialog
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { toggleSettings: __WEBPACK_IMPORTED_MODULE_2__redux_actions_toggleSettings__["toggleSettings"] })(SettingsContainer));

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-uwp/ColorPicker");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_actions_toggleShare__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_uwp_ContentDialog__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_uwp_ContentDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_uwp_ContentDialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_uwp_TextBox__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_uwp_TextBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_uwp_TextBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_slugify__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_superagent__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_superagent__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var ShareContainer = function (_React$Component) {
    _inherits(ShareContainer, _React$Component);

    function ShareContainer(props) {
        _classCallCheck(this, ShareContainer);

        var _this = _possibleConstructorReturn(this, (ShareContainer.__proto__ || Object.getPrototypeOf(ShareContainer)).call(this, props));

        _this.websiteLink = "www.localnotes.herokuapp.com/shared/";
        _this.state = {
            customLinkText: "YOUR-TEXT"
        };
        return _this;
    }

    _createClass(ShareContainer, [{
        key: "handleLinkChange",
        value: function handleLinkChange(value) {
            var sluggedValue = __WEBPACK_IMPORTED_MODULE_6_slugify___default()(value, {
                replacement: '-',
                remove: null,
                lower: true
            });
            this.setState({ customLinkText: sluggedValue });
        }
    }, {
        key: "shareNotes",
        value: function shareNotes() {
            var _this2 = this;

            var errorMsg = "";

            if (!this.state.customLinkText) errorMsg += "You need to provide a proper text for the URL. ";
            if (this.state.customLinkText > 100) errorMsg += "The text provided should be less than 100 characters long. ";

            if (errorMsg) {
                this.refs.serverResponse.textContent = errorMsg;
            } else {
                __WEBPACK_IMPORTED_MODULE_7_superagent___default.a.post('/share').send({
                    customLinkText: this.state.customLinkText,
                    notes: JSON.parse(localStorage.notes)
                }).set('accept', 'json').end(function (err, res) {
                    if (res) _this2.refs.serverResponse.textContent = res.text;else _this2.refs.serverResponse.textContent = "The server couldn't be reached. Check your internet connection.";
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                null,
                !this.props.dialog.showShare ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_uwp_ContentDialog___default.a, {
                    title: "Share your notes with the world! This will create a special URL using the text you can provide below(up to 100 characters). People who visit that link will automatically download your current notes onto their device.",
                    statusBarTitle: "Share",
                    primaryButtonText: "Publish",
                    showCloseButton: true,
                    defaultShow: true,
                    primaryButtonAction: this.shareNotes.bind(this),
                    secondaryButtonAction: function secondaryButtonAction() {
                        return __WEBPACK_IMPORTED_MODULE_5__redux_store__["default"].dispatch({ type: "TOGGLE_SHARE" });
                    },
                    closeButtonAction: function closeButtonAction() {
                        return __WEBPACK_IMPORTED_MODULE_5__redux_store__["default"].dispatch({ type: "TOGGLE_SHARE" });
                    },
                    style: { zIndex: 999999999 },
                    contentNode: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { style: { padding: "16px" } },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_uwp_TextBox___default.a, { onChangeValue: this.handleLinkChange.bind(this),
                            style: { width: "100%" }, placeholder: "www.localnotes.herokuapp.com/shared/YOUR-TEXT" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_uwp_TextBox___default.a, { style: { width: "100%" },
                            disabled: true, value: this.websiteLink + this.state.customLinkText }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            { ref: "serverResponse" },
                            " "
                        )
                    ) })
            );
        }
    }]);

    return ShareContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        dialog: state.dialog
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { toggleShare: __WEBPACK_IMPORTED_MODULE_2__redux_actions_toggleShare__["toggleShare"] })(ShareContainer));

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-uwp/TextBox");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_fn_object_assign__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_fn_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_fn_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_fn_string_ends_with__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_fn_string_ends_with___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_fn_string_ends_with__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_fn_string_starts_with__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_fn_string_starts_with___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_fn_string_starts_with__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_fn_string_includes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_fn_string_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_fn_string_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_fn_array_includes__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_fn_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_fn_array_find__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_uwp_NavigationView__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_uwp_NavigationView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_uwp_NavigationView__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_uwp_SplitViewCommand__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_uwp_SplitViewCommand___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_uwp_SplitViewCommand__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__redux_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Layout__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_NotesContainer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_SettingsContainer__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ShareContainer__ = __webpack_require__(28);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // unsure if needed




if (!Number.parseFloat) Number.parseFloat = parseFloat;













var IconStyleSheetFix = {
    lineHeight: "48px",
    fontSize: "16px"
};

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            __WEBPACK_IMPORTED_MODULE_12__redux_store__["default"].dispatch({
                type: "CHANGE_ACCENT",
                payload: localStorage.accentColor
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_11_react_redux__["Provider"],
                { store: __WEBPACK_IMPORTED_MODULE_12__redux_store__["default"] },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_13__components_Layout__["default"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8_next_head___default.a,
                        null,
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'description', content: 'A web application allowing you to create sticky notes saved on your local device using the JavaScript localStorage API.' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'keywords', content: 'localnotes, ol-web, olweb, ol web, localstorage, notes, sticky notes, note online, web notes' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'theme-color', content: '#000000' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'application-name', content: 'WebStickyNotes' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'WebStickyNotes' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'msapplication-starturl', content: '/' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.png' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'manifest', href: '/static/manifest.json' }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'title',
                            null,
                            'WebStickyNotes'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_9_react_uwp_NavigationView___default.a,
                        {
                            pageTitle: 'WebStickyNotes',
                            style: {
                                position: "fixed",
                                zIndex: 999999999,
                                height: "100%",
                                top: 0
                            },
                            displayMode: 'overlay',
                            autoResize: false,
                            navigationTopNodes: [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_uwp_SplitViewCommand___default.a, {
                                style: _extends({}, IconStyleSheetFix, { color: this.props.accentColor }),
                                onClick: function onClick() {
                                    return __WEBPACK_IMPORTED_MODULE_12__redux_store__["default"].dispatch({ type: "TOGGLE_SHARE" });
                                },
                                label: 'Share',
                                icon: 'Share' }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_uwp_SplitViewCommand___default.a, {
                                style: _extends({}, IconStyleSheetFix, { color: this.props.accentColor }),
                                onClick: function onClick() {
                                    return open("https://ol-web.github.io");
                                },
                                label: 'Author\'s page',
                                icon: 'Home' })],
                            navigationBottomNodes: [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_uwp_SplitViewCommand___default.a, {
                                style: _extends({}, IconStyleSheetFix, { color: this.props.accentColor }),
                                onClick: function onClick() {
                                    return __WEBPACK_IMPORTED_MODULE_12__redux_store__["default"].dispatch({ type: "TOGGLE_SETTINGS" });
                                },
                                label: 'Settings',
                                icon: '\uE713' })],
                            focusNavigationNodeIndex: 1
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_SettingsContainer__["default"], null),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ShareContainer__["default"], null)
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_NotesContainer__["default"], { sharedNotes: this.props.notes })
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
                var query = _ref.query;
                var notes;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                notes = query.notes;
                                return _context.abrupt('return', { notes: notes });

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/object/assign");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/string/ends-with");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/string/starts-with");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/string/includes");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/array/includes");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/array/find");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-uwp/NavigationView");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-uwp/SplitViewCommand");

/***/ })
/******/ ]);