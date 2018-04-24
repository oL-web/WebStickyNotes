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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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
/* 6 */,
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
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-uwp/ContentDialog");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
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
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ })
/******/ ]);