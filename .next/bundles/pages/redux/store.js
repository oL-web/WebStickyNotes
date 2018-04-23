module.exports=__NEXT_REGISTER_PAGE("/redux/store",function(){var e=webpackJsonp([7],{16:function(e,t,r){"use strict";(function(e,n){var o=r(18);var i;if("undefined"!==typeof self)i=self;else if("undefined"!==typeof window)i=window;else if("undefined"!==typeof e)i=e;else{true;i=n}var a=Object(o["a"])(i);t["a"]=a}).call(t,r(6),r(17)(e))},17:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]);Object.defineProperty(t,"loaded",{enumerable:true,get:function(){return t.l}});Object.defineProperty(t,"id",{enumerable:true,get:function(){return t.i}});Object.defineProperty(t,"exports",{enumerable:true});t.webpackPolyfill=1}return t}},18:function(e,t,r){"use strict";t["a"]=n;function n(e){var t;var r=e.Symbol;if("function"===typeof r)if(r.observable)t=r.observable;else{t=r("observable");r.observable=t}else t="@@observable";return t}},3:function(e,t,r){"use strict";r.d(t,"d",function(){return c});r.d(t,"c",function(){return p});r.d(t,"b",function(){return h});r.d(t,"a",function(){return b});var n=r(16);var o={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")};var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function u(e){if("object"!==("undefined"===typeof e?"undefined":i(e))||null===e)return false;var t=e;while(null!==Object.getPrototypeOf(t))t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,r){var a;if("function"===typeof t&&"undefined"===typeof r){r=t;t=void 0}if("undefined"!==typeof r){if("function"!==typeof r)throw new Error("Expected the enhancer to be a function.");return r(c)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var f=e;var s=t;var d=[];var l=d;var p=false;function v(){l===d&&(l=d.slice())}function h(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=true;v();l.push(e);return function r(){if(!t)return;if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=false;v();var n=l.indexOf(e);l.splice(n,1)}}function b(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=true;s=f(s,e)}finally{p=false}var t=d=l;for(var r=0;r<t.length;r++){var n=t[r];n()}return e}function w(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");f=e;b({type:o.REPLACE})}function g(){var e;var t=y;return e={subscribe:function e(r){if("object"!==("undefined"===typeof r?"undefined":i(r))||null===r)throw new TypeError("Expected the observer to be an object.");function n(){r.next&&r.next(h())}n();var o=t(n);return{unsubscribe:o}}},e[n["a"]]=function(){return this},e}b({type:o.INIT});return a={dispatch:b,subscribe:y,getState:h,replaceReducer:w},a[n["a"]]=g,a}function f(e){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}function s(e,t){var r=t&&t.type;var n=r&&'action "'+String(r)+'"'||"an action";return"Given "+n+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function d(e,t,r,n){var i=Object.keys(t);var a=r&&r.type===o.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===i.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!u(e))return"The "+a+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+i.join('", "')+'"';var c=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)&&!n[e]});c.forEach(function(e){n[e]=true});if(r&&r.type===o.REPLACE)return;if(c.length>0)return"Unexpected "+(c.length>1?"keys":"key")+' "'+c.join('", "')+'" found in '+a+'. Expected to find one of the known reducer keys instead: "'+i.join('", "')+'". Unexpected keys will be ignored.'}function l(e){Object.keys(e).forEach(function(t){var r=e[t];var n=r(void 0,{type:o.INIT});if("undefined"===typeof n)throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");var i="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"===typeof r(void 0,{type:i}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function p(e){var t=Object.keys(e);var r={};for(var n=0;n<t.length;n++){var o=t[n];false;"function"===typeof e[o]&&(r[o]=e[o])}var i=Object.keys(r);var a=void 0;false;var u=void 0;try{l(r)}catch(e){u=e}return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=arguments[1];if(u)throw u;var o;false;var a=false;var c={};for(var f=0;f<i.length;f++){var d=i[f];var l=r[d];var p=t[d];var v=l(p,n);if("undefined"===typeof v){var h=s(d,n);throw new Error(h)}c[d]=v;a=a||v!==p}return a?c:t}}function v(e,t){return function(){return t(e.apply(this,arguments))}}function h(e,t){if("function"===typeof e)return v(e,t);if("object"!==("undefined"===typeof e?"undefined":i(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":"undefined"===typeof e?"undefined":i(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r=Object.keys(e);var n={};for(var o=0;o<r.length;o++){var a=r[o];var u=e[a];"function"===typeof u&&(n[a]=v(u,t))}return n}function y(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];return t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function b(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=e.apply(void 0,n);var u=function e(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")};var c={getState:i.getState,dispatch:function e(){return u.apply(void 0,arguments)}};var f=t.map(function(e){return e(c)});u=y.apply(void 0,f)(i.dispatch);return a({},i,{dispatch:u})}}}function w(){}false},32:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var o={showSettings:false,showShare:false};t["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;var t=arguments[1];switch(t.type){case"TOGGLE_SETTINGS":return n({},e,{showSettings:!e.showSettings});case"TOGGLE_SHARE":return n({},e,{showShare:!e.showShare});default:return e}}},33:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var o={accentColor:""};t["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;var t=arguments[1];switch(t.type){case"CHANGE_ACCENT":return n({},e,{accentColor:t.payload});default:return e}}},34:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var o={notes:[]};t["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;var t=arguments[1];switch(t.type){case"ADD_NOTES":var r=n({},e);t.payload.forEach(function(e){r.notes.push(e)});return r;case"DELETE_NOTE":var i=n({},e);i.notes=i.notes.filter(function(e){return e.id!==t.payload});return i;default:return e}}},523:function(e,t,r){e.exports=r(56)},56:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(3);var o=r(79);var i=r.n(o);var a=r(57);var u={};var c=[i.a];var f=Object(n["d"])(a["default"],u,n["a"].apply(void 0,c));t["default"]=f},57:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(3);var o=r(32);var i=r(33);var a=r(34);t["default"]=Object(n["c"])({dialog:o["default"],accent:i["default"],notes:a["default"]})},79:function(e,t,r){"use strict";t.__esModule=true;function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){if("function"===typeof o)return o(r,n,e);return t(o)}}}}var o=n();o.withExtraArgument=n;t["default"]=o}},[523]);return{page:e.default}});