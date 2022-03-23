/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.noUi-target {\n  position: relative;\n}\n\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n\n.noUi-vertical {\n  width: 18px;\n}\n\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n\n.noUi-connects {\n  border-radius: 3px;\n}\n\n.noUi-connect {\n  background: #3FB8AF;\n}\n\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n\n.noUi-handle:after {\n  left: 17px;\n}\n\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n\n.noUi-marker-sub {\n  background: #AAA;\n}\n\n.noUi-marker-large {\n  background: #AAA;\n}\n\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}", "",{"version":3,"sources":["webpack://./node_modules/nouislider/dist/nouislider.css"],"names":[],"mappings":"AAAA;;;EAAA;AAIA;;EAEE,2BAAA;EACA,6CAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,2BAAA;EACA,sBAAA;AACF;;AACA;EACE,kBAAA;AAEF;;AAAA;;EAEE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;AAGF;;AADA;EAAA;AAEA;EACE,gBAAA;EACA,UAAA;AAIF;;AAFA;;EAEE,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,MAAA;EACA,QAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,6BAAA;EACA,oCAAA;EACA,qBAAA;EACA,qBAAA;AAKF;;AAHA;EAAA;AAEA;EACE,OAAA;EACA,WAAA;AAMF;;AAJA;;EAAA;AAGA;EACE,UAAA;EACA,QAAA;AAOF;;AALA;EACE,SAAA;AAQF;;AANA;EACE,mCAAA;EACA,2BAAA;EACA,kBAAA;AASF;;AAPA;EACE,YAAA;EACA,WAAA;AAUF;;AARA;;EAEE,kCAAA;EACA,0BAAA;AAWF;;AATA;EACE,0BAAA;AAYF;;AAVA;EAAA;AAEA;EACE,YAAA;AAaF;;AAXA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAcF;;AAZA;EACE,WAAA;AAeF;;AAbA;EACE,WAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;AAgBF;;AAdA;EACE,WAAA;EACA,WAAA;AAiBF;;AAfA;;EAAA;AAGA;EACE,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,wDAAA;AAkBF;;AAhBA;EACE,kBAAA;AAmBF;;AAjBA;EACE,mBAAA;AAoBF;;AAlBA;EAAA;AAEA;EACE,iBAAA;AAqBF;;AAnBA;EACE,iBAAA;AAsBF;;AApBA;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,4EAAA;AAuBF;;AArBA;EACE,yEAAA;AAwBF;;AAtBA;EAAA;AAEA;;EAEE,WAAA;EACA,cAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,mBAAA;EACA,UAAA;EACA,QAAA;AAyBF;;AAvBA;EACE,UAAA;AA0BF;;AAxBA;;EAEE,WAAA;EACA,WAAA;EACA,SAAA;EACA,SAAA;AA2BF;;AAzBA;EACE,SAAA;AA4BF;;AA1BA;EAAA;AAEA;EACE,mBAAA;AA6BF;;AA3BA;;;EAGE,mBAAA;AA8BF;;AA5BA;;EAAA;AAGA;;EAEE,2BAAA;EACA,sBAAA;AA+BF;;AA7BA;EACE,kBAAA;EACA,WAAA;AAgCF;;AA9BA;;EAAA;AAGA;EACE,kBAAA;EACA,mBAAA;EACA,kBAAA;AAiCF;;AA/BA;EACE,WAAA;EACA,eAAA;AAkCF;;AAhCA;;EAAA;AAGA;EACE,kBAAA;EACA,gBAAA;AAmCF;;AAjCA;EACE,gBAAA;AAoCF;;AAlCA;EACE,gBAAA;AAqCF;;AAnCA;;EAAA;AAGA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;AAsCF;;AApCA;EACE,uCAAA;EACA,+BAAA;AAuCF;;AArCA;EACE,sCAAA;EACA,8BAAA;AAwCF;;AAtCA;EACE,iBAAA;EACA,UAAA;EACA,WAAA;AAyCF;;AAvCA;EACE,YAAA;AA0CF;;AAxCA;EACE,YAAA;AA2CF;;AAzCA;;EAAA;AAGA;EACE,eAAA;EACA,YAAA;EACA,MAAA;EACA,UAAA;AA4CF;;AA1CA;EACE,qCAAA;EACA,6BAAA;EACA,kBAAA;AA6CF;;AA3CA;EACE,oCAAA;EACA,4BAAA;AA8CF;;AA5CA;EACE,UAAA;EACA,WAAA;EACA,gBAAA;AA+CF;;AA7CA;EACE,WAAA;AAgDF;;AA9CA;EACE,WAAA;AAiDF;;AA/CA;EACE,cAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;AAkDF;;AAhDA;EACE,qCAAA;EACA,6BAAA;EACA,SAAA;EACA,YAAA;AAmDF;;AAjDA;EACE,qCAAA;EACA,6BAAA;EACA,QAAA;EACA,WAAA;AAoDF;;AAlDA;EACE,oCAAA;EACA,4BAAA;EACA,UAAA;EACA,YAAA;AAqDF;;AAnDA;EACE,sCAAA;EACA,8BAAA;EACA,SAAA;EACA,WAAA;AAsDF","sourcesContent":["/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Amagro.ttf */ "./src/assets/fonts/Amagro.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/AntykwaTorunska-Regular.ttf */ "./src/assets/fonts/AntykwaTorunska-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/page-bg/menu.jpg */ "./src/assets/page-bg/menu.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/page-bg/filter-bg1.jpg */ "./src/assets/page-bg/filter-bg1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/close.png */ "./src/assets/icons/close.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/tree.svg */ "./src/assets/svg/tree.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/audio.svg */ "./src/assets/svg/audio.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/snow.svg */ "./src/assets/svg/snow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/rs_school.png */ "./src/assets/icons/rs_school.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/star-no.png */ "./src/assets/icons/star-no.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/star-yes.png */ "./src/assets/icons/star-yes.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Amagro\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: \"Anticva\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n  font-style: normal;\n  font-weight: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 16px;\n}\n@media (max-width: 1000px) {\n  :root {\n    font-size: 12px;\n  }\n}\n@media (max-width: 840px) {\n  :root {\n    font-size: 10px;\n  }\n}\n\nbody {\n  background-color: #132d20;\n  font-family: \"Amagro\";\n}\nbody .container {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 4rem;\n}\nbody .container .menu-page {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  user-select: none;\n}\nbody .container .menu-page .menu__animation .animation__ball {\n  position: absolute;\n  top: -1rem;\n  left: 60%;\n  height: 12rem;\n}\nbody .container .menu-page .menu__animation .animation__ball img {\n  height: 100%;\n  animation: ball-translate 4s infinite;\n}\nbody .container .menu-page .main__menu {\n  z-index: 10;\n}\nbody .container .menu-page .main__menu .menu__name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #e69732;\n  font-size: 3rem;\n  text-shadow: 3px 2px 3px #11271b;\n}\nbody .container .menu-page .main__menu .menu__name span {\n  font-size: 3.5rem;\n  display: block;\n  color: #fc5954;\n}\nbody .container .menu-page .main__menu .menu_start-btn {\n  box-shadow: inset 0px 0px 0px 0px #173928;\n  background: linear-gradient(to bottom, #cf2846 5%, #fc5b53 100%);\n  background-color: #fc5954;\n  border-radius: 32px;\n  border: 2px solid #cf2846;\n  display: block;\n  margin: 2rem auto;\n  cursor: pointer;\n  color: #f6dac7;\n  font-family: \"Amargo\";\n  font-size: 2rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  padding: 1rem 3rem;\n  text-decoration: none;\n  text-shadow: 3px 2px 3px #11271b;\n  transition: all 0.3s ease-in-out;\n}\nbody .container .menu-page .main__menu .menu_start-btn:hover {\n  transition: all 0.3s ease-in-out;\n  background: linear-gradient(to bottom, #fc5954 5%, #cf2846 100%);\n  background-color: #214d36;\n}\nbody .container .menu-page .main__menu .menu_start-btn:active {\n  position: relative;\n  top: 1px;\n}\n\n@keyframes ball-translate {\n  20% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  40% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n  60% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n@keyframes button-hover {\n  0% {\n    transform: scale(1);\n    opacity: 0.1;\n  }\n  20% {\n    transform: scale(1.05);\n    opacity: 0.2;\n  }\n  40% {\n    transform: scale(1.1);\n    opacity: 0.3;\n  }\n  60% {\n    transform: scale(1.07);\n    opacity: 0.4;\n  }\n  80% {\n    transform: scale(1.04);\n    opacity: 0.3;\n  }\n  to {\n    transform: scale(1.02);\n    opacity: 0;\n  }\n}\ncanvas {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.container {\n  overflow: hidden;\n}\n.container .filter-page {\n  color: #f6dac7;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n.container .filter-page .filter__menu {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1600px;\n  margin: 3rem auto 0;\n}\n.container .filter-page .filter__menu h2 {\n  text-align: center;\n  color: #fc5954;\n  margin: 1rem 0;\n}\n.container .filter-page .filter__menu > div {\n  background-color: #1b412ce3;\n  border: 4px solid #1b412ce3;\n  margin: 2rem 0;\n  padding: 1rem;\n  width: 30%;\n  border-radius: 3rem;\n  flex-wrap: wrap;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  backdrop-filter: blur(4px);\n}\n.container .filter-page .filter__menu .menu__value-filters > div {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0.5rem 0;\n  font-size: 1rem;\n  gap: 2rem;\n}\n.container .filter-page .filter__menu .menu__value-filters ul {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.container .filter-page .filter__menu .menu__value-filters ul li {\n  height: 3rem;\n  transition: transform 0.3s ease-in-out;\n  position: relative;\n  cursor: pointer;\n  margin: 0 0.5rem;\n}\n.container .filter-page .filter__menu .menu__value-filters ul li img {\n  height: 100%;\n  filter: sepia(1) brightness(0.8);\n}\n.container .filter-page .filter__menu .menu__value-filters ul li:hover {\n  transform: scale(1.1);\n}\n.container .filter-page .filter__menu .menu__value-filters .shapes li.active {\n  filter: invert(10%) sepia(70%) saturate(200%) hue-rotate(69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732);\n}\n.container .filter-page .filter__menu .menu__value-filters .colors li {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 5px;\n}\n.container .filter-page .filter__menu .menu__value-filters .colors li.active {\n  box-shadow: 0px 0px 0px 2px #84cc83 inset, 0px 0px 7px #e69732;\n}\n.container .filter-page .filter__menu .menu__value-filters .sizes {\n  align-items: center;\n}\n.container .filter-page .filter__menu .menu__value-filters .sizes li:first-child {\n  height: 5rem;\n}\n.container .filter-page .filter__menu .menu__value-filters .sizes li:nth-child(2) {\n  height: 4rem;\n}\n.container .filter-page .filter__menu .menu__value-filters .sizes li.active {\n  filter: invert(10%) sepia(70%) saturate(200%) hue-rotate(69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732);\n}\n.container .filter-page .filter__menu .menu__value-filters .favorites-filter #favorite-filter {\n  display: none;\n}\n.container .filter-page .filter__menu .menu__value-filters .favorites-filter label {\n  position: relative;\n}\n.container .filter-page .filter__menu .menu__value-filters .favorites-filter label::before {\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n  position: absolute;\n  top: -4px;\n  right: -35px;\n  border-radius: 5px;\n  background-color: #132d20;\n  border: 1px solid #f6dac7;\n}\n.container .filter-page .filter__menu .menu__value-filters .favorites-filter #favorite-filter:checked ~ label[for=favorite-filter]::after {\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  position: absolute;\n  top: 1px;\n  right: -30px;\n  border-radius: 3px;\n  background-color: #e69732;\n}\n.container .filter-page .filter__menu .menu__range-filters p {\n  text-align: center;\n  margin-top: 2rem;\n}\n.container .filter-page .filter__menu .menu__range-filters .count-range__container,\n.container .filter-page .filter__menu .menu__range-filters .year-range__container {\n  margin: 0 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.container .filter-page .filter__menu .menu__range-filters .count-range__container span,\n.container .filter-page .filter__menu .menu__range-filters .year-range__container span {\n  display: flex;\n  width: 5rem;\n  height: 2rem;\n  font-size: 1rem;\n  border-radius: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: #7e866cc7;\n}\n.container .filter-page .filter__menu .menu__range-filters .noUi-connect {\n  background: #de7522;\n}\n.container .filter-page .filter__menu .menu__range-filters .noUi-target {\n  background: #ffd3ac;\n  border-radius: 4px;\n  border: 1px solid #ffd3ac;\n  box-shadow: none;\n}\n.container .filter-page .filter__menu .menu__range-filters .noUi-horizontal {\n  margin: 2rem 1rem;\n  height: 7px;\n  width: 60%;\n}\n.container .filter-page .filter__menu .menu__range-filters .noUi-horizontal .noUi-handle {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  right: -7px;\n  top: -5px;\n  background: #fc5954;\n  box-shadow: none;\n  cursor: pointer;\n}\n.container .filter-page .filter__menu .menu__range-filters .noUi-horizontal .noUi-handle:before,\n.container .filter-page .filter__menu .menu__range-filters .noUi-horizontal .noUi-handle:after {\n  display: none;\n}\n.container .filter-page .filter__menu .menu__sort-type input {\n  display: none;\n}\n.container .filter-page .filter__menu .menu__sort-type .sort-type_select {\n  display: block;\n  position: relative;\n  margin: 1.5rem 1rem;\n  padding-left: 3rem;\n}\n.container .filter-page .filter__menu .menu__sort-type .sort-type_select:before {\n  content: \"\";\n  position: absolute;\n  top: -5px;\n  left: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #132d20;\n  border: 1px solid #f6dac7;\n}\n.container .filter-page .filter__menu .menu__sort-type #yearMinMaxSort:checked ~ label[for=yearMinMaxSort]::after,\n.container .filter-page .filter__menu .menu__sort-type #yearMaxMinSort:checked ~ label[for=yearMaxMinSort]::after,\n.container .filter-page .filter__menu .menu__sort-type #nameAZSort:checked ~ label[for=nameAZSort]::after,\n.container .filter-page .filter__menu .menu__sort-type #nameZASort:checked ~ label[for=nameZASort]::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 5px;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  background-color: #e69732;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-filter,\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-storage {\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  font-family: \"Amagro\";\n  padding: 1rem 2rem;\n  border-radius: 1rem;\n  border: none;\n  color: #f6dac7;\n  text-transform: uppercase;\n  outline: none;\n  background: #006941d9;\n  transition: all 0.4s ease-in-out;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-filter::before,\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-storage::before {\n  content: \"\";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-radius: 1rem;\n  border: 2px solid #659765de;\n  transition: all 0.5s ease-in-out;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-filter:active,\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-storage:active {\n  top: 1px;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-filter:hover,\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-storage:hover {\n  background: #659765de;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-filter:hover::before,\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-storage:hover::before {\n  animation: button-hover 0.7s ease;\n}\n.container .filter-page .filter__cards {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 3rem;\n  max-width: 1600px;\n  margin: 0 auto;\n  font-family: \"Anticva\";\n}\n.container .filter-page .filter__cards h2 {\n  text-transform: uppercase;\n  position: relative;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n  margin-right: 4rem;\n  text-shadow: 3px 3px 2px #00000080;\n}\n.container .filter-page .filter__cards h2::before {\n  content: \"\";\n  position: absolute;\n  width: 0px;\n  bottom: -0.43rem;\n  left: 0;\n  height: 4px;\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  transition: all 0.6s ease-in-out;\n  background-color: #1b412ce3;\n}\n.container .filter-page .filter__cards .card-item {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 25rem;\n  padding: 1rem;\n  font-size: 1rem;\n  border-radius: 10px;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset, #000000c4 0px 5px 15px;\n  background: #5890598f;\n  backdrop-filter: blur(4px);\n  transition: all 0.4s ease-in-out;\n  cursor: pointer;\n}\n.container .filter-page .filter__cards .card-item:hover {\n  transform: translateY(-4px);\n}\n.container .filter-page .filter__cards .card-item:hover h2::before {\n  width: 95%;\n}\n.container .filter-page .filter__cards .card-item .item-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.container .filter-page .filter__cards .card-item .item-content .item-description {\n  width: 95%;\n  font-size: 1.2rem;\n}\n.container .filter-page .filter__cards .card-item .item-content .item-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container .filter-page .filter__cards .card-item .item-content .item-img img {\n  width: 100%;\n}\n.container .filter-page .favorite-modal {\n  top: 40%;\n  left: 1rem;\n  width: 20rem;\n  height: 15rem;\n  position: fixed;\n  margin-left: -100%;\n  opacity: 0;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 1rem;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  transition: all 0.3s ease-in-out;\n  background-color: #1b412ce3;\n}\n.container .filter-page .favorite-modal.show-modal {\n  margin-left: 0;\n  opacity: 1;\n}\n.container .filter-page .favorite-modal .modal-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background-color: #fc5954;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.container .filter-page .favorite-modal .modal-close:hover {\n  transform: scale(1.04);\n}\n\n.container .game-page {\n  color: #f6dac7;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n.container .game-page .header__game-page {\n  background-color: #132d20e3;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.container .game-page .header__game-page .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n}\n.container .game-page .header__game-page .header .navigation {\n  display: flex;\n  gap: 3rem;\n  justify-content: center;\n  align-items: center;\n}\n.container .game-page .header__game-page .header .navigation #game-page,\n.container .game-page .header__game-page .header .navigation #filter-page {\n  font-size: 1.3rem;\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n}\n.container .game-page .header__game-page .header .navigation #game-page:hover,\n.container .game-page .header__game-page .header .navigation #filter-page:hover {\n  transform: scale(1.1);\n}\n.container .game-page .header__game-page .header__buttons {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.container .game-page .header__game-page .input__search {\n  cursor: pointer;\n  background-color: #7e866cc7;\n  border: 1px solid #132d20;\n  padding: 0.2rem 0.5rem;\n  border-radius: 1rem;\n  outline: none;\n  font-family: \"Amagro\";\n  font-size: 0.8rem;\n  color: #f6dac7;\n}\n.container .game-page .header__game-page .input__search::placeholder {\n  color: #ffffec;\n}\n.container .game-page .header__game-page button {\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 2rem;\n  height: 2rem;\n  transition: transform 0.3s ease-in-out;\n  filter: sepia(1) brightness(0.8);\n  cursor: pointer;\n}\n.container .game-page .header__game-page button#home {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.container .game-page .header__game-page button.menu__btn-mute {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.container .game-page .header__game-page button.menu__btn-snow {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.container .game-page .header__game-page button:hover {\n  transform: scale(1.1);\n}\n.container .game-page .header__game-page .favorite__ball {\n  position: relative;\n  width: 2rem;\n  height: 2rem;\n  border: 3px solid #f6dac7;\n  font-size: 1rem;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container .game-page .header__game-page .favorite__ball::before {\n  position: absolute;\n  content: \"\";\n  width: 0.3rem;\n  height: 0.2rem;\n  border: 3px solid #f6dac7;\n  top: -10px;\n  right: 50%;\n  transform: translateX(50%);\n}\n.container .game-page .game__main {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1600px;\n  margin: 6rem auto 0;\n  gap: 1rem;\n}\n.container .game-page .game__main h3 {\n  margin: 1rem 0 1.5rem;\n  text-align: center;\n}\n.container .game-page .game__main .game-menu__left,\n.container .game-page .game__main .game-menu__right {\n  background-color: #1b412ce3;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  width: 25%;\n  padding: 1rem;\n  border-radius: 2rem;\n}\n.container .game-page .game__main .game-menu__left .select-trees,\n.container .game-page .game__main .game-menu__left .select-bgs,\n.container .game-page .game__main .game-menu__left .select-lights,\n.container .game-page .game__main .game-menu__right .select-trees,\n.container .game-page .game__main .game-menu__right .select-bgs,\n.container .game-page .game__main .game-menu__right .select-lights {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n.container .game-page .game__main .game-menu__left .select-trees .tree-item,\n.container .game-page .game__main .game-menu__left .select-bgs .tree-item,\n.container .game-page .game__main .game-menu__left .select-lights .tree-item,\n.container .game-page .game__main .game-menu__right .select-trees .tree-item,\n.container .game-page .game__main .game-menu__right .select-bgs .tree-item,\n.container .game-page .game__main .game-menu__right .select-lights .tree-item {\n  width: 7rem;\n  height: 7rem;\n  background-color: #5890598f;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  background-size: 60%;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 2rem;\n  transition: all 0.5s ease-in-out;\n  cursor: pointer;\n}\n.container .game-page .game__main .game-menu__left .select-trees .tree-item:hover,\n.container .game-page .game__main .game-menu__left .select-bgs .tree-item:hover,\n.container .game-page .game__main .game-menu__left .select-lights .tree-item:hover,\n.container .game-page .game__main .game-menu__right .select-trees .tree-item:hover,\n.container .game-page .game__main .game-menu__right .select-bgs .tree-item:hover,\n.container .game-page .game__main .game-menu__right .select-lights .tree-item:hover {\n  transform: scale(1.04);\n  background-color: #ccd17f9c;\n}\n.container .game-page .game__main .game-menu__left .select-trees .tree-item.active,\n.container .game-page .game__main .game-menu__left .select-bgs .tree-item.active,\n.container .game-page .game__main .game-menu__left .select-lights .tree-item.active,\n.container .game-page .game__main .game-menu__right .select-trees .tree-item.active,\n.container .game-page .game__main .game-menu__right .select-bgs .tree-item.active,\n.container .game-page .game__main .game-menu__right .select-lights .tree-item.active {\n  filter: invert(10%) sepia(70%) saturate(200%) hue-rotate(69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732);\n}\n.container .game-page .game__main .game-menu__left .select-bgs .bg-item,\n.container .game-page .game__main .game-menu__right .select-bgs .bg-item {\n  width: 5rem;\n  height: 5rem;\n  background-color: #1b412ce3;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 1rem;\n  transition: all 0.5s ease-in-out;\n  cursor: pointer;\n}\n.container .game-page .game__main .game-menu__left .select-bgs .bg-item:hover,\n.container .game-page .game__main .game-menu__right .select-bgs .bg-item:hover {\n  transform: scale(1.04);\n}\n.container .game-page .game__main .game-menu__left .select-bgs .bg-item.active,\n.container .game-page .game__main .game-menu__right .select-bgs .bg-item.active {\n  filter: invert(10%) sepia(70%) saturate(200%) hue-rotate(69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732);\n}\n.container .game-page .game__main .game-menu__left .select-lights .light-item,\n.container .game-page .game__main .game-menu__right .select-lights .light-item {\n  width: 2rem;\n  height: 2rem;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.container .game-page .game__main .game-menu__left .select-lights .light-item.active,\n.container .game-page .game__main .game-menu__right .select-lights .light-item.active {\n  box-shadow: 0px 0px 0px 2px #84cc83 inset, 0px 0px 7px #e69732;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons,\n.container .game-page .game__main .game-menu__right .reset-buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  cursor: pointer;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons #reset-storage,\n.container .game-page .game__main .game-menu__right .reset-buttons #reset-storage {\n  display: block;\n  position: relative;\n  margin: 0.5rem auto;\n  font-family: \"Amagro\";\n  padding: 0.3rem 1em;\n  border-radius: 1rem;\n  border: none;\n  color: #f6dac7;\n  text-transform: uppercase;\n  outline: none;\n  background: #006941d9;\n  transition: all 0.4s ease-in-out;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons #reset-storage::before,\n.container .game-page .game__main .game-menu__right .reset-buttons #reset-storage::before {\n  content: \"\";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-radius: 1rem;\n  border: 2px solid #659765de;\n  transition: all 0.5s ease-in-out;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons #reset-storage:active,\n.container .game-page .game__main .game-menu__right .reset-buttons #reset-storage:active {\n  top: 1px;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons #reset-storage:hover,\n.container .game-page .game__main .game-menu__right .reset-buttons #reset-storage:hover {\n  background: #659765de;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons #reset-storage:hover::before,\n.container .game-page .game__main .game-menu__right .reset-buttons #reset-storage:hover::before {\n  animation: button-hover 0.7s ease;\n}\n.container .game-page .game__main .game-main__tree {\n  position: relative;\n  overflow: hidden;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 1rem;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n}\n.container .game-page .game__main .game-menu__right {\n  width: 25%;\n}\n.container .game-page .game__main .game-menu__right .select-toys {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n}\n.container .game-page .game__main .game-menu__right .select-toys .toy__card-item {\n  width: 5.2rem;\n  height: 5.2rem;\n  background-color: #5890598f;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  background-size: 60%;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container .game-page .game__main .game-menu__right .select-toys .toy__card-item img {\n  width: 50px;\n  height: 50px;\n  cursor: grab;\n}\n.container .game-page .game__main .game-menu__right .select-toys .toy__card-item .toy__card-count {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 0rem;\n  height: 0rem;\n  right: -0.9rem;\n  top: -2rem;\n}\n.container .game-page .game__main .game-menu__right .select-toys .toy__card-item .toy__card-count::after {\n  content: \"\";\n  position: absolute;\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 2px solid #fc5954;\n  background-color: #ffffff52;\n  border-radius: 50%;\n  top: -1rem;\n  left: -1rem;\n}\n\n.header__filter-page {\n  background-color: #132d20e3;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  color: #f6dac7;\n}\n.header__filter-page .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n}\n.header__filter-page .header .navigation {\n  display: flex;\n  gap: 3rem;\n  justify-content: center;\n  align-items: center;\n}\n.header__filter-page .header .navigation #game-page,\n.header__filter-page .header .navigation #filter-page {\n  font-size: 1.3rem;\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n}\n.header__filter-page .header .navigation #game-page:hover,\n.header__filter-page .header .navigation #filter-page:hover {\n  transform: scale(1.1);\n}\n.header__filter-page .header__buttons {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.header__filter-page .input__search {\n  cursor: pointer;\n  background-color: #7e866cc7;\n  border: 1px solid #132d20;\n  padding: 0.2rem 0.5rem;\n  border-radius: 1rem;\n  outline: none;\n  font-family: \"Amagro\";\n  font-size: 0.8rem;\n  color: #f6dac7;\n}\n.header__filter-page .input__search::placeholder {\n  color: #ffffec;\n}\n.header__filter-page button {\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 2rem;\n  height: 2rem;\n  transition: transform 0.3s ease-in-out;\n  filter: sepia(1) brightness(0.8);\n  cursor: pointer;\n}\n.header__filter-page button#home {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.header__filter-page button:hover {\n  transform: scale(1.1);\n}\n.header__filter-page .menu__btn-mute {\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 2rem;\n  height: 2rem;\n  transition: transform 0.3s ease-in-out;\n  filter: sepia(1) brightness(0.8);\n  cursor: pointer;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.header__filter-page .menu__btn-mute #menu__btn-mute {\n  display: none;\n}\n.header__filter-page .menu__btn-mute:hover {\n  transform: scale(1.1);\n}\n.header__filter-page .menu__btn-snow {\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 2rem;\n  height: 2rem;\n  transition: transform 0.3s ease-in-out;\n  filter: sepia(1) brightness(0.8);\n  cursor: pointer;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.header__filter-page .menu__btn-snow #menu__btn-snow {\n  display: none;\n}\n.header__filter-page .menu__btn-snow:hover {\n  transform: scale(1.1);\n}\n.header__filter-page .favorite__ball {\n  position: relative;\n  width: 2rem;\n  height: 2rem;\n  border: 3px solid #f6dac7;\n  font-size: 1rem;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__filter-page .favorite__ball::before {\n  position: absolute;\n  content: \"\";\n  width: 0.3rem;\n  height: 0.2rem;\n  border: 3px solid #f6dac7;\n  top: -10px;\n  right: 50%;\n  transform: translateX(50%);\n}\n\n.container {\n  position: relative;\n}\n.container .footer__menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #f6dac7;\n  padding: 0.4rem 0;\n  margin: 0.4rem 0;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, #1f4933bf 0%, #fc595485 88%);\n}\n.container .footer__menu .author {\n  margin: 0 1rem;\n}\n.container .footer__menu .author a {\n  text-decoration: none;\n  color: #f6dac7;\n  font-size: 1rem;\n  text-shadow: 3px 2px 3px #11271b;\n}\n.container .footer__menu .course a {\n  display: block;\n  margin: 0 1rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 5rem;\n  height: 1.9rem;\n}\n\n.snowflake {\n  display: block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  width: 1rem;\n  height: 1rem;\n  position: absolute;\n  background-size: cover;\n  background-position: center;\n  top: -1rem;\n  z-index: 100;\n  animation: fall linear forwards;\n}\n\n@keyframes fall {\n  to {\n    transform: translateY(100vh);\n  }\n}\n.lightrope-container {\n  pointer-events: none;\n  transform: rotate(180deg);\n  z-index: 50;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -60%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.lightrope {\n  transform: rotate(180deg);\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n  margin: 0 0 0 0;\n  padding: 0;\n  pointer-events: none;\n  width: 100%;\n}\n.lightrope li {\n  position: relative;\n  animation-fill-mode: both;\n  animation-iteration-count: infinite;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin: 7.5px;\n  display: inline-block;\n  animation-duration: 2s;\n}\n.lightrope li:nth-child(2n+1) {\n  animation-duration: 0.4s;\n}\n.lightrope li:nth-child(4n+2) {\n  animation-duration: 1.1s;\n}\n.lightrope li:nth-child(odd) {\n  animation-duration: 1.8s;\n}\n.lightrope li:nth-child(3n+1) {\n  animation-duration: 1.4s;\n}\n.lightrope li:first-child {\n  margin-left: -15px;\n}\n\n@keyframes rainbow {\n  0%, 100% {\n    background: #00ffaa;\n    box-shadow: 0px 1px 12px 3px #00f7a5;\n  }\n  10% {\n    background: #00c3ff;\n    box-shadow: 0px 1px 12px 3px rgba(0, 218, 247, 0.596);\n  }\n  20% {\n    background: #002fff;\n    box-shadow: 0px 1px 12px 3px rgba(0, 78, 247, 0.596);\n  }\n  30% {\n    background: #8c00ff;\n    box-shadow: 0px 1px 12px 3px rgba(156, 0, 247, 0.596);\n  }\n  40% {\n    background: #ff00bf;\n    box-shadow: 0px 1px 12px 3px rgba(247, 0, 214, 0.596);\n  }\n  50% {\n    background: rgba(0, 247, 165, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(238, 2, 61, 0.527);\n  }\n  60% {\n    background: red;\n    box-shadow: 0px 1px 12px 3px rgba(252, 0, 0, 0.596);\n  }\n  70% {\n    background: #ff5100;\n    box-shadow: 0px 1px 12px 3px rgba(247, 99, 0, 0.596);\n  }\n  80% {\n    background: #eeff00;\n    box-shadow: 0px 1px 12px 3px rgba(210, 247, 0, 0.596);\n  }\n  90% {\n    background: white;\n    box-shadow: 0px 1px 12px 3px rgba(255, 255, 255, 0.596);\n  }\n}\n@keyframes flash-green {\n  0%, 100% {\n    background: #00ffaa;\n    box-shadow: 0px 1px 12px 3px #00f7a5;\n  }\n  50% {\n    background: rgba(0, 247, 165, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(3, 146, 98, 0.527);\n  }\n}\n@keyframes flash-yellow {\n  0%, 100% {\n    background: #ffee00;\n    box-shadow: 0px 1px 12px 3px #fae04e;\n  }\n  50% {\n    background: rgba(252, 238, 160, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(238, 241, 4, 0.404);\n  }\n}\n@keyframes flash-red {\n  0%, 100% {\n    background: red;\n    box-shadow: 0px 1px 12px 3px #e40d0d;\n  }\n  50% {\n    background: rgba(255, 0, 0, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(192, 5, 5, 0.568);\n  }\n}\n@keyframes flash-blue {\n  0%, 100% {\n    background: #059bff;\n    box-shadow: 0px 1px 12px 3px #119ffd;\n  }\n  50% {\n    background: rgba(32, 152, 231, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(7, 93, 151, 0.562);\n  }\n}\n@keyframes flash-white {\n  0%, 100% {\n    background: white;\n    box-shadow: 0px 1px 12px 3px #f7f2f2;\n  }\n  50% {\n    background: rgba(255, 255, 255, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(255, 255, 255, 0.548);\n  }\n}\n.ribbon {\n  position: absolute;\n  width: 60px;\n  height: 50px;\n  background-color: #fc5954;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n  background-size: 2rem;\n  background-repeat: no-repeat;\n  background-position: center;\n  top: -6px;\n  right: 1rem;\n  margin-bottom: 80px;\n  transition: height 0.5s ease-in-out;\n}\n.ribbon:hover {\n  height: 70px;\n}\n.ribbon:before, .ribbon:after {\n  content: \"\";\n  position: absolute;\n}\n.ribbon:before {\n  height: 0;\n  width: 0;\n  border-bottom: 6px solid #fb1009;\n  border-right: 6px solid transparent;\n  right: -6px;\n}\n.ribbon:after {\n  height: 0;\n  width: 0;\n  border-left: 30px solid #fc5954;\n  border-right: 30px solid #fc5954;\n  border-bottom: 30px solid transparent;\n  bottom: -30px;\n}\n.ribbon.true {\n  background-color: #e69732;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n}\n.ribbon.true::after {\n  height: 0;\n  width: 0;\n  border-left: 30px solid #e69732;\n  border-right: 30px solid #e69732;\n  border-bottom: 30px solid transparent;\n  bottom: -30px;\n}\n.ribbon.true::before {\n  height: 0;\n  width: 0;\n  border-bottom: 6px solid #b56f16;\n  border-right: 6px solid transparent;\n  right: -6px;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/styles/main.scss","webpack://./src/styles/menu.scss","webpack://./src/styles/variables.scss","webpack://./src/styles/animation.scss","webpack://./src/styles/filterPage.scss","webpack://./src/styles/gamePage.scss","webpack://./src/styles/header.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/snowflake.scss","webpack://./src/styles/garland.scss","webpack://./src/styles/ribbons.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,+DAAA;EACA,kBAAA;EACA,mBAAA;ACCF;ADEA;EACE,sBAAA;EACA,+DAAA;EACA,kBAAA;EACA,mBAAA;ACAF;ACXA;EACE,SAAA;EACA,UAAA;ADaF;;ACVA;EACE,eAAA;ADaF;ACXE;EAHF;IAII,eAAA;EDcF;AACF;ACZE;EAPF;IAQI,eAAA;EDeF;AACF;;ACZA;EACE,yBClBc;EDmBd,qBAAA;ADeF;ACbE;EACE,iBAAA;EACA,aAAA;EACA,6BAAA;ADeJ;ACbI;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yDAAA;EACA,sBAAA;EACA,+BAAA;EACA,4BAAA;EACA,iBAAA;ADeN;ACZQ;EACE,kBAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;ADcV;ACZU;EACE,YAAA;EACA,qCAAA;ADcZ;ACTM;EACE,WAAA;ADWR;ACTQ;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,cCzDI;ED0DJ,eAAA;EACA,gCCvDS;AFkEnB;ACTU;EACE,iBAAA;EACA,cAAA;EACA,cC7DM;AFwElB;ACPQ;EACE,yCAAA;EACA,gEAAA;EACA,yBAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;EACA,eAAA;EACA,cC5EU;ED6EV,qBAAA;EACA,eAAA;EACA,yBAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,gCChFS;EDiFT,gCAAA;ADSV;ACPU;EACE,gCAAA;EACA,gEAAA;EACA,yBAAA;ADSZ;ACNU;EACE,kBAAA;EACA,QAAA;ADQZ;;AG3GA;EACE;IACE,kCAAA;EH8GF;EG3GA;IACE,mCAAA;EH6GF;EG1GA;IACE,kCAAA;EH4GF;EGzGA;IACE,mCAAA;EH2GF;EGxGA;IACE,kCAAA;EH0GF;AACF;AGvGA;EACE;IACE,mBAAA;IACA,YAAA;EHyGF;EGtGA;IACE,sBAAA;IACA,YAAA;EHwGF;EGrGA;IACE,qBAAA;IACA,YAAA;EHuGF;EGpGA;IACE,sBAAA;IACA,YAAA;EHsGF;EGnGA;IACE,sBAAA;IACA,YAAA;EHqGF;EGlGA;IACE,sBAAA;IACA,UAAA;EHoGF;AACF;AGjGA;EACE,YAAA;EACA,OAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;AHmGF;;AI9JA;EACE,gBAAA;AJiKF;AI/JE;EACE,cFCgB;EEAhB,yDAAA;EACA,+BAAA;EACA,4BAAA;EACA,qBAAA;AJiKJ;AI/JI;EACE,aAAA;EACA,6BAAA;EACA,iBAAA;EACA,mBAAA;AJiKN;AI/JM;EACE,kBAAA;EACA,cFXU;EEYV,cAAA;AJiKR;AI9JM;EACE,2BFtBgB;EEuBhB,2BAAA;EACA,cAAA;EACA,aAAA;EACA,UAAA;EACA,mBAAA;EACA,eAAA;EACA,2CFrBQ;EEsBR,0BAAA;AJgKR;AI5JQ;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;EACA,SAAA;AJ8JV;AI3JQ;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;AJ6JV;AI3JU;EACE,YAAA;EACA,sCAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AJ6JZ;AI3JY;EACE,YAAA;EACA,gCAAA;AJ6Jd;AIzJY;EACE,qBAAA;AJ2Jd;AIjJY;EACE,+HFjEE;AFoNhB;AI7IU;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AJ+IZ;AI7IY;EACE,8DAAA;AJ+Id;AIzIQ;EACE,mBAAA;AJ2IV;AIzIU;EACE,YAAA;AJ2IZ;AIxIU;EACE,YAAA;AJ0IZ;AIvIU;EACE,+HF/FI;AFwOhB;AIpIU;EACE,aAAA;AJsIZ;AIlIU;EACE,kBAAA;AJoIZ;AIlIY;EACE,aAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,yBFhIE;EEiIF,yBAAA;AJoId;AIhIU;EACE,WAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,QAAA;EACA,YAAA;EACA,kBAAA;EACA,yBFzIE;AF2Qd;AI5HQ;EACE,kBAAA;EACA,gBAAA;AJ8HV;AI3HQ;;EAEE,cAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;AJ6HV;AI3HU;;EACE,aAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,2BAAA;AJ8HZ;AI1HQ;EACE,mBAAA;AJ4HV;AIzHQ;EACE,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;AJ2HV;AIxHQ;EACE,iBAAA;EACA,WAAA;EACA,UAAA;AJ0HV;AIxHU;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;AJ0HZ;AIvHU;;EAEE,aAAA;AJyHZ;AInHQ;EACE,aAAA;AJqHV;AIlHQ;EACE,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;AJoHV;AIlHU;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,yBFjOI;EEkOJ,yBAAA;AJoHZ;AIhHQ;;;;EAIE,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBF7OI;AF+Vd;AI/GQ;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,SAAA;AJiHV;AI/GU;;EAEE,cAAA;EACA,kBAAA;EACA,cAAA;EACA,qBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,cF/PQ;EEgQR,yBAAA;EACA,aAAA;EACA,qBFrQE;EEsQF,gCAAA;AJiHZ;AI/GY;;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,mBAAA;EACA,2BAAA;EACA,gCAAA;AJkHd;AI/GY;;EACE,QAAA;AJkHd;AI/GY;;EACE,qBFzRM;AF2YpB;AIhHc;;EACE,iCAAA;AJmHhB;AIzGI;EACE,aAAA;EACA,uBAAA;EACA,eAAA;EACA,SAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,sBAAA;AJ2GN;AIzGM;EACE,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kCAAA;AJ2GR;AIzGQ;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,OAAA;EACA,WAAA;EACA,4BAAA;EACA,+BAAA;EACA,gCAAA;EACA,2BFpUc;AF+axB;AIvGM;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,8BAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,mEAAA;EACA,qBF7UC;EE8UD,0BAAA;EACA,gCAAA;EACA,eAAA;AJyGR;AIvGQ;EACE,2BAAA;AJyGV;AIvGU;EACE,UAAA;AJyGZ;AIrGQ;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AJuGV;AIrGU;EACE,UAAA;EACA,iBAAA;AJuGZ;AIpGU;EAEE,aAAA;EACA,uBAAA;EACA,mBAAA;AJqGZ;AInGY;EACE,WAAA;AJqGd;AI5FI;EACE,QAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;EACA,2CFjYU;EEkYV,gCAAA;EACA,2BF3YkB;AFyexB;AI5FM;EACE,cAAA;EACA,UAAA;AJ8FR;AI3FM;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,yBFhZU;EEiZV,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yDAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;EACA,gCAAA;EACA,eAAA;AJ6FR;AI3FQ;EACE,sBAAA;AJ6FV;;AK/fE;EACE,cHGgB;EGFhB,yDAAA;EACA,+BAAA;EACA,4BAAA;EACA,qBAAA;ALkgBJ;AKhgBI;EACE,2BAAA;EACA,eAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;ALkgBN;AKhgBM;EACE,aAAA;EACA,8BAAA;EACA,kBAAA;ALkgBR;AKhgBQ;EACE,aAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;ALkgBV;AKhgBU;;EAEE,iBAAA;EACA,eAAA;EACA,sCAAA;ALkgBZ;AKhgBY;;EACE,qBAAA;ALmgBd;AK7fM;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AL+fR;AK3fM;EACE,eAAA;EACA,2BAAA;EACA,yBAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,qBAAA;EACA,iBAAA;EACA,cHnDY;AFgjBpB;AK3fQ;EACE,cAAA;AL6fV;AKzfM;EACE,YAAA;EACA,6BAAA;EACA,4BAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,sCAAA;EACA,gCAAA;EACA,eAAA;AL2fR;AKzfQ;EACE,yDAAA;AL2fV;AKxfQ;EACE,yDAAA;AL0fV;AKvfQ;EACE,yDAAA;ALyfV;AKtfQ;EACE,qBAAA;ALwfV;AKpfM;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ALsfR;AKpfQ;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,cAAA;EACA,yBAAA;EACA,UAAA;EACA,UAAA;EACA,0BAAA;ALsfV;AK/eI;EACE,aAAA;EACA,6BAAA;EACA,iBAAA;EACA,mBAAA;EACA,SAAA;ALifN;AK/eM;EACE,qBAAA;EACA,kBAAA;ALifR;AK7eM;;EAEE,2BHnIgB;EGoIhB,2CH5HQ;EG6HR,UAAA;EACA,aAAA;EACA,mBAAA;AL+eR;AK7eQ;;;;;;EAGE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;ALkfV;AKhfU;;;;;;EACE,WAAA;EACA,YAAA;EACA,2BHhJH;EGiJG,2CH9II;EG+IJ,oBAAA;EACA,2BAAA;EACA,4BAAA;EACA,mBAAA;EACA,gCAAA;EACA,eAAA;ALufZ;AKrfY;;;;;;EACE,sBAAA;EACA,2BAAA;AL4fd;AKzfY;;;;;;EACE,+HHzJE;AFypBhB;AK1fU;;EACE,WAAA;EACA,YAAA;EACA,2BH7KY;EG8KZ,2CHtKI;EGuKJ,sBAAA;EACA,2BAAA;EACA,4BAAA;EACA,mBAAA;EACA,gCAAA;EACA,eAAA;AL6fZ;AK3fY;;EACE,sBAAA;AL8fd;AK3fY;;EACE,+HHhLE;AF8qBhB;AKxfU;;EACE,WAAA;EACA,YAAA;EACA,2CH5LI;EG6LJ,kBAAA;EACA,eAAA;AL2fZ;AKzfY;;EACE,8DAAA;AL4fd;AKvfQ;;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,SAAA;EACA,eAAA;AL0fV;AKxfU;;EACE,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,cH1NQ;EG2NR,yBAAA;EACA,aAAA;EACA,qBHhOE;EGiOF,gCAAA;AL2fZ;AKzfY;;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,mBAAA;EACA,2BAAA;EACA,gCAAA;AL4fd;AKzfY;;EACE,QAAA;AL4fd;AKzfY;;EACE,qBHpPM;AFgvBpB;AK1fc;;EACE,iCAAA;AL6fhB;AKtfM;EACE,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,2BAAA;EACA,4BAAA;EACA,mBAAA;EACA,2CHnQQ;AF2vBhB;AKrfM;EACE,UAAA;ALufR;AKrfQ;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,uBAAA;ALufV;AKrfU;EACE,aAAA;EACA,cAAA;EACA,2BHrRH;EGsRG,2CHnRI;EGoRJ,oBAAA;EACA,2BAAA;EACA,4BAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ALufZ;AKrfY;EACE,WAAA;EACA,YAAA;EACA,YAAA;ALufd;AKpfY;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,WAAA;EACA,YAAA;EACA,cAAA;EACA,UAAA;ALqfd;AKnfc;EACE,WAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,yBAAA;EACA,2BAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;ALqfhB;;AMpzBA;EACE,2BAAA;EACA,eAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,cJFkB;AFyzBpB;AMrzBE;EACE,aAAA;EACA,8BAAA;EACA,kBAAA;ANuzBJ;AMrzBI;EACE,aAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;ANuzBN;AMrzBM;;EAEE,iBAAA;EACA,eAAA;EACA,sCAAA;ANuzBR;AMrzBQ;;EACE,qBAAA;ANwzBV;AMlzBE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;ANozBJ;AMhzBE;EACE,eAAA;EACA,2BAAA;EACA,yBAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,qBAAA;EACA,iBAAA;EACA,cJ5CgB;AF81BpB;AMhzBI;EACE,cAAA;ANkzBN;AM9yBE;EACE,YAAA;EACA,6BAAA;EACA,4BAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,sCAAA;EACA,gCAAA;EACA,eAAA;ANgzBJ;AM9yBI;EACE,yDAAA;ANgzBN;AM1yBI;EACE,qBAAA;AN4yBN;AMxyBE;EACE,YAAA;EACA,6BAAA;EACA,4BAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,sCAAA;EACA,gCAAA;EACA,eAAA;EACA,yDAAA;AN0yBJ;AMxyBI;EACE,aAAA;AN0yBN;AMvyBI;EACE,qBAAA;ANyyBN;AMryBE;EACE,YAAA;EACA,6BAAA;EACA,4BAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,sCAAA;EACA,gCAAA;EACA,eAAA;EACA,yDAAA;ANuyBJ;AMryBI;EACE,aAAA;ANuyBN;AMpyBI;EACE,qBAAA;ANsyBN;AMlyBE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ANoyBJ;AMlyBI;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,cAAA;EACA,yBAAA;EACA,UAAA;EACA,UAAA;EACA,0BAAA;ANoyBN;;AOh7BA;EACE,kBAAA;APm7BF;AOj7BE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,cLFgB;EKGhB,iBAAA;EACA,gBAAA;EACA,kFLCO;AFk7BX;AOj7BI;EACE,cAAA;APm7BN;AOj7BM;EACE,qBAAA;EACA,cLZY;EKaZ,eAAA;EACA,gCLXW;AF87BnB;AO96BM;EACE,cAAA;EACA,cAAA;EACA,yDAAA;EACA,sBAAA;EACA,4BAAA;EACA,WAAA;EACA,cAAA;APg7BR;;AQ/8BA;EACE,cAAA;EACA,yDAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,2BAAA;EACA,UAAA;EACA,YAAA;EACA,+BAAA;ARk9BF;;AQ/8BA;EACE;IACE,4BAAA;ERk9BF;AACF;AS59BA;EACE,oBAAA;EACA,yBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AT89BF;;AS39BA;EACE,yBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;AT89BF;AS59BE;EACE,kBAAA;EACA,yBAAA;EACA,mCAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,UAzCU;EA0CV,WAzCW;EA0CX,kBAAA;EACA,aAAA;EACA,qBAAA;EAIA,sBAAA;AT29BJ;ASz9BI;EAIE,wBAAA;ATw9BN;ASr9BI;EAIE,wBAAA;ATo9BN;ASj9BI;EACE,wBAAA;ATm9BN;ASh9BI;EACE,wBAAA;ATk9BN;AS/8BI;EACE,kBAAA;ATi9BN;;AS58BA;EAEE;IAEE,mBAAA;IACA,oCAAA;ET68BF;ES18BA;IACE,mBAAA;IACA,qDAAA;ET48BF;ESz8BA;IACE,mBAAA;IACA,oDAAA;ET28BF;ESx8BA;IACE,mBAAA;IACA,qDAAA;ET08BF;ESv8BA;IACE,mBAAA;IACA,qDAAA;ETy8BF;ESt8BA;IACE,kCAAA;IACA,oDAAA;ETw8BF;ESr8BA;IACE,eAAA;IACA,mDAAA;ETu8BF;ESp8BA;IACE,mBAAA;IACA,oDAAA;ETs8BF;ESn8BA;IACE,mBAAA;IACA,qDAAA;ETq8BF;ESl8BA;IACE,iBAAA;IACA,uDAAA;ETo8BF;AACF;ASj8BA;EAEE;IAEE,mBAAA;IACA,oCAAA;ETi8BF;ES97BA;IACE,kCAAA;IACA,oDAAA;ETg8BF;AACF;AS77BA;EAEE;IAEE,mBAAA;IACA,oCAAA;ET67BF;ES17BA;IACE,oCAAA;IACA,qDAAA;ET47BF;AACF;ASz7BA;EAEE;IAEE,eAAA;IACA,oCAAA;ETy7BF;ESt7BA;IACE,gCAAA;IACA,mDAAA;ETw7BF;AACF;ASr7BA;EAEE;IAEE,mBAAA;IACA,oCAAA;ETq7BF;ESl7BA;IACE,mCAAA;IACA,oDAAA;ETo7BF;AACF;ASj7BA;EAEE;IAEE,iBAAA;IACA,oCAAA;ETi7BF;ES96BA;IACE,oCAAA;IACA,uDAAA;ETg7BF;AACF;AUvhCA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,yBR9FgB;EQ+FhB,yDAAA;EACA,qBAAA;EACA,4BAAA;EACA,2BAAA;EACA,SAAA;EACA,WAAA;EACA,mBAAA;EACA,mCAAA;AVyhCF;AUvhCE;EACE,YAAA;AVyhCJ;AUthCE;EAEE,WAAA;EACA,kBAAA;AVuhCJ;AUphCE;EAxHA,SAAA;EACA,QAAA;EA0DE,gCAAA;EAQE,mCAAA;EAuDF,WAAA;AVyhCJ;AUthCE;EA7HA,SAAA;EACA,QAAA;EAiBI,+BAAA;EACA,gCAAA;EACA,qCAAA;EA2GF,aAAA;AV4hCJ;AUzhCE;EACE,yBRhIU;EQiIV,0DAAA;AV2hCJ;AUxhCE;EAvIA,SAAA;EACA,QAAA;EAiBI,+BAAA;EACA,gCAAA;EACA,qCAAA;EAqHF,aAAA;AV8hCJ;AU3hCE;EA5IA,SAAA;EACA,QAAA;EA0DE,gCAAA;EAQE,mCAAA;EA2EF,WAAA;AVgiCJ","sourcesContent":["@font-face {\r\n  font-family: \"Amagro\";\r\n  src: url(\"../assets/fonts/Amagro.ttf\") format(\"truetype\");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Anticva\";\r\n  src: url(\"../assets/fonts/AntykwaTorunska-Regular.ttf\") format(\"truetype\");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}","@font-face {\n  font-family: \"Amagro\";\n  src: url(\"../assets/fonts/Amagro.ttf\") format(\"truetype\");\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: \"Anticva\";\n  src: url(\"../assets/fonts/AntykwaTorunska-Regular.ttf\") format(\"truetype\");\n  font-style: normal;\n  font-weight: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 16px;\n}\n@media (max-width: 1000px) {\n  :root {\n    font-size: 12px;\n  }\n}\n@media (max-width: 840px) {\n  :root {\n    font-size: 10px;\n  }\n}\n\nbody {\n  background-color: #132d20;\n  font-family: \"Amagro\";\n}\nbody .container {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 4rem;\n}\nbody .container .menu-page {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-image: url(../assets/page-bg/menu.jpg);\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  user-select: none;\n}\nbody .container .menu-page .menu__animation .animation__ball {\n  position: absolute;\n  top: -1rem;\n  left: 60%;\n  height: 12rem;\n}\nbody .container .menu-page .menu__animation .animation__ball img {\n  height: 100%;\n  animation: ball-translate 4s infinite;\n}\nbody .container .menu-page .main__menu {\n  z-index: 10;\n}\nbody .container .menu-page .main__menu .menu__name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #e69732;\n  font-size: 3rem;\n  text-shadow: 3px 2px 3px #11271b;\n}\nbody .container .menu-page .main__menu .menu__name span {\n  font-size: 3.5rem;\n  display: block;\n  color: #fc5954;\n}\nbody .container .menu-page .main__menu .menu_start-btn {\n  box-shadow: inset 0px 0px 0px 0px #173928;\n  background: linear-gradient(to bottom, #cf2846 5%, #fc5b53 100%);\n  background-color: #fc5954;\n  border-radius: 32px;\n  border: 2px solid #cf2846;\n  display: block;\n  margin: 2rem auto;\n  cursor: pointer;\n  color: #f6dac7;\n  font-family: \"Amargo\";\n  font-size: 2rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  padding: 1rem 3rem;\n  text-decoration: none;\n  text-shadow: 3px 2px 3px #11271b;\n  transition: all 0.3s ease-in-out;\n}\nbody .container .menu-page .main__menu .menu_start-btn:hover {\n  transition: all 0.3s ease-in-out;\n  background: linear-gradient(to bottom, #fc5954 5%, #cf2846 100%);\n  background-color: #214d36;\n}\nbody .container .menu-page .main__menu .menu_start-btn:active {\n  position: relative;\n  top: 1px;\n}\n\n@keyframes ball-translate {\n  20% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  40% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n  60% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n@keyframes button-hover {\n  0% {\n    transform: scale(1);\n    opacity: 0.1;\n  }\n  20% {\n    transform: scale(1.05);\n    opacity: 0.2;\n  }\n  40% {\n    transform: scale(1.1);\n    opacity: 0.3;\n  }\n  60% {\n    transform: scale(1.07);\n    opacity: 0.4;\n  }\n  80% {\n    transform: scale(1.04);\n    opacity: 0.3;\n  }\n  to {\n    transform: scale(1.02);\n    opacity: 0;\n  }\n}\ncanvas {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.container {\n  overflow: hidden;\n}\n.container .filter-page {\n  color: #f6dac7;\n  background-image: url(../assets/page-bg/filter-bg1.jpg);\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n.container .filter-page .filter__menu {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1600px;\n  margin: 3rem auto 0;\n}\n.container .filter-page .filter__menu h2 {\n  text-align: center;\n  color: #fc5954;\n  margin: 1rem 0;\n}\n.container .filter-page .filter__menu > div {\n  background-color: #1b412ce3;\n  border: 4px solid #1b412ce3;\n  margin: 2rem 0;\n  padding: 1rem;\n  width: 30%;\n  border-radius: 3rem;\n  flex-wrap: wrap;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  backdrop-filter: blur(4px);\n}\n.container .filter-page .filter__menu .menu__value-filters > div {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0.5rem 0;\n  font-size: 1rem;\n  gap: 2rem;\n}\n.container .filter-page .filter__menu .menu__value-filters ul {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.container .filter-page .filter__menu .menu__value-filters ul li {\n  height: 3rem;\n  transition: transform 0.3s ease-in-out;\n  position: relative;\n  cursor: pointer;\n  margin: 0 0.5rem;\n}\n.container .filter-page .filter__menu .menu__value-filters ul li img {\n  height: 100%;\n  filter: sepia(1) brightness(0.8);\n}\n.container .filter-page .filter__menu .menu__value-filters ul li:hover {\n  transform: scale(1.1);\n}\n.container .filter-page .filter__menu .menu__value-filters .shapes li.active {\n  filter: invert(10%) sepia(70%) saturate(200%) hue-rotate(69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732);\n}\n.container .filter-page .filter__menu .menu__value-filters .colors li {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 5px;\n}\n.container .filter-page .filter__menu .menu__value-filters .colors li.active {\n  box-shadow: 0px 0px 0px 2px #84cc83 inset, 0px 0px 7px #e69732;\n}\n.container .filter-page .filter__menu .menu__value-filters .sizes {\n  align-items: center;\n}\n.container .filter-page .filter__menu .menu__value-filters .sizes li:first-child {\n  height: 5rem;\n}\n.container .filter-page .filter__menu .menu__value-filters .sizes li:nth-child(2) {\n  height: 4rem;\n}\n.container .filter-page .filter__menu .menu__value-filters .sizes li.active {\n  filter: invert(10%) sepia(70%) saturate(200%) hue-rotate(69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732);\n}\n.container .filter-page .filter__menu .menu__value-filters .favorites-filter #favorite-filter {\n  display: none;\n}\n.container .filter-page .filter__menu .menu__value-filters .favorites-filter label {\n  position: relative;\n}\n.container .filter-page .filter__menu .menu__value-filters .favorites-filter label::before {\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n  position: absolute;\n  top: -4px;\n  right: -35px;\n  border-radius: 5px;\n  background-color: #132d20;\n  border: 1px solid #f6dac7;\n}\n.container .filter-page .filter__menu .menu__value-filters .favorites-filter #favorite-filter:checked ~ label[for=favorite-filter]::after {\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  position: absolute;\n  top: 1px;\n  right: -30px;\n  border-radius: 3px;\n  background-color: #e69732;\n}\n.container .filter-page .filter__menu .menu__range-filters p {\n  text-align: center;\n  margin-top: 2rem;\n}\n.container .filter-page .filter__menu .menu__range-filters .count-range__container,\n.container .filter-page .filter__menu .menu__range-filters .year-range__container {\n  margin: 0 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.container .filter-page .filter__menu .menu__range-filters .count-range__container span,\n.container .filter-page .filter__menu .menu__range-filters .year-range__container span {\n  display: flex;\n  width: 5rem;\n  height: 2rem;\n  font-size: 1rem;\n  border-radius: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: #7e866cc7;\n}\n.container .filter-page .filter__menu .menu__range-filters .noUi-connect {\n  background: #de7522;\n}\n.container .filter-page .filter__menu .menu__range-filters .noUi-target {\n  background: #ffd3ac;\n  border-radius: 4px;\n  border: 1px solid #ffd3ac;\n  box-shadow: none;\n}\n.container .filter-page .filter__menu .menu__range-filters .noUi-horizontal {\n  margin: 2rem 1rem;\n  height: 7px;\n  width: 60%;\n}\n.container .filter-page .filter__menu .menu__range-filters .noUi-horizontal .noUi-handle {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  right: -7px;\n  top: -5px;\n  background: #fc5954;\n  box-shadow: none;\n  cursor: pointer;\n}\n.container .filter-page .filter__menu .menu__range-filters .noUi-horizontal .noUi-handle:before,\n.container .filter-page .filter__menu .menu__range-filters .noUi-horizontal .noUi-handle:after {\n  display: none;\n}\n.container .filter-page .filter__menu .menu__sort-type input {\n  display: none;\n}\n.container .filter-page .filter__menu .menu__sort-type .sort-type_select {\n  display: block;\n  position: relative;\n  margin: 1.5rem 1rem;\n  padding-left: 3rem;\n}\n.container .filter-page .filter__menu .menu__sort-type .sort-type_select:before {\n  content: \"\";\n  position: absolute;\n  top: -5px;\n  left: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #132d20;\n  border: 1px solid #f6dac7;\n}\n.container .filter-page .filter__menu .menu__sort-type #yearMinMaxSort:checked ~ label[for=yearMinMaxSort]::after,\n.container .filter-page .filter__menu .menu__sort-type #yearMaxMinSort:checked ~ label[for=yearMaxMinSort]::after,\n.container .filter-page .filter__menu .menu__sort-type #nameAZSort:checked ~ label[for=nameAZSort]::after,\n.container .filter-page .filter__menu .menu__sort-type #nameZASort:checked ~ label[for=nameZASort]::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 5px;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  background-color: #e69732;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-filter,\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-storage {\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  font-family: \"Amagro\";\n  padding: 1rem 2rem;\n  border-radius: 1rem;\n  border: none;\n  color: #f6dac7;\n  text-transform: uppercase;\n  outline: none;\n  background: #006941d9;\n  transition: all 0.4s ease-in-out;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-filter::before,\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-storage::before {\n  content: \"\";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-radius: 1rem;\n  border: 2px solid #659765de;\n  transition: all 0.5s ease-in-out;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-filter:active,\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-storage:active {\n  top: 1px;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-filter:hover,\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-storage:hover {\n  background: #659765de;\n}\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-filter:hover::before,\n.container .filter-page .filter__menu .menu__sort-type .reset-buttons #reset-storage:hover::before {\n  animation: button-hover 0.7s ease;\n}\n.container .filter-page .filter__cards {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 3rem;\n  max-width: 1600px;\n  margin: 0 auto;\n  font-family: \"Anticva\";\n}\n.container .filter-page .filter__cards h2 {\n  text-transform: uppercase;\n  position: relative;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n  margin-right: 4rem;\n  text-shadow: 3px 3px 2px #00000080;\n}\n.container .filter-page .filter__cards h2::before {\n  content: \"\";\n  position: absolute;\n  width: 0px;\n  bottom: -0.43rem;\n  left: 0;\n  height: 4px;\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  transition: all 0.6s ease-in-out;\n  background-color: #1b412ce3;\n}\n.container .filter-page .filter__cards .card-item {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 25rem;\n  padding: 1rem;\n  font-size: 1rem;\n  border-radius: 10px;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset, #000000c4 0px 5px 15px;\n  background: #5890598f;\n  backdrop-filter: blur(4px);\n  transition: all 0.4s ease-in-out;\n  cursor: pointer;\n}\n.container .filter-page .filter__cards .card-item:hover {\n  transform: translateY(-4px);\n}\n.container .filter-page .filter__cards .card-item:hover h2::before {\n  width: 95%;\n}\n.container .filter-page .filter__cards .card-item .item-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.container .filter-page .filter__cards .card-item .item-content .item-description {\n  width: 95%;\n  font-size: 1.2rem;\n}\n.container .filter-page .filter__cards .card-item .item-content .item-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container .filter-page .filter__cards .card-item .item-content .item-img img {\n  width: 100%;\n}\n.container .filter-page .favorite-modal {\n  top: 40%;\n  left: 1rem;\n  width: 20rem;\n  height: 15rem;\n  position: fixed;\n  margin-left: -100%;\n  opacity: 0;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 1rem;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  transition: all 0.3s ease-in-out;\n  background-color: #1b412ce3;\n}\n.container .filter-page .favorite-modal.show-modal {\n  margin-left: 0;\n  opacity: 1;\n}\n.container .filter-page .favorite-modal .modal-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background-color: #fc5954;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  background-image: url(../assets/icons/close.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.container .filter-page .favorite-modal .modal-close:hover {\n  transform: scale(1.04);\n}\n\n.container .game-page {\n  color: #f6dac7;\n  background-image: url(../assets/page-bg/filter-bg1.jpg);\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n.container .game-page .header__game-page {\n  background-color: #132d20e3;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.container .game-page .header__game-page .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n}\n.container .game-page .header__game-page .header .navigation {\n  display: flex;\n  gap: 3rem;\n  justify-content: center;\n  align-items: center;\n}\n.container .game-page .header__game-page .header .navigation #game-page,\n.container .game-page .header__game-page .header .navigation #filter-page {\n  font-size: 1.3rem;\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n}\n.container .game-page .header__game-page .header .navigation #game-page:hover,\n.container .game-page .header__game-page .header .navigation #filter-page:hover {\n  transform: scale(1.1);\n}\n.container .game-page .header__game-page .header__buttons {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.container .game-page .header__game-page .input__search {\n  cursor: pointer;\n  background-color: #7e866cc7;\n  border: 1px solid #132d20;\n  padding: 0.2rem 0.5rem;\n  border-radius: 1rem;\n  outline: none;\n  font-family: \"Amagro\";\n  font-size: 0.8rem;\n  color: #f6dac7;\n}\n.container .game-page .header__game-page .input__search::placeholder {\n  color: #ffffec;\n}\n.container .game-page .header__game-page button {\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 2rem;\n  height: 2rem;\n  transition: transform 0.3s ease-in-out;\n  filter: sepia(1) brightness(0.8);\n  cursor: pointer;\n}\n.container .game-page .header__game-page button#home {\n  background-image: url(../assets/svg/tree.svg);\n}\n.container .game-page .header__game-page button.menu__btn-mute {\n  background-image: url(../assets/svg/audio.svg);\n}\n.container .game-page .header__game-page button.menu__btn-snow {\n  background-image: url(../assets/svg/snow.svg);\n}\n.container .game-page .header__game-page button:hover {\n  transform: scale(1.1);\n}\n.container .game-page .header__game-page .favorite__ball {\n  position: relative;\n  width: 2rem;\n  height: 2rem;\n  border: 3px solid #f6dac7;\n  font-size: 1rem;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container .game-page .header__game-page .favorite__ball::before {\n  position: absolute;\n  content: \"\";\n  width: 0.3rem;\n  height: 0.2rem;\n  border: 3px solid #f6dac7;\n  top: -10px;\n  right: 50%;\n  transform: translateX(50%);\n}\n.container .game-page .game__main {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1600px;\n  margin: 6rem auto 0;\n  gap: 1rem;\n}\n.container .game-page .game__main h3 {\n  margin: 1rem 0 1.5rem;\n  text-align: center;\n}\n.container .game-page .game__main .game-menu__left,\n.container .game-page .game__main .game-menu__right {\n  background-color: #1b412ce3;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  width: 25%;\n  padding: 1rem;\n  border-radius: 2rem;\n}\n.container .game-page .game__main .game-menu__left .select-trees,\n.container .game-page .game__main .game-menu__left .select-bgs,\n.container .game-page .game__main .game-menu__left .select-lights,\n.container .game-page .game__main .game-menu__right .select-trees,\n.container .game-page .game__main .game-menu__right .select-bgs,\n.container .game-page .game__main .game-menu__right .select-lights {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n.container .game-page .game__main .game-menu__left .select-trees .tree-item,\n.container .game-page .game__main .game-menu__left .select-bgs .tree-item,\n.container .game-page .game__main .game-menu__left .select-lights .tree-item,\n.container .game-page .game__main .game-menu__right .select-trees .tree-item,\n.container .game-page .game__main .game-menu__right .select-bgs .tree-item,\n.container .game-page .game__main .game-menu__right .select-lights .tree-item {\n  width: 7rem;\n  height: 7rem;\n  background-color: #5890598f;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  background-size: 60%;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 2rem;\n  transition: all 0.5s ease-in-out;\n  cursor: pointer;\n}\n.container .game-page .game__main .game-menu__left .select-trees .tree-item:hover,\n.container .game-page .game__main .game-menu__left .select-bgs .tree-item:hover,\n.container .game-page .game__main .game-menu__left .select-lights .tree-item:hover,\n.container .game-page .game__main .game-menu__right .select-trees .tree-item:hover,\n.container .game-page .game__main .game-menu__right .select-bgs .tree-item:hover,\n.container .game-page .game__main .game-menu__right .select-lights .tree-item:hover {\n  transform: scale(1.04);\n  background-color: #ccd17f9c;\n}\n.container .game-page .game__main .game-menu__left .select-trees .tree-item.active,\n.container .game-page .game__main .game-menu__left .select-bgs .tree-item.active,\n.container .game-page .game__main .game-menu__left .select-lights .tree-item.active,\n.container .game-page .game__main .game-menu__right .select-trees .tree-item.active,\n.container .game-page .game__main .game-menu__right .select-bgs .tree-item.active,\n.container .game-page .game__main .game-menu__right .select-lights .tree-item.active {\n  filter: invert(10%) sepia(70%) saturate(200%) hue-rotate(69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732);\n}\n.container .game-page .game__main .game-menu__left .select-bgs .bg-item,\n.container .game-page .game__main .game-menu__right .select-bgs .bg-item {\n  width: 5rem;\n  height: 5rem;\n  background-color: #1b412ce3;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 1rem;\n  transition: all 0.5s ease-in-out;\n  cursor: pointer;\n}\n.container .game-page .game__main .game-menu__left .select-bgs .bg-item:hover,\n.container .game-page .game__main .game-menu__right .select-bgs .bg-item:hover {\n  transform: scale(1.04);\n}\n.container .game-page .game__main .game-menu__left .select-bgs .bg-item.active,\n.container .game-page .game__main .game-menu__right .select-bgs .bg-item.active {\n  filter: invert(10%) sepia(70%) saturate(200%) hue-rotate(69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732);\n}\n.container .game-page .game__main .game-menu__left .select-lights .light-item,\n.container .game-page .game__main .game-menu__right .select-lights .light-item {\n  width: 2rem;\n  height: 2rem;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.container .game-page .game__main .game-menu__left .select-lights .light-item.active,\n.container .game-page .game__main .game-menu__right .select-lights .light-item.active {\n  box-shadow: 0px 0px 0px 2px #84cc83 inset, 0px 0px 7px #e69732;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons,\n.container .game-page .game__main .game-menu__right .reset-buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  cursor: pointer;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons #reset-storage,\n.container .game-page .game__main .game-menu__right .reset-buttons #reset-storage {\n  display: block;\n  position: relative;\n  margin: 0.5rem auto;\n  font-family: \"Amagro\";\n  padding: 0.3rem 1em;\n  border-radius: 1rem;\n  border: none;\n  color: #f6dac7;\n  text-transform: uppercase;\n  outline: none;\n  background: #006941d9;\n  transition: all 0.4s ease-in-out;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons #reset-storage::before,\n.container .game-page .game__main .game-menu__right .reset-buttons #reset-storage::before {\n  content: \"\";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-radius: 1rem;\n  border: 2px solid #659765de;\n  transition: all 0.5s ease-in-out;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons #reset-storage:active,\n.container .game-page .game__main .game-menu__right .reset-buttons #reset-storage:active {\n  top: 1px;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons #reset-storage:hover,\n.container .game-page .game__main .game-menu__right .reset-buttons #reset-storage:hover {\n  background: #659765de;\n}\n.container .game-page .game__main .game-menu__left .reset-buttons #reset-storage:hover::before,\n.container .game-page .game__main .game-menu__right .reset-buttons #reset-storage:hover::before {\n  animation: button-hover 0.7s ease;\n}\n.container .game-page .game__main .game-main__tree {\n  position: relative;\n  overflow: hidden;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 1rem;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n}\n.container .game-page .game__main .game-menu__right {\n  width: 25%;\n}\n.container .game-page .game__main .game-menu__right .select-toys {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n}\n.container .game-page .game__main .game-menu__right .select-toys .toy__card-item {\n  width: 5.2rem;\n  height: 5.2rem;\n  background-color: #5890598f;\n  box-shadow: 0px 0px 0px 4px #fedec070 inset;\n  background-size: 60%;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container .game-page .game__main .game-menu__right .select-toys .toy__card-item img {\n  width: 50px;\n  height: 50px;\n  cursor: grab;\n}\n.container .game-page .game__main .game-menu__right .select-toys .toy__card-item .toy__card-count {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 0rem;\n  height: 0rem;\n  right: -0.9rem;\n  top: -2rem;\n}\n.container .game-page .game__main .game-menu__right .select-toys .toy__card-item .toy__card-count::after {\n  content: \"\";\n  position: absolute;\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 2px solid #fc5954;\n  background-color: #ffffff52;\n  border-radius: 50%;\n  top: -1rem;\n  left: -1rem;\n}\n\n.header__filter-page {\n  background-color: #132d20e3;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  color: #f6dac7;\n}\n.header__filter-page .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n}\n.header__filter-page .header .navigation {\n  display: flex;\n  gap: 3rem;\n  justify-content: center;\n  align-items: center;\n}\n.header__filter-page .header .navigation #game-page,\n.header__filter-page .header .navigation #filter-page {\n  font-size: 1.3rem;\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n}\n.header__filter-page .header .navigation #game-page:hover,\n.header__filter-page .header .navigation #filter-page:hover {\n  transform: scale(1.1);\n}\n.header__filter-page .header__buttons {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.header__filter-page .input__search {\n  cursor: pointer;\n  background-color: #7e866cc7;\n  border: 1px solid #132d20;\n  padding: 0.2rem 0.5rem;\n  border-radius: 1rem;\n  outline: none;\n  font-family: \"Amagro\";\n  font-size: 0.8rem;\n  color: #f6dac7;\n}\n.header__filter-page .input__search::placeholder {\n  color: #ffffec;\n}\n.header__filter-page button {\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 2rem;\n  height: 2rem;\n  transition: transform 0.3s ease-in-out;\n  filter: sepia(1) brightness(0.8);\n  cursor: pointer;\n}\n.header__filter-page button#home {\n  background-image: url(../assets/svg/tree.svg);\n}\n.header__filter-page button:hover {\n  transform: scale(1.1);\n}\n.header__filter-page .menu__btn-mute {\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 2rem;\n  height: 2rem;\n  transition: transform 0.3s ease-in-out;\n  filter: sepia(1) brightness(0.8);\n  cursor: pointer;\n  background-image: url(../assets/svg/audio.svg);\n}\n.header__filter-page .menu__btn-mute #menu__btn-mute {\n  display: none;\n}\n.header__filter-page .menu__btn-mute:hover {\n  transform: scale(1.1);\n}\n.header__filter-page .menu__btn-snow {\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 2rem;\n  height: 2rem;\n  transition: transform 0.3s ease-in-out;\n  filter: sepia(1) brightness(0.8);\n  cursor: pointer;\n  background-image: url(../assets/svg/snow.svg);\n}\n.header__filter-page .menu__btn-snow #menu__btn-snow {\n  display: none;\n}\n.header__filter-page .menu__btn-snow:hover {\n  transform: scale(1.1);\n}\n.header__filter-page .favorite__ball {\n  position: relative;\n  width: 2rem;\n  height: 2rem;\n  border: 3px solid #f6dac7;\n  font-size: 1rem;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__filter-page .favorite__ball::before {\n  position: absolute;\n  content: \"\";\n  width: 0.3rem;\n  height: 0.2rem;\n  border: 3px solid #f6dac7;\n  top: -10px;\n  right: 50%;\n  transform: translateX(50%);\n}\n\n.container {\n  position: relative;\n}\n.container .footer__menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #f6dac7;\n  padding: 0.4rem 0;\n  margin: 0.4rem 0;\n  background: radial-gradient(118.88% 606.86% at 0% 0%, #1f4933bf 0%, #fc595485 88%);\n}\n.container .footer__menu .author {\n  margin: 0 1rem;\n}\n.container .footer__menu .author a {\n  text-decoration: none;\n  color: #f6dac7;\n  font-size: 1rem;\n  text-shadow: 3px 2px 3px #11271b;\n}\n.container .footer__menu .course a {\n  display: block;\n  margin: 0 1rem;\n  background-image: url(../assets/icons/rs_school.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 5rem;\n  height: 1.9rem;\n}\n\n.snowflake {\n  display: block;\n  background-image: url(../assets/svg/snow.svg);\n  width: 1rem;\n  height: 1rem;\n  position: absolute;\n  background-size: cover;\n  background-position: center;\n  top: -1rem;\n  z-index: 100;\n  animation: fall linear forwards;\n}\n\n@keyframes fall {\n  to {\n    transform: translateY(100vh);\n  }\n}\n.lightrope-container {\n  pointer-events: none;\n  transform: rotate(180deg);\n  z-index: 50;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -60%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.lightrope {\n  transform: rotate(180deg);\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n  margin: 0 0 0 0;\n  padding: 0;\n  pointer-events: none;\n  width: 100%;\n}\n.lightrope li {\n  position: relative;\n  animation-fill-mode: both;\n  animation-iteration-count: infinite;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin: 7.5px;\n  display: inline-block;\n  animation-duration: 2s;\n}\n.lightrope li:nth-child(2n+1) {\n  animation-duration: 0.4s;\n}\n.lightrope li:nth-child(4n+2) {\n  animation-duration: 1.1s;\n}\n.lightrope li:nth-child(odd) {\n  animation-duration: 1.8s;\n}\n.lightrope li:nth-child(3n+1) {\n  animation-duration: 1.4s;\n}\n.lightrope li:first-child {\n  margin-left: -15px;\n}\n\n@keyframes rainbow {\n  0%, 100% {\n    background: #00ffaa;\n    box-shadow: 0px 1px 12px 3px #00f7a5;\n  }\n  10% {\n    background: #00c3ff;\n    box-shadow: 0px 1px 12px 3px rgba(0, 218, 247, 0.596);\n  }\n  20% {\n    background: #002fff;\n    box-shadow: 0px 1px 12px 3px rgba(0, 78, 247, 0.596);\n  }\n  30% {\n    background: #8c00ff;\n    box-shadow: 0px 1px 12px 3px rgba(156, 0, 247, 0.596);\n  }\n  40% {\n    background: #ff00bf;\n    box-shadow: 0px 1px 12px 3px rgba(247, 0, 214, 0.596);\n  }\n  50% {\n    background: rgba(0, 247, 165, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(238, 2, 61, 0.527);\n  }\n  60% {\n    background: red;\n    box-shadow: 0px 1px 12px 3px rgba(252, 0, 0, 0.596);\n  }\n  70% {\n    background: #ff5100;\n    box-shadow: 0px 1px 12px 3px rgba(247, 99, 0, 0.596);\n  }\n  80% {\n    background: #eeff00;\n    box-shadow: 0px 1px 12px 3px rgba(210, 247, 0, 0.596);\n  }\n  90% {\n    background: white;\n    box-shadow: 0px 1px 12px 3px rgba(255, 255, 255, 0.596);\n  }\n}\n@keyframes flash-green {\n  0%, 100% {\n    background: #00ffaa;\n    box-shadow: 0px 1px 12px 3px #00f7a5;\n  }\n  50% {\n    background: rgba(0, 247, 165, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(3, 146, 98, 0.527);\n  }\n}\n@keyframes flash-yellow {\n  0%, 100% {\n    background: #ffee00;\n    box-shadow: 0px 1px 12px 3px #fae04e;\n  }\n  50% {\n    background: rgba(252, 238, 160, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(238, 241, 4, 0.404);\n  }\n}\n@keyframes flash-red {\n  0%, 100% {\n    background: red;\n    box-shadow: 0px 1px 12px 3px #e40d0d;\n  }\n  50% {\n    background: rgba(255, 0, 0, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(192, 5, 5, 0.568);\n  }\n}\n@keyframes flash-blue {\n  0%, 100% {\n    background: #059bff;\n    box-shadow: 0px 1px 12px 3px #119ffd;\n  }\n  50% {\n    background: rgba(32, 152, 231, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(7, 93, 151, 0.562);\n  }\n}\n@keyframes flash-white {\n  0%, 100% {\n    background: white;\n    box-shadow: 0px 1px 12px 3px #f7f2f2;\n  }\n  50% {\n    background: rgba(255, 255, 255, 0.4);\n    box-shadow: 0px 1px 12px 3px rgba(255, 255, 255, 0.548);\n  }\n}\n.ribbon {\n  position: absolute;\n  width: 60px;\n  height: 50px;\n  background-color: #fc5954;\n  background-image: url(../assets/icons/star-no.png);\n  background-size: 2rem;\n  background-repeat: no-repeat;\n  background-position: center;\n  top: -6px;\n  right: 1rem;\n  margin-bottom: 80px;\n  transition: height 0.5s ease-in-out;\n}\n.ribbon:hover {\n  height: 70px;\n}\n.ribbon:before, .ribbon:after {\n  content: \"\";\n  position: absolute;\n}\n.ribbon:before {\n  height: 0;\n  width: 0;\n  border-bottom: 6px solid #fb1009;\n  border-right: 6px solid transparent;\n  right: -6px;\n}\n.ribbon:after {\n  height: 0;\n  width: 0;\n  border-left: 30px solid #fc5954;\n  border-right: 30px solid #fc5954;\n  border-bottom: 30px solid transparent;\n  bottom: -30px;\n}\n.ribbon.true {\n  background-color: #e69732;\n  background-image: url(../assets/icons/star-yes.png);\n}\n.ribbon.true::after {\n  height: 0;\n  width: 0;\n  border-left: 30px solid #e69732;\n  border-right: 30px solid #e69732;\n  border-bottom: 30px solid transparent;\n  bottom: -30px;\n}\n.ribbon.true::before {\n  height: 0;\n  width: 0;\n  border-bottom: 6px solid #b56f16;\n  border-right: 6px solid transparent;\n  right: -6px;\n}","* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n:root {\r\n  font-size: 16px;\r\n\r\n  @media (max-width: 1000px) {\r\n    font-size: 12px;\r\n  }\r\n\r\n  @media (max-width: 840px) {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\nbody {\r\n  background-color: $main-bg-color;\r\n  font-family: \"Amagro\";\r\n\r\n  .container {\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-rows: auto 4rem;\r\n\r\n    .menu-page {\r\n      width: 100vw;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      background-image: url(../assets/page-bg/menu.jpg);\r\n      background-size: cover;\r\n      background-position: top center;\r\n      background-repeat: no-repeat;\r\n      user-select: none;\r\n\r\n      .menu__animation {\r\n        .animation__ball {\r\n          position: absolute;\r\n          top: -1rem;\r\n          left: 60%;\r\n          height: 12rem;\r\n\r\n          img {\r\n            height: 100%;\r\n            animation: ball-translate 4s infinite;\r\n          }\r\n        }\r\n      }\r\n\r\n      .main__menu {\r\n        z-index: 10;\r\n\r\n        .menu__name {\r\n          display: flex;\r\n          flex-direction: column;\r\n          justify-content: center;\r\n          align-items: center;\r\n          text-align: center;\r\n          color: $orange-text;\r\n          font-size: 3rem;\r\n          text-shadow: $main-text-shadow;\r\n\r\n          & span {\r\n            font-size: 3.5rem;\r\n            display: block;\r\n            color: $main-text-color;\r\n          }\r\n        }\r\n\r\n        .menu_start-btn {\r\n          box-shadow: inset 0px 0px 0px 0px #173928;\r\n          background: linear-gradient(to bottom, #cf2846 5%, #fc5b53 100%);\r\n          background-color: #fc5954;\r\n          border-radius: 32px;\r\n          border: 2px solid #cf2846;\r\n          display: block;\r\n          margin: 2rem auto;\r\n          cursor: pointer;\r\n          color: $light-yellow-text;\r\n          font-family: \"Amargo\";\r\n          font-size: 2rem;\r\n          text-transform: uppercase;\r\n          font-weight: bold;\r\n          padding: 1rem 3rem;\r\n          text-decoration: none;\r\n          text-shadow: $main-text-shadow;\r\n          transition: all 0.3s ease-in-out;\r\n\r\n          &:hover {\r\n            transition: all 0.3s ease-in-out;\r\n            background: linear-gradient(to bottom, #fc5954 5%, #cf2846 100%);\r\n            background-color: #214d36;\r\n          }\r\n\r\n          &:active {\r\n            position: relative;\r\n            top: 1px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n}","$main-bg-color: #132d20;\r\n$main-bg-color-opacity: #1b412ce3;\r\n$light-green: #006941d9;\r\n$light-green-hover: #659765de;\r\n$orange-text: #e69732;\r\n$light-yellow-text: #f6dac7;\r\n$card-bg:#5890598f;\r\n$main-text-color: #fc5954;\r\n$main-text-shadow: 3px 2px 3px #11271b;\r\n$shadow-border: 0px 0px 0px 4px #fedec070 inset;\r\n$shadow-card: #000000c4 0px 5px 15px;\r\n$glass-bg: radial-gradient(118.88% 606.86% at 0% 0%, #1f4933bf 0%, #fc595485 88%);\r\n$active-filter: invert(10%) sepia(70%) saturate(200%) hue-rotate(69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px $orange-text);","@keyframes ball-translate {\r\n  20% {\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n\r\n  40% {\r\n    transform: rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  60% {\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n\r\n  80% {\r\n    transform: rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n}\r\n\r\n@keyframes button-hover {\r\n  0% {\r\n    transform: scale(1);\r\n    opacity: 0.1;\r\n  }\r\n\r\n  20% {\r\n    transform: scale(1.05);\r\n    opacity: 0.2;\r\n  }\r\n\r\n  40% {\r\n    transform: scale(1.1);\r\n    opacity: 0.3;\r\n  }\r\n\r\n  60% {\r\n    transform: scale(1.07);\r\n    opacity: 0.4;\r\n  }\r\n\r\n  80% {\r\n    transform: scale(1.04);\r\n    opacity: 0.3;\r\n  }\r\n\r\n  to {\r\n    transform: scale(1.02);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\ncanvas {\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}",".container {\r\n  overflow: hidden;\r\n\r\n  .filter-page {\r\n    color: $light-yellow-text;\r\n    background-image: url(../assets/page-bg/filter-bg1.jpg);\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n\r\n    .filter__menu {\r\n      display: flex;\r\n      justify-content: space-evenly;\r\n      max-width: 1600px;\r\n      margin: 3rem auto 0;\r\n\r\n      h2 {\r\n        text-align: center;\r\n        color: $main-text-color;\r\n        margin: 1rem 0;\r\n      }\r\n\r\n      &>div {\r\n        background-color: $main-bg-color-opacity;\r\n        border: 4px solid $main-bg-color-opacity;\r\n        margin: 2rem 0;\r\n        padding: 1rem;\r\n        width: 30%;\r\n        border-radius: 3rem;\r\n        flex-wrap: wrap;\r\n        box-shadow: $shadow-border;\r\n        backdrop-filter: blur(4px);\r\n      }\r\n\r\n      .menu__value-filters {\r\n        &>div {\r\n          display: flex;\r\n          align-items: center;\r\n          flex-wrap: wrap;\r\n          padding: 0.5rem 0;\r\n          font-size: 1rem;\r\n          gap: 2rem;\r\n        }\r\n\r\n        ul {\r\n          display: flex;\r\n          flex-wrap: wrap;\r\n          align-items: center;\r\n          list-style-type: none;\r\n          margin: 0;\r\n          padding: 0;\r\n\r\n          li {\r\n            height: 3rem;\r\n            transition: transform 0.3s ease-in-out;\r\n            position: relative;\r\n            cursor: pointer;\r\n            margin: 0 0.5rem;\r\n\r\n            img {\r\n              height: 100%;\r\n              filter: sepia(1) brightness(0.8);\r\n\r\n            }\r\n\r\n            &:hover {\r\n              transform: scale(1.1);\r\n            }\r\n\r\n          }\r\n\r\n        }\r\n\r\n        .shapes {\r\n          li {\r\n\r\n            &.active {\r\n              filter: $active-filter;\r\n            }\r\n          }\r\n        }\r\n\r\n        .colors {\r\n          li {\r\n            width: 2rem;\r\n            height: 2rem;\r\n            border-radius: 5px;\r\n\r\n            &.active {\r\n              box-shadow: 0px 0px 0px 2px #84cc83 inset, 0px 0px 7px $orange-text;\r\n            }\r\n          }\r\n\r\n        }\r\n\r\n        .sizes {\r\n          align-items: center;\r\n\r\n          li:first-child {\r\n            height: 5rem;\r\n          }\r\n\r\n          li:nth-child(2) {\r\n            height: 4rem;\r\n          }\r\n\r\n          li.active {\r\n            filter: $active-filter;\r\n          }\r\n        }\r\n\r\n        .favorites-filter {\r\n          #favorite-filter {\r\n            display: none;\r\n\r\n          }\r\n\r\n          label {\r\n            position: relative;\r\n\r\n            &::before {\r\n              width: 1.5rem;\r\n              height: 1.5rem;\r\n              content: '';\r\n              position: absolute;\r\n              top: -4px;\r\n              right: -35px;\r\n              border-radius: 5px;\r\n              background-color: $main-bg-color;\r\n              border: 1px solid $light-yellow-text;\r\n            }\r\n          }\r\n\r\n          #favorite-filter:checked~label[for=\"favorite-filter\"]::after {\r\n            width: 1rem;\r\n            height: 1rem;\r\n            content: '';\r\n            position: absolute;\r\n            top: 1px;\r\n            right: -30px;\r\n            border-radius: 3px;\r\n            background-color: $orange-text;\r\n          }\r\n        }\r\n      }\r\n\r\n      .menu__range-filters {\r\n        p {\r\n          text-align: center;\r\n          margin-top: 2rem;\r\n        }\r\n\r\n        .count-range__container,\r\n        .year-range__container {\r\n          margin: 0 1rem;\r\n          display: flex;\r\n          justify-content: space-between;\r\n          align-items: center;\r\n          cursor: pointer;\r\n\r\n          span {\r\n            display: flex;\r\n            width: 5rem;\r\n            height: 2rem;\r\n            font-size: 1rem;\r\n            border-radius: 10px;\r\n            justify-content: center;\r\n            align-items: center;\r\n            background-color: #7e866cc7;\r\n          }\r\n        }\r\n\r\n        .noUi-connect {\r\n          background: #de7522;\r\n        }\r\n\r\n        .noUi-target {\r\n          background: #ffd3ac;\r\n          border-radius: 4px;\r\n          border: 1px solid #ffd3ac;\r\n          box-shadow: none;\r\n        }\r\n\r\n        .noUi-horizontal {\r\n          margin: 2rem 1rem;\r\n          height: 7px;\r\n          width: 60%;\r\n\r\n          & .noUi-handle {\r\n            width: 1rem;\r\n            height: 1rem;\r\n            border-radius: 50%;\r\n            right: -7px;\r\n            top: -5px;\r\n            background: #fc5954;\r\n            box-shadow: none;\r\n            cursor: pointer;\r\n          }\r\n\r\n          .noUi-handle:before,\r\n          .noUi-handle:after {\r\n            display: none;\r\n          }\r\n        }\r\n      }\r\n\r\n      .menu__sort-type {\r\n        input {\r\n          display: none;\r\n        }\r\n\r\n        .sort-type_select {\r\n          display: block;\r\n          position: relative;\r\n          margin: 1.5rem 1rem;\r\n          padding-left: 3rem;\r\n\r\n          &:before {\r\n            content: '';\r\n            position: absolute;\r\n            top: -5px;\r\n            left: 0;\r\n            width: 1.5rem;\r\n            height: 1.5rem;\r\n            border-radius: 50%;\r\n            background-color: $main-bg-color;\r\n            border: 1px solid $light-yellow-text;\r\n          }\r\n        }\r\n\r\n        #yearMinMaxSort:checked~label[for=\"yearMinMaxSort\"]::after,\r\n        #yearMaxMinSort:checked~label[for=\"yearMaxMinSort\"]::after,\r\n        #nameAZSort:checked~label[for=\"nameAZSort\"]::after,\r\n        #nameZASort:checked~label[for=\"nameZASort\"]::after {\r\n          content: '';\r\n          position: absolute;\r\n          top: 0px;\r\n          left: 5px;\r\n          width: 1rem;\r\n          height: 1rem;\r\n          border-radius: 50%;\r\n          background-color: $orange-text;\r\n        }\r\n\r\n        .reset-buttons {\r\n          display: flex;\r\n          justify-content: space-between;\r\n          align-items: center;\r\n          flex-wrap: wrap;\r\n          gap: 1rem;\r\n\r\n          #reset-filter,\r\n          #reset-storage {\r\n            display: block;\r\n            position: relative;\r\n            margin: 0 auto;\r\n            font-family: \"Amagro\";\r\n            padding: 1rem 2rem;\r\n            border-radius: 1rem;\r\n            border: none;\r\n            color: $light-yellow-text;\r\n            text-transform: uppercase;\r\n            outline: none;\r\n            background: $light-green;\r\n            transition: all 0.4s ease-in-out;\r\n\r\n            &::before {\r\n              content: '';\r\n              position: absolute;\r\n              top: -2px;\r\n              left: -2px;\r\n              width: 100%;\r\n              height: 100%;\r\n              opacity: 0;\r\n              border-radius: 1rem;\r\n              border: 2px solid $light-green-hover;\r\n              transition: all 0.5s ease-in-out;\r\n            }\r\n\r\n            &:active {\r\n              top: 1px;\r\n            }\r\n\r\n            &:hover {\r\n              background: $light-green-hover;\r\n\r\n              &::before {\r\n                animation: button-hover 0.7s ease;\r\n              }\r\n            }\r\n          }\r\n        }\r\n\r\n      }\r\n\r\n    }\r\n\r\n    .filter__cards {\r\n      display: flex;\r\n      justify-content: center;\r\n      flex-wrap: wrap;\r\n      gap: 1rem;\r\n      font-size: 3rem;\r\n      max-width: 1600px;\r\n      margin: 0 auto;\r\n      font-family: 'Anticva';\r\n\r\n      h2 {\r\n        text-transform: uppercase;\r\n        position: relative;\r\n        font-size: 1.2rem;\r\n        margin-bottom: 1rem;\r\n        margin-right: 4rem;\r\n        text-shadow: 3px 3px 2px #00000080;\r\n\r\n        &::before {\r\n          content: '';\r\n          position: absolute;\r\n          width: 0px;\r\n          bottom: -0.43rem;\r\n          left: 0;\r\n          height: 4px;\r\n          border-top-right-radius: 2px;\r\n          border-bottom-right-radius: 2px;\r\n          transition: all 0.6s ease-in-out;\r\n          background-color: $main-bg-color-opacity;\r\n        }\r\n      }\r\n\r\n      .card-item {\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n        width: 25rem;\r\n        padding: 1rem;\r\n        font-size: 1rem;\r\n        border-radius: 10px;\r\n        box-shadow: $shadow-border, $shadow-card;\r\n        background: $card-bg;\r\n        backdrop-filter: blur(4px);\r\n        transition: all 0.4s ease-in-out;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n          transform: translateY(-4px);\r\n\r\n          & h2::before {\r\n            width: 95%;\r\n          }\r\n        }\r\n\r\n        .item-content {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n          gap: 1rem;\r\n\r\n          .item-description {\r\n            width: 95%;\r\n            font-size: 1.2rem;\r\n          }\r\n\r\n          .item-img {\r\n            // width: 6rem;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            & img {\r\n              width: 100%;\r\n            }\r\n          }\r\n        }\r\n\r\n\r\n      }\r\n    }\r\n\r\n    .favorite-modal {\r\n      top: 40%;\r\n      left: 1rem;\r\n      width: 20rem;\r\n      height: 15rem;\r\n      position: fixed;\r\n      margin-left: -100%;\r\n      opacity: 0;\r\n      padding: 0.5rem;\r\n      font-size: 1.5rem;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      text-align: center;\r\n      border-radius: 1rem;\r\n      box-shadow: $shadow-border;\r\n      transition: all 0.3s ease-in-out;\r\n      background-color: $main-bg-color-opacity;\r\n\r\n      &.show-modal {\r\n        margin-left: 0;\r\n        opacity: 1;\r\n      }\r\n\r\n      .modal-close {\r\n        position: absolute;\r\n        top: 1rem;\r\n        right: 1rem;\r\n        background-color: $main-text-color;\r\n        width: 3rem;\r\n        height: 3rem;\r\n        border-radius: 50%;\r\n        background-image: url(../assets/icons/close.png);\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n        background-size: cover;\r\n        transition: all 0.3s ease-in-out;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n          transform: scale(1.04);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".container {\r\n  .game-page {\r\n    color: $light-yellow-text;\r\n    background-image: url(../assets/page-bg/filter-bg1.jpg);\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n\r\n    .header__game-page {\r\n      background-color: #132d20e3;\r\n      position: fixed;\r\n      z-index: 1;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n\r\n      .header {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding: 1rem 2rem;\r\n\r\n        .navigation {\r\n          display: flex;\r\n          gap: 3rem;\r\n          justify-content: center;\r\n          align-items: center;\r\n\r\n          #game-page,\r\n          #filter-page {\r\n            font-size: 1.3rem;\r\n            cursor: pointer;\r\n            transition: transform 0.3s ease-in-out;\r\n\r\n            &:hover {\r\n              transform: scale(1.1);\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      .header__buttons {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 1rem;\r\n\r\n      }\r\n\r\n      .input__search {\r\n        cursor: pointer;\r\n        background-color: #7e866cc7;\r\n        border: 1px solid $main-bg-color;\r\n        padding: 0.2rem 0.5rem;\r\n        border-radius: 1rem;\r\n        outline: none;\r\n        font-family: 'Amagro';\r\n        font-size: 0.8rem;\r\n        color: $light-yellow-text;\r\n\r\n        &::placeholder {\r\n          color: #ffffec;\r\n        }\r\n      }\r\n\r\n      button {\r\n        border: none;\r\n        background-color: transparent;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        width: 2rem;\r\n        height: 2rem;\r\n        transition: transform 0.3s ease-in-out;\r\n        filter: sepia(1) brightness(0.8);\r\n        cursor: pointer;\r\n\r\n        &#home {\r\n          background-image: url(../assets/svg/tree.svg);\r\n        }\r\n\r\n        &.menu__btn-mute {\r\n          background-image: url(../assets/svg/audio.svg);\r\n        }\r\n\r\n        &.menu__btn-snow {\r\n          background-image: url(../assets/svg/snow.svg);\r\n        }\r\n\r\n        &:hover {\r\n          transform: scale(1.1);\r\n        }\r\n      }\r\n\r\n      .favorite__ball {\r\n        position: relative;\r\n        width: 2rem;\r\n        height: 2rem;\r\n        border: 3px solid $light-yellow-text;\r\n        font-size: 1rem;\r\n        border-radius: 50%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        &::before {\r\n          position: absolute;\r\n          content: \"\";\r\n          width: 0.3rem;\r\n          height: 0.2rem;\r\n          border: 3px solid #f6dac7;\r\n          top: -10px;\r\n          right: 50%;\r\n          transform: translateX(50%);\r\n        }\r\n      }\r\n\r\n\r\n    }\r\n\r\n    .game__main {\r\n      display: flex;\r\n      justify-content: space-evenly;\r\n      max-width: 1600px;\r\n      margin: 6rem auto 0;\r\n      gap: 1rem;\r\n\r\n      h3 {\r\n        margin: 1rem 0 1.5rem;\r\n        text-align: center;\r\n\r\n      }\r\n\r\n      .game-menu__left,\r\n      .game-menu__right {\r\n        background-color: $main-bg-color-opacity;\r\n        box-shadow: $shadow-border;\r\n        width: 25%;\r\n        padding: 1rem;\r\n        border-radius: 2rem;\r\n\r\n        .select-trees,\r\n        .select-bgs,\r\n        .select-lights {\r\n          display: flex;\r\n          flex-wrap: wrap;\r\n          justify-content: center;\r\n          align-items: center;\r\n          gap: 0.5rem;\r\n\r\n          .tree-item {\r\n            width: 7rem;\r\n            height: 7rem;\r\n            background-color: $card-bg;\r\n            box-shadow: $shadow-border;\r\n            background-size: 60%;\r\n            background-position: center;\r\n            background-repeat: no-repeat;\r\n            border-radius: 2rem;\r\n            transition: all 0.5s ease-in-out;\r\n            cursor: pointer;\r\n\r\n            &:hover {\r\n              transform: scale(1.04);\r\n              background-color: #ccd17f9c;\r\n            }\r\n\r\n            &.active {\r\n              filter: $active-filter;\r\n            }\r\n          }\r\n        }\r\n\r\n        .select-bgs {\r\n          .bg-item {\r\n            width: 5rem;\r\n            height: 5rem;\r\n            background-color: $main-bg-color-opacity;\r\n            box-shadow: $shadow-border;\r\n            background-size: cover;\r\n            background-position: center;\r\n            background-repeat: no-repeat;\r\n            border-radius: 1rem;\r\n            transition: all 0.5s ease-in-out;\r\n            cursor: pointer;\r\n\r\n            &:hover {\r\n              transform: scale(1.04);\r\n            }\r\n\r\n            &.active {\r\n              filter: $active-filter;\r\n            }\r\n          }\r\n        }\r\n\r\n        .select-lights {\r\n          .light-item {\r\n            width: 2rem;\r\n            height: 2rem;\r\n            box-shadow: $shadow-border;\r\n            border-radius: 50%;\r\n            cursor: pointer;\r\n\r\n            &.active {\r\n              box-shadow: 0px 0px 0px 2px #84cc83 inset, 0px 0px 7px $orange-text;\r\n            }\r\n          }\r\n        }\r\n\r\n        .reset-buttons {\r\n          display: flex;\r\n          justify-content: space-between;\r\n          align-items: center;\r\n          flex-wrap: wrap;\r\n          gap: 1rem;\r\n          cursor: pointer;\r\n\r\n          #reset-storage {\r\n            display: block;\r\n            position: relative;\r\n            margin: 0.5rem auto;\r\n            font-family: \"Amagro\";\r\n            padding: 0.3rem 1em;\r\n            border-radius: 1rem;\r\n            border: none;\r\n            color: $light-yellow-text;\r\n            text-transform: uppercase;\r\n            outline: none;\r\n            background: $light-green;\r\n            transition: all 0.4s ease-in-out;\r\n\r\n            &::before {\r\n              content: '';\r\n              position: absolute;\r\n              top: -2px;\r\n              left: -2px;\r\n              width: 100%;\r\n              height: 100%;\r\n              opacity: 0;\r\n              border-radius: 1rem;\r\n              border: 2px solid $light-green-hover;\r\n              transition: all 0.5s ease-in-out;\r\n            }\r\n\r\n            &:active {\r\n              top: 1px;\r\n            }\r\n\r\n            &:hover {\r\n              background: $light-green-hover;\r\n\r\n              &::before {\r\n                animation: button-hover 0.7s ease;\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      .game-main__tree {\r\n        position: relative;\r\n        overflow: hidden;\r\n        width: 50%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        background-size: cover;\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        border-radius: 1rem;\r\n        box-shadow: $shadow-border;\r\n      }\r\n\r\n      .game-menu__right {\r\n        width: 25%;\r\n\r\n        .select-toys {\r\n          display: flex;\r\n          flex-wrap: wrap;\r\n          gap: 1rem;\r\n          justify-content: center;\r\n\r\n          .toy__card-item {\r\n            width: 5.2rem;\r\n            height: 5.2rem;\r\n            background-color: $card-bg;\r\n            box-shadow: $shadow-border;\r\n            background-size: 60%;\r\n            background-position: center;\r\n            background-repeat: no-repeat;\r\n            border-radius: 2rem;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            img {\r\n              width: 50px;\r\n              height: 50px;\r\n              cursor: grab;\r\n            }\r\n\r\n            .toy__card-count {\r\n              position: relative;\r\n              display: flex;\r\n              justify-content: center;\r\n              align-items: center;\r\n\r\n              width: 0rem;\r\n              height: 0rem;\r\n              right: -0.9rem;\r\n              top: -2rem;\r\n\r\n              &::after {\r\n                content: '';\r\n                position: absolute;\r\n                width: 1.5rem;\r\n                height: 1.5rem;\r\n                border: 2px solid $main-text-color;\r\n                background-color: #ffffff52;\r\n                border-radius: 50%;\r\n                top: -1rem;\r\n                left: -1rem;\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".header__filter-page {\r\n  background-color: #132d20e3;\r\n  position: fixed;\r\n  z-index: 100;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  color: $light-yellow-text;\r\n\r\n  .header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n\r\n    .navigation {\r\n      display: flex;\r\n      gap: 3rem;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      #game-page,\r\n      #filter-page {\r\n        font-size: 1.3rem;\r\n        cursor: pointer;\r\n        transition: transform 0.3s ease-in-out;\r\n\r\n        &:hover {\r\n          transform: scale(1.1);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .header__buttons {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n\r\n  }\r\n\r\n  .input__search {\r\n    cursor: pointer;\r\n    background-color: #7e866cc7;\r\n    border: 1px solid $main-bg-color;\r\n    padding: 0.2rem 0.5rem;\r\n    border-radius: 1rem;\r\n    outline: none;\r\n    font-family: 'Amagro';\r\n    font-size: 0.8rem;\r\n    color: $light-yellow-text;\r\n\r\n    &::placeholder {\r\n      color: #ffffec;\r\n    }\r\n  }\r\n\r\n  button {\r\n    border: none;\r\n    background-color: transparent;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    transition: transform 0.3s ease-in-out;\r\n    filter: sepia(1) brightness(0.8);\r\n    cursor: pointer;\r\n\r\n    &#home {\r\n      background-image: url(../assets/svg/tree.svg);\r\n    }\r\n\r\n\r\n\r\n\r\n    &:hover {\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n\r\n  .menu__btn-mute {\r\n    border: none;\r\n    background-color: transparent;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    transition: transform 0.3s ease-in-out;\r\n    filter: sepia(1) brightness(0.8);\r\n    cursor: pointer;\r\n    background-image: url(../assets/svg/audio.svg);\r\n\r\n    #menu__btn-mute {\r\n      display: none;\r\n    }\r\n\r\n    &:hover {\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n\r\n  .menu__btn-snow {\r\n    border: none;\r\n    background-color: transparent;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    transition: transform 0.3s ease-in-out;\r\n    filter: sepia(1) brightness(0.8);\r\n    cursor: pointer;\r\n    background-image: url(../assets/svg/snow.svg);\r\n\r\n    #menu__btn-snow {\r\n      display: none;\r\n    }\r\n\r\n    &:hover {\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n\r\n  .favorite__ball {\r\n    position: relative;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    border: 3px solid $light-yellow-text;\r\n    font-size: 1rem;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    &::before {\r\n      position: absolute;\r\n      content: \"\";\r\n      width: 0.3rem;\r\n      height: 0.2rem;\r\n      border: 3px solid #f6dac7;\r\n      top: -10px;\r\n      right: 50%;\r\n      transform: translateX(50%);\r\n    }\r\n  }\r\n\r\n\r\n}",".container {\r\n  position: relative;\r\n\r\n  .footer__menu {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    color: $light-yellow-text;\r\n    padding: 0.4rem 0;\r\n    margin: 0.4rem 0;\r\n    background: $glass-bg;\r\n\r\n    .author {\r\n      margin: 0 1rem;\r\n\r\n      a {\r\n        text-decoration: none;\r\n        color: $light-yellow-text;\r\n        font-size: 1rem;\r\n        text-shadow: $main-text-shadow;\r\n      }\r\n    }\r\n\r\n    .course {\r\n      a {\r\n        display: block;\r\n        margin: 0 1rem;\r\n        background-image: url(../assets/icons/rs_school.png);\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        width: 5rem;\r\n        height: 1.9rem;\r\n      }\r\n\r\n    }\r\n  }\r\n}",".snowflake {\r\n  display: block;\r\n  background-image: url(../assets/svg/snow.svg);\r\n  width: 1rem;\r\n  height: 1rem;\r\n  position: absolute;\r\n  background-size: cover;\r\n  background-position: center;\r\n  top: -1rem;\r\n  z-index: 100;\r\n  animation: fall linear forwards;\r\n}\r\n\r\n@keyframes fall {\r\n  to {\r\n    transform: translateY(100vh);\r\n  }\r\n}","$globe-width: 6px;\r\n$globe-height: 6px;\r\n$globe-spacing: 15px;\r\n$globe-spread: 3px;\r\n$light-off-opacity: 0.4;\r\n\r\n.lightrope-container {\r\n  pointer-events: none;\r\n  transform: rotate(180deg);\r\n  z-index: 50;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: -60%;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.lightrope {\r\n  transform: rotate(180deg);\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  z-index: 1;\r\n  margin: 0 0 0 0;\r\n  padding: 0;\r\n  pointer-events: none;\r\n  width: 100%;\r\n\r\n  li {\r\n    position: relative;\r\n    animation-fill-mode: both;\r\n    animation-iteration-count: infinite;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: block;\r\n    width: $globe-width;\r\n    height: $globe-height;\r\n    border-radius: 50%;\r\n    margin: $globe-spacing/2;\r\n    display: inline-block;\r\n    //background: rgba(0,247,165,1);\r\n    //box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0,247,165,1);\r\n    // animation-name: flash-1;\r\n    animation-duration: 2s;\r\n\r\n    &:nth-child(2n+1) {\r\n      // background: rgba(0,255,255,1);\r\n      // box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0,255,255,0.5);\r\n      // animation-name: flash-2;\r\n      animation-duration: 0.4s;\r\n    }\r\n\r\n    &:nth-child(4n+2) {\r\n      //  background: rgba(247,0,148,1);\r\n      //   box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(247,0,148,1);\r\n      // animation-name: flash-3;\r\n      animation-duration: 1.1s;\r\n    }\r\n\r\n    &:nth-child(odd) {\r\n      animation-duration: 1.8s;\r\n    }\r\n\r\n    &:nth-child(3n+1) {\r\n      animation-duration: 1.4s;\r\n    }\r\n\r\n    &:first-child {\r\n      margin-left: -$globe-spacing;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes rainbow {\r\n\r\n  0%,\r\n  100% {\r\n    background: rgb(0, 255, 170);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0, 247, 165, 1);\r\n  }\r\n\r\n  10% {\r\n    background: rgb(0, 195, 255);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0, 218, 247, 0.596);\r\n  }\r\n\r\n  20% {\r\n    background: rgb(0, 47, 255);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0, 78, 247, 0.596);\r\n  }\r\n\r\n  30% {\r\n    background: rgb(140, 0, 255);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(156, 0, 247, 0.596);\r\n  }\r\n\r\n  40% {\r\n    background: rgb(255, 0, 191);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(247, 0, 214, 0.596);\r\n  }\r\n\r\n  50% {\r\n    background: rgba(0, 247, 165, $light-off-opacity);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(238, 2, 61, 0.527);\r\n  }\r\n\r\n  60% {\r\n    background: rgb(255, 0, 0);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(252, 0, 0, 0.596);\r\n  }\r\n\r\n  70% {\r\n    background: rgb(255, 81, 0);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(247, 99, 0, 0.596);\r\n  }\r\n\r\n  80% {\r\n    background: rgb(238, 255, 0);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(210, 247, 0, 0.596);\r\n  }\r\n\r\n  90% {\r\n    background: rgb(255, 255, 255);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(255, 255, 255, 0.596);\r\n  }\r\n}\r\n\r\n@keyframes flash-green {\r\n\r\n  0%,\r\n  100% {\r\n    background: rgb(0, 255, 170);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0, 247, 165, 1);\r\n  }\r\n\r\n  50% {\r\n    background: rgba(0, 247, 165, $light-off-opacity);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(3, 146, 98, 0.527);\r\n  }\r\n}\r\n\r\n@keyframes flash-yellow {\r\n\r\n  0%,\r\n  100% {\r\n    background: rgb(255, 238, 0);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgb(250, 224, 78);\r\n  }\r\n\r\n  50% {\r\n    background: rgba(252, 238, 160, $light-off-opacity);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(238, 241, 4, 0.404);\r\n  }\r\n}\r\n\r\n@keyframes flash-red {\r\n\r\n  0%,\r\n  100% {\r\n    background: rgb(255, 0, 0);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgb(228, 13, 13);\r\n  }\r\n\r\n  50% {\r\n    background: rgba(255, 0, 0, $light-off-opacity);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(192, 5, 5, 0.568);\r\n  }\r\n}\r\n\r\n@keyframes flash-blue {\r\n\r\n  0%,\r\n  100% {\r\n    background: rgb(5, 155, 255);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgb(17, 159, 253);\r\n  }\r\n\r\n  50% {\r\n    background: rgba(32, 152, 231, $light-off-opacity);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(7, 93, 151, 0.562);\r\n  }\r\n}\r\n\r\n@keyframes flash-white {\r\n\r\n  0%,\r\n  100% {\r\n    background: rgb(255, 255, 255);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgb(247, 242, 242);\r\n  }\r\n\r\n  50% {\r\n    background: rgba(255, 255, 255, $light-off-opacity);\r\n    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(255, 255, 255, 0.548);\r\n  }\r\n}","@mixin triangle ($size, $color, $direction) {\r\n  height: 0;\r\n  width: 0;\r\n\r\n  $width: nth($size, 1);\r\n  $height: nth($size, length($size));\r\n\r\n  $foreground-color: nth($color, 1);\r\n  $background-color: transparent !default;\r\n\r\n  @if (length($color)==2) {\r\n    $background-color: nth($color, 2);\r\n  }\r\n\r\n  @if ($direction==up) or ($direction==down) or ($direction==right) or ($direction==left) {\r\n\r\n    $width: $width / 2;\r\n\r\n    @if $direction==up {\r\n      border-left: $width solid $background-color;\r\n      border-right: $width solid $background-color;\r\n      border-bottom: $height solid $foreground-color;\r\n\r\n    }\r\n\r\n    @else if $direction==right {\r\n      border-top: $width solid $background-color;\r\n      border-bottom: $width solid $background-color;\r\n      border-left: $height solid $foreground-color;\r\n\r\n    }\r\n\r\n    @else if $direction==down {\r\n      border-left: $width solid $background-color;\r\n      border-right: $width solid $background-color;\r\n      border-top: $height solid $foreground-color;\r\n\r\n    }\r\n\r\n    @else if $direction==left {\r\n      border-top: $width solid $background-color;\r\n      border-bottom: $width solid $background-color;\r\n      border-right: $height solid $foreground-color;\r\n    }\r\n  }\r\n\r\n  @else if ($direction==up-right) or ($direction==up-left) {\r\n    border-top: $height solid $foreground-color;\r\n\r\n    @if $direction==up-right {\r\n      border-left: $width solid $background-color;\r\n\r\n    }\r\n\r\n    @else if $direction==up-left {\r\n      border-right: $width solid $background-color;\r\n    }\r\n  }\r\n\r\n  @else if ($direction==down-right) or ($direction==down-left) {\r\n    border-bottom: $height solid $foreground-color;\r\n\r\n    @if $direction==down-right {\r\n      border-left: $width solid $background-color;\r\n\r\n    }\r\n\r\n    @else if $direction==down-left {\r\n      border-right: $width solid $background-color;\r\n    }\r\n  }\r\n\r\n  @else if ($direction==inset-up) {\r\n    border-width: $height $width;\r\n    border-style: solid;\r\n    border-color: $background-color $background-color $foreground-color;\r\n  }\r\n\r\n  @else if ($direction==inset-down) {\r\n    border-width: $height $width;\r\n    border-style: solid;\r\n    border-color: $foreground-color $background-color $background-color;\r\n  }\r\n\r\n  @else if ($direction==inset-right) {\r\n    border-width: $width $height;\r\n    border-style: solid;\r\n    border-color: $background-color $background-color $background-color $foreground-color;\r\n  }\r\n\r\n  @else if ($direction==inset-left) {\r\n    border-width: $width $height;\r\n    border-style: solid;\r\n    border-color: $background-color $foreground-color $background-color $background-color;\r\n  }\r\n}\r\n\r\n.ribbon {\r\n  position: absolute;\r\n  width: 60px;\r\n  height: 50px;\r\n  background-color: $main-text-color;\r\n  background-image: url(../assets/icons/star-no.png);\r\n  background-size: 2rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  top: -6px;\r\n  right: 1rem;\r\n  margin-bottom: 80px;\r\n  transition: height 0.5s ease-in-out;\r\n\r\n  &:hover {\r\n    height: 70px;\r\n  }\r\n\r\n  &:before,\r\n  &:after {\r\n    content: \"\";\r\n    position: absolute;\r\n  }\r\n\r\n  &:before {\r\n    @include triangle(6px, darken($main-text-color, 15%), down-left);\r\n    right: -6px;\r\n  }\r\n\r\n  &:after {\r\n    @include triangle(60px 30px, transparent $main-text-color, up);\r\n    bottom: -30px;\r\n  }\r\n\r\n  &.true {\r\n    background-color: $orange-text;\r\n    background-image: url(../assets/icons/star-yes.png);\r\n  }\r\n\r\n  &.true::after {\r\n    @include triangle(60px 30px, transparent $orange-text, up);\r\n    bottom: -30px;\r\n  }\r\n\r\n  &.true::before {\r\n    @include triangle(6px, darken($orange-text, 15%), down-left);\r\n    right: -6px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/***/ ((module) => {

module.exports = [{"num":"1","name":"Большой шар с рисунком","count":"2","year":"1960","shape":"шар","color":"желтый","size":"большой","favorite":false},{"num":"2","name":"Зелёный шар с цветами","count":"5","year":"2000","shape":"шар","color":"зелёный","size":"большой","favorite":false},{"num":"3","name":"Красный матовый шар","count":"3","year":"1990","shape":"шар","color":"красный","size":"большой","favorite":false},{"num":"4","name":"Сосулька красная","count":"2","year":"1980","shape":"фигурка","color":"красный","size":"большой","favorite":false},{"num":"5","name":"Красный виноград","count":"4","year":"1980","shape":"фигурка","color":"красный","size":"средний","favorite":true},{"num":"6","name":"Красный шар с рисунком","count":"6","year":"2010","shape":"шар","color":"красный","size":"большой","favorite":false},{"num":"7","name":"Молочно-белый шар","count":"12","year":"1960","shape":"шар","color":"белый","size":"средний","favorite":true},{"num":"8","name":"Красный шар","count":"10","year":"2010","shape":"шар","color":"красный","size":"большой","favorite":false},{"num":"9","name":"Колокольчик старинный","count":"2","year":"1950","shape":"колокольчик","color":"белый","size":"большой","favorite":false},{"num":"10","name":"Белый шар ретро","count":"7","year":"1960","shape":"шар","color":"белый","size":"большой","favorite":false},{"num":"11","name":"Шишка еловая белая","count":"11","year":"1960","shape":"шишка","color":"белый","size":"малый","favorite":false},{"num":"12","name":"Белый шар с цветами","count":"5","year":"1980","shape":"шар","color":"белый","size":"большой","favorite":false},{"num":"13","name":"Шар расписной Река","count":"3","year":"1970","shape":"шар","color":"синий","size":"большой","favorite":true},{"num":"14","name":"Шар расписной Деревня","count":"4","year":"1970","shape":"шар","color":"синий","size":"большой","favorite":true},{"num":"15","name":"Колокольчик расписной","count":"3","year":"1970","shape":"колокольчик","color":"синий","size":"средний","favorite":false},{"num":"16","name":"Шишка расписная Пейзаж","count":"3","year":"1970","shape":"шишка","color":"синий","size":"средний","favorite":true},{"num":"17","name":"Шишка расписная","count":"7","year":"1970","shape":"шишка","color":"красный","size":"средний","favorite":false},{"num":"18","name":"Желтый шар с бантом","count":"2","year":"2010","shape":"шар","color":"желтый","size":"большой","favorite":false},{"num":"19","name":"Желтый шар с паетками","count":"12","year":"1980","shape":"шар","color":"желтый","size":"большой","favorite":false},{"num":"20","name":"Красный шар с бантом","count":"8","year":"1950","shape":"шар","color":"красный","size":"средний","favorite":true},{"num":"21","name":"Красный шар с звёздами","count":"4","year":"1970","shape":"шар","color":"красный","size":"большой","favorite":true},{"num":"22","name":"Шишка еловая золотая","count":"11","year":"1990","shape":"шишка","color":"желтый","size":"малый","favorite":false},{"num":"23","name":"Колокольчик старинный","count":"9","year":"1950","shape":"колокольчик","color":"желтый","size":"большой","favorite":false},{"num":"24","name":"Снежинка изящная","count":"1","year":"1940","shape":"снежинка","color":"белый","size":"большой","favorite":false},{"num":"25","name":"Розовый шар с блёстками","count":"12","year":"2010","shape":"шар","color":"красный","size":"большой","favorite":false},{"num":"26","name":"Рубиново-золотой шар","count":"8","year":"1960","shape":"шар","color":"желтый","size":"большой","favorite":false},{"num":"27","name":"Красный шар с узором","count":"4","year":"2010","shape":"шар","color":"красный","size":"большой","favorite":false},{"num":"28","name":"Бордовый шар с узором","count":"10","year":"2010","shape":"шар","color":"красный","size":"большой","favorite":false},{"num":"29","name":"Старинный шар с цветами","count":"5","year":"1950","shape":"шар","color":"желтый","size":"большой","favorite":true},{"num":"30","name":"Старинный шар с узором","count":"8","year":"1950","shape":"шар","color":"желтый","size":"большой","favorite":true},{"num":"31","name":"Красный шар с блёстками","count":"8","year":"2010","shape":"шар","color":"красный","size":"большой","favorite":false},{"num":"32","name":"Синий шар Вселенная","count":"11","year":"1970","shape":"шар","color":"синий","size":"большой","favorite":false},{"num":"33","name":"Синий шар со снежинкой","count":"6","year":"2010","shape":"шар","color":"синий","size":"средний","favorite":false},{"num":"34","name":"Зелёный  шар с узором","count":"8","year":"2010","shape":"шар","color":"зелёный","size":"большой","favorite":false},{"num":"35","name":"Фигурка Лис в шарфе","count":"8","year":"1950","shape":"фигурка","color":"желтый","size":"средний","favorite":true},{"num":"36","name":"Сиреневый шар Метель","count":"1","year":"2000","shape":"шар","color":"синий","size":"большой","favorite":false},{"num":"37","name":"Зелёный  шар Метель","count":"6","year":"2000","shape":"шар","color":"зелёный","size":"большой","favorite":false},{"num":"38","name":"Голубой  шар Метель","count":"6","year":"2000","shape":"шар","color":"синий","size":"большой","favorite":false},{"num":"39","name":"Красная снежинка","count":"6","year":"1990","shape":"снежинка","color":"красный","size":"большой","favorite":false},{"num":"40","name":"Снежинка золотая","count":"12","year":"2020","shape":"снежинка","color":"желтый","size":"большой","favorite":false},{"num":"41","name":"Снежинка арктическая","count":"11","year":"2020","shape":"снежинка","color":"белый","size":"большой","favorite":false},{"num":"42","name":"Зелёный шар","count":"10","year":"1980","shape":"шар","color":"зелёный","size":"средний","favorite":false},{"num":"43","name":"Снежинка двухцветная","count":"6","year":"1960","shape":"снежинка","color":"красный","size":"большой","favorite":false},{"num":"44","name":"Фигурка Ангела","count":"11","year":"1940","shape":"фигурка","color":"красный","size":"средний","favorite":true},{"num":"45","name":"Снежинка новогодняя","count":"1","year":"1980","shape":"снежинка","color":"белый","size":"большой","favorite":false},{"num":"46","name":"Фигурка Мухомор","count":"10","year":"1950","shape":"фигурка","color":"красный","size":"малый","favorite":false},{"num":"47","name":"Фигурка Колодец","count":"6","year":"1950","shape":"фигурка","color":"красный","size":"малый","favorite":false},{"num":"48","name":"Желтый шар с бантом","count":"6","year":"1960","shape":"шар","color":"желтый","size":"большой","favorite":false},{"num":"49","name":"Снежинка с бирюзой","count":"4","year":"1980","shape":"снежинка","color":"желтый","size":"большой","favorite":false},{"num":"50","name":"Колокольчик большой","count":"3","year":"2020","shape":"колокольчик","color":"красный","size":"большой","favorite":false},{"num":"51","name":"Шишка с изморозью","count":"12","year":"1970","shape":"шишка","color":"красный","size":"малый","favorite":false},{"num":"52","name":"Красный шар с надписью","count":"12","year":"1990","shape":"шар","color":"красный","size":"большой","favorite":true},{"num":"53","name":"Снежинка серебристая","count":"6","year":"2020","shape":"снежинка","color":"белый","size":"большой","favorite":false},{"num":"54","name":"Зелёный шар с рисунком","count":"6","year":"2010","shape":"шар","color":"зелёный","size":"большой","favorite":false},{"num":"55","name":"Пряничный домик","count":"1","year":"1940","shape":"фигурка","color":"желтый","size":"большой","favorite":false},{"num":"56","name":"Пряничный теремок","count":"1","year":"1940","shape":"фигурка","color":"желтый","size":"малый","favorite":false},{"num":"57","name":"Пряничная избушка","count":"1","year":"1940","shape":"фигурка","color":"желтый","size":"средний","favorite":false},{"num":"58","name":"Фигурка белого медведя","count":"2","year":"1980","shape":"фигурка","color":"белый","size":"средний","favorite":false},{"num":"59","name":"Желтый шар с надписью","count":"10","year":"1990","shape":"шар","color":"желтый","size":"средний","favorite":false},{"num":"60","name":"Фигурка Голубь","count":"12","year":"1940","shape":"фигурка","color":"белый","size":"средний","favorite":true}]

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                }
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2]
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1]
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j]
                }
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria"
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes }
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"]
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                }
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            to = scope_Spectrum.getStep(to);
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports['default'] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.css":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.css ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./nouislider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./nouislider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./nouislider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/app/app */ "./src/scripts/app/app.ts");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");


var app = new _scripts_app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.start();
console.log("\nSelf-estimation 200/200\n- \u0412\u0451\u0440\u0441\u0442\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 +30\n- \u041C\u0435\u043D\u044E \u0441 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438 +50\n- \u0413\u0438\u0440\u043B\u044F\u043D\u0434\u0430 +40\n- \u0418\u0433\u0440\u0443\u0448\u043A\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C +80\n\u0418\u0442\u043E\u0433\u043E: 200 \u0438\u0437 200\n");


/***/ }),

/***/ "./src/scripts/app/app.ts":
/*!********************************!*\
  !*** ./src/scripts/app/app.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controllers_menuController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/menuController */ "./src/scripts/controllers/menuController.ts");
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/api */ "./src/scripts/data/api.ts");
/* harmony import */ var _services_dbService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dbService */ "./src/scripts/services/dbService.ts");
/* harmony import */ var _services_lsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/lsService */ "./src/scripts/services/lsService.ts");




var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        var _this = this;
        (0,_data_api__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function (data) {
            _services_lsService__WEBPACK_IMPORTED_MODULE_3__["default"].generateLocalStorage();
            _services_dbService__WEBPACK_IMPORTED_MODULE_2__["default"].saveCardsArr(data);
            _controllers_menuController__WEBPACK_IMPORTED_MODULE_0__["default"].drawMenu();
            _this.getSetting();
        });
    };
    App.prototype.getSetting = function () {
        _services_dbService__WEBPACK_IMPORTED_MODULE_2__["default"].setFavoriteToys(_services_lsService__WEBPACK_IMPORTED_MODULE_3__["default"].getFavoriteLocalStorage());
        _services_dbService__WEBPACK_IMPORTED_MODULE_2__["default"].setSavedFilters(_services_lsService__WEBPACK_IMPORTED_MODULE_3__["default"].getFiltersLocalStorage());
        _services_dbService__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentSort(_services_lsService__WEBPACK_IMPORTED_MODULE_3__["default"].getSortLocalStorage());
        _services_dbService__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentTree(_services_lsService__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentStorageTree());
        _services_dbService__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentBG(_services_lsService__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentStorageBG());
        _services_dbService__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentLights(_services_lsService__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentStorageLight());
        _services_dbService__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentSnow(_services_lsService__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentStorageSnow());
    };
    return App;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/scripts/constants/constants.ts":
/*!********************************************!*\
  !*** ./src/scripts/constants/constants.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_FILTER_TEXT": () => (/* binding */ EMPTY_FILTER_TEXT),
/* harmony export */   "AUDIO_SRC": () => (/* binding */ AUDIO_SRC),
/* harmony export */   "LENGTH_FAVORITE_ARR": () => (/* binding */ LENGTH_FAVORITE_ARR),
/* harmony export */   "COUNT_GARLAND_ROW": () => (/* binding */ COUNT_GARLAND_ROW),
/* harmony export */   "COUNT_GARLAND_LI": () => (/* binding */ COUNT_GARLAND_LI),
/* harmony export */   "AREA_COORDS": () => (/* binding */ AREA_COORDS),
/* harmony export */   "EXCLUDE_FILTERS_FOR_SAVE": () => (/* binding */ EXCLUDE_FILTERS_FOR_SAVE),
/* harmony export */   "FILTERS_WITH_MULTI_SELECT": () => (/* binding */ FILTERS_WITH_MULTI_SELECT)
/* harmony export */ });
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");

var EMPTY_FILTER_TEXT = 'Извините, совпадений не обнаружено!';
var AUDIO_SRC = 'assets/audio/audio.mp3';
var LENGTH_FAVORITE_ARR = 20;
var COUNT_GARLAND_ROW = 9;
var COUNT_GARLAND_LI = 20;
var AREA_COORDS = '52,596,251,20,448,577,341,660,161,666';
var EXCLUDE_FILTERS_FOR_SAVE = [_types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeFilter.search];
var FILTERS_WITH_MULTI_SELECT = [_types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeFilter.colors, _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeFilter.sizes, _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeFilter.shapes];


/***/ }),

/***/ "./src/scripts/constants/filter-const.ts":
/*!***********************************************!*\
  !*** ./src/scripts/constants/filter-const.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHAPE_FILTER": () => (/* binding */ SHAPE_FILTER),
/* harmony export */   "COLORS_FILTER": () => (/* binding */ COLORS_FILTER),
/* harmony export */   "SIZES_FILTER": () => (/* binding */ SIZES_FILTER),
/* harmony export */   "MIN_SLIDER_RANGE": () => (/* binding */ MIN_SLIDER_RANGE),
/* harmony export */   "MAX_SLIDER_RANGE": () => (/* binding */ MAX_SLIDER_RANGE),
/* harmony export */   "STEP_SLIDER_RANGE": () => (/* binding */ STEP_SLIDER_RANGE),
/* harmony export */   "SORTS": () => (/* binding */ SORTS),
/* harmony export */   "sortMapper": () => (/* binding */ sortMapper)
/* harmony export */ });
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");
var _a;

var SHAPE_FILTER = [
    { id: 1, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Shapes.ball, image: 'ball.svg', key: 'ball' },
    { id: 2, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Shapes.snowflake, image: 'snowflake.svg', key: 'snowflake' },
    { id: 3, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Shapes.bell, image: 'bell.svg', key: 'bell' },
    { id: 4, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Shapes.cone, image: 'cone.svg', key: 'cone' },
    { id: 5, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Shapes.toy, image: 'toy.svg', key: 'toy' },
];
var COLORS_FILTER = [
    { id: 1, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Colors.white, bgColor: '#fff' },
    { id: 2, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Colors.yellow, bgColor: '#ffe625' },
    { id: 3, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Colors.red, bgColor: '#cd2846' },
    { id: 4, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Colors.blue, bgColor: '#0072ba' },
    { id: 5, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Colors.green, bgColor: '#006941d9' },
];
var SIZES_FILTER = [
    { id: 1, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Sizes.lSize, class: 'l-size' },
    { id: 2, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Sizes.mSize, class: 'm-size' },
    { id: 3, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.Sizes.sSize, class: 's-size' },
];
var MIN_SLIDER_RANGE = {
    count: 1,
    year: 1940,
};
var MAX_SLIDER_RANGE = {
    count: 12,
    year: 2020,
};
var STEP_SLIDER_RANGE = {
    count: 1,
    year: 10,
};
var SORTS = [
    {
        id: 1,
        type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeSort.yearMinMax,
        idName: 'sort__count-min-max',
        innerText: 'По году приобретения по возрастанию',
    },
    { id: 2, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeSort.yearMaxMin, idName: 'sort__count-max-min', innerText: 'По году приобретения по убыванию' },
    { id: 3, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeSort.nameAZ, idName: 'sort__name-min-max', innerText: 'По названию от "А" до "Я"' },
    { id: 4, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeSort.nameZA, idName: 'sort__name-max-min', innerText: 'По названию от "Я" до "А"' },
];
var sortMapper = (_a = {},
    _a[_types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeSort.yearMinMax] = function (a, b) {
        return +a.year - +b.year;
    },
    _a[_types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeSort.yearMaxMin] = function (a, b) {
        return +b.year - +a.year;
    },
    _a[_types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeSort.nameAZ] = function (a, b) {
        return a.name.localeCompare(b.name);
    },
    _a[_types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeSort.nameZA] = function (a, b) {
        return b.name.localeCompare(a.name);
    },
    _a);


/***/ }),

/***/ "./src/scripts/constants/game-consts.ts":
/*!**********************************************!*\
  !*** ./src/scripts/constants/game-consts.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TREES_VARIANT": () => (/* binding */ TREES_VARIANT),
/* harmony export */   "BGS_VARIANT": () => (/* binding */ BGS_VARIANT),
/* harmony export */   "LIGHTS_VARIANT": () => (/* binding */ LIGHTS_VARIANT)
/* harmony export */ });
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");

var TREES_VARIANT = [
    { id: 0, image: 'assets/tree/1.png', key: '1' },
    { id: 1, image: 'assets/tree/2.png', key: '2' },
    { id: 2, image: 'assets/tree/3.png', key: '3' },
    { id: 3, image: 'assets/tree/4.png', key: '4' },
    { id: 4, image: 'assets/tree/5.png', key: '5' },
    { id: 5, image: 'assets/tree/6.png', key: '6' },
];
var BGS_VARIANT = [
    { id: 0, image: 'assets/bg/1.jpg', key: '1' },
    { id: 1, image: 'assets/bg/2.jpg', key: '2' },
    { id: 2, image: 'assets/bg/3.jpg', key: '3' },
    { id: 3, image: 'assets/bg/4.jpg', key: '4' },
    { id: 4, image: 'assets/bg/5.jpg', key: '5' },
    { id: 5, image: 'assets/bg/6.jpg', key: '6' },
    { id: 6, image: 'assets/bg/7.jpg', key: '7' },
    { id: 7, image: 'assets/bg/8.jpg', key: '8' },
    { id: 8, image: 'assets/bg/9.jpg', key: '9' },
    { id: 9, image: 'assets/bg/10.jpg', key: '10' },
];
var LIGHTS_VARIANT = [
    {
        id: 0,
        type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeLight.rainbow,
        bgColor: "linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8)",
        animation: 'rainbow',
    },
    { id: 1, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeLight.yellow, bgColor: '#fbff00', animation: 'flash-yellow' },
    { id: 2, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeLight.red, bgColor: '#ff0000', animation: 'flash-red' },
    { id: 3, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeLight.blue, bgColor: '#00ffff', animation: 'flash-blue' },
    { id: 4, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeLight.green, bgColor: '#00ff13', animation: 'flash-green' },
    { id: 5, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeLight.white, bgColor: '#fff', animation: 'flash-white' },
    { id: 6, type: _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypeLight.none, bgColor: 'transparent', animation: 'none' },
];


/***/ }),

/***/ "./src/scripts/controllers/audioController.ts":
/*!****************************************************!*\
  !*** ./src/scripts/controllers/audioController.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/scripts/constants/constants.ts");
/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors/selectors */ "./src/scripts/selectors/selectors.ts");
/* harmony import */ var _services_lsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lsService */ "./src/scripts/services/lsService.ts");



var AudioViews = /** @class */ (function () {
    function AudioViews() {
        var _this = this;
        this.startAudio = function (isPlay) {
            if (isPlay) {
                _this.audioTrack();
                _this.audio.play();
            }
        };
        this.audioListner = function () {
            _this.startAudio(!_services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getIsPlayMusic());
            _this.toggleMute();
        };
        this.stopPlay = function () {
            _this.audio.pause();
        };
        this.audio = (0,_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__.audioTrack)();
    }
    AudioViews.prototype.audioTrack = function () {
        this.audio.src = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.AUDIO_SRC;
    };
    AudioViews.prototype.toggleMute = function () {
        if (!_services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getIsPlayMusic()) {
            this.audio.muted = false;
        }
        else if (_services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getIsPlayMusic()) {
            this.audio.muted = true;
        }
        _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].setIsPlayMusic(!_services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getIsPlayMusic());
        this.muteStyle();
    };
    AudioViews.prototype.muteStyle = function () {
        var iconMute = !_services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getIsPlayMusic()
            ? 'url(assets/svg/mute-off.svg) 50% 50%/contain no-repeat'
            : 'url(assets/svg/audio.svg) 50% 50%/contain no-repeat';
        (0,_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__.menuMuteBtn)().style.background = iconMute;
    };
    return AudioViews;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AudioViews());


/***/ }),

/***/ "./src/scripts/controllers/filterPageControler.ts":
/*!********************************************************!*\
  !*** ./src/scripts/controllers/filterPageControler.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/scripts/constants/constants.ts");
/* harmony import */ var _services_dbService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dbService */ "./src/scripts/services/dbService.ts");
/* harmony import */ var _services_lsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lsService */ "./src/scripts/services/lsService.ts");
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");
/* harmony import */ var _audioController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audioController */ "./src/scripts/controllers/audioController.ts");
/* harmony import */ var _views_filterPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/filterPageViews */ "./src/scripts/views/filterPageViews.ts");
/* harmony import */ var _layoutController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layoutController */ "./src/scripts/controllers/layoutController.ts");







var FilterPageController = /** @class */ (function () {
    function FilterPageController() {
        var _this = this;
        this.setFilters = function (filtertype, item) {
            _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentFilter(filtertype, item);
            _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].setFiltersLocalStorage(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getActiveFilters());
        };
        this.favoriteHandler = function (item) {
            var favorites = _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getFavoriteLocalStorage();
            if (favorites.length < _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LENGTH_FAVORITE_ARR || favorites.includes(item)) {
                _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].setFavoriteLocalStorage(item);
                _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].setFavoriteToys(_services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getFavoriteLocalStorage());
            }
            else {
                _this.filterPage.renderModal();
            }
            _this.filterPage.renderCards(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredCardsArr(), _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getFavoriteLocalStorage(), _this.favoriteHandler);
        };
        this.filterHandler = function (filtertype, item) {
            _this.setFilters(filtertype, item);
            if (filtertype !== _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.search) {
                _this.drawFilterPage();
                _this.filterPage.drawSliders(_this.sliderHandler, _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getActiveFilters());
            }
            else {
                _this.filterPage.renderCards(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredCardsArr(), _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getFavoriteLocalStorage(), _this.favoriteHandler);
            }
        };
        this.sortHandler = function (sortType) {
            _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentSort(sortType);
            _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].setSortLocalStorage(sortType);
            _this.filterPage.renderCards(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredCardsArr(), _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getFavoriteLocalStorage(), _this.favoriteHandler);
        };
        this.sliderHandler = function (filtertype, value) {
            _this.setFilters(filtertype, value);
            _this.filterPage.renderCards(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredCardsArr(), _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getFavoriteLocalStorage(), _this.favoriteHandler);
        };
        this.drawFilterSliders = function () {
            _this.filterPage.drawSliders(_this.sliderHandler, _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getActiveFilters());
        };
        this.resetHandler = function () {
            _this.drawFilterPage();
            _this.drawFilterSliders();
            _audioController__WEBPACK_IMPORTED_MODULE_4__["default"].stopPlay();
        };
        this.drawFilterPage = function () {
            _this.filterPage.renderFilterPage(_this.filterHandler, _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getActiveFilters(), _this.sortHandler, _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getActiveSort(), _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].setStartedFilters, _this.resetHandler, _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].setResetLocal);
            _layoutController__WEBPACK_IMPORTED_MODULE_6__["default"].renderHeader(_types_enums__WEBPACK_IMPORTED_MODULE_3__.TypePage.filter);
            _this.filterPage.setSearchListeners(_this.filterHandler);
            _this.filterPage.renderCards(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredCardsArr(), _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].getFavoriteLocalStorage(), _this.favoriteHandler);
        };
        this.filterPage = new _views_filterPageViews__WEBPACK_IMPORTED_MODULE_5__["default"]();
    }
    return FilterPageController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FilterPageController());


/***/ }),

/***/ "./src/scripts/controllers/gamePageControler.ts":
/*!******************************************************!*\
  !*** ./src/scripts/controllers/gamePageControler.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_gamePageViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/gamePageViews */ "./src/scripts/views/gamePageViews.ts");
/* harmony import */ var _services_dbService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dbService */ "./src/scripts/services/dbService.ts");
/* harmony import */ var _services_lsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lsService */ "./src/scripts/services/lsService.ts");
/* harmony import */ var _audioController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audioController */ "./src/scripts/controllers/audioController.ts");
/* harmony import */ var _layoutController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layoutController */ "./src/scripts/controllers/layoutController.ts");
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");






var GameController = /** @class */ (function () {
    function GameController() {
        var _this = this;
        this.treeHandler = function () {
            _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentStorageTree(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentTree());
        };
        this.bgHandler = function () {
            _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentStorageBG(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentBG());
        };
        this.lightHandler = function (light) {
            _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentLights(light);
            _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentStorageLight(light);
        };
        this.renderTreeBlock = function () {
            _this.game.renderTree(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentTree(), _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentLights());
        };
        this.cordHandler = function (num, indexCurrToy, value) {
            _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].changeItemCoord(num, indexCurrToy, value);
            _this.game.renderToys(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getFavoriteToys());
        };
        this.resetHandler = function () {
            _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].generateLocalStorage();
            _layoutController__WEBPACK_IMPORTED_MODULE_4__["default"].renderHeader(_types_enums__WEBPACK_IMPORTED_MODULE_5__.TypePage.game);
            _this.drawGamePage();
            _audioController__WEBPACK_IMPORTED_MODULE_3__["default"].stopPlay();
        };
        this.drawGamePage = function () {
            _this.game.renderGamePage(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentTree, _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentBG, _this.treeHandler, _this.bgHandler, _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentBG(), _this.lightHandler, _this.renderTreeBlock, _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].setStartedFilters, _this.resetHandler, _services_lsService__WEBPACK_IMPORTED_MODULE_2__["default"].setResetLocal);
            _layoutController__WEBPACK_IMPORTED_MODULE_4__["default"].renderHeader(_types_enums__WEBPACK_IMPORTED_MODULE_5__.TypePage.game);
            _this.game.renderToys(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getFavoriteToys());
            _this.game.setGlobalDropEvent(_this.cordHandler);
            _this.game.renderCurrentSetting(_services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentTree(), _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentLights(), _services_dbService__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentBG());
        };
        this.game = new _views_gamePageViews__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    return GameController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GameController());


/***/ }),

/***/ "./src/scripts/controllers/layoutController.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/controllers/layoutController.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_rootView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/rootView */ "./src/scripts/views/rootView.ts");
/* harmony import */ var _menuController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuController */ "./src/scripts/controllers/menuController.ts");
/* harmony import */ var _gamePageControler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamePageControler */ "./src/scripts/controllers/gamePageControler.ts");
/* harmony import */ var _services_dbService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dbService */ "./src/scripts/services/dbService.ts");
/* harmony import */ var _services_lsService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/lsService */ "./src/scripts/services/lsService.ts");
/* harmony import */ var _audioController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audioController */ "./src/scripts/controllers/audioController.ts");
/* harmony import */ var _utils_snowflakes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/snowflakes */ "./src/scripts/utils/snowflakes.ts");







var LayoutController = /** @class */ (function () {
    function LayoutController() {
        var _this = this;
        this.snowHandler = function (value) {
            _services_dbService__WEBPACK_IMPORTED_MODULE_3__["default"].setCurrentSnow(value);
            _services_lsService__WEBPACK_IMPORTED_MODULE_4__["default"].setCurrentStorageSnow(value);
        };
        this.renderHeader = function (page) {
            _this.root.drawHeader(_menuController__WEBPACK_IMPORTED_MODULE_1__["default"].drawMenu, _gamePageControler__WEBPACK_IMPORTED_MODULE_2__["default"].drawGamePage, _menuController__WEBPACK_IMPORTED_MODULE_1__["default"].startHandler, page, _services_dbService__WEBPACK_IMPORTED_MODULE_3__["default"].getFavoriteToys.length, _services_dbService__WEBPACK_IMPORTED_MODULE_3__["default"].getActiveFilters(), _utils_snowflakes__WEBPACK_IMPORTED_MODULE_6__.createSnowFlake, _services_lsService__WEBPACK_IMPORTED_MODULE_4__["default"].getIsPlayMusic(), _audioController__WEBPACK_IMPORTED_MODULE_5__["default"].audioListner, _this.snowHandler, _services_lsService__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrentStorageSnow());
        };
        this.root = new _views_rootView__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    return LayoutController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LayoutController());


/***/ }),

/***/ "./src/scripts/controllers/menuController.ts":
/*!***************************************************!*\
  !*** ./src/scripts/controllers/menuController.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");
/* harmony import */ var _views_menuView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/menuView */ "./src/scripts/views/menuView.ts");
/* harmony import */ var _filterPageControler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterPageControler */ "./src/scripts/controllers/filterPageControler.ts");
/* harmony import */ var _layoutController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layoutController */ "./src/scripts/controllers/layoutController.ts");
/* harmony import */ var _audioController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audioController */ "./src/scripts/controllers/audioController.ts");
/* harmony import */ var _services_dbService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/dbService */ "./src/scripts/services/dbService.ts");
/* harmony import */ var _services_lsService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/lsService */ "./src/scripts/services/lsService.ts");







var MenuController = /** @class */ (function () {
    function MenuController() {
        var _this = this;
        // TODO здесь первое включение музыки
        this.startHandler = function () {
            _filterPageControler__WEBPACK_IMPORTED_MODULE_2__["default"].drawFilterPage();
            _filterPageControler__WEBPACK_IMPORTED_MODULE_2__["default"].drawFilterSliders();
            _audioController__WEBPACK_IMPORTED_MODULE_4__["default"].startAudio(_services_dbService__WEBPACK_IMPORTED_MODULE_5__["default"].getISFirstLoading() && _services_lsService__WEBPACK_IMPORTED_MODULE_6__["default"].getIsPlayMusic());
            _services_dbService__WEBPACK_IMPORTED_MODULE_5__["default"].setIsNotFirstLoading();
        };
        this.drawMenu = function () {
            _this.menu.renderMenuPage(_this.startHandler);
            _layoutController__WEBPACK_IMPORTED_MODULE_3__["default"].renderHeader(_types_enums__WEBPACK_IMPORTED_MODULE_0__.TypePage.main);
        };
        this.menu = new _views_menuView__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    return MenuController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new MenuController());


/***/ }),

/***/ "./src/scripts/data/api.ts":
/*!*********************************!*\
  !*** ./src/scripts/data/api.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data.json */ "./src/data/data.json");
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_data_json__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (_data_data_json__WEBPACK_IMPORTED_MODULE_0__) {
                resolve(_data_data_json__WEBPACK_IMPORTED_MODULE_0__);
            }
            else {
                reject(new Error('Loading question error!'));
            }
        }, 500);
    });
});


/***/ }),

/***/ "./src/scripts/selectors/selectors.ts":
/*!********************************************!*\
  !*** ./src/scripts/selectors/selectors.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "audioTrack": () => (/* binding */ audioTrack),
/* harmony export */   "menuStartBtn": () => (/* binding */ menuStartBtn),
/* harmony export */   "menuMuteBtn": () => (/* binding */ menuMuteBtn),
/* harmony export */   "homeBtn": () => (/* binding */ homeBtn),
/* harmony export */   "filterPageBtn": () => (/* binding */ filterPageBtn),
/* harmony export */   "gamePageBtn": () => (/* binding */ gamePageBtn),
/* harmony export */   "filterCountRange": () => (/* binding */ filterCountRange),
/* harmony export */   "filterYearRange": () => (/* binding */ filterYearRange),
/* harmony export */   "favoriteFilter": () => (/* binding */ favoriteFilter),
/* harmony export */   "countMin": () => (/* binding */ countMin),
/* harmony export */   "countMax": () => (/* binding */ countMax),
/* harmony export */   "yearMin": () => (/* binding */ yearMin),
/* harmony export */   "yearMax": () => (/* binding */ yearMax)
/* harmony export */ });
var root = document.querySelector('#root');
var audioTrack = function () { return document.querySelector('audio'); };
var menuStartBtn = function () { return document.querySelector('.menu_start-btn'); };
var menuMuteBtn = function () { return document.querySelector('.menu__btn-mute'); };
var homeBtn = function () { return document.getElementById('home'); };
var filterPageBtn = function () { return document.getElementById('filter-page'); };
var gamePageBtn = function () { return document.getElementById('game-page'); };
var filterCountRange = function () { return document.getElementById('slider-count'); };
var filterYearRange = function () { return document.getElementById('slider-year'); };
var favoriteFilter = function () { return document.getElementById('favorite-filter'); };
var countMin = function () { return document.querySelector('.count-min'); };
var countMax = function () { return document.querySelector('.count-max'); };
var yearMin = function () { return document.querySelector('.year-min'); };
var yearMax = function () { return document.querySelector('.year-max'); };


/***/ }),

/***/ "./src/scripts/services/dbService.ts":
/*!*******************************************!*\
  !*** ./src/scripts/services/dbService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/scripts/constants/constants.ts");
/* harmony import */ var _constants_filter_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/filter-const */ "./src/scripts/constants/filter-const.ts");
/* harmony import */ var _constants_game_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/game-consts */ "./src/scripts/constants/game-consts.ts");
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var Db = /** @class */ (function () {
    function Db() {
        var _this = this;
        this.changeItemCoord = function (num, indexCurrToy, value) {
            var newCards = __spreadArray([], _this.cardsArr, true);
            var indexForChange = newCards.findIndex(function (item) { return item.num === num; });
            newCards[indexForChange].coord[+indexCurrToy] = value;
            _this.cardsArr = newCards;
        };
        this.setStartedFilters = function () {
            _this.shapesFilter = [];
            _this.colorsFilter = [];
            _this.sizesFilter = [];
            _this.favoriteFilter = false;
            _this.countFilter = ['1', '12'];
            _this.yearFilter = ['1940', '2020'];
            _this.searchFilter = '';
            _this.favoriteToys = _this.cardsArr.splice(0, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LENGTH_FAVORITE_ARR);
            _this.currentTree = _constants_game_consts__WEBPACK_IMPORTED_MODULE_2__.TREES_VARIANT[0];
            _this.currentBG = _constants_game_consts__WEBPACK_IMPORTED_MODULE_2__.BGS_VARIANT[0];
            _this.currentLights = _constants_game_consts__WEBPACK_IMPORTED_MODULE_2__.LIGHTS_VARIANT[0];
            _this.currentSnow = true;
            _this.cardsArr = JSON.parse(JSON.stringify(_this.initialCardArray));
            _this.setFavoriteToys([]);
        };
        this.setCurrentSort = function (sorttype) {
            _this.sortFilter = sorttype;
        };
        this.setSavedFilters = function (savesFilters) {
            _this.shapesFilter = savesFilters.shapesFilter;
            _this.colorsFilter = savesFilters.colorsFilter;
            _this.sizesFilter = savesFilters.sizesFilter;
            _this.sortFilter = savesFilters.sortFilter;
            _this.favoriteFilter = savesFilters.favoriteFilter;
            _this.countFilter = savesFilters.countFilter;
            _this.yearFilter = savesFilters.yearFilter;
        };
        this.setCurrentFilter = function (filtertype, value) {
            if (filtertype === _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.shapes) {
                if (_this[filtertype].includes(value)) {
                    _this[filtertype] = _this[filtertype].filter(function (item) { return item !== value; });
                }
                else {
                    _this[filtertype] = __spreadArray(__spreadArray([], _this[filtertype], true), [value], false);
                }
            }
            if (filtertype === _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.colors) {
                if (_this[filtertype].includes(value)) {
                    _this[filtertype] = _this[filtertype].filter(function (item) { return item !== value; });
                }
                else {
                    _this[filtertype] = __spreadArray(__spreadArray([], _this[filtertype], true), [value], false);
                }
            }
            if (filtertype === _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.sizes) {
                if (_this[filtertype].includes(value)) {
                    _this[filtertype] = _this[filtertype].filter(function (item) { return item !== value; });
                }
                else {
                    _this[filtertype] = __spreadArray(__spreadArray([], _this[filtertype], true), [value], false);
                }
            }
            if (filtertype === _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.favorite) {
                _this[filtertype] = value;
            }
            if (filtertype === _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.count) {
                _this[filtertype] = value;
            }
            if (filtertype === _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.year) {
                _this[filtertype] = value;
            }
            if (filtertype === _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.search) {
                _this[filtertype] = value;
            }
        };
        this.setCurrentTree = function (tree) {
            _this.currentTree = tree;
        };
        this.setCurrentLights = function (light) {
            _this.currentLights = light;
        };
        this.getCurrentLights = function () {
            return _this.currentLights;
        };
        this.setCurrentSnow = function (value) {
            _this.currentSnow = value;
        };
        this.getCurrentSnow = function () {
            return _this.currentSnow;
        };
        this.setCurrentBG = function (bg) {
            _this.currentBG = bg;
        };
        this.getISFirstLoading = function () { return _this.isFirstLoading; };
        this.setIsNotFirstLoading = function () { return (_this.isFirstLoading = false); };
        this.initialCardArray = [];
        this.cardsArr = [];
        this.shapesFilter = [];
        this.colorsFilter = [];
        this.sizesFilter = [];
        this.sortFilter = _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeSort.yearMinMax;
        this.favoriteFilter = false;
        this.favoriteToys = [];
        this.countFilter = ['1', '12'];
        this.yearFilter = ['1940', '2020'];
        this.searchFilter = '';
        this.isFirstLoading = true;
        this.currentLights = _constants_game_consts__WEBPACK_IMPORTED_MODULE_2__.LIGHTS_VARIANT[0];
        this.currentTree = _constants_game_consts__WEBPACK_IMPORTED_MODULE_2__.TREES_VARIANT[0];
        this.currentBG = _constants_game_consts__WEBPACK_IMPORTED_MODULE_2__.BGS_VARIANT[0];
        this.currentSnow = true;
    }
    Db.prototype.saveCardsArr = function (data) {
        var tranformedData = data.map(function (item) { return (__assign(__assign({}, item), { coord: Array.from({ length: +item.count }, function () {
                return { x: 0, y: 0 };
            }) })); });
        this.cardsArr = tranformedData;
        this.initialCardArray = JSON.parse(JSON.stringify(tranformedData));
    };
    Db.prototype.getCardsArr = function () {
        return this.cardsArr;
    };
    Db.prototype.setFavoriteToys = function (data) {
        var favorite = __spreadArray([], this.cardsArr, true);
        favorite =
            data.length > 0
                ? favorite.filter(function (item) { return data.includes(item.num); })
                : favorite.slice(0, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LENGTH_FAVORITE_ARR);
        this.favoriteToys = favorite;
    };
    Db.prototype.getFavoriteToys = function () {
        return this.favoriteToys;
    };
    Db.prototype.getFilteredCardsArr = function () {
        var _this = this;
        var result = __spreadArray([], this.cardsArr, true);
        result =
            this.shapesFilter.length > 0 ? result.filter(function (item) { return _this.shapesFilter.includes(item.shape); }) : result;
        result =
            this.colorsFilter.length > 0 ? result.filter(function (item) { return _this.colorsFilter.includes(item.color); }) : result;
        result = this.sizesFilter.length > 0 ? result.filter(function (item) { return _this.sizesFilter.includes(item.size); }) : result;
        result = this.favoriteFilter ? result.filter(function (item) { return item.favorite; }) : result;
        result = result.filter(function (item) { return +item.count >= +_this.countFilter[0] && +item.count <= +_this.countFilter[1]; });
        result = result.filter(function (item) { return +item.year >= +_this.yearFilter[0] && +item.year <= +_this.yearFilter[1]; });
        result = this.searchFilter
            ? result.filter(function (item) { return item.name.toLowerCase().includes(_this.searchFilter.toLowerCase()); })
            : result;
        result = result.sort(_constants_filter_const__WEBPACK_IMPORTED_MODULE_1__.sortMapper[this.sortFilter]);
        return result;
    };
    Db.prototype.getActiveFilters = function () {
        var _a;
        return _a = {},
            _a[_types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.shapes] = this.shapesFilter,
            _a[_types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.colors] = this.colorsFilter,
            _a[_types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.sizes] = this.sizesFilter,
            _a[_types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.favorite] = this.favoriteFilter,
            _a[_types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.count] = this.countFilter,
            _a[_types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.year] = this.yearFilter,
            _a[_types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.search] = this.searchFilter,
            _a;
    };
    Db.prototype.getActiveSort = function () {
        return this.sortFilter;
    };
    Db.prototype.getCurrentTree = function () {
        return this.currentTree;
    };
    Db.prototype.getCurrentBG = function () {
        return this.currentBG;
    };
    return Db;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Db());


/***/ }),

/***/ "./src/scripts/services/lsService.ts":
/*!*******************************************!*\
  !*** ./src/scripts/services/lsService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/scripts/constants/constants.ts");
/* harmony import */ var _constants_game_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/game-consts */ "./src/scripts/constants/game-consts.ts");
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var Local = /** @class */ (function () {
    function Local() {
        var _this = this;
        this.generateLocalStorage = function (isNew) {
            if (!localStorage.getItem('filters') || isNew) {
                localStorage.setItem('filters', JSON.stringify({
                    shapesFilter: [],
                    colorsFilter: [],
                    sizesFilter: [],
                    favoriteFilter: false,
                    countFilter: ['1', '12'],
                    yearFilter: ['1940', '2020'],
                }));
            }
            if (!localStorage.getItem('sort')) {
                localStorage.setItem('sort', JSON.stringify(_types_enums__WEBPACK_IMPORTED_MODULE_2__.TypeSort.yearMinMax));
            }
            if (!localStorage.getItem('isPlayMusic')) {
                localStorage.setItem('isPlayMusic', JSON.stringify(false));
            }
            if (!localStorage.getItem('currTree')) {
                localStorage.setItem('currTree', JSON.stringify(_constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.TREES_VARIANT[0]));
            }
            if (!localStorage.getItem('currBG')) {
                localStorage.setItem('currBG', JSON.stringify(_constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.BGS_VARIANT[0]));
            }
            if (!localStorage.getItem('currLight')) {
                localStorage.setItem('currLight', JSON.stringify(_constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.LIGHTS_VARIANT[0]));
            }
            if (!localStorage.getItem('isSnow')) {
                localStorage.setItem('isSnow', JSON.stringify(true));
            }
        };
        this.setResetLocal = function () {
            localStorage.removeItem('filters');
            localStorage.removeItem('favoriteToys');
            localStorage.removeItem('sort');
            localStorage.removeItem('currBG');
            localStorage.removeItem('currTree');
            localStorage.removeItem('isPlayMusic');
            localStorage.removeItem('isSnow');
        };
        this.getFavoriteLocalStorage = function () {
            return JSON.parse(localStorage.getItem('favoriteToys')) || [];
        };
        this.setFavoriteLocalStorage = function (value) {
            var localArr = _this.getFavoriteLocalStorage();
            if (localArr.length <= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LENGTH_FAVORITE_ARR) {
                if (localArr.includes(value)) {
                    localArr = localArr.filter(function (item) { return item !== value; });
                }
                else {
                    localArr = __spreadArray(__spreadArray([], localArr, true), [value], false);
                }
            }
            else {
                if (localArr.includes(value)) {
                    localArr = localArr.filter(function (item) { return item !== value; });
                }
            }
            localStorage.setItem('favoriteToys', JSON.stringify(localArr));
        };
        this.getFiltersLocalStorage = function () {
            var filters = localStorage.getItem('filters');
            return filters ? JSON.parse(filters) : {};
        };
        this.setFiltersLocalStorage = function (filters) {
            localStorage.setItem('filters', JSON.stringify(filters));
        };
        this.setSortLocalStorage = function (sort) {
            localStorage.setItem('sort', JSON.stringify(sort));
        };
        this.getSortLocalStorage = function () {
            var sort = localStorage.getItem('sort');
            return sort ? JSON.parse(sort) : _types_enums__WEBPACK_IMPORTED_MODULE_2__.TypeSort.yearMinMax;
        };
        this.getIsPlayMusic = function () {
            return JSON.parse(localStorage.getItem('isPlayMusic')) || false;
        };
        this.setIsPlayMusic = function (value) {
            localStorage.setItem('isPlayMusic', JSON.stringify(value));
        };
        this.getCurrentStorageTree = function () {
            return JSON.parse(localStorage.getItem('currTree')) || _constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.TREES_VARIANT[0];
        };
        this.setCurrentStorageTree = function (tree) {
            localStorage.setItem('currTree', JSON.stringify(tree));
        };
        this.setCurrentStorageLight = function (light) {
            localStorage.setItem('currLight', JSON.stringify(light));
        };
        this.getCurrentStorageSnow = function () {
            return JSON.parse(localStorage.getItem('isSnow'));
        };
        this.setCurrentStorageSnow = function (value) {
            localStorage.setItem('isSnow', JSON.stringify(value));
        };
        this.getCurrentStorageLight = function () {
            return JSON.parse(localStorage.getItem('currLight')) || _constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.LIGHTS_VARIANT[0];
        };
        this.getCurrentStorageBG = function () {
            return JSON.parse(localStorage.getItem('currBG')) || _constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.BGS_VARIANT[0];
        };
        this.setCurrentStorageBG = function (bg) {
            localStorage.setItem('currBG', JSON.stringify(bg));
        };
    }
    return Local;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Local());


/***/ }),

/***/ "./src/scripts/templates/filter-page-card.ts":
/*!***************************************************!*\
  !*** ./src/scripts/templates/filter-page-card.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateCardItem": () => (/* binding */ templateCardItem),
/* harmony export */   "setCardItemListners": () => (/* binding */ setCardItemListners)
/* harmony export */ });
var templateCardItem = function (item, getLocal) {
    var div = document.createElement('div');
    div.classList.add('card-item');
    var h2 = document.createElement('h2');
    h2.innerHTML = item.name;
    div.appendChild(h2);
    var content = document.createElement('div');
    content.classList.add('item-content');
    div.appendChild(content);
    var description = document.createElement('div');
    description.classList.add('item-description');
    content.appendChild(description);
    var count = document.createElement('p');
    count.innerHTML = "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ".concat(item.count);
    description.appendChild(count);
    var year = document.createElement('p');
    year.innerHTML = "\u0413\u043E\u0434 \u043F\u043E\u043A\u0443\u043F\u043A\u0438: ".concat(item.year);
    description.appendChild(year);
    var shape = document.createElement('p');
    shape.innerHTML = "\u0424\u043E\u0440\u043C\u0430: ".concat(item.shape);
    description.appendChild(shape);
    var color = document.createElement('p');
    color.innerHTML = "\u0426\u0432\u0435\u0442: ".concat(item.color);
    description.appendChild(color);
    var size = document.createElement('p');
    size.innerHTML = "\u0420\u0430\u0437\u043C\u0435\u0440: ".concat(item.size);
    description.appendChild(size);
    var favorite = document.createElement('p');
    favorite.innerHTML = "\u041B\u044E\u0431\u0438\u043C\u0430\u044F: ".concat(item.favorite ? 'да' : 'нет');
    description.appendChild(favorite);
    var itemImg = document.createElement('div');
    itemImg.classList.add('item-img');
    content.appendChild(itemImg);
    var img = document.createElement('img');
    img.setAttribute('src', "assets/toys/".concat(item.num, ".png"));
    img.setAttribute('alt', item.num);
    itemImg.appendChild(img);
    content.appendChild(itemImg);
    var ribbon = document.createElement('div');
    ribbon.classList.add('ribbon');
    if (getLocal.includes(item.num)) {
        ribbon.classList.add('true');
    }
    div.appendChild(ribbon);
    return div.outerHTML;
};
var setCardItemListners = function (cardItem, set) {
    var cards = document.querySelectorAll('.card-item');
    cards.forEach(function (card, index) {
        card.addEventListener('click', function () {
            set(cardItem[index].num);
        });
    });
};


/***/ }),

/***/ "./src/scripts/templates/filterPage-main.ts":
/*!**************************************************!*\
  !*** ./src/scripts/templates/filterPage-main.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setSearchListeners": () => (/* binding */ setSearchListeners),
/* harmony export */   "setFiltersListeners": () => (/* binding */ setFiltersListeners),
/* harmony export */   "setResetFiltersListeners": () => (/* binding */ setResetFiltersListeners),
/* harmony export */   "templateBallCount": () => (/* binding */ templateBallCount),
/* harmony export */   "templateFavoriteModal": () => (/* binding */ templateFavoriteModal),
/* harmony export */   "setModalListeners": () => (/* binding */ setModalListeners),
/* harmony export */   "setSortListeners": () => (/* binding */ setSortListeners),
/* harmony export */   "templateFilterPage": () => (/* binding */ templateFilterPage)
/* harmony export */ });
/* harmony import */ var _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/filter-const */ "./src/scripts/constants/filter-const.ts");
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");


var templateShapesFilter = function (activeFilters) {
    var ul = document.createElement('ul');
    _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SHAPE_FILTER.forEach(function (item) {
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.setAttribute('src', "assets/svg/".concat(item.image));
        if (activeFilters[_types_enums__WEBPACK_IMPORTED_MODULE_1__.TypeFilter.shapes].includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('shape-filter-item');
        li.appendChild(img);
        ul.appendChild(li);
    });
    return ul.outerHTML;
};
var templateSortRadio = function (typeS) {
    var div = document.createElement('div');
    _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SORTS.forEach(function (item, index) {
        var input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'type-sort');
        input.classList.add('sort-input');
        input.id = _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SORTS[index].type;
        div.appendChild(input);
        if (_constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SORTS[index].type === typeS) {
            input.setAttribute('checked', 'checked');
        }
    });
    _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SORTS.forEach(function (item, index) {
        var label = document.createElement('label');
        label.setAttribute('for', _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SORTS[index].type);
        label.classList.add('sort-type_select');
        label.innerHTML = _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SORTS[index].innerText;
        div.appendChild(label);
    });
    return div.outerHTML;
};
var templateColorsFilter = function (activeFilters) {
    var ul = document.createElement('ul');
    _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.COLORS_FILTER.forEach(function (item) {
        var li = document.createElement('li');
        li.style.background = item.bgColor;
        if (activeFilters[_types_enums__WEBPACK_IMPORTED_MODULE_1__.TypeFilter.colors].includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('color-filter-item');
        ul.appendChild(li);
    });
    return ul.outerHTML;
};
var templateSizesFilter = function (activeFilters) {
    var ul = document.createElement('ul');
    _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SIZES_FILTER.forEach(function (item) {
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.setAttribute('src', "assets/svg/ball.svg");
        li.id = item.class;
        if (activeFilters[_types_enums__WEBPACK_IMPORTED_MODULE_1__.TypeFilter.sizes].includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('size-filter-item');
        li.appendChild(img);
        ul.appendChild(li);
    });
    return ul.outerHTML;
};
var templateFavoriteFilter = function (activeFilters) {
    var div = document.createElement('div');
    div.classList.add('favorites-filter');
    var input = document.createElement('input');
    input.id = 'favorite-filter';
    input.setAttribute('type', 'checkbox');
    if (activeFilters[_types_enums__WEBPACK_IMPORTED_MODULE_1__.TypeFilter.favorite]) {
        input.setAttribute('checked', 'checked');
    }
    div.appendChild(input);
    var label = document.createElement('label');
    label.setAttribute('for', 'favorite-filter');
    label.innerHTML = 'Только любимые:';
    div.appendChild(label);
    return div.outerHTML;
};
var setSearchListeners = function (filter) {
    var isSearch = document.querySelector('.input__search');
    isSearch.addEventListener('keyup', function (e) {
        var target = e.target;
        filter(_types_enums__WEBPACK_IMPORTED_MODULE_1__.TypeFilter.search, target.value);
    });
    isSearch.addEventListener('search', function (e) {
        var target = e.target;
        filter(_types_enums__WEBPACK_IMPORTED_MODULE_1__.TypeFilter.search, target.value);
    });
};
var setFiltersListeners = function (filter) {
    var shapes = document.querySelectorAll('.shape-filter-item');
    var _loop_1 = function (i) {
        shapes[i].addEventListener('click', function () {
            filter(_types_enums__WEBPACK_IMPORTED_MODULE_1__.TypeFilter.shapes, _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SHAPE_FILTER[i].type);
        });
    };
    for (var i = 0; i < shapes.length; i = i + 1) {
        _loop_1(i);
    }
    var colors = document.querySelectorAll('.color-filter-item');
    var _loop_2 = function (i) {
        colors[i].addEventListener('click', function () {
            filter(_types_enums__WEBPACK_IMPORTED_MODULE_1__.TypeFilter.colors, _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.COLORS_FILTER[i].type);
        });
    };
    for (var i = 0; i < colors.length; i = i + 1) {
        _loop_2(i);
    }
    var sizes = document.querySelectorAll('.size-filter-item');
    var _loop_3 = function (i) {
        sizes[i].addEventListener('click', function () { return filter(_types_enums__WEBPACK_IMPORTED_MODULE_1__.TypeFilter.sizes, _constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SIZES_FILTER[i].type); });
    };
    for (var i = 0; i < sizes.length; i = i + 1) {
        _loop_3(i);
    }
    var isFavorite = document.querySelector('#favorite-filter');
    isFavorite.addEventListener('change', function (e) {
        var target = e.target;
        filter(_types_enums__WEBPACK_IMPORTED_MODULE_1__.TypeFilter.favorite, target.checked);
    });
};
var setResetFiltersListeners = function (reset, resetHand, isResetLocal) {
    var isResetFilters = document.getElementById('reset-filter');
    isResetFilters.addEventListener('click', function () {
        reset();
        resetHand();
    });
    var isResetLocalBtn = document.getElementById('reset-storage');
    isResetLocalBtn.addEventListener('click', function () {
        reset();
        resetHand();
        templateBallCount(0);
        isResetLocal();
    });
};
var templateBallCount = function (count) {
    var ball = document.querySelector('.favorite__ball');
    ball.innerHTML = count.toString();
};
var templateFavoriteModal = function () {
    var div = document.createElement('div');
    div.classList.add('favorite-modal');
    var close = document.createElement('div');
    close.classList.add('modal-close');
    var text = document.createElement('div');
    text.innerHTML = 'Извините, все слоты заполнены!';
    div.appendChild(text);
    div.appendChild(close);
    return div.outerHTML;
};
var setModalListeners = function () {
    var close = document.querySelector('.modal-close');
    close.addEventListener('click', function () {
        var div = document.querySelector('.favorite-modal');
        div.classList.remove('show-modal');
    });
};
var setSortListeners = function (sort) {
    var sorts = document.querySelectorAll('.sort-input');
    sorts.forEach(function (item, index) {
        item.addEventListener('change', function () { return sort(_constants_filter_const__WEBPACK_IMPORTED_MODULE_0__.SORTS[index].type); });
    });
};
var templateFilterPage = function (activeFilter, activeSort) {
    return "\n        <main class=\"filter-page\">\n            <div>\n                \n                <section class=\"filter__menu\">\n                    <div class=\"menu__value-filters\">\n                        <h2>\u0424\u0418\u041B\u042C\u0422\u0420\u042B \u041F\u041E \u0417\u041D\u0410\u0427\u0415\u041D\u0418\u042E</h2>\n                        <div class=\"shapes\">\n                            <p>\u0424\u043E\u0440\u043C\u0430:</p>\n                            ".concat(templateShapesFilter(activeFilter), "\n                        </div>\n                        <div class=\"colors\">\n                            <p>\u0426\u0432\u0435\u0442:</p>\n                            ").concat(templateColorsFilter(activeFilter), "\n                        </div>\n                        <div class=\"sizes\">\n                            <p>\u0420\u0430\u0437\u043C\u0435\u0440:</p>\n                            ").concat(templateSizesFilter(activeFilter), "\n                        </div>\n                        ").concat(templateFavoriteFilter(activeFilter), "\n                    </div>\n                    <div class=\"menu__range-filters\">\n                        <h2>\u0424\u0418\u041B\u042C\u0422\u0420\u042B \u041F\u041E \u0414\u0418\u0410\u041F\u0410\u0417\u041E\u041D\u0423</h2>\n                        <p>\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432:</p>\n                        <div class=\"count-range__container\">\n                            <span class=\"count-min\"></span>\n                            <div id=\"slider-count\"></div><span class=\"count-max\"></span>\n                        </div>\n                        <p>\u0413\u043E\u0434 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u044F:</p>\n                        <div class=\"year-range__container\">\n                            <span class=\"year-min\"></span>\n                            <div id=\"slider-year\"></div><span class=\"year-max\"></span>\n                        </div>\n                    </div>\n                    <div class=\"menu__sort-type\">\n                        <h2>\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430</h2>\n                        ").concat(templateSortRadio(activeSort), "\n                        <div class=\"reset-buttons\">\n                            <button id=\"reset-filter\">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B</button>\n                            <button id=\"reset-storage\">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</button>\n                        </div>\n\n                    </div>\n\n                </section>\n            </div>\n            <section class=\"filter__cards\">\n            </section>\n            ").concat(templateFavoriteModal(), "\n        </main>\n ");
};


/***/ }),

/***/ "./src/scripts/templates/gamePage-main.ts":
/*!************************************************!*\
  !*** ./src/scripts/templates/gamePage-main.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateTreesVariant": () => (/* binding */ templateTreesVariant),
/* harmony export */   "treesListeners": () => (/* binding */ treesListeners),
/* harmony export */   "templateBgsVariant": () => (/* binding */ templateBgsVariant),
/* harmony export */   "bgsListeners": () => (/* binding */ bgsListeners),
/* harmony export */   "lightsTemplateListeners": () => (/* binding */ lightsTemplateListeners),
/* harmony export */   "templateToyCard": () => (/* binding */ templateToyCard),
/* harmony export */   "templateArea": () => (/* binding */ templateArea),
/* harmony export */   "templateMainTree": () => (/* binding */ templateMainTree),
/* harmony export */   "templateMainBG": () => (/* binding */ templateMainBG),
/* harmony export */   "templateGamePage": () => (/* binding */ templateGamePage),
/* harmony export */   "setGlobalDropEvent": () => (/* binding */ setGlobalDropEvent),
/* harmony export */   "setDragListeners": () => (/* binding */ setDragListeners),
/* harmony export */   "setBtnResetListner": () => (/* binding */ setBtnResetListner)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/scripts/constants/constants.ts");
/* harmony import */ var _constants_game_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/game-consts */ "./src/scripts/constants/game-consts.ts");
/* harmony import */ var _filterPage_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterPage-main */ "./src/scripts/templates/filterPage-main.ts");



var templateTreesVariant = function () {
    var container = document.createElement('div');
    container.classList.add('select-trees');
    _constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.TREES_VARIANT.forEach(function (item, index) {
        var div = document.createElement('div');
        div.classList.add('tree-item');
        div.style.backgroundImage = "url(".concat(_constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.TREES_VARIANT[index].image, ")");
        container.appendChild(div);
    });
    return container.outerHTML;
};
var treesListeners = function (treeHandler, treeCurrentDb, treeLSHandler) {
    var trees = document.querySelectorAll('.tree-item');
    trees.forEach(function (item, index) {
        item.addEventListener('click', function () {
            trees.forEach(function (item) {
                item.classList.remove('active');
            });
            item.classList.add('active');
            treeCurrentDb(_constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.TREES_VARIANT[index]);
            treeLSHandler();
            treeHandler();
        });
    });
};
var templateBgsVariant = function () {
    var container = document.createElement('div');
    container.classList.add('select-bgs');
    _constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.BGS_VARIANT.forEach(function (item, index) {
        var div = document.createElement('div');
        div.classList.add('bg-item');
        div.style.backgroundImage = "url(".concat(_constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.BGS_VARIANT[index].image, ")");
        container.appendChild(div);
    });
    return container.outerHTML;
};
var bgsListeners = function (bgHandler, bgCurrentDb, bgLSHandler) {
    var bgs = document.querySelectorAll('.bg-item');
    bgs.forEach(function (item, index) {
        item.addEventListener('click', function () {
            bgs.forEach(function (item) {
                item.classList.remove('active');
            });
            item.classList.add('active');
            bgHandler(_constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.BGS_VARIANT[index]);
            bgCurrentDb(_constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.BGS_VARIANT[index]);
            bgLSHandler();
        });
    });
};
var templateFlashlights = function () {
    var container = document.createElement('div');
    container.classList.add('select-lights');
    _constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.LIGHTS_VARIANT.forEach(function (item, index) {
        var div = document.createElement('div');
        div.classList.add('light-item');
        div.style.background = "".concat(_constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.LIGHTS_VARIANT[index].bgColor);
        container.appendChild(div);
    });
    return container.outerHTML;
};
var lightsTemplateListeners = function (renderTree, setLights) {
    var lgs = document.querySelectorAll('.light-item');
    lgs.forEach(function (item, index) {
        item.addEventListener('click', function () {
            lgs.forEach(function (item) {
                item.classList.remove('active');
            });
            item.classList.add('active');
            setLights(_constants_game_consts__WEBPACK_IMPORTED_MODULE_1__.LIGHTS_VARIANT[index]);
            renderTree();
        });
    });
};
var templateToyCard = function (data) {
    var container = document.createElement('div');
    container.classList.add('toy__card-item');
    var countOnRightMenu = data.coord.reduce(function (accum, curr) {
        if (curr.x === 0 && curr.y === 0) {
            return (accum += 1);
        }
        return accum;
    }, 0);
    if (countOnRightMenu > 0) {
        var index = data.coord.findIndex(function (item) { return item.x === 0 && item.y === 0; });
        var img = document.createElement('img');
        img.setAttribute('src', "assets/toys/".concat(data.num, ".png"));
        img.classList.add('toy-item');
        img.id = "img-".concat(data.num, "-").concat(index);
        container.appendChild(img);
    }
    data.coord.forEach(function (item, index) {
        if (item.x && item.y) {
            var img = document.createElement('img');
            img.setAttribute('src', "assets/toys/".concat(data.num, ".png"));
            img.classList.add('toy-item');
            img.id = "img-".concat(data.num, "-").concat(index);
            img.style.position = 'absolute';
            img.style.top = item.y.toString() + 'px';
            img.style.left = item.x.toString() + 'px';
            container.appendChild(img);
        }
    });
    var count = document.createElement('div');
    count.classList.add('toy__card-count');
    count.innerHTML = countOnRightMenu.toString();
    container.appendChild(count);
    return container.outerHTML;
};
var templateArea = function () {
    var map = document.createElement('map');
    var area = document.createElement('area');
    map.setAttribute('name', 'tree-map');
    area.id = 'treeMapId';
    area.setAttribute('coords', _constants_constants__WEBPACK_IMPORTED_MODULE_0__.AREA_COORDS);
    area.setAttribute('shape', 'poly');
    map.appendChild(area);
    return map.outerHTML;
};
var templateMainTree = function (data) {
    var img = document.createElement('img');
    img.setAttribute('src', data.image);
    img.classList.add('main-tree-img');
    img.id = 'treeId';
    img.setAttribute('usemap', '#tree-map');
    return img.outerHTML;
};
var templateMainBG = function (data) {
    var block = document.querySelector('.game-main__tree');
    block.style.background = data.image;
};
var templateGamePage = function () {
    return "\n      <main class=\"game-page\">\n              <section class=\"game__main\">\n                <div class=\"game-menu__left\">\n                  <h3>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0451\u043B\u043A\u0443</h3>\n                  ".concat(templateTreesVariant(), "\n                  <h3>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u043D</h3>\n                  ").concat(templateBgsVariant(), "\n                  <h3>\u0413\u0438\u0440\u043B\u044F\u043D\u0434\u0430</h3>\n                  ").concat(templateFlashlights(), "\n                  <div class=\"reset-buttons\">\n                            <button id=\"reset-storage\">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</button>\n                        </div>\n                </div>\n                <div class=\"game-main__tree\">\n                \n                </div>\n                <div class=\"game-menu__right\">\n                  <h3>\u0418\u0433\u0440\u0443\u0448\u043A\u0438</h3>\n                  <div class=\"select-toys\">\n                  </div>\n                </div>\n                \n              \n              </section>\n      </main>\n");
};
var setGlobalDropEvent = function (changeCoord) {
    var root = document.querySelector('#root');
    root.addEventListener('dragover', function (e) {
        e.preventDefault();
    });
    root.addEventListener('drop', function (e) {
        var target = e.target;
        var tree = document.querySelector('#treeMapId');
        if (target.id === tree.id) {
            var id = e.dataTransfer.getData('text/element');
            var _a = id.split('-'), num = _a[1], ind = _a[2];
            var x = e.dataTransfer.getData('cord/x');
            var y = e.dataTransfer.getData('cord/y');
            var element = document.getElementById(id);
            changeCoord(num, ind, { x: e.pageX - +x, y: e.pageY - +y });
            element.style.zIndex = '1000';
        }
        else {
            var id = e.dataTransfer.getData('text/element');
            var _b = id.split('-'), num = _b[1], ind = _b[2];
            changeCoord(num, ind, { x: 0, y: 0 });
        }
    });
};
var setDragListeners = function () {
    var toys = document.querySelectorAll('.toy-item');
    toys.forEach(function (item) {
        item.addEventListener('dragstart', function (e) {
            var element = e.target;
            e.dataTransfer.setData('text/html', 'dragstart');
            e.dataTransfer.setData('text/element', element.id);
            e.dataTransfer.setData('cord/x', e.offsetX.toString());
            e.dataTransfer.setData('cord/y', e.offsetY.toString());
        });
    });
};
var setBtnResetListner = function (reset, resetHand, isResetLocal) {
    var isResetLocalBtn = document.getElementById('reset-storage');
    isResetLocalBtn.addEventListener('click', function () {
        isResetLocal();
        reset();
        resetHand();
        (0,_filterPage_main__WEBPACK_IMPORTED_MODULE_2__.templateBallCount)(0);
    });
};


/***/ }),

/***/ "./src/scripts/templates/index.ts":
/*!****************************************!*\
  !*** ./src/scripts/templates/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateMenuPage": () => (/* reexport safe */ _menu__WEBPACK_IMPORTED_MODULE_0__.templateMenuPage),
/* harmony export */   "setFiltersListeners": () => (/* reexport safe */ _filterPage_main__WEBPACK_IMPORTED_MODULE_1__.setFiltersListeners),
/* harmony export */   "setModalListeners": () => (/* reexport safe */ _filterPage_main__WEBPACK_IMPORTED_MODULE_1__.setModalListeners),
/* harmony export */   "setResetFiltersListeners": () => (/* reexport safe */ _filterPage_main__WEBPACK_IMPORTED_MODULE_1__.setResetFiltersListeners),
/* harmony export */   "setSearchListeners": () => (/* reexport safe */ _filterPage_main__WEBPACK_IMPORTED_MODULE_1__.setSearchListeners),
/* harmony export */   "setSortListeners": () => (/* reexport safe */ _filterPage_main__WEBPACK_IMPORTED_MODULE_1__.setSortListeners),
/* harmony export */   "templateBallCount": () => (/* reexport safe */ _filterPage_main__WEBPACK_IMPORTED_MODULE_1__.templateBallCount),
/* harmony export */   "templateFavoriteModal": () => (/* reexport safe */ _filterPage_main__WEBPACK_IMPORTED_MODULE_1__.templateFavoriteModal),
/* harmony export */   "templateFilterPage": () => (/* reexport safe */ _filterPage_main__WEBPACK_IMPORTED_MODULE_1__.templateFilterPage)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/scripts/templates/menu.ts");
/* harmony import */ var _filterPage_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterPage-main */ "./src/scripts/templates/filterPage-main.ts");




/***/ }),

/***/ "./src/scripts/templates/layoyt.ts":
/*!*****************************************!*\
  !*** ./src/scripts/templates/layoyt.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateSearchFilter": () => (/* binding */ templateSearchFilter),
/* harmony export */   "templateHeader": () => (/* binding */ templateHeader),
/* harmony export */   "templateLayout": () => (/* binding */ templateLayout)
/* harmony export */ });
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");

var snowHandlerInt;
var templateSearchFilter = function (activeFilters) {
    var isSearch = document.querySelector('.search-container');
    var div = document.createElement('div');
    var input = document.createElement('input');
    input.setAttribute('type', 'search');
    input.setAttribute('placeholder', 'Поиск по названию');
    input.setAttribute('class', 'input__search');
    input.setAttribute('autofocus', 'true');
    input.setAttribute('value', activeFilters.searchFilter);
    input.setAttribute('autocomplete', 'off');
    div.classList.add('menu__btn-search');
    div.appendChild(input);
    isSearch.appendChild(div);
};
var templateHeader = function (drawMenu, drawGame, drawFilter, page, countFavorite, getSnow, isMusic, getMusic, snowDbLs, isSnowGetLs) {
    if (page === _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypePage.main) {
        return;
    }
    var div = document.querySelector('.header__filter-page');
    var header = document.createElement('div');
    header.classList.add('header');
    var nav = document.createElement('div');
    nav.classList.add('navigation');
    var homeBtn = document.createElement('button');
    homeBtn.id = 'home';
    homeBtn.addEventListener('click', drawMenu);
    nav.appendChild(homeBtn);
    var filterPageBtn = document.createElement('div');
    filterPageBtn.id = 'filter-page';
    filterPageBtn.innerHTML = 'Коллекция';
    filterPageBtn.addEventListener('click', drawFilter);
    nav.appendChild(filterPageBtn);
    var gamePageBtn = document.createElement('div');
    gamePageBtn.id = 'game-page';
    gamePageBtn.innerHTML = 'Укрась елку';
    gamePageBtn.addEventListener('click', drawGame);
    nav.appendChild(gamePageBtn);
    header.appendChild(nav);
    var headerButtons = document.createElement('div');
    headerButtons.classList.add('header__buttons');
    header.appendChild(headerButtons);
    var muteBtn = document.createElement('label');
    var inputMute = document.createElement('input');
    inputMute.setAttribute('type', 'checkbox');
    inputMute.id = 'menu__btn-mute';
    muteBtn.appendChild(inputMute);
    muteBtn.classList.add('menu__btn-mute');
    muteBtn.style.background = isMusic
        ? 'url(assets/svg/audio.svg) 50% 50%/contain no-repeat'
        : 'url(assets/svg/mute-off.svg) 50% 50%/contain no-repeat';
    headerButtons.appendChild(muteBtn);
    inputMute.addEventListener('change', function () {
        getMusic();
    });
    if (page === _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypePage.game) {
        var snowBtn_1 = document.createElement('label');
        var inputSnow_1 = document.createElement('input');
        inputSnow_1.setAttribute('type', 'checkbox');
        inputSnow_1.checked = isSnowGetLs;
        inputSnow_1.id = 'menu__btn-snow';
        snowBtn_1.appendChild(inputSnow_1);
        snowBtn_1.classList.add('menu__btn-snow');
        var filter = isSnowGetLs
            ? "invert(10%) sepia(70%) saturate(200%) hue-rotate(\n            69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732)"
            : 'sepia(1) brightness(0.8)';
        snowBtn_1.style.filter = filter;
        isSnowGetLs &&
            (snowHandlerInt = setInterval(function () {
                getSnow(page);
            }, 30));
        inputSnow_1.addEventListener('change', function () {
            snowDbLs(inputSnow_1.checked);
            var filter = inputSnow_1.checked
                ? "invert(10%) sepia(70%) saturate(200%) hue-rotate(\n            69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732)"
                : 'sepia(1) brightness(0.8)';
            snowBtn_1.style.filter = filter;
            snowHandlerInt = setInterval(function () {
                getSnow(page);
            }, 30);
        });
        headerButtons.appendChild(snowBtn_1);
    }
    if (page !== _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypePage.game) {
        clearInterval(snowHandlerInt);
    }
    if (page === _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypePage.filter) {
        var search = document.createElement('div');
        search.classList.add('search-container');
        headerButtons.appendChild(search);
    }
    var ball = document.createElement('div');
    ball.classList.add('favorite__ball');
    ball.innerHTML = countFavorite.toString();
    headerButtons.appendChild(ball);
    div.appendChild(header);
};
var templateLayout = function (html) {
    return "\n        <section class=\"header__filter-page\">\n        </section>\n      ".concat(html, "\n        <footer class=\"footer__menu\">\n          <div class=\"author\">Created by <a href=\"https://github.com/tsakunova\" target=\"blank\">Tatsiana Tsakunova</a></div>\n          <div class=\"course\"><a href=\"https://app.rs.school/\" target=\"blank\"></a></div>\n        </footer>\n    ");
};


/***/ }),

/***/ "./src/scripts/templates/menu.ts":
/*!***************************************!*\
  !*** ./src/scripts/templates/menu.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateMenuPage": () => (/* binding */ templateMenuPage)
/* harmony export */ });
var button = function (block, text, str) { return "<button class=\"".concat(block, "_").concat(text, "-btn\">").concat(str, "</button>"); };
var templateMenuPage = function () {
    return "\n    <div class=\"menu-page\">\n      <div class=\"menu__animation\">\n          <div class=\"animation__ball\">\n            <img src=\"./assets/icons/1.png\" alt=\"ball\">\n          </div>\n        </div>\n        <main class=\"main__menu\">\n          <h1 class=\"menu__name\"><span>\u0411\u0430\u0431\u0443\u0448\u043A\u0438\u043D\u044B</span>\u0435\u043B\u043E\u0447\u043D\u044B\u0435 \u0438\u0433\u0440\u0443\u0448\u043A\u0438</h1>\n          ".concat(button('menu', 'start', 'начать'), "\n        </main>\n    </div>\n      \n      ");
};


/***/ }),

/***/ "./src/scripts/types/enums.ts":
/*!************************************!*\
  !*** ./src/scripts/types/enums.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shapes": () => (/* binding */ Shapes),
/* harmony export */   "Colors": () => (/* binding */ Colors),
/* harmony export */   "Sizes": () => (/* binding */ Sizes),
/* harmony export */   "TypeFilter": () => (/* binding */ TypeFilter),
/* harmony export */   "TypeSort": () => (/* binding */ TypeSort),
/* harmony export */   "TypePage": () => (/* binding */ TypePage),
/* harmony export */   "TypeLight": () => (/* binding */ TypeLight)
/* harmony export */ });
var Shapes;
(function (Shapes) {
    Shapes["ball"] = "\u0448\u0430\u0440";
    Shapes["snowflake"] = "\u0441\u043D\u0435\u0436\u0438\u043D\u043A\u0430";
    Shapes["bell"] = "\u043A\u043E\u043B\u043E\u043A\u043E\u043B\u044C\u0447\u0438\u043A";
    Shapes["cone"] = "\u0448\u0438\u0448\u043A\u0430";
    Shapes["toy"] = "\u0444\u0438\u0433\u0443\u0440\u043A\u0430";
})(Shapes || (Shapes = {}));
var Colors;
(function (Colors) {
    Colors["white"] = "\u0431\u0435\u043B\u044B\u0439";
    Colors["yellow"] = "\u0436\u0435\u043B\u0442\u044B\u0439";
    Colors["red"] = "\u043A\u0440\u0430\u0441\u043D\u044B\u0439";
    Colors["blue"] = "\u0441\u0438\u043D\u0438\u0439";
    Colors["green"] = "\u0437\u0435\u043B\u0451\u043D\u044B\u0439";
})(Colors || (Colors = {}));
var Sizes;
(function (Sizes) {
    Sizes["lSize"] = "\u0431\u043E\u043B\u044C\u0448\u043E\u0439";
    Sizes["mSize"] = "\u0441\u0440\u0435\u0434\u043D\u0438\u0439";
    Sizes["sSize"] = "\u043C\u0430\u043B\u044B\u0439";
})(Sizes || (Sizes = {}));
var TypeFilter;
(function (TypeFilter) {
    TypeFilter["shapes"] = "shapesFilter";
    TypeFilter["colors"] = "colorsFilter";
    TypeFilter["sizes"] = "sizesFilter";
    TypeFilter["favorite"] = "favoriteFilter";
    TypeFilter["count"] = "countFilter";
    TypeFilter["year"] = "yearFilter";
    TypeFilter["search"] = "searchFilter";
})(TypeFilter || (TypeFilter = {}));
var TypeSort;
(function (TypeSort) {
    TypeSort["yearMinMax"] = "yearMinMaxSort";
    TypeSort["yearMaxMin"] = "yearMaxMinSort";
    TypeSort["nameAZ"] = "nameAZSort";
    TypeSort["nameZA"] = "nameZASort";
})(TypeSort || (TypeSort = {}));
var TypePage;
(function (TypePage) {
    TypePage["main"] = "main";
    TypePage["filter"] = "filter";
    TypePage["game"] = "game";
})(TypePage || (TypePage = {}));
var TypeLight;
(function (TypeLight) {
    TypeLight["rainbow"] = "rainbow";
    TypeLight["yellow"] = "yellow";
    TypeLight["red"] = "red";
    TypeLight["blue"] = "blue";
    TypeLight["green"] = "green";
    TypeLight["white"] = "white";
    TypeLight["none"] = "none";
})(TypeLight || (TypeLight = {}));


/***/ }),

/***/ "./src/scripts/utils/garland.ts":
/*!**************************************!*\
  !*** ./src/scripts/utils/garland.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateGarland": () => (/* binding */ templateGarland)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/scripts/constants/constants.ts");

var templateGarland = function (currentLights) {
    var container = document.createElement('div');
    container.classList.add('lightrope-container');
    for (var i = 0; i < _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COUNT_GARLAND_ROW; i++) {
        var ul = document.createElement('ul');
        ul.classList.add('lightrope');
        for (var j = 0; j < _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COUNT_GARLAND_LI; j++) {
            var li = document.createElement('li');
            li.style.marginBottom = "".concat(j * 7, "px");
            li.style.background = currentLights.bgColor;
            li.style.animationName = currentLights.animation;
            ul.appendChild(li);
        }
        ul.style.width = "".concat(i * 5, "%");
        ul.style.marginBottom = "".concat(10 * i, "rem");
        container.appendChild(ul);
    }
    return container.outerHTML;
};


/***/ }),

/***/ "./src/scripts/utils/slider.ts":
/*!*************************************!*\
  !*** ./src/scripts/utils/slider.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSlider": () => (/* binding */ initSlider)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
/* harmony import */ var _constants_filter_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/filter-const */ "./src/scripts/constants/filter-const.ts");
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");




var initSlider = function (slider, set, values, key) {
    nouislider__WEBPACK_IMPORTED_MODULE_0___default().create(slider, {
        start: values,
        connect: true,
        step: key === _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.count ? _constants_filter_const__WEBPACK_IMPORTED_MODULE_2__.STEP_SLIDER_RANGE.count : _constants_filter_const__WEBPACK_IMPORTED_MODULE_2__.STEP_SLIDER_RANGE.year,
        range: {
            min: key === _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.count ? _constants_filter_const__WEBPACK_IMPORTED_MODULE_2__.MIN_SLIDER_RANGE.count : _constants_filter_const__WEBPACK_IMPORTED_MODULE_2__.MIN_SLIDER_RANGE.year,
            max: key === _types_enums__WEBPACK_IMPORTED_MODULE_3__.TypeFilter.count ? _constants_filter_const__WEBPACK_IMPORTED_MODULE_2__.MAX_SLIDER_RANGE.count : _constants_filter_const__WEBPACK_IMPORTED_MODULE_2__.MAX_SLIDER_RANGE.year,
        },
    })
        .on('update', set);
};


/***/ }),

/***/ "./src/scripts/utils/snowflakes.ts":
/*!*****************************************!*\
  !*** ./src/scripts/utils/snowflakes.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSnowFlake": () => (/* binding */ createSnowFlake)
/* harmony export */ });
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");

var createSnowFlake = function (page) {
    if (page === _types_enums__WEBPACK_IMPORTED_MODULE_0__.TypePage.game) {
        var inputSnow = document.getElementById('menu__btn-snow');
        if (inputSnow && inputSnow.checked) {
            var snowflake_1 = document.createElement('span');
            snowflake_1.classList.add('snowflake');
            snowflake_1.style.left = "".concat(Math.random() * window.innerWidth, "px");
            snowflake_1.style.animationDuration = "".concat(Math.random() * 3 + 2, "s");
            snowflake_1.style.opacity = "".concat(Math.random());
            var size = Math.random() * 10 + 10;
            snowflake_1.style.width = "".concat(size, "px");
            snowflake_1.style.height = "".concat(size, "px");
            document.querySelector('.game-main__tree').prepend(snowflake_1);
            setTimeout(function () {
                snowflake_1.remove();
            }, 5000);
        }
    }
};


/***/ }),

/***/ "./src/scripts/utils/utils.ts":
/*!************************************!*\
  !*** ./src/scripts/utils/utils.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cutDecimalsFormat": () => (/* binding */ cutDecimalsFormat)
/* harmony export */ });
var cutDecimalsFormat = function (str) { return str.map(function (item) { return item.split('.')[0]; }); };


/***/ }),

/***/ "./src/scripts/views/filterPageViews.ts":
/*!**********************************************!*\
  !*** ./src/scripts/views/filterPageViews.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/scripts/constants/constants.ts");
/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors/selectors */ "./src/scripts/selectors/selectors.ts");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates */ "./src/scripts/templates/index.ts");
/* harmony import */ var _templates_filter_page_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/filter-page-card */ "./src/scripts/templates/filter-page-card.ts");
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");
/* harmony import */ var _utils_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/slider */ "./src/scripts/utils/slider.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "./src/scripts/utils/utils.ts");
/* harmony import */ var _rootView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rootView */ "./src/scripts/views/rootView.ts");








var FilterPage = /** @class */ (function () {
    function FilterPage() {
        var _this = this;
        this.drawSpanValues = function (values, key) {
            var minCurrent = key === _types_enums__WEBPACK_IMPORTED_MODULE_4__.TypeFilter.count ? (0,_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__.countMin)() : (0,_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__.yearMin)();
            var maxCurrent = key === _types_enums__WEBPACK_IMPORTED_MODULE_4__.TypeFilter.count ? (0,_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__.countMax)() : (0,_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__.yearMax)();
            var _a = values, min = _a[0], max = _a[1];
            minCurrent.innerHTML = min;
            maxCurrent.innerHTML = max;
        };
        this.rangeHandler = function (value, filterHandler, key) {
            var val = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.cutDecimalsFormat)(value);
            filterHandler(key, val);
            _this.drawSpanValues(val, key);
        };
        this.drawSliders = function (filterHandler, filterValues) {
            var count = (0,_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__.filterCountRange)();
            var year = (0,_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__.filterYearRange)();
            (0,_utils_slider__WEBPACK_IMPORTED_MODULE_5__.initSlider)(count, function (value) {
                _this.rangeHandler(value, filterHandler, _types_enums__WEBPACK_IMPORTED_MODULE_4__.TypeFilter.count);
            }, filterValues.countFilter, _types_enums__WEBPACK_IMPORTED_MODULE_4__.TypeFilter.count);
            (0,_utils_slider__WEBPACK_IMPORTED_MODULE_5__.initSlider)(year, function (value) {
                _this.rangeHandler(value, filterHandler, _types_enums__WEBPACK_IMPORTED_MODULE_4__.TypeFilter.year);
            }, filterValues.yearFilter, _types_enums__WEBPACK_IMPORTED_MODULE_4__.TypeFilter.year);
        };
        this.renderModal = function () {
            var modal = document.querySelector('.favorite-modal');
            modal.classList.add('show-modal');
        };
        this.setSearchListeners = function (filterHandler) {
            (0,_templates__WEBPACK_IMPORTED_MODULE_2__.setSearchListeners)(filterHandler);
        };
        this.renderCards = function (arr, getLocalFavorite, setLocalFavorite) {
            var div = document.querySelector('.filter__cards');
            div.innerHTML = '';
            arr.forEach(function (item, index) {
                var card = (0,_templates_filter_page_card__WEBPACK_IMPORTED_MODULE_3__.templateCardItem)(arr[index], getLocalFavorite);
                div.insertAdjacentHTML('beforeend', card);
            });
            (0,_templates_filter_page_card__WEBPACK_IMPORTED_MODULE_3__.setCardItemListners)(arr, setLocalFavorite);
            if (arr.length === 0) {
                div.innerHTML = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY_FILTER_TEXT;
            }
            var ball = document.querySelector('.favorite__ball');
            ball.innerHTML = getLocalFavorite.length.toString();
        };
        this.renderFilterPage = function (filterHandler, activeFilter, sortHandler, activeSort, reset, resetHand, isResetLocal) {
            _this.root.resetContainer();
            var html = (0,_templates__WEBPACK_IMPORTED_MODULE_2__.templateFilterPage)(activeFilter, activeSort);
            _this.root.changeInnerRoot(html);
            (0,_templates__WEBPACK_IMPORTED_MODULE_2__.setModalListeners)();
            (0,_templates__WEBPACK_IMPORTED_MODULE_2__.setFiltersListeners)(filterHandler);
            (0,_templates__WEBPACK_IMPORTED_MODULE_2__.setSortListeners)(sortHandler);
            (0,_templates__WEBPACK_IMPORTED_MODULE_2__.setResetFiltersListeners)(reset, resetHand, isResetLocal);
        };
        this.root = new _rootView__WEBPACK_IMPORTED_MODULE_7__["default"]();
    }
    return FilterPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterPage);


/***/ }),

/***/ "./src/scripts/views/gamePageViews.ts":
/*!********************************************!*\
  !*** ./src/scripts/views/gamePageViews.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePage": () => (/* binding */ GamePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/gamePage-main */ "./src/scripts/templates/gamePage-main.ts");
/* harmony import */ var _rootView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootView */ "./src/scripts/views/rootView.ts");
/* harmony import */ var _utils_garland__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/garland */ "./src/scripts/utils/garland.ts");



var GamePage = /** @class */ (function () {
    function GamePage() {
        var _this = this;
        this.setGlobalDropEvent = function (changeCoord) {
            (0,_templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__.setGlobalDropEvent)(changeCoord);
        };
        this.renderToys = function (getFavorite) {
            var div = document.querySelector('.select-toys');
            div.innerHTML = '';
            getFavorite.forEach(function (item, index) {
                var card = (0,_templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__.templateToyCard)(getFavorite[index]);
                div.insertAdjacentHTML('beforeend', card);
            });
            (0,_templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__.setDragListeners)();
            var ball = document.querySelector('.favorite__ball');
            ball.innerHTML = getFavorite.length.toString();
        };
        this.renderTree = function (currentTree, currentLights) {
            var div = document.querySelector('.game-main__tree');
            div.innerHTML = '';
            var area = (0,_templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__.templateArea)();
            div.insertAdjacentHTML('beforeend', area);
            var tree = (0,_templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__.templateMainTree)(currentTree);
            div.insertAdjacentHTML('beforeend', tree);
            var light = (0,_utils_garland__WEBPACK_IMPORTED_MODULE_2__.templateGarland)(currentLights);
            div.insertAdjacentHTML('beforeend', light);
        };
        this.renderCurrentSetting = function (currentTree, currentLights, currentBg) {
            var trees = document.querySelectorAll('.tree-item');
            trees[currentTree.id].classList.add('active');
            var lights = document.querySelectorAll('.light-item');
            lights[currentLights.id].classList.add('active');
            var bgs = document.querySelectorAll('.bg-item');
            bgs[currentBg.id].classList.add('active');
            _this.renderGamePage;
        };
        this.renderBG = function (currentBg) {
            var block = document.querySelector('.game-main__tree');
            block.style.backgroundImage = "url(".concat(currentBg.image, ")");
        };
        this.root = new _rootView__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    GamePage.prototype.renderGamePage = function (treeHandler, bgHandler, treeLSHandler, bgLSHandler, currentBG, setLights, renderTreeBlock, reset, resetHand, isResetLocal) {
        this.root.resetContainer();
        var html = (0,_templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__.templateGamePage)();
        this.root.changeInnerRoot(html);
        renderTreeBlock();
        this.renderBG(currentBG);
        (0,_templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__.treesListeners)(renderTreeBlock, treeHandler, treeLSHandler);
        (0,_templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__.bgsListeners)(this.renderBG, bgHandler, bgLSHandler);
        (0,_templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__.lightsTemplateListeners)(renderTreeBlock, setLights);
        (0,_templates_gamePage_main__WEBPACK_IMPORTED_MODULE_0__.setBtnResetListner)(reset, resetHand, isResetLocal);
    };
    return GamePage;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamePage);


/***/ }),

/***/ "./src/scripts/views/menuView.ts":
/*!***************************************!*\
  !*** ./src/scripts/views/menuView.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selectors/selectors */ "./src/scripts/selectors/selectors.ts");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates */ "./src/scripts/templates/index.ts");
/* harmony import */ var _rootView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootView */ "./src/scripts/views/rootView.ts");



var Menu = /** @class */ (function () {
    function Menu() {
        this.root = new _rootView__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    Menu.prototype.renderMenuPage = function (startHandler) {
        this.root.resetContainer();
        var html = (0,_templates__WEBPACK_IMPORTED_MODULE_1__.templateMenuPage)();
        this.root.changeInnerRoot(html);
        (0,_selectors_selectors__WEBPACK_IMPORTED_MODULE_0__.menuStartBtn)().addEventListener('click', startHandler);
    };
    return Menu;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ "./src/scripts/views/rootView.ts":
/*!***************************************!*\
  !*** ./src/scripts/views/rootView.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selectors/selectors */ "./src/scripts/selectors/selectors.ts");
/* harmony import */ var _templates_layoyt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/layoyt */ "./src/scripts/templates/layoyt.ts");
/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/enums */ "./src/scripts/types/enums.ts");



var Root = /** @class */ (function () {
    function Root() {
    }
    Root.prototype.resetContainer = function () {
        _selectors_selectors__WEBPACK_IMPORTED_MODULE_0__.root.innerHTML = '';
    };
    Root.prototype.changeInnerRoot = function (htmlBlock) {
        _selectors_selectors__WEBPACK_IMPORTED_MODULE_0__.root.insertAdjacentHTML('afterbegin', (0,_templates_layoyt__WEBPACK_IMPORTED_MODULE_1__.templateLayout)(htmlBlock));
    };
    Root.prototype.drawHeader = function (drawMenu, drawGame, drawFilter, page, countFavorite, activeFilters, getSnow, isMusic, getMusic, snowDbLs, isSnowGetLs) {
        (0,_templates_layoyt__WEBPACK_IMPORTED_MODULE_1__.templateHeader)(drawMenu, drawGame, drawFilter, page, countFavorite, getSnow, isMusic, getMusic, snowDbLs, isSnowGetLs);
        page === _types_enums__WEBPACK_IMPORTED_MODULE_2__.TypePage.filter && (0,_templates_layoyt__WEBPACK_IMPORTED_MODULE_1__.templateSearchFilter)(activeFilters);
    };
    return Root;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Root);


/***/ }),

/***/ "./src/assets/fonts/Amagro.ttf":
/*!*************************************!*\
  !*** ./src/assets/fonts/Amagro.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6a81cdfeb43774ba56e7.ttf";

/***/ }),

/***/ "./src/assets/fonts/AntykwaTorunska-Regular.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/AntykwaTorunska-Regular.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a8e90230ca86b07217d0.ttf";

/***/ }),

/***/ "./src/assets/icons/close.png":
/*!************************************!*\
  !*** ./src/assets/icons/close.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4208ff53d734e704ebb2.png";

/***/ }),

/***/ "./src/assets/icons/rs_school.png":
/*!****************************************!*\
  !*** ./src/assets/icons/rs_school.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4ff28a69cc2041e1b0e1.png";

/***/ }),

/***/ "./src/assets/icons/star-no.png":
/*!**************************************!*\
  !*** ./src/assets/icons/star-no.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4e219c1e05322497fcac.png";

/***/ }),

/***/ "./src/assets/icons/star-yes.png":
/*!***************************************!*\
  !*** ./src/assets/icons/star-yes.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c3b6345aa99eb3ceac4.png";

/***/ }),

/***/ "./src/assets/page-bg/filter-bg1.jpg":
/*!*******************************************!*\
  !*** ./src/assets/page-bg/filter-bg1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9c057bcc00fb8db9c1b4.jpg";

/***/ }),

/***/ "./src/assets/page-bg/menu.jpg":
/*!*************************************!*\
  !*** ./src/assets/page-bg/menu.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3380f6a551cbf34ad529.jpg";

/***/ }),

/***/ "./src/assets/svg/audio.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/audio.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f77405bc333e162191f4.svg";

/***/ }),

/***/ "./src/assets/svg/snow.svg":
/*!*********************************!*\
  !*** ./src/assets/svg/snow.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "127061e202b176f7aad1.svg";

/***/ }),

/***/ "./src/assets/svg/tree.svg":
/*!*********************************!*\
  !*** ./src/assets/svg/tree.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "aee2e280228d283db3b6.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("1675be8e4d7f8d765390")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "christmas-task:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatechristmas_task"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map