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
      <h2 class="todos__project--name">Todos</h2>
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
    const todosProjectName = document.querySelector(".todos__project--name");
    todosProjectName.textContent = selectedProject.name ?? "Todos";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGlFQUFhO0FBQ2I7QUFDQTtBQUNBLGlFQUFhO0FBQ2I7QUFDQSwyQkFBMkIscURBQU8sQ0FBQyw2Q0FBTTtBQUN6QztBQUNBLElBQUksaUVBQWE7QUFDakIsR0FBRztBQUNIO0FBQ0EsRUFBRSxpRUFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlFQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQ0FBSTtBQUM1QixNQUFNLDZDQUFNO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpRUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFPO0FBQzFDO0FBQ0EsSUFBSSxpRUFBYTtBQUNqQixNQUFNLGlFQUFhO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLGlFQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9jbGFzc2VzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvY2xhc3Nlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2NsYXNzZXMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvY2xhc3Nlcy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2NsYXNzZXMvVXRpbC5qcyIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVW5pdmVyc2FsIEJhc2UgYW5kIEJvZHkgKi9cclxuKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDUxNztcclxuICBjb2xvcjogI2QzZDVkNztcclxufVxyXG5cclxuYSxcclxuLnByb2plY3RfX2Nsb3NlLFxyXG4udG9kb19fY2xvc2Uge1xyXG4gIGNvbG9yOiAjY2Y1YzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhbmQgQ29udGVudCBBcmVhICovXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAxZnI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250ZW50LFxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTE3O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbi50b2Rvc19fY29udGFpbmVyLFxyXG4uaGVhZGVyLFxyXG4ubmF2X19wcm9qZWN0cyxcclxuLm5hdixcclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLyogTW9kYWxzIEdlbmVyYWwgKi9cclxuLnByb2plY3RfX21vZGFsLFxyXG4udG9kb19fbW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTE3O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmNWMzNjtcclxufVxyXG5cclxuLm1vZGFsX19vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi8qIE1vZGFsIEhlYWRlcnMgKi9cclxuLnByb2plY3RfX21vZGFsLS1oZWFkZXIsXHJcbi50b2RvX19tb2RhbC0taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIEZvcm1zIEdlbmVyYWwgU3R5bGVzICovXHJcbi5wcm9qZWN0X19mb3JtLFxyXG4udG9kb19fZm9ybSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi8qIElucHV0IEZpZWxkcyBTaGFyZWQgU3R5bGVzICovXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhLFxyXG4udG9kb19faW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmNWMzNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjZDNkNWQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxyXG5zZWxlY3Q6OnBsYWNlaG9sZGVyLFxyXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmJiO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxuc2VsZWN0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICNlZmM4OGI7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBTaGFyZWQgU3R5bGVzICovXHJcbmJ1dHRvbixcclxuLnRvZG9fX3N1Ym1pdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjVjMzY7XHJcbiAgY29sb3I6ICMwNTA1MTc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcixcclxuLnRvZG9fX3N1Ym1pdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYzg4YjtcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSxcclxuLnRvZG9fX3N1Ym1pdDphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGUzYjI7XHJcbn1cclxuXHJcbi8qIFByb2plY3RzIExpc3QgYW5kIFRvZG9zIFN0eWxpbmcgKi9cclxuLnByb2plY3QsXHJcbi50b2RvIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2Y1YzM2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTA1MTc7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnByb2plY3Q6aG92ZXIsXHJcbi50b2RvOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlM2IyO1xyXG4gIGNvbG9yOiAjMDUwNTE3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2plY3Q6YWN0aXZlLFxyXG4ucHJvamVjdF9fc2VsZWN0ZWQsXHJcbi50b2RvOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYzg4YjtcclxuICBjb2xvcjogIzA1MDUxNztcclxufVxyXG5cclxuLyogQWRkaXRpb25hbCBFbGVtZW50cyBTdHlsaW5nICovXHJcbi8qIFNjcm9sbGJhciBTdHlsaW5nIGZvciBXZWJraXQgQnJvd3NlcnMgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NmNWMzNjtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2VmYzg4YjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRCQUE0QjtBQUM1QjtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBOzs7OztFQUtFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBLG1CQUFtQjtBQUNuQjs7RUFFRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUEsa0JBQWtCO0FBQ2xCOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQSwrQkFBK0I7QUFDL0I7O0VBRUUsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQSwrQkFBK0I7QUFDL0I7Ozs7RUFJRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQSx5QkFBeUI7QUFDekI7O0VBRUUsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQSxnQ0FBZ0M7QUFDaEMsMENBQTBDO0FBQzFDO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVuaXZlcnNhbCBCYXNlIGFuZCBCb2R5ICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTE3O1xcclxcbiAgY29sb3I6ICNkM2Q1ZDc7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuLnByb2plY3RfX2Nsb3NlLFxcclxcbi50b2RvX19jbG9zZSB7XFxyXFxuICBjb2xvcjogI2NmNWMzNjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFpbmVyIGFuZCBDb250ZW50IEFyZWEgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDFmcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCxcXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTA1MTc7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50b2Rvc19fY29udGFpbmVyLFxcclxcbi5oZWFkZXIsXFxyXFxuLm5hdl9fcHJvamVjdHMsXFxyXFxuLm5hdixcXHJcXG4uY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbHMgR2VuZXJhbCAqL1xcclxcbi5wcm9qZWN0X19tb2RhbCxcXHJcXG4udG9kb19fbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTE3O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2Y1YzM2O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX292ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBIZWFkZXJzICovXFxyXFxuLnByb2plY3RfX21vZGFsLS1oZWFkZXIsXFxyXFxuLnRvZG9fX21vZGFsLS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBGb3JtcyBHZW5lcmFsIFN0eWxlcyAqL1xcclxcbi5wcm9qZWN0X19mb3JtLFxcclxcbi50b2RvX19mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIElucHV0IEZpZWxkcyBTaGFyZWQgU3R5bGVzICovXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhLFxcclxcbi50b2RvX19pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZjVjMzY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6ICNkM2Q1ZDc7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG5zZWxlY3Q6OnBsYWNlaG9sZGVyLFxcclxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogI2JiYjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMsXFxyXFxuc2VsZWN0OmZvY3VzLFxcclxcbnRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItY29sb3I6ICNlZmM4OGI7XFxyXFxufVxcclxcblxcclxcbi8qIEJ1dHRvbiBTaGFyZWQgU3R5bGVzICovXFxyXFxuYnV0dG9uLFxcclxcbi50b2RvX19zdWJtaXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y1YzM2O1xcclxcbiAgY29sb3I6ICMwNTA1MTc7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbi50b2RvX19zdWJtaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYzg4YjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSxcXHJcXG4udG9kb19fc3VibWl0OmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlM2IyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcm9qZWN0cyBMaXN0IGFuZCBUb2RvcyBTdHlsaW5nICovXFxyXFxuLnByb2plY3QsXFxyXFxuLnRvZG8ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmNWMzNjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTA1MTc7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyLFxcclxcbi50b2RvOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGUzYjI7XFxyXFxuICBjb2xvcjogIzA1MDUxNztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6YWN0aXZlLFxcclxcbi5wcm9qZWN0X19zZWxlY3RlZCxcXHJcXG4udG9kbzphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYzg4YjtcXHJcXG4gIGNvbG9yOiAjMDUwNTE3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGRpdGlvbmFsIEVsZW1lbnRzIFN0eWxpbmcgKi9cXHJcXG4vKiBTY3JvbGxiYXIgU3R5bGluZyBmb3IgV2Via2l0IEJyb3dzZXJzICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogI2NmNWMzNjtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWZjODhiO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMSBIYWzDoXN6IMOBZMOhbSA8YWRhbUBhaW1mb3JtLmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgbWFjID0gJycsIG9zID0gcmVxdWlyZSgnb3MnKTsgXG4gICAgaWYob3MubmV0d29ya0ludGVyZmFjZXMpIHZhciBuZXR3b3JrSW50ZXJmYWNlcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgaWYobmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBsb29wOlxuICAgICAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0gIT09IHVuZGVmaW5lZCAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xuICAgIH1cbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsImV4cG9ydCBjbGFzcyBET01Db250cm9sbGVyIHtcclxuICAvLyBzdGF0aWMgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcclxuICAvLyBzdGF0aWMgdmFyaWFibGVzXHJcbiAgc3RhdGljIG92ZXJsYXlNb2RhbCA9IG51bGw7XHJcbiAgc3RhdGljIHByb2plY3RNb2RhbCA9IG51bGw7XHJcbiAgc3RhdGljIHRvZG9Nb2RhbCA9IG51bGw7XHJcbiAgc3RhdGljIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgc3RhdGljIG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xyXG4gIHN0YXRpYyBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICBzdGF0aWMgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgc3RhdGljIGFjdGl2ZU1vZGFsID0gbnVsbDtcclxuICBzdGF0aWMgc2VsZWN0ZWRQcm9qZWN0SWQgPSBudWxsO1xyXG5cclxuICAvLyByZW5kZXIgcGFnZSBzdHJ1Y3R1cmVcclxuICBzdGF0aWMgcmVuZGVyUGFnZSgpIHtcclxuICAgIC8vIHJlc2V0IGNvbnRlbnRcclxuICAgIERPTUNvbnRyb2xsZXIubmF2LmlubmVySFRNTCA9IGBcclxuICAgICAgPGgyPlByb2plY3RzPC9oMj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hdl9fcHJvamVjdHNcIj48L2Rpdj5cclxuICAgIGA7XHJcbiAgICBET01Db250cm9sbGVyLmNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aDIgY2xhc3M9XCJ0b2Rvc19fcHJvamVjdC0tbmFtZVwiPlRvZG9zPC9oMj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRvZG9zX19jb250YWluZXJcIj48L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgRE9NQ29udHJvbGxlci5yZW5kZXJNb2RhbChET01Db250cm9sbGVyLmNvbnRhaW5lciwgXCJwcm9qZWN0XCIpOyAvLyB0aGlzIGNyZWF0ZXMgdGhlIHByb2plY3QgbW9kYWxcclxuICAgIERPTUNvbnRyb2xsZXIucmVuZGVyTW9kYWwoRE9NQ29udHJvbGxlci5jb250YWluZXIsIFwidG9kb1wiKTsgLy8gdGhpcyBjcmVhdGVzIHRoZSBwcm9qZWN0IG1vZGFsXHJcblxyXG4gICAgRE9NQ29udHJvbGxlci5hZGRCdXR0b25zKCk7XHJcblxyXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgRE9NQ29udHJvbGxlci5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRCdXR0b25zKCkge1xyXG4gICAgLy8gYWRkIHByb2plY3QgYnV0dG9uXHJcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RfX2J0blwiKTtcclxuICAgIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgIERPTUNvbnRyb2xsZXIuaGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xyXG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgcHJvamVjdCBidXR0b25cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhZGQgdG9kbyBidXR0b25cclxuICAgIGNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgdG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwidG9kb19fYnRuXCIpO1xyXG4gICAgdG9kb0J0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvQnRuKTtcclxuICAgIHRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZU1vZGFsQ29uZmlnKG1vZGFsTmFtZSkge1xyXG4gICAgY29uc3QgbW9kYWxDb25maWdzID0ge1xyXG4gICAgICBwcm9qZWN0OiB7XHJcbiAgICAgICAgY2xhc3M6IFwicHJvamVjdF9fbW9kYWxcIixcclxuICAgICAgICBjb250ZW50OiBgXHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJwcm9qZWN0X19mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fbW9kYWwtLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDI+QWRkIFByb2plY3Q8L2gyPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInByb2plY3RfX2Nsb3NlXCI+JnRpbWVzOzwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0X19uYW1lXCIgbmFtZSA9XCJwcm9qZWN0X19uYW1lXCIgY2xhc3M9XCJwcm9qZWN0X19uYW1lXCIgcGxhY2VIb2xkZXI9XCJQcm9qZWN0IE5hbWU6XCIgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0X19zdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYCxcclxuICAgICAgfSxcclxuICAgICAgdG9kbzoge1xyXG4gICAgICAgIGNsYXNzOiBcInRvZG9fX21vZGFsXCIsXHJcbiAgICAgICAgY29udGVudDogYFxyXG4gICAgICAgICAgPGZvcm0gY2xhc3M9XCJ0b2RvX19mb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvX19tb2RhbC0taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgyPkFkZCBUb2RvPC9oMj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cInRvZG9fX2Nsb3NlXCI+JnRpbWVzOzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvX19tb2RhbC0tYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidG9kb19fbmFtZVwiIG5hbWU9XCJ0b2RvX19uYW1lXCIgY2xhc3M9XCJ0b2RvX19pbnB1dFwiIHBsYWNlaG9sZGVyPVwiVG9kbyBOYW1lOlwiIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvX19kZXNjcmlwdGlvblwiIG5hbWU9XCJ0b2RvX19kZXNjcmlwdGlvblwiIGNsYXNzPVwidG9kb19faW5wdXRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uOlwiIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0b2RvX19kdWVEYXRlXCIgbmFtZT1cInRvZG9fX2R1ZURhdGVcIiBjbGFzcz1cInRvZG9fX2lucHV0XCIgcGxhY2Vob2xkZXI9XCJEdWUgRGF0ZTpcIiAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJ0b2RvX19wcmlvcml0eVwiIG5hbWU9XCJ0b2RvX19wcmlvcml0eVwiIGNsYXNzPVwidG9kb19faW5wdXRcIiBwbGFjZWhvbGRlcj1cIlByaW9yaXR5OlwiIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvX19ub3Rlc1wiIG5hbWU9XCJ0b2RvX19ub3Rlc1wiIGNsYXNzPVwidG9kb19faW5wdXRcIiBwbGFjZWhvbGRlcj1cIk5vdGVzOlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9kb19fc3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gbW9kYWxDb25maWdzW21vZGFsTmFtZV07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkQnV0dG9uKCkge1xyXG4gICAgLy8gYWRkIHByb2plY3QgYnV0dG9uXHJcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RfX2J0blwiKTtcclxuICAgIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcclxuXHJcbiAgICAvLyBhZGQgdG9kbyBidXR0b25cclxuICAgIGNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgdG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwidG9kb19fYnRuXCIpO1xyXG4gICAgdG9kb0J0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvQnRuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW5kZXJNb2RhbChjb250YWluZXIsIG1vZGFsTmFtZSkge1xyXG4gICAgY29uc3QgeyBjbGFzczogbW9kYWxDbGFzcywgY29udGVudCB9ID1cclxuICAgICAgRE9NQ29udHJvbGxlci5jcmVhdGVNb2RhbENvbmZpZyhtb2RhbE5hbWUpO1xyXG5cclxuICAgIC8vIG1vZGFsIG92ZXJsYXlcclxuICAgIGlmICghRE9NQ29udHJvbGxlci5vdmVybGF5TW9kYWwpIHtcclxuICAgICAgRE9NQ29udHJvbGxlci5vdmVybGF5TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBET01Db250cm9sbGVyLm92ZXJsYXlNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX292ZXJsYXlcIik7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChET01Db250cm9sbGVyLm92ZXJsYXlNb2RhbCk7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIub3ZlcmxheU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgLy8gRW5zdXJlIGl0IGlzIGluaXRpYWxseSBoaWRkZW5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKG1vZGFsQ2xhc3MpO1xyXG4gICAgbW9kYWwuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgIGlmIChtb2RhbE5hbWUgPT09IFwicHJvamVjdFwiKSB7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIucHJvamVjdE1vZGFsID0gbW9kYWw7XHJcbiAgICB9IGVsc2UgaWYgKG1vZGFsTmFtZSA9PT0gXCJ0b2RvXCIpIHtcclxuICAgICAgRE9NQ29udHJvbGxlci50b2RvTW9kYWwgPSBtb2RhbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyB0b2dnbGVNb2RhbCh0YXJnZXRNb2RhbCkge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHRhcmdldE1vZGFsIGlzIGJlaW5nIHNob3duIG9yIGhpZGRlblxyXG4gICAgY29uc3QgaXNTaG93aW5nID0gdGFyZ2V0TW9kYWwgJiYgdGFyZ2V0TW9kYWwuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiO1xyXG5cclxuICAgIC8vIHRvZ2dsZSBvdmVybGF5IGZpcnN0XHJcbiAgICB0aGlzLm92ZXJsYXlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gaXNTaG93aW5nID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcblxyXG4gICAgLy8gdG9nZ2xlIHRhcmdldCBtb2RhbFxyXG4gICAgaWYgKHRhcmdldE1vZGFsKSB7XHJcbiAgICAgIHRhcmdldE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBpc1Nob3dpbmcgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSBhY3RpdmVNb2RhbCByZWZcclxuICAgICAgdGhpcy5hY3RpdmVNb2RhbCA9IGlzU2hvd2luZyA/IG51bGwgOiB0YXJnZXRNb2RhbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBidXR0b24gZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X19idG5cIik7XHJcbiAgICAvLyB0b2dnbGUgcHJvamVjdCBtb2RhbFxyXG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsKERPTUNvbnRyb2xsZXIucHJvamVjdE1vZGFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9fX2J0blwiKTtcclxuICAgIC8vIHRvZ2dsZSB0b2RvIG1vZGFsXHJcbiAgICB0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMudG9nZ2xlTW9kYWwoRE9NQ29udHJvbGxlci50b2RvTW9kYWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gb3ZlcmxheSBtb2RhbCBldmVudCBsaXN0ZW5lclxyXG4gICAgRE9NQ29udHJvbGxlci5vdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fb3ZlcmxheVwiKSAmJlxyXG4gICAgICAgIERPTUNvbnRyb2xsZXIuYWN0aXZlTW9kYWxcclxuICAgICAgKSB7XHJcbiAgICAgICAgRE9NQ29udHJvbGxlci50b2dnbGVNb2RhbChET01Db250cm9sbGVyLmFjdGl2ZU1vZGFsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWNjZXB0Rm9ybShjYWxsYmFjaywgZm9ybVNlbGVjdG9yLCBtb2RhbCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybVNlbGVjdG9yKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xyXG4gICAgICBuZXcgRm9ybURhdGEoZm9ybSkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgIGZvcm1EYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoZm9ybURhdGEpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjYWxsYmFjayhmb3JtRGF0YSk7XHJcbiAgICAgICAgRE9NQ29udHJvbGxlci50b2dnbGVNb2RhbChtb2RhbCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyByZW5kZXIgYWxsIHByb2plY3RzXHJcbiAgc3RhdGljIHJlbmRlclByb2plY3RzKHByb2plY3RzSW5zdGFuY2UpIHtcclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX3Byb2plY3RzXCIpO1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gcmVzZXQgcHJvamVjdHMgbGlzdFxyXG5cclxuICAgIGNvbnN0IHByb2plY3RzQXJyID0gcHJvamVjdHNJbnN0YW5jZS5nZXRQcm9qZWN0cygpO1xyXG4gICAgcHJvamVjdHNBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuICAgICAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBgPGgzPiR7cHJvamVjdC5uYW1lfTwvaDM+XHJcbiAgICAgIDxhIGNsYXNzPVwidG9kb19fY2xvc2VcIj4mdGltZXM7PC9hPmA7XHJcbiAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBERUxFVEUgQlVUVE9OIEZPUiBQUk9KRUNUXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRvZG9fX2Nsb3NlXCIpKSB7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsZWxvaGVoZWxlbG9oZWhlbGVsb2hlaGVsZWxvaGVcIik7IC8vIHRoaXMgaXMgdGhlIGRlbGV0ZSBidXR0b25cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBwcm9qZWN0IElEIGFuZCByZW5kZXIgaXRzIHRvZG9zXHJcbiAgICAgICAgRE9NQ29udHJvbGxlci5zZWxlY3RlZFByb2plY3RJZCA9IHByb2plY3QuaWQ7XHJcbiAgICAgICAgRE9NQ29udHJvbGxlci5yZW5kZXJUb2Rvc0ZvclByb2plY3QocHJvamVjdC5pZCwgcHJvamVjdHNJbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhY3RpdmUgY2xhc3MgdG8gc2VsZWN0ZWQgcHJvamVjdFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0X19zZWxlY3RlZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X19zZWxlY3RlZFwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHByb2plY3RzQXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gZGVmYXVsdCB0byBmaXJzdCBwcm9qZWN0XHJcbiAgICAgIGNvbnN0IGZpcnN0UHJvamVjdERpdiA9IHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcbiAgICAgIGZpcnN0UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9fc2VsZWN0ZWRcIik7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIuc2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0c0FyclswXS5pZDtcclxuICAgICAgRE9NQ29udHJvbGxlci5yZW5kZXJUb2Rvc0ZvclByb2plY3QoXHJcbiAgICAgICAgRE9NQ29udHJvbGxlci5zZWxlY3RlZFByb2plY3RJZCxcclxuICAgICAgICBwcm9qZWN0c0luc3RhbmNlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVyVG9kb3NGb3JQcm9qZWN0KHNlbGVjdGVkUHJvamVjdElkLCBwcm9qZWN0c0luc3RhbmNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3RJZCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0c0luc3RhbmNlLmZpbmRQcm9qZWN0QnlJZChzZWxlY3RlZFByb2plY3RJZCk7XHJcbiAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NfX2NvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHRvZG9zUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zX19wcm9qZWN0LS1uYW1lXCIpO1xyXG4gICAgdG9kb3NQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdC5uYW1lID8/IFwiVG9kb3NcIjtcclxuICAgIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IC8vIHJlc2V0IHRvZG9zIGxpc3RcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0KSB7XHJcbiAgICAgIHNlbGVjdGVkUHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xyXG4gICAgICAgIHRvZG9FbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxoND4ke3RvZG8udGl0bGV9PC9oND5cclxuICAgICAgICAgIDxwPiR7dG9kby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8cD5EdWU6ICR7dG9kby5kdWVEYXRlfTwvcD5cclxuICAgICAgICAgIDxwPlByaW9yaXR5OiAke3RvZG8ucHJpb3JpdHl9PC9wPlxyXG4gICAgICAgICAgPCEtLSBhZGQgbW9yZSAtLT5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdGVwIDM6IEFkZCBUb2RvIEZvcm0gSGFuZGxpbmdcclxuLy8gU3RlcCA0OiBBZGp1c3QgdGhlIFRvZG8gRm9ybSBTdWJtaXNzaW9uIExvZ2ljXHJcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9Ub2RvXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRvZG8pIHtcclxuICAgIGlmICh0b2RvIGluc3RhbmNlb2YgVG9kbykge1xyXG4gICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7IC8vIHRoaXMgaXMgdG8gdGhlIHByb2plY3Qgb2JqZWN0XHJcbiAgICAgIC8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZTtcclxuICAgICAgUHJvamVjdC5zYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSh0aGlzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgdG9kb1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZTtcclxuICBzdGF0aWMgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UocHJvamVjdEluc3RhbmNlKSB7XHJcbiAgICAvLyBnZXQgZXhpc3RpbmcgcHJvamVjdHMgZnJvbSBsb2NhbFN0b3JhZ2UsIGVsc2UgW11cclxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xyXG5cclxuICAgIC8vIGNoZWNrIGlmIHByb2VqY3QgZXhpc3RzIGluIGxvY2FsU3RvcmFnZVxyXG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZXhpc3RpbmdQcm9qZWN0cy5maW5kSW5kZXgoXHJcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SW5zdGFuY2UuaWRcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHByb2plY3RJbmRleCAhPT0gLTEpIHtcclxuICAgICAgLy8gdXBkYXRlIGV4aXN0aW5nIHByb2plY3RcclxuICAgICAgZXhpc3RpbmdQcm9qZWN0c1twcm9qZWN0SW5kZXhdID0gcHJvamVjdEluc3RhbmNlOyAvLyBkbyBJIG5lZWQgdG8gc3RyaW5naWZ5P1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQWRkIG5ldyBwcm9qZWN0XHJcbiAgICAgIGV4aXN0aW5nUHJvamVjdHMucHVzaChwcm9qZWN0SW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdQcm9qZWN0cykpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVG9kb0J5SWQoaWQpIHtcclxuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICB9XHJcblxyXG4gIGdldFRvZG9CeUlkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi9VdGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB8fCBbXTtcclxuICB9XHJcblxyXG4gIC8vIHNob3VsZCBhZGRQcm9qZWN0IGJlIGhlcmU/XHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICB9XHJcblxyXG4gIGZpbmRQcm9qZWN0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUHJvamVjdChpZCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBpZCk7XHJcbiAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGlkLFxyXG4gICAgcHJvamVjdElkLFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGVzLFxyXG4gICAgaXNDb21wbGV0ZVxyXG4gICkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5OyAvLyBvcmRlcmJ5IHByaW9yaXR5XHJcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xyXG4gICAgLy8gdGhpcy5jaGVja0xpc3QgPSBbXTtcclxuICB9XHJcblxyXG4gIC8vIGVkaXQgdGl0bGVcclxuICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgLy8gZWRpdCBkZXNjcmlwdGlvblxyXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGR1ZURhdGVcclxuICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IHByaW9yaXR5XHJcbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIC8vIGVkaXQgbm90ZXNcclxuICBzZXROb3Rlcyhub3Rlcykge1xyXG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gIH1cclxuXHJcbiAgLy8gZWRpdCBpc0NvbXBsZXRlXHJcbiAgc2V0SXNDb21wbGV0ZShpc0NvbXBsZXRlKSB7XHJcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gc2hvdWxkIGkgYWRkIGNoZWNrbGlzdCBjbGFzcz9cclxuXHJcbiAgLy8gYWRkIGNoZWNrbGlzdCBpdGVtXHJcbiAgYWRkQ2hlY2tsaXN0SXRlbShjaGVja2xpc3RJdGVtKSB7XHJcbiAgICB0aGlzLmNoZWNrTGlzdC5wdXNoKGNoZWNrbGlzdEl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZWRpdCBjaGVja2xpc3QgaXRlbVxyXG5cclxuICAvLyByZW1vdmUgY2hlY2tsaXN0IGl0ZW1cclxufVxyXG4iLCIvLyBleHBvcnQgY2xhc3MgVXRpbCB7XHJcbi8vICAgc3RhdGljIHNhdmVUb0xvY2FsU3RvcmFnZShwcm9wKSB7XHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9wLCBKU09OLnN0cmluZ2lmeSh0aGlzW3Byb3BdKSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyAgIC8vIEZJWE1FOiBJIGRvbid0IHRoaW5rIHRoaXMgaXMgd29ya2luZyAvLyBVbmNhdWdodCBTeW50YXhFcnJvcjogXCJ1bmRlZmluZWRcIiBpcyBub3QgdmFsaWQgSlNPTlxyXG4vLyAgIHN0YXRpYyBnZXRGcm9tTG9jYWxTdG9yYWdlKHByb3ApIHtcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9wKTtcclxuLy8gICAgIGlmIChkYXRhKSB7XHJcbi8vICAgICAgIHRoaXNbcHJvcF0gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4vLyAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3ApO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuL2NsYXNzZXMvUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2NsYXNzZXMvUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vY2xhc3Nlcy9Ub2RvXCI7XHJcbmltcG9ydCB7IERPTUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jbGFzc2VzL0RPTUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuLy8gZGVmaW5pbmcgcHJvamVjdHNcclxuY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcclxuLy8gY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0XHJcblxyXG5pZiAocHJvamVjdHMuZ2V0UHJvamVjdHMoKS5sZW5ndGggPT09IDApIHtcclxuICBjb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KHVuaXFpZCgpLCBcIlByb2plY3QgMVwiKTtcclxuXHJcbiAgLy8gZXhhbXBsZSB0b2RvXHJcbiAgY29uc3QgdG9kbzEgPSBuZXcgVG9kbyhcclxuICAgIHVuaXFpZCgpLFxyXG4gICAgXCJUb2RvIDFcIixcclxuICAgIFwiRGVzY3JpcHRpb24gMVwiLFxyXG4gICAgRGF0ZS5ub3coKSwgLy8gZGF0ZSB0byBzb21ldGhpbmcgbW9yZSByZWFkYWJsZVxyXG4gICAgMTAsXHJcbiAgICBcIk5vdGVzLi4uIDFcIixcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgLy8gYWRkaW5nIHRvZG8vcHJvamVjdCB0byBwcm9qZWN0L3Byb2plY3RzXHJcbiAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0MSk7XHJcbiAgcHJvamVjdDEuYWRkVG9kbyh0b2RvMSk7XHJcbn1cclxuXHJcbi8vIHJlbmRlciBwYWdlXHJcbkRPTUNvbnRyb2xsZXIucmVuZGVyUGFnZSgpO1xyXG5ET01Db250cm9sbGVyLnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcclxuXHJcbi8vIHJlbmRlciB0b2RvcyBmb3IgZGVmYXVsdCBwcm9qZWN0XHJcbmxldCBkZWZhdWx0UHJvamVjdElkID0gcHJvamVjdHMuZ2V0UHJvamVjdHMoKVswXS5pZDtcclxuRE9NQ29udHJvbGxlci5yZW5kZXJUb2Rvc0ZvclByb2plY3QoZGVmYXVsdFByb2plY3RJZCwgcHJvamVjdHMpO1xyXG5cclxuLy8gYWRkIHByb2plY3RcclxuRE9NQ29udHJvbGxlci5hY2NlcHRGb3JtKFxyXG4gIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHVuaXFpZCgpLCBmb3JtRGF0YS5wcm9qZWN0X19uYW1lKTtcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICBET01Db250cm9sbGVyLnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcclxuICB9LFxyXG4gIFwiLnByb2plY3RfX2Zvcm1cIixcclxuICBET01Db250cm9sbGVyLnByb2plY3RNb2RhbFxyXG4pO1xyXG5cclxuLy8gYWRkIHRvZG9cclxuRE9NQ29udHJvbGxlci5hY2NlcHRGb3JtKFxyXG4gIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgLy8gaWYgKCFET01Db250cm9sbGVyLnNlbGVjdGVkUHJvamVjdElkKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiTm8gcHJvamVjdCBzZWxlY3RlZFwiKTtcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFxyXG4gICAgICB1bmlxaWQoKSxcclxuICAgICAgZm9ybURhdGEudG9kb19fbmFtZSxcclxuICAgICAgZm9ybURhdGEudG9kb19fZGVzY3JpcHRpb24sXHJcbiAgICAgIGZvcm1EYXRhLnRvZG9fX2R1ZURhdGUsXHJcbiAgICAgIGZvcm1EYXRhLnRvZG9fX3ByaW9yaXR5LFxyXG4gICAgICBmb3JtRGF0YS50b2RvX19ub3RlcyxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgbGV0IHByb2plY3REYXRhID0gcHJvamVjdHMuZmluZFByb2plY3RCeUlkKERPTUNvbnRyb2xsZXIuc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG4gICAgaWYgKCFwcm9qZWN0RGF0YSkge1xyXG4gICAgICBwcm9qZWN0RGF0YSA9IHByb2plY3RzLmdldFByb2plY3RzKClbMF07XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdERhdGEuaWQsIHByb2plY3REYXRhLm5hbWUpO1xyXG4gICAgcHJvamVjdC50b2RvcyA9IHByb2plY3REYXRhLnRvZG9zO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdCBpbnN0YW5jZW9mIFByb2plY3QpO1xyXG4gICAgcHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xyXG4gICAgRE9NQ29udHJvbGxlci5yZW5kZXJUb2Rvc0ZvclByb2plY3QoXHJcbiAgICAgIERPTUNvbnRyb2xsZXIuc2VsZWN0ZWRQcm9qZWN0SWQgPz8gcHJvamVjdHMuZ2V0UHJvamVjdHMoKVswXS5pZCxcclxuICAgICAgcHJvamVjdHNcclxuICAgICk7XHJcbiAgfSxcclxuICBcIi50b2RvX19mb3JtXCIsXHJcbiAgRE9NQ29udHJvbGxlci50b2RvTW9kYWxcclxuKTtcclxuXHJcbi8vIFRPRE86Mi4gcmVtb3ZlIHByb2plY3RcclxuXHJcbi8vIFRPRE86My4gcmVtb3ZlIHRvZG9cclxuXHJcbi8vIFRPRE86IEN1cnJlbnRseSBJIGNhbiBvbmx5IGFkZCBUb2RvcyB3aGVuIGEgcHJvamVjdCBpcyBjbGlja2VkIG9uLi5cclxuLy8gaWYgSSBkb24ndCBjbGljayBvbiB0aGUgcHJvamVjdCBiZWZvcmVoYW5kLCBpdCBkb2Vzbid0IHdvcmtcclxuLy8gdG8gZml4IHRoaXMsIHdoZW4gSSBhZGQgbmV3IHByb2plY3QsIHRoZSBwcm9qZWN0IHNob3VsZCBiZSBzZWxlY3RlZFxyXG4vLyBhbmQgdGhlIHRvZG9zIHNob3VsZCBiZSByZW5kZXJlZCBmb3IgdGhhdCBwcm9qZWN0XHJcblxyXG4vLyBUT0RPOlxyXG4vLyBVcG9uIGZpcnN0IGxvYWQsIHRoZSBwYWdlIHNob3VsZCByZW5kZXIgdGhlIHByb2plY3RzIGFuZCB0aGUgZmlyc3QgcHJvamVjdCdzIHRvZG9zLlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=