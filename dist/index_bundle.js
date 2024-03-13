/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Universal Base and Body */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #050517;
  color: #d3d5d7;
}

a,
.project__close,
.todo__close {
  color: #cf5c36;
  cursor: pointer;
  text-decoration: none;
}

/* Container and Content Area */
.container {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  min-height: 100vh;
}

.content,
.header {
  background-color: #050517;
  padding: 16px;
}

.header {
  border-right: 2px solid #333;
}

.todos__container,
.header,
.nav__projects,
.nav,
.content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Modals General */
.project__modal,
.todo__modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: #050517;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  border: 1px solid #cf5c36;
}

.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}

/* Modal Headers */
.project__modal--header,
.todo__modal--header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

/* Modal Forms General Styles */
.project__form,
.todo__form {
  display: grid;
  gap: 10px;
}

/* Input Fields Shared Styles */
input,
select,
textarea,
.todo__input {
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #cf5c36;
  background-color: #333;
  color: #d3d5d7;
  border-radius: 8px;
}

input::placeholder,
select::placeholder,
textarea::placeholder {
  color: #bbb;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #efc88b;
}

/* Button Shared Styles */
button,
.todo__submit {
  width: 100%;
  padding: 10px 0;
  background-color: #cf5c36;
  color: #050517;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover,
.todo__submit:hover {
  background-color: #efc88b;
}

button:active,
.todo__submit:active {
  background-color: #f4e3b2;
}

/* Projects List and Todos Styling */
.project,
.todo {
  border: 1px solid #cf5c36;
  background-color: #050517;
  padding: 8px;
  border-radius: 8px;
}

.project:hover,
.todo:hover {
  background-color: #f4e3b2;
  color: #050517;
  cursor: pointer;
}

.project:active,
.project__selected,
.todo:active {
  background-color: #efc88b;
  color: #050517;
}

/* Additional Elements Styling */
/* Scrollbar Styling for Webkit Browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #333;
}

::-webkit-scrollbar-thumb {
  background: #cf5c36;
}

::-webkit-scrollbar-thumb:hover {
  background: #efc88b;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,4BAA4B;AAC5B;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,4DAA4D;AAC9D;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;;;EAGE,cAAc;EACd,eAAe;EACf,qBAAqB;AACvB;;AAEA,+BAA+B;AAC/B;EACE,aAAa;EACb,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;;EAEE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;;;;EAKE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA,mBAAmB;AACnB;;EAEE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,wCAAwC;EACxC,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,YAAY;AACd;;AAEA,kBAAkB;AAClB;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA,+BAA+B;AAC/B;;EAEE,aAAa;EACb,SAAS;AACX;;AAEA,+BAA+B;AAC/B;;;;EAIE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,sBAAsB;EACtB,cAAc;EACd,kBAAkB;AACpB;;AAEA;;;EAGE,WAAW;AACb;;AAEA;;;EAGE,aAAa;EACb,qBAAqB;AACvB;;AAEA,yBAAyB;AACzB;;EAEE,WAAW;EACX,eAAe;EACf,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,sCAAsC;AACxC;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA,oCAAoC;AACpC;;EAEE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;;AAEA;;;EAGE,yBAAyB;EACzB,cAAc;AAChB;;AAEA,gCAAgC;AAChC,0CAA0C;AAC1C;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["/* Universal Base and Body */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #050517;\r\n  color: #d3d5d7;\r\n}\r\n\r\na,\r\n.project__close,\r\n.todo__close {\r\n  color: #cf5c36;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Container and Content Area */\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 0.3fr 1fr;\r\n  min-height: 100vh;\r\n}\r\n\r\n.content,\r\n.header {\r\n  background-color: #050517;\r\n  padding: 16px;\r\n}\r\n\r\n.header {\r\n  border-right: 2px solid #333;\r\n}\r\n\r\n.todos__container,\r\n.header,\r\n.nav__projects,\r\n.nav,\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n}\r\n\r\n/* Modals General */\r\n.project__modal,\r\n.todo__modal {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1000;\r\n  background-color: #050517;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);\r\n  border: 1px solid #cf5c36;\r\n}\r\n\r\n.modal__overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  z-index: 999;\r\n}\r\n\r\n/* Modal Headers */\r\n.project__modal--header,\r\n.todo__modal--header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* Modal Forms General Styles */\r\n.project__form,\r\n.todo__form {\r\n  display: grid;\r\n  gap: 10px;\r\n}\r\n\r\n/* Input Fields Shared Styles */\r\ninput,\r\nselect,\r\ntextarea,\r\n.todo__input {\r\n  width: 100%;\r\n  padding: 8px;\r\n  margin-bottom: 8px;\r\n  border: 1px solid #cf5c36;\r\n  background-color: #333;\r\n  color: #d3d5d7;\r\n  border-radius: 8px;\r\n}\r\n\r\ninput::placeholder,\r\nselect::placeholder,\r\ntextarea::placeholder {\r\n  color: #bbb;\r\n}\r\n\r\ninput:focus,\r\nselect:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n  border-color: #efc88b;\r\n}\r\n\r\n/* Button Shared Styles */\r\nbutton,\r\n.todo__submit {\r\n  width: 100%;\r\n  padding: 10px 0;\r\n  background-color: #cf5c36;\r\n  color: #050517;\r\n  border: none;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\nbutton:hover,\r\n.todo__submit:hover {\r\n  background-color: #efc88b;\r\n}\r\n\r\nbutton:active,\r\n.todo__submit:active {\r\n  background-color: #f4e3b2;\r\n}\r\n\r\n/* Projects List and Todos Styling */\r\n.project,\r\n.todo {\r\n  border: 1px solid #cf5c36;\r\n  background-color: #050517;\r\n  padding: 8px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.project:hover,\r\n.todo:hover {\r\n  background-color: #f4e3b2;\r\n  color: #050517;\r\n  cursor: pointer;\r\n}\r\n\r\n.project:active,\r\n.project__selected,\r\n.todo:active {\r\n  background-color: #efc88b;\r\n  color: #050517;\r\n}\r\n\r\n/* Additional Elements Styling */\r\n/* Scrollbar Styling for Webkit Browsers */\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #333;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #cf5c36;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #efc88b;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ "./src/classes/DOMController.js":
/*!**************************************!*\
  !*** ./src/classes/DOMController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMController: () => (/* binding */ DOMController)
/* harmony export */ });
class DOMController {
  // static projects = new Projects();
  // static variables
  static overlayModal = null;
  static projectModal = null;
  static todoModal = null;
  static content = document.querySelector("#content");
  static nav = document.querySelector(".nav");
  static header = document.querySelector(".header");
  static container = document.querySelector(".container");
  static activeModal = null;
  static selectedProjectId = null;

  // render page structure
  static renderPage() {
    // reset content
    DOMController.nav.innerHTML = `
      <h2>Projects</h2>
      <div class="nav__projects"></div>
    `;
    DOMController.content.innerHTML = `
      <h2>Todos</h2>
      <div class="todos__container"></div>
    `;

    DOMController.renderModal(DOMController.container, "project"); // this creates the project modal
    DOMController.renderModal(DOMController.container, "todo"); // this creates the project modal

    DOMController.addButtons();

    // add event listeners
    DOMController.initEventListeners();
  }

  static addButtons() {
    // add project button
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project__btn");
    projectBtn.textContent = "+";
    DOMController.header.appendChild(projectBtn);
    projectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clicked project button");
    });

    // add todo button
    const todoBtn = document.createElement("button");
    todoBtn.classList.add("todo__btn");
    todoBtn.textContent = "+";
    content.appendChild(todoBtn);
    todoBtn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }

  static createModalConfig(modalName) {
    const modalConfigs = {
      project: {
        class: "project__modal",
        content: `
        <form class="project__form">
          <div class="project__modal--header">
            <h2>Add Project</h2>
            <a class="project__close">&times;</a>
          </div>
          <input type="text" id="project__name" name ="project__name" class="project__name" placeHolder="Project Name:" />
          <button class="project__submit">Submit</button>
        </form>
        `,
      },
      todo: {
        class: "todo__modal",
        content: `
          <form class="todo__form">
            <div class="todo__modal--header">
              <h2>Add Todo</h2>
              <a class="todo__close">&times;</a>
            </div>
            <div class="todo__modal--body">
              <input type="text" id="todo__name" name="todo__name" class="todo__input" placeholder="Todo Name:" />
              <input type="text" id="todo__description" name="todo__description" class="todo__input" placeholder="Description:" />
              <input type="date" id="todo__dueDate" name="todo__dueDate" class="todo__input" placeholder="Due Date:" />
              <input type="number" id="todo__priority" name="todo__priority" class="todo__input" placeholder="Priority:" />
              <input type="text" id="todo__notes" name="todo__notes" class="todo__input" placeholder="Notes:" />
            </div>
            <button class="todo__submit">Submit</button>
          </form>
        `,
      },
    };
    return modalConfigs[modalName];
  }

  static addButton() {
    // add project button
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project__btn");
    projectBtn.textContent = "+";
    header.appendChild(projectBtn);

    // add todo button
    const todoBtn = document.createElement("button");
    todoBtn.classList.add("todo__btn");
    todoBtn.textContent = "+";
    content.appendChild(todoBtn);
  }

  static renderModal(container, modalName) {
    const { class: modalClass, content } =
      DOMController.createModalConfig(modalName);

    // modal overlay
    if (!DOMController.overlayModal) {
      DOMController.overlayModal = document.createElement("div");
      DOMController.overlayModal.classList.add("modal__overlay");
      container.appendChild(DOMController.overlayModal);
      DOMController.overlayModal.style.display = "none"; // Ensure it is initially hidden
    }

    const modal = document.createElement("div");
    modal.classList.add(modalClass);
    modal.innerHTML = content;

    container.appendChild(modal);
    modal.style.display = "none";

    if (modalName === "project") {
      DOMController.projectModal = modal;
    } else if (modalName === "todo") {
      DOMController.todoModal = modal;
    }
  }

  static toggleModal(targetModal) {
    // Check if the targetModal is being shown or hidden
    const isShowing = targetModal && targetModal.style.display === "block";

    // toggle overlay first
    this.overlayModal.style.display = isShowing ? "none" : "block";

    // toggle target modal
    if (targetModal) {
      targetModal.style.display = isShowing ? "none" : "block";

      // update activeModal ref
      this.activeModal = isShowing ? null : targetModal;
    }
  }

  static initEventListeners() {
    // button event listeners
    const projectBtn = document.querySelector(".project__btn");
    // toggle project modal
    projectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggleModal(DOMController.projectModal);
    });

    const todoBtn = document.querySelector(".todo__btn");
    // toggle todo modal
    todoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggleModal(DOMController.todoModal);
    });

    // overlay modal event listener
    DOMController.overlayModal.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("modal__overlay") &&
        DOMController.activeModal
      ) {
        DOMController.toggleModal(DOMController.activeModal);
      }
    });
  }

  static acceptForm(callback, formSelector, modal) {
    const form = document.querySelector(formSelector);
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {};
      new FormData(form).forEach((value, key) => {
        formData[key] = value;
      });

      if (Object.keys(formData).length > 0) {
        callback(formData);
        DOMController.toggleModal(modal);
      }
      form.reset();
    });
  }

  // render all projects
  static renderProjects(projectsInstance) {
    const projectsContainer = document.querySelector(".nav__projects");
    projectsContainer.innerHTML = ""; // reset projects list

    const projectsArr = projectsInstance.getProjects();
    projectsArr.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.innerHTML = `<h3>${project.name}</h3>
      <a class="todo__close">&times;</a>`;
      projectDiv.addEventListener("click", (e) => {
        e.preventDefault();

        // TODO: DELETE BUTTON FOR PROJECT
        if (e.target.classList.contains("todo__close")) {
          e.stopPropagation;
          console.log("helelohehelelohehelelohehelelohe"); // this is the delete button
        }

        // Update selected project ID and render its todos
        DOMController.selectedProjectId = project.id;
        DOMController.renderTodosForProject(project.id, projectsInstance);

        // add active class to selected project
        document.querySelectorAll(".project").forEach((project) => {
          project.classList.remove("project__selected");
        });
        projectDiv.classList.add("project__selected");
      });
      projectsContainer.appendChild(projectDiv);
    });

    if (projectsArr.length > 0) {
      // default to first project
      const firstProjectDiv = projectsContainer.firstChild;
      firstProjectDiv.classList.add("project__selected");
      DOMController.selectedProjectId = projectsArr[0].id;
      DOMController.renderTodosForProject(
        DOMController.selectedProjectId,
        projectsInstance
      );
    }
  }

  static renderTodosForProject(selectedProjectId, projectsInstance) {
    console.log(selectedProjectId);
    const selectedProject = projectsInstance.findProjectById(selectedProjectId);
    const todosContainer = document.querySelector(".todos__container");
    todosContainer.innerHTML = ""; // reset todos list

    if (selectedProject) {
      selectedProject.todos.forEach((todo) => {
        const todoElement = document.createElement("div");
        todoElement.classList.add("todo");
        todoElement.innerHTML = `
          <h4>${todo.title}</h4>
          <p>${todo.description}</p>
          <p>Due: ${todo.dueDate}</p>
          <p>Priority: ${todo.priority}</p>
          <!-- add more -->
        `;
        todosContainer.appendChild(todoElement);
      });
    }
  }
}

// Step 3: Add Todo Form Handling
// Step 4: Adjust the Todo Form Submission Logic


/***/ }),

/***/ "./src/classes/Project.js":
/*!********************************!*\
  !*** ./src/classes/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/classes/Todo.js");


class Project {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    if (todo instanceof _Todo__WEBPACK_IMPORTED_MODULE_0__.Todo) {
      this.todos.push(todo); // this is to the project object
      // save to local storage;
      Project.saveProjectsToLocalStorage(this);
    } else {
      console.log("Not a valid todo");
    }
  }

  // save to local storage;
  static saveProjectsToLocalStorage(projectInstance) {
    // get existing projects from localStorage, else []
    const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];

    // check if proejct exists in localStorage
    const projectIndex = existingProjects.findIndex(
      (project) => project.id === projectInstance.id
    );

    if (projectIndex !== -1) {
      // update existing project
      existingProjects[projectIndex] = projectInstance; // do I need to stringify?
    } else {
      // Add new project
      existingProjects.push(projectInstance);
    }

    localStorage.setItem("projects", JSON.stringify(existingProjects));
  }

  removeTodoById(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  getTodos() {
    return this.todos;
  }

  getTodoById(id) {
    return this.todos.find((todo) => todo.id === id);
  }
}


/***/ }),

/***/ "./src/classes/Projects.js":
/*!*********************************!*\
  !*** ./src/classes/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Projects: () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./src/classes/Util.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Util__WEBPACK_IMPORTED_MODULE_0__);


class Projects {
  constructor() {
    this.projects = this.loadFromLocalStorage() || [];
  }

  // should addProject be here?
  addProject(project) {
    this.projects.push(project);
    this.saveToLocalStorage();
  }

  getProjects() {
    return this.projects;
  }

  findProjectById(id) {
    return this.projects.find((project) => project.id === id);
  }

  removeProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem("projects");

    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
}


/***/ }),

/***/ "./src/classes/Todo.js":
/*!*****************************!*\
  !*** ./src/classes/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(
    id,
    projectId,
    title,
    description,
    dueDate,
    priority,
    notes,
    isComplete
  ) {
    this.id = id;
    this.projectId = projectId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority; // orderby priority
    this.notes = notes;
    this.isComplete = isComplete;
    // this.checkList = [];
  }

  // edit title
  setTitle(title) {
    this.title = title;
  }

  // edit description
  setDescription(description) {
    this.description = description;
  }

  // edit dueDate
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  // edit priority
  setPriority(priority) {
    this.priority = priority;
  }

  // edit notes
  setNotes(notes) {
    this.notes = notes;
  }

  // edit isComplete
  setIsComplete(isComplete) {
    this.isComplete = isComplete;
  }

  // should i add checklist class?

  // add checklist item
  addChecklistItem(checklistItem) {
    this.checkList.push(checklistItem);
  }

  // edit checklist item

  // remove checklist item
}


/***/ }),

/***/ "./src/classes/Util.js":
/*!*****************************!*\
  !*** ./src/classes/Util.js ***!
  \*****************************/
/***/ (() => {

// export class Util {
//   static saveToLocalStorage(prop) {
//     localStorage.setItem(prop, JSON.stringify(this[prop]));
//   }

//   //   // FIXME: I don't think this is working // Uncaught SyntaxError: "undefined" is not valid JSON
//   static getFromLocalStorage(prop) {
//     const data = localStorage.getItem(prop);
//     if (data) {
//       this[prop] = JSON.parse(data);
//       // console.log(this.prop);
//     }
//   }
// }


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Projects */ "./src/classes/Projects.js");
/* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Project */ "./src/classes/Project.js");
/* harmony import */ var _classes_Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Todo */ "./src/classes/Todo.js");
/* harmony import */ var _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/DOMController */ "./src/classes/DOMController.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







// defining projects
const projects = new _classes_Projects__WEBPACK_IMPORTED_MODULE_0__.Projects();
// const project = new Project

if (projects.getProjects().length === 0) {
  const project1 = new _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project(uniqid__WEBPACK_IMPORTED_MODULE_4___default()(), "Project 1");

  // example todo
  const todo1 = new _classes_Todo__WEBPACK_IMPORTED_MODULE_2__.Todo(
    uniqid__WEBPACK_IMPORTED_MODULE_4___default()(),
    "Todo 1",
    "Description 1",
    Date.now(), // date to something more readable
    10,
    "Notes... 1",
    false
  );

  // adding todo/project to project/projects
  projects.addProject(project1);
  project1.addTodo(todo1);
}

// render page
_classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderPage();
_classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderProjects(projects);

// render todos for default project
let defaultProjectId = projects.getProjects()[0].id;
_classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderTodosForProject(defaultProjectId, projects);

// add project
_classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.acceptForm(
  (formData) => {
    const newProject = new _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project(uniqid__WEBPACK_IMPORTED_MODULE_4___default()(), formData.project__name);
    projects.addProject(newProject);
    _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderProjects(projects);
  },
  ".project__form",
  _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.projectModal
);

// add todo
_classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.acceptForm(
  (formData) => {
    // if (!DOMController.selectedProjectId) {
    //   console.log("No project selected");
    //   return;
    // }
    const newTodo = new _classes_Todo__WEBPACK_IMPORTED_MODULE_2__.Todo(
      uniqid__WEBPACK_IMPORTED_MODULE_4___default()(),
      formData.todo__name,
      formData.todo__description,
      formData.todo__dueDate,
      formData.todo__priority,
      formData.todo__notes,
      false
    );

    let projectData = projects.findProjectById(_classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.selectedProjectId);
    if (!projectData) {
      projectData = projects.getProjects()[0];
    }
    const project = new _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project(projectData.id, projectData.name);
    project.todos = projectData.todos;

    console.log(project);
    console.log(project instanceof _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project);
    project.addTodo(newTodo);
    _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderTodosForProject(
      _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.selectedProjectId ?? projects.getProjects()[0].id,
      projects
    );
  },
  ".todo__form",
  _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.todoModal
);

// TODO:1.  styling

// TODO:2. remove project

// TODO:3. remove todo

// TODO: Currently I can only add Todos when a project is clicked on..
// if I don't click on the project beforehand, it doesn't work
// to fix this, when I add new project, the project should be selected
// and the todos should be rendered for that project

// TODO:
// Upon first load, the page should render the projects and the first project's todos.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUVBQWE7QUFDYjtBQUNBO0FBQ0EsaUVBQWE7QUFDYjtBQUNBLDJCQUEyQixxREFBTyxDQUFDLDZDQUFNO0FBQ3pDO0FBQ0EsSUFBSSxpRUFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQSxFQUFFLGlFQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUVBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFJO0FBQzVCLE1BQU0sNkNBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlFQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscURBQU87QUFDMUM7QUFDQSxJQUFJLGlFQUFhO0FBQ2pCLE1BQU0saUVBQWE7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsaUVBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9jbGFzc2VzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvY2xhc3Nlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2NsYXNzZXMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvY2xhc3Nlcy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2NsYXNzZXMvVXRpbC5qcyIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVW5pdmVyc2FsIEJhc2UgYW5kIEJvZHkgKi9cclxuKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDUxNztcclxuICBjb2xvcjogI2QzZDVkNztcclxufVxyXG5cclxuYSxcclxuLnByb2plY3RfX2Nsb3NlLFxyXG4udG9kb19fY2xvc2Uge1xyXG4gIGNvbG9yOiAjY2Y1YzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhbmQgQ29udGVudCBBcmVhICovXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAxZnI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250ZW50LFxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTE3O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbi50b2Rvc19fY29udGFpbmVyLFxyXG4uaGVhZGVyLFxyXG4ubmF2X19wcm9qZWN0cyxcclxuLm5hdixcclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLyogTW9kYWxzIEdlbmVyYWwgKi9cclxuLnByb2plY3RfX21vZGFsLFxyXG4udG9kb19fbW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTE3O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmNWMzNjtcclxufVxyXG5cclxuLm1vZGFsX19vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi8qIE1vZGFsIEhlYWRlcnMgKi9cclxuLnByb2plY3RfX21vZGFsLS1oZWFkZXIsXHJcbi50b2RvX19tb2RhbC0taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIEZvcm1zIEdlbmVyYWwgU3R5bGVzICovXHJcbi5wcm9qZWN0X19mb3JtLFxyXG4udG9kb19fZm9ybSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi8qIElucHV0IEZpZWxkcyBTaGFyZWQgU3R5bGVzICovXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhLFxyXG4udG9kb19faW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmNWMzNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjZDNkNWQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxyXG5zZWxlY3Q6OnBsYWNlaG9sZGVyLFxyXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmJiO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxuc2VsZWN0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICNlZmM4OGI7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBTaGFyZWQgU3R5bGVzICovXHJcbmJ1dHRvbixcclxuLnRvZG9fX3N1Ym1pdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjVjMzY7XHJcbiAgY29sb3I6ICMwNTA1MTc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcixcclxuLnRvZG9fX3N1Ym1pdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYzg4YjtcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSxcclxuLnRvZG9fX3N1Ym1pdDphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGUzYjI7XHJcbn1cclxuXHJcbi8qIFByb2plY3RzIExpc3QgYW5kIFRvZG9zIFN0eWxpbmcgKi9cclxuLnByb2plY3QsXHJcbi50b2RvIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2Y1YzM2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTA1MTc7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnByb2plY3Q6aG92ZXIsXHJcbi50b2RvOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlM2IyO1xyXG4gIGNvbG9yOiAjMDUwNTE3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2plY3Q6YWN0aXZlLFxyXG4ucHJvamVjdF9fc2VsZWN0ZWQsXHJcbi50b2RvOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYzg4YjtcclxuICBjb2xvcjogIzA1MDUxNztcclxufVxyXG5cclxuLyogQWRkaXRpb25hbCBFbGVtZW50cyBTdHlsaW5nICovXHJcbi8qIFNjcm9sbGJhciBTdHlsaW5nIGZvciBXZWJraXQgQnJvd3NlcnMgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NmNWMzNjtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2VmYzg4YjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRCQUE0QjtBQUM1QjtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBOzs7OztFQUtFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBLG1CQUFtQjtBQUNuQjs7RUFFRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUEsa0JBQWtCO0FBQ2xCOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQSwrQkFBK0I7QUFDL0I7O0VBRUUsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQSwrQkFBK0I7QUFDL0I7Ozs7RUFJRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQSx5QkFBeUI7QUFDekI7O0VBRUUsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQSxnQ0FBZ0M7QUFDaEMsMENBQTBDO0FBQzFDO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVuaXZlcnNhbCBCYXNlIGFuZCBCb2R5ICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTE3O1xcclxcbiAgY29sb3I6ICNkM2Q1ZDc7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuLnByb2plY3RfX2Nsb3NlLFxcclxcbi50b2RvX19jbG9zZSB7XFxyXFxuICBjb2xvcjogI2NmNWMzNjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFpbmVyIGFuZCBDb250ZW50IEFyZWEgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDFmcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCxcXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTA1MTc7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50b2Rvc19fY29udGFpbmVyLFxcclxcbi5oZWFkZXIsXFxyXFxuLm5hdl9fcHJvamVjdHMsXFxyXFxuLm5hdixcXHJcXG4uY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbHMgR2VuZXJhbCAqL1xcclxcbi5wcm9qZWN0X19tb2RhbCxcXHJcXG4udG9kb19fbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTE3O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2Y1YzM2O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX292ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBIZWFkZXJzICovXFxyXFxuLnByb2plY3RfX21vZGFsLS1oZWFkZXIsXFxyXFxuLnRvZG9fX21vZGFsLS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBGb3JtcyBHZW5lcmFsIFN0eWxlcyAqL1xcclxcbi5wcm9qZWN0X19mb3JtLFxcclxcbi50b2RvX19mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIElucHV0IEZpZWxkcyBTaGFyZWQgU3R5bGVzICovXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhLFxcclxcbi50b2RvX19pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZjVjMzY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6ICNkM2Q1ZDc7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG5zZWxlY3Q6OnBsYWNlaG9sZGVyLFxcclxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogI2JiYjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMsXFxyXFxuc2VsZWN0OmZvY3VzLFxcclxcbnRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItY29sb3I6ICNlZmM4OGI7XFxyXFxufVxcclxcblxcclxcbi8qIEJ1dHRvbiBTaGFyZWQgU3R5bGVzICovXFxyXFxuYnV0dG9uLFxcclxcbi50b2RvX19zdWJtaXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y1YzM2O1xcclxcbiAgY29sb3I6ICMwNTA1MTc7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbi50b2RvX19zdWJtaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYzg4YjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSxcXHJcXG4udG9kb19fc3VibWl0OmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlM2IyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcm9qZWN0cyBMaXN0IGFuZCBUb2RvcyBTdHlsaW5nICovXFxyXFxuLnByb2plY3QsXFxyXFxuLnRvZG8ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmNWMzNjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTA1MTc7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyLFxcclxcbi50b2RvOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGUzYjI7XFxyXFxuICBjb2xvcjogIzA1MDUxNztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6YWN0aXZlLFxcclxcbi5wcm9qZWN0X19zZWxlY3RlZCxcXHJcXG4udG9kbzphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYzg4YjtcXHJcXG4gIGNvbG9yOiAjMDUwNTE3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGRpdGlvbmFsIEVsZW1lbnRzIFN0eWxpbmcgKi9cXHJcXG4vKiBTY3JvbGxiYXIgU3R5bGluZyBmb3IgV2Via2l0IEJyb3dzZXJzICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogI2NmNWMzNjtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWZjODhiO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMSBIYWzDoXN6IMOBZMOhbSA8YWRhbUBhaW1mb3JtLmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgbWFjID0gJycsIG9zID0gcmVxdWlyZSgnb3MnKTsgXG4gICAgaWYob3MubmV0d29ya0ludGVyZmFjZXMpIHZhciBuZXR3b3JrSW50ZXJmYWNlcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgaWYobmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBsb29wOlxuICAgICAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0gIT09IHVuZGVmaW5lZCAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xuICAgIH1cbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsImV4cG9ydCBjbGFzcyBET01Db250cm9sbGVyIHtcclxuICAvLyBzdGF0aWMgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcclxuICAvLyBzdGF0aWMgdmFyaWFibGVzXHJcbiAgc3RhdGljIG92ZXJsYXlNb2RhbCA9IG51bGw7XHJcbiAgc3RhdGljIHByb2plY3RNb2RhbCA9IG51bGw7XHJcbiAgc3RhdGljIHRvZG9Nb2RhbCA9IG51bGw7XHJcbiAgc3RhdGljIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgc3RhdGljIG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xyXG4gIHN0YXRpYyBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICBzdGF0aWMgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgc3RhdGljIGFjdGl2ZU1vZGFsID0gbnVsbDtcclxuICBzdGF0aWMgc2VsZWN0ZWRQcm9qZWN0SWQgPSBudWxsO1xyXG5cclxuICAvLyByZW5kZXIgcGFnZSBzdHJ1Y3R1cmVcclxuICBzdGF0aWMgcmVuZGVyUGFnZSgpIHtcclxuICAgIC8vIHJlc2V0IGNvbnRlbnRcclxuICAgIERPTUNvbnRyb2xsZXIubmF2LmlubmVySFRNTCA9IGBcclxuICAgICAgPGgyPlByb2plY3RzPC9oMj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hdl9fcHJvamVjdHNcIj48L2Rpdj5cclxuICAgIGA7XHJcbiAgICBET01Db250cm9sbGVyLmNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aDI+VG9kb3M8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG9kb3NfX2NvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBET01Db250cm9sbGVyLnJlbmRlck1vZGFsKERPTUNvbnRyb2xsZXIuY29udGFpbmVyLCBcInByb2plY3RcIik7IC8vIHRoaXMgY3JlYXRlcyB0aGUgcHJvamVjdCBtb2RhbFxyXG4gICAgRE9NQ29udHJvbGxlci5yZW5kZXJNb2RhbChET01Db250cm9sbGVyLmNvbnRhaW5lciwgXCJ0b2RvXCIpOyAvLyB0aGlzIGNyZWF0ZXMgdGhlIHByb2plY3QgbW9kYWxcclxuXHJcbiAgICBET01Db250cm9sbGVyLmFkZEJ1dHRvbnMoKTtcclxuXHJcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBET01Db250cm9sbGVyLmluaXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZEJ1dHRvbnMoKSB7XHJcbiAgICAvLyBhZGQgcHJvamVjdCBidXR0b25cclxuICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9fYnRuXCIpO1xyXG4gICAgcHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG4gICAgRE9NQ29udHJvbGxlci5oZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XHJcbiAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCBwcm9qZWN0IGJ1dHRvblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFkZCB0b2RvIGJ1dHRvblxyXG4gICAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICB0b2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvX19idG5cIik7XHJcbiAgICB0b2RvQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9CdG4pO1xyXG4gICAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlTW9kYWxDb25maWcobW9kYWxOYW1lKSB7XHJcbiAgICBjb25zdCBtb2RhbENvbmZpZ3MgPSB7XHJcbiAgICAgIHByb2plY3Q6IHtcclxuICAgICAgICBjbGFzczogXCJwcm9qZWN0X19tb2RhbFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IGBcclxuICAgICAgICA8Zm9ybSBjbGFzcz1cInByb2plY3RfX2Zvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19tb2RhbC0taGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMj5BZGQgUHJvamVjdDwvaDI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvamVjdF9fY2xvc2VcIj4mdGltZXM7PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3RfX25hbWVcIiBuYW1lID1cInByb2plY3RfX25hbWVcIiBjbGFzcz1cInByb2plY3RfX25hbWVcIiBwbGFjZUhvbGRlcj1cIlByb2plY3QgTmFtZTpcIiAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3RfX3N1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICBgLFxyXG4gICAgICB9LFxyXG4gICAgICB0b2RvOiB7XHJcbiAgICAgICAgY2xhc3M6IFwidG9kb19fbW9kYWxcIixcclxuICAgICAgICBjb250ZW50OiBgXHJcbiAgICAgICAgICA8Zm9ybSBjbGFzcz1cInRvZG9fX2Zvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9fX21vZGFsLS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+QWRkIFRvZG88L2gyPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwidG9kb19fY2xvc2VcIj4mdGltZXM7PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9fX21vZGFsLS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvX19uYW1lXCIgbmFtZT1cInRvZG9fX25hbWVcIiBjbGFzcz1cInRvZG9fX2lucHV0XCIgcGxhY2Vob2xkZXI9XCJUb2RvIE5hbWU6XCIgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRvZG9fX2Rlc2NyaXB0aW9uXCIgbmFtZT1cInRvZG9fX2Rlc2NyaXB0aW9uXCIgY2xhc3M9XCJ0b2RvX19pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb246XCIgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cInRvZG9fX2R1ZURhdGVcIiBuYW1lPVwidG9kb19fZHVlRGF0ZVwiIGNsYXNzPVwidG9kb19faW5wdXRcIiBwbGFjZWhvbGRlcj1cIkR1ZSBEYXRlOlwiIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInRvZG9fX3ByaW9yaXR5XCIgbmFtZT1cInRvZG9fX3ByaW9yaXR5XCIgY2xhc3M9XCJ0b2RvX19pbnB1dFwiIHBsYWNlaG9sZGVyPVwiUHJpb3JpdHk6XCIgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRvZG9fX25vdGVzXCIgbmFtZT1cInRvZG9fX25vdGVzXCIgY2xhc3M9XCJ0b2RvX19pbnB1dFwiIHBsYWNlaG9sZGVyPVwiTm90ZXM6XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b2RvX19zdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICBgLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBtb2RhbENvbmZpZ3NbbW9kYWxOYW1lXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRCdXR0b24oKSB7XHJcbiAgICAvLyBhZGQgcHJvamVjdCBidXR0b25cclxuICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9fYnRuXCIpO1xyXG4gICAgcHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xyXG5cclxuICAgIC8vIGFkZCB0b2RvIGJ1dHRvblxyXG4gICAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICB0b2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvX19idG5cIik7XHJcbiAgICB0b2RvQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9CdG4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbmRlck1vZGFsKGNvbnRhaW5lciwgbW9kYWxOYW1lKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzOiBtb2RhbENsYXNzLCBjb250ZW50IH0gPVxyXG4gICAgICBET01Db250cm9sbGVyLmNyZWF0ZU1vZGFsQ29uZmlnKG1vZGFsTmFtZSk7XHJcblxyXG4gICAgLy8gbW9kYWwgb3ZlcmxheVxyXG4gICAgaWYgKCFET01Db250cm9sbGVyLm92ZXJsYXlNb2RhbCkge1xyXG4gICAgICBET01Db250cm9sbGVyLm92ZXJsYXlNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIub3ZlcmxheU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fb3ZlcmxheVwiKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKERPTUNvbnRyb2xsZXIub3ZlcmxheU1vZGFsKTtcclxuICAgICAgRE9NQ29udHJvbGxlci5vdmVybGF5TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyBFbnN1cmUgaXQgaXMgaW5pdGlhbGx5IGhpZGRlblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQobW9kYWxDbGFzcyk7XHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgaWYgKG1vZGFsTmFtZSA9PT0gXCJwcm9qZWN0XCIpIHtcclxuICAgICAgRE9NQ29udHJvbGxlci5wcm9qZWN0TW9kYWwgPSBtb2RhbDtcclxuICAgIH0gZWxzZSBpZiAobW9kYWxOYW1lID09PSBcInRvZG9cIikge1xyXG4gICAgICBET01Db250cm9sbGVyLnRvZG9Nb2RhbCA9IG1vZGFsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRvZ2dsZU1vZGFsKHRhcmdldE1vZGFsKSB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgdGFyZ2V0TW9kYWwgaXMgYmVpbmcgc2hvd24gb3IgaGlkZGVuXHJcbiAgICBjb25zdCBpc1Nob3dpbmcgPSB0YXJnZXRNb2RhbCAmJiB0YXJnZXRNb2RhbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCI7XHJcblxyXG4gICAgLy8gdG9nZ2xlIG92ZXJsYXkgZmlyc3RcclxuICAgIHRoaXMub3ZlcmxheU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBpc1Nob3dpbmcgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcclxuXHJcbiAgICAvLyB0b2dnbGUgdGFyZ2V0IG1vZGFsXHJcbiAgICBpZiAodGFyZ2V0TW9kYWwpIHtcclxuICAgICAgdGFyZ2V0TW9kYWwuc3R5bGUuZGlzcGxheSA9IGlzU2hvd2luZyA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG5cclxuICAgICAgLy8gdXBkYXRlIGFjdGl2ZU1vZGFsIHJlZlxyXG4gICAgICB0aGlzLmFjdGl2ZU1vZGFsID0gaXNTaG93aW5nID8gbnVsbCA6IHRhcmdldE1vZGFsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGluaXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIC8vIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnNcclxuICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfX2J0blwiKTtcclxuICAgIC8vIHRvZ2dsZSBwcm9qZWN0IG1vZGFsXHJcbiAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMudG9nZ2xlTW9kYWwoRE9NQ29udHJvbGxlci5wcm9qZWN0TW9kYWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb19fYnRuXCIpO1xyXG4gICAgLy8gdG9nZ2xlIHRvZG8gbW9kYWxcclxuICAgIHRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy50b2dnbGVNb2RhbChET01Db250cm9sbGVyLnRvZG9Nb2RhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBvdmVybGF5IG1vZGFsIGV2ZW50IGxpc3RlbmVyXHJcbiAgICBET01Db250cm9sbGVyLm92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19vdmVybGF5XCIpICYmXHJcbiAgICAgICAgRE9NQ29udHJvbGxlci5hY3RpdmVNb2RhbFxyXG4gICAgICApIHtcclxuICAgICAgICBET01Db250cm9sbGVyLnRvZ2dsZU1vZGFsKERPTUNvbnRyb2xsZXIuYWN0aXZlTW9kYWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhY2NlcHRGb3JtKGNhbGxiYWNrLCBmb3JtU2VsZWN0b3IsIG1vZGFsKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtU2VsZWN0b3IpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0ge307XHJcbiAgICAgIG5ldyBGb3JtRGF0YShmb3JtKS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgZm9ybURhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhmb3JtRGF0YSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNhbGxiYWNrKGZvcm1EYXRhKTtcclxuICAgICAgICBET01Db250cm9sbGVyLnRvZ2dsZU1vZGFsKG1vZGFsKTtcclxuICAgICAgfVxyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHJlbmRlciBhbGwgcHJvamVjdHNcclxuICBzdGF0aWMgcmVuZGVyUHJvamVjdHMocHJvamVjdHNJbnN0YW5jZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fcHJvamVjdHNcIik7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvLyByZXNldCBwcm9qZWN0cyBsaXN0XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNBcnIgPSBwcm9qZWN0c0luc3RhbmNlLmdldFByb2plY3RzKCk7XHJcbiAgICBwcm9qZWN0c0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xyXG4gICAgICBwcm9qZWN0RGl2LmlubmVySFRNTCA9IGA8aDM+JHtwcm9qZWN0Lm5hbWV9PC9oMz5cclxuICAgICAgPGEgY2xhc3M9XCJ0b2RvX19jbG9zZVwiPiZ0aW1lczs8L2E+YDtcclxuICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IERFTEVURSBCVVRUT04gRk9SIFBST0pFQ1RcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kb19fY2xvc2VcIikpIHtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJoZWxlbG9oZWhlbGVsb2hlaGVsZWxvaGVoZWxlbG9oZVwiKTsgLy8gdGhpcyBpcyB0aGUgZGVsZXRlIGJ1dHRvblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGVkIHByb2plY3QgSUQgYW5kIHJlbmRlciBpdHMgdG9kb3NcclxuICAgICAgICBET01Db250cm9sbGVyLnNlbGVjdGVkUHJvamVjdElkID0gcHJvamVjdC5pZDtcclxuICAgICAgICBET01Db250cm9sbGVyLnJlbmRlclRvZG9zRm9yUHJvamVjdChwcm9qZWN0LmlkLCBwcm9qZWN0c0luc3RhbmNlKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGFjdGl2ZSBjbGFzcyB0byBzZWxlY3RlZCBwcm9qZWN0XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3RfX3NlbGVjdGVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RfX3NlbGVjdGVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocHJvamVjdHNBcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBkZWZhdWx0IHRvIGZpcnN0IHByb2plY3RcclxuICAgICAgY29uc3QgZmlyc3RQcm9qZWN0RGl2ID0gcHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZDtcclxuICAgICAgZmlyc3RQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X19zZWxlY3RlZFwiKTtcclxuICAgICAgRE9NQ29udHJvbGxlci5zZWxlY3RlZFByb2plY3RJZCA9IHByb2plY3RzQXJyWzBdLmlkO1xyXG4gICAgICBET01Db250cm9sbGVyLnJlbmRlclRvZG9zRm9yUHJvamVjdChcclxuICAgICAgICBET01Db250cm9sbGVyLnNlbGVjdGVkUHJvamVjdElkLFxyXG4gICAgICAgIHByb2plY3RzSW5zdGFuY2VcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW5kZXJUb2Rvc0ZvclByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0SWQsIHByb2plY3RzSW5zdGFuY2UpIHtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdElkKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzSW5zdGFuY2UuZmluZFByb2plY3RCeUlkKHNlbGVjdGVkUHJvamVjdElkKTtcclxuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc19fY29udGFpbmVyXCIpO1xyXG4gICAgdG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gcmVzZXQgdG9kb3MgbGlzdFxyXG5cclxuICAgIGlmIChzZWxlY3RlZFByb2plY3QpIHtcclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XHJcbiAgICAgICAgdG9kb0VsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgPGg0PiR7dG9kby50aXRsZX08L2g0PlxyXG4gICAgICAgICAgPHA+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDxwPkR1ZTogJHt0b2RvLmR1ZURhdGV9PC9wPlxyXG4gICAgICAgICAgPHA+UHJpb3JpdHk6ICR7dG9kby5wcmlvcml0eX08L3A+XHJcbiAgICAgICAgICA8IS0tIGFkZCBtb3JlIC0tPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFN0ZXAgMzogQWRkIFRvZG8gRm9ybSBIYW5kbGluZ1xyXG4vLyBTdGVwIDQ6IEFkanVzdCB0aGUgVG9kbyBGb3JtIFN1Ym1pc3Npb24gTG9naWNcclxuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL1RvZG9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG8odG9kbykge1xyXG4gICAgaWYgKHRvZG8gaW5zdGFuY2VvZiBUb2RvKSB7XHJcbiAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTsgLy8gdGhpcyBpcyB0byB0aGUgcHJvamVjdCBvYmplY3RcclxuICAgICAgLy8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlO1xyXG4gICAgICBQcm9qZWN0LnNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCB0b2RvXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlO1xyXG4gIHN0YXRpYyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShwcm9qZWN0SW5zdGFuY2UpIHtcclxuICAgIC8vIGdldCBleGlzdGluZyBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZSwgZWxzZSBbXVxyXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgcHJvZWpjdCBleGlzdHMgaW4gbG9jYWxTdG9yYWdlXHJcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBleGlzdGluZ1Byb2plY3RzLmZpbmRJbmRleChcclxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJbnN0YW5jZS5pZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAvLyB1cGRhdGUgZXhpc3RpbmcgcHJvamVjdFxyXG4gICAgICBleGlzdGluZ1Byb2plY3RzW3Byb2plY3RJbmRleF0gPSBwcm9qZWN0SW5zdGFuY2U7IC8vIGRvIEkgbmVlZCB0byBzdHJpbmdpZnk/XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBBZGQgbmV3IHByb2plY3RcclxuICAgICAgZXhpc3RpbmdQcm9qZWN0cy5wdXNoKHByb2plY3RJbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1Byb2plY3RzKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb2RvQnlJZChpZCkge1xyXG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb0J5SWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgLy8gc2hvdWxkIGFkZFByb2plY3QgYmUgaGVyZT9cclxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgZmluZFByb2plY3RCeUlkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KGlkKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IGlkKTtcclxuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcclxuICB9XHJcblxyXG4gIGxvYWRGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaWQsXHJcbiAgICBwcm9qZWN0SWQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZXMsXHJcbiAgICBpc0NvbXBsZXRlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZDtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7IC8vIG9yZGVyYnkgcHJpb3JpdHlcclxuICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XHJcbiAgICAvLyB0aGlzLmNoZWNrTGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLy8gZWRpdCB0aXRsZVxyXG4gIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGRlc2NyaXB0aW9uXHJcbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIC8vIGVkaXQgZHVlRGF0ZVxyXG4gIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIC8vIGVkaXQgcHJpb3JpdHlcclxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgLy8gZWRpdCBub3Rlc1xyXG4gIHNldE5vdGVzKG5vdGVzKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGlzQ29tcGxldGVcclxuICBzZXRJc0NvbXBsZXRlKGlzQ29tcGxldGUpIHtcclxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XHJcbiAgfVxyXG5cclxuICAvLyBzaG91bGQgaSBhZGQgY2hlY2tsaXN0IGNsYXNzP1xyXG5cclxuICAvLyBhZGQgY2hlY2tsaXN0IGl0ZW1cclxuICBhZGRDaGVja2xpc3RJdGVtKGNoZWNrbGlzdEl0ZW0pIHtcclxuICAgIHRoaXMuY2hlY2tMaXN0LnB1c2goY2hlY2tsaXN0SXRlbSk7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGNoZWNrbGlzdCBpdGVtXHJcblxyXG4gIC8vIHJlbW92ZSBjaGVja2xpc3QgaXRlbVxyXG59XHJcbiIsIi8vIGV4cG9ydCBjbGFzcyBVdGlsIHtcclxuLy8gICBzdGF0aWMgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb3ApIHtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb3AsIEpTT04uc3RyaW5naWZ5KHRoaXNbcHJvcF0pKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIC8vICAgLy8gRklYTUU6IEkgZG9uJ3QgdGhpbmsgdGhpcyBpcyB3b3JraW5nIC8vIFVuY2F1Z2h0IFN5bnRheEVycm9yOiBcInVuZGVmaW5lZFwiIGlzIG5vdCB2YWxpZCBKU09OXHJcbi8vICAgc3RhdGljIGdldEZyb21Mb2NhbFN0b3JhZ2UocHJvcCkge1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb3ApO1xyXG4vLyAgICAgaWYgKGRhdGEpIHtcclxuLy8gICAgICAgdGhpc1twcm9wXSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcCk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vY2xhc3Nlcy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlcy9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9jbGFzc2VzL1RvZG9cIjtcclxuaW1wb3J0IHsgRE9NQ29udHJvbGxlciB9IGZyb20gXCIuL2NsYXNzZXMvRE9NQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG4vLyBkZWZpbmluZyBwcm9qZWN0c1xyXG5jb25zdCBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cygpO1xyXG4vLyBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RcclxuXHJcbmlmIChwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmxlbmd0aCA9PT0gMCkge1xyXG4gIGNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QodW5pcWlkKCksIFwiUHJvamVjdCAxXCIpO1xyXG5cclxuICAvLyBleGFtcGxlIHRvZG9cclxuICBjb25zdCB0b2RvMSA9IG5ldyBUb2RvKFxyXG4gICAgdW5pcWlkKCksXHJcbiAgICBcIlRvZG8gMVwiLFxyXG4gICAgXCJEZXNjcmlwdGlvbiAxXCIsXHJcbiAgICBEYXRlLm5vdygpLCAvLyBkYXRlIHRvIHNvbWV0aGluZyBtb3JlIHJlYWRhYmxlXHJcbiAgICAxMCxcclxuICAgIFwiTm90ZXMuLi4gMVwiLFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICAvLyBhZGRpbmcgdG9kby9wcm9qZWN0IHRvIHByb2plY3QvcHJvamVjdHNcclxuICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QxKTtcclxuICBwcm9qZWN0MS5hZGRUb2RvKHRvZG8xKTtcclxufVxyXG5cclxuLy8gcmVuZGVyIHBhZ2VcclxuRE9NQ29udHJvbGxlci5yZW5kZXJQYWdlKCk7XHJcbkRPTUNvbnRyb2xsZXIucmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xyXG5cclxuLy8gcmVuZGVyIHRvZG9zIGZvciBkZWZhdWx0IHByb2plY3RcclxubGV0IGRlZmF1bHRQcm9qZWN0SWQgPSBwcm9qZWN0cy5nZXRQcm9qZWN0cygpWzBdLmlkO1xyXG5ET01Db250cm9sbGVyLnJlbmRlclRvZG9zRm9yUHJvamVjdChkZWZhdWx0UHJvamVjdElkLCBwcm9qZWN0cyk7XHJcblxyXG4vLyBhZGQgcHJvamVjdFxyXG5ET01Db250cm9sbGVyLmFjY2VwdEZvcm0oXHJcbiAgKGZvcm1EYXRhKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodW5pcWlkKCksIGZvcm1EYXRhLnByb2plY3RfX25hbWUpO1xyXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgIERPTUNvbnRyb2xsZXIucmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xyXG4gIH0sXHJcbiAgXCIucHJvamVjdF9fZm9ybVwiLFxyXG4gIERPTUNvbnRyb2xsZXIucHJvamVjdE1vZGFsXHJcbik7XHJcblxyXG4vLyBhZGQgdG9kb1xyXG5ET01Db250cm9sbGVyLmFjY2VwdEZvcm0oXHJcbiAgKGZvcm1EYXRhKSA9PiB7XHJcbiAgICAvLyBpZiAoIURPTUNvbnRyb2xsZXIuc2VsZWN0ZWRQcm9qZWN0SWQpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coXCJObyBwcm9qZWN0IHNlbGVjdGVkXCIpO1xyXG4gICAgLy8gICByZXR1cm47XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXHJcbiAgICAgIHVuaXFpZCgpLFxyXG4gICAgICBmb3JtRGF0YS50b2RvX19uYW1lLFxyXG4gICAgICBmb3JtRGF0YS50b2RvX19kZXNjcmlwdGlvbixcclxuICAgICAgZm9ybURhdGEudG9kb19fZHVlRGF0ZSxcclxuICAgICAgZm9ybURhdGEudG9kb19fcHJpb3JpdHksXHJcbiAgICAgIGZvcm1EYXRhLnRvZG9fX25vdGVzLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcHJvamVjdERhdGEgPSBwcm9qZWN0cy5maW5kUHJvamVjdEJ5SWQoRE9NQ29udHJvbGxlci5zZWxlY3RlZFByb2plY3RJZCk7XHJcbiAgICBpZiAoIXByb2plY3REYXRhKSB7XHJcbiAgICAgIHByb2plY3REYXRhID0gcHJvamVjdHMuZ2V0UHJvamVjdHMoKVswXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0RGF0YS5pZCwgcHJvamVjdERhdGEubmFtZSk7XHJcbiAgICBwcm9qZWN0LnRvZG9zID0gcHJvamVjdERhdGEudG9kb3M7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0IGluc3RhbmNlb2YgUHJvamVjdCk7XHJcbiAgICBwcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XHJcbiAgICBET01Db250cm9sbGVyLnJlbmRlclRvZG9zRm9yUHJvamVjdChcclxuICAgICAgRE9NQ29udHJvbGxlci5zZWxlY3RlZFByb2plY3RJZCA/PyBwcm9qZWN0cy5nZXRQcm9qZWN0cygpWzBdLmlkLFxyXG4gICAgICBwcm9qZWN0c1xyXG4gICAgKTtcclxuICB9LFxyXG4gIFwiLnRvZG9fX2Zvcm1cIixcclxuICBET01Db250cm9sbGVyLnRvZG9Nb2RhbFxyXG4pO1xyXG5cclxuLy8gVE9ETzoxLiAgc3R5bGluZ1xyXG5cclxuLy8gVE9ETzoyLiByZW1vdmUgcHJvamVjdFxyXG5cclxuLy8gVE9ETzozLiByZW1vdmUgdG9kb1xyXG5cclxuLy8gVE9ETzogQ3VycmVudGx5IEkgY2FuIG9ubHkgYWRkIFRvZG9zIHdoZW4gYSBwcm9qZWN0IGlzIGNsaWNrZWQgb24uLlxyXG4vLyBpZiBJIGRvbid0IGNsaWNrIG9uIHRoZSBwcm9qZWN0IGJlZm9yZWhhbmQsIGl0IGRvZXNuJ3Qgd29ya1xyXG4vLyB0byBmaXggdGhpcywgd2hlbiBJIGFkZCBuZXcgcHJvamVjdCwgdGhlIHByb2plY3Qgc2hvdWxkIGJlIHNlbGVjdGVkXHJcbi8vIGFuZCB0aGUgdG9kb3Mgc2hvdWxkIGJlIHJlbmRlcmVkIGZvciB0aGF0IHByb2plY3RcclxuXHJcbi8vIFRPRE86XHJcbi8vIFVwb24gZmlyc3QgbG9hZCwgdGhlIHBhZ2Ugc2hvdWxkIHJlbmRlciB0aGUgcHJvamVjdHMgYW5kIHRoZSBmaXJzdCBwcm9qZWN0J3MgdG9kb3MuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==