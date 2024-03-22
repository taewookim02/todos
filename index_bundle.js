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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nav__project,
.todo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}

.nav__project:hover,
.todo-container:hover {
  background-color: bisque;
  cursor: pointer;
}

.nav__project:active,
.todo-container:active {
  background-color: rgb(212, 188, 159);
}

/* STRUCTURE */
.container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 16px;
}

/* MODAL */
.modal-hidden {
  display: none;
}

/* .modal-overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
} */

/* TODOS */
.todos-container {
  margin-top: 2rem;
}

/* BTNS */
.btn {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;AACd;;AAEA;;EAEE,wBAAwB;EACxB,eAAe;AACjB;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA,cAAc;AACd;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA,UAAU;AACV;EACE,aAAa;AACf;;AAEA;;;;;;;;;GASG;;AAEH,UAAU;AACV;EACE,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,eAAe;AACjB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.nav__project,\r\n.todo-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 8px;\r\n}\r\n\r\n.nav__project:hover,\r\n.todo-container:hover {\r\n  background-color: bisque;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav__project:active,\r\n.todo-container:active {\r\n  background-color: rgb(212, 188, 159);\r\n}\r\n\r\n/* STRUCTURE */\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr;\r\n  gap: 16px;\r\n}\r\n\r\n/* MODAL */\r\n.modal-hidden {\r\n  display: none;\r\n}\r\n\r\n/* .modal-overlay {\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 1000;\r\n} */\r\n\r\n/* TODOS */\r\n.todos-container {\r\n  margin-top: 2rem;\r\n}\r\n\r\n/* BTNS */\r\n.btn {\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/controllers/AppController.js":
/*!**************************************************!*\
  !*** ./src/modules/controllers/AppController.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppController: () => (/* binding */ AppController)
/* harmony export */ });
/* harmony import */ var _StorageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageController */ "./src/modules/controllers/StorageController.js");
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectController */ "./src/modules/controllers/ProjectController.js");
/* harmony import */ var _TodoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoController */ "./src/modules/controllers/TodoController.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Project */ "./src/modules/models/Project.js");
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Todo */ "./src/modules/models/Todo.js");
/* harmony import */ var _views_UIController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/UIController */ "./src/modules/views/UIController.js");





////////////////////////////////////////////


class AppController {
  constructor() {
    this.StorageController = new _StorageController__WEBPACK_IMPORTED_MODULE_0__.StorageController();
    this.ProjectController = new _ProjectController__WEBPACK_IMPORTED_MODULE_1__.ProjectController();
    this.TodoController = new _TodoController__WEBPACK_IMPORTED_MODULE_2__.TodoController();
    this.UIController = new _views_UIController__WEBPACK_IMPORTED_MODULE_5__.UIController();
  }

  init() {
    console.log("AppController init() called");

    // init new sample project
    let mySampleProj = new _models_Project__WEBPACK_IMPORTED_MODULE_3__.Project("Hello");
    let mySampleProj1 = new _models_Project__WEBPACK_IMPORTED_MODULE_3__.Project("Hello1");

    let currentExistingProjects = this.ProjectController.getProjects();

    if (currentExistingProjects.length > 0) {
      // do nothing
    } else {
      ///////////////////////////////////////////
      // add sample project
      this.ProjectController.addProject(mySampleProj); // projectObj
      this.ProjectController.addProject(mySampleProj1);
    }

    ///////////////////////////////////////////
    // delete sample project
    // this.ProjectController.deleteProject(currentExistingProjects[1].id); // projectId

    ///////////////////////////////////////////
    // edit sample project (ltshu1yz, "Hello")
    this.ProjectController.editProject("ltshu1yz", "HAHAsHA"); // projectId, newName

    ///////////////////////////////////////////
    // init new todo item
    const mySampleTodo = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("Hey", "ltw6p5j1");
    const mySampleTodo2 = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("todo1", "ltw6p5j1");
    const mySampleTodo3 = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("to123do213", "ltw9kuc8");
    const mySampleTodo4 = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("to8949do213", "ltw6p5j0");

    ///////////////////////////////////////////
    // Get All Todos (SEPARATE LOCAL STORAGE)
    // console.log(this.TodoController.getTodos());

    ///////////////////////////////////////////
    // Add Todo (SEPARATE LOCAL STORAGE)

    // this.TodoController.addTodo(mySampleTodo);
    // this.TodoController.addTodo(mySampleTodo2);
    // this.TodoController.addTodo(mySampleTodo3);
    // this.TodoController.addTodo(mySampleTodo4);
    ///////////////////////////////////////////
    // Get single todo
    // console.log(this.TodoController.getSingleTodo("ltswy9gs"));

    ///////////////////////////////////////////
    // delete(ltswx8it)
    // this.TodoController.removeTodoById("ltsxdltq");

    ///////////////////////////////////////////
    // update
    // this.TodoController.editTodoName("ltsxdltt", "this is EDITED");

    /* SEPARATOR */

    ///////////////////////////////////////////
    // Add Todo obj
    // this.TodoController.addTodoToProject(mySampleTodo, "ltshu1yz"); // todoObj, projectId

    ///////////////////////////////////////////
    // edit todo name
    // this.TodoController.editTodoName("THIS IS NEW! ", "ltshu1yz", "ltsj76av"); // newName, projectId, todoId

    ///////////////////////////////////////////
    // get todos with certain projectId
    // this.TodoController.getTodosFromProject("ltshu1yz"); // projectId

    ///////////////////////////////////////////
    // get single todo ("ltsj76av")
    // this.TodoController.getSingleTodoFromProject("ltshu1yz", "ltsj76av"); // projectId, todoId

    ///////////////////////////////////////////
    // delete todo from project
    // this.TodoController.deleteTodoFromProject("ltshu1yz", "ltsj76av");

    //https://chat.openai.com/c/d3b38d3d-66a3-4f04-8bcd-ceeb6ef0d054

    ////////////////////////////////////////////
    ////////////////////////////////////////////
    ////////////////////////////////////////////
    // UI

    this.UIController.init(currentExistingProjects);
  }
}

// TODO: data tightly coupled with ui in UIController


/***/ }),

/***/ "./src/modules/controllers/ProjectController.js":
/*!******************************************************!*\
  !*** ./src/modules/controllers/ProjectController.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectController: () => (/* binding */ ProjectController)
/* harmony export */ });
/* harmony import */ var _StorageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageController */ "./src/modules/controllers/StorageController.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Project */ "./src/modules/models/Project.js");



class ProjectController {
  constructor() {
    this.StorageController = new _StorageController__WEBPACK_IMPORTED_MODULE_0__.StorageController();
  }

  getProjects() {
    const projectsJSON = this.StorageController.get("projects");
    if (!projectsJSON) {
      return []; // return empty arr if no data in localStorage
    }
    try {
      // try because error might occur in parse
      const parsedProjects = JSON.parse(projectsJSON);

      // the below assures that it is an array
      return Array.isArray(parsedProjects)
        ? parsedProjects
        : parsedProjects
        ? [parsedProjects]
        : [];
    } catch (e) {
      // if error, return an array
      return [];
    }
  }

  getProject(projectId) {
    let projectArr = this.getProjects();
    for (let i = 0; i < projectArr.length; i++) {
      if (projectArr[i].id === projectId) {
        return projectArr[i];
      }
    }
  }

  addProject(projectObj) {
    let projectsArr = this.getProjects();
    projectsArr.push(projectObj); // push received argument to projectsArr

    this.StorageController.saveCurrentArrayToLocalStorage(
      "projects",
      projectsArr
    ); // overwrite projects with updatedArr in localStorage
  }

  editProject(projectId, name) {
    let projectsArr = this.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectsArr[i].id === projectId) {
        projectsArr[i].name = name;
      }
    }

    this.StorageController.saveCurrentArrayToLocalStorage(
      "projects",
      projectsArr
    );
  }

  deleteProject(projectId) {
    let projectsArr = this.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectId === projectsArr[i].id) {
        projectsArr.splice(i, 1);
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage(
      "projects",
      projectsArr
    );
  }
}


/***/ }),

/***/ "./src/modules/controllers/StorageController.js":
/*!******************************************************!*\
  !*** ./src/modules/controllers/StorageController.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageController: () => (/* binding */ StorageController)
/* harmony export */ });
class StorageController {
  constructor() {
    this.storage = window.localStorage;
  }

  get(key) {
    return this.storage.getItem(key);
  }

  set(key, value) {
    return this.storage.setItem(key, value);
  }

  saveCurrentArrayToLocalStorage(key, arrayToSave) {
    this.set(key, JSON.stringify(arrayToSave));
  }
}


/***/ }),

/***/ "./src/modules/controllers/TodoController.js":
/*!***************************************************!*\
  !*** ./src/modules/controllers/TodoController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoController: () => (/* binding */ TodoController)
/* harmony export */ });
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectController */ "./src/modules/controllers/ProjectController.js");
/* harmony import */ var _StorageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageController */ "./src/modules/controllers/StorageController.js");


class TodoController {
  constructor() {
    this.ProjectController = new _ProjectController__WEBPACK_IMPORTED_MODULE_0__.ProjectController();
    this.StorageController = new _StorageController__WEBPACK_IMPORTED_MODULE_1__.StorageController();
    // this.StorageController = new StorageController();
  }

  getTodos() {
    const todosJSON = this.StorageController.get("todos");
    if (!todosJSON) {
      return [];
    }

    try {
      const parsedTodos = JSON.parse(todosJSON);
      // return array form no matter what
      return Array.isArray(parsedTodos)
        ? parsedTodos
        : parsedTodos
        ? [parsedTodos]
        : [];
    } catch (e) {
      return [];
    }
  }

  getTodosWithProjectId(projectId) {
    const todosArr = this.getTodos();
    let matchingArr = [];
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].projectId === projectId) {
        matchingArr.push(todosArr[i]);
      }
    }

    return matchingArr;
  }

  getSingleTodo(todoId) {
    const todosArr = this.getTodos();
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        return todosArr[i];
      }
    }
  }

  addTodo(todoObj) {
    let todosArr = this.getTodos();
    todosArr.push(todoObj);

    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  removeTodoById(todoId) {
    let todosArr = this.getTodos();

    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr.splice(i, 1);
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  editTodoName(todoId, name) {
    let todosArr = this.getTodos();

    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr[i].name = name;
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }
  /*
  addTodoToProject(todoObj, projectId) {
    let projectsArr = this.ProjectController.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectsArr[i].id === projectId) {
        projectsArr[i].todos.push(todoObj);
      }
    }
    this.ProjectController.saveCurrentProjectsToLocalStorage(projectsArr);
  }

  editTodoName(todoName, projectId, todoId) {
    let projectsArr = this.ProjectController.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectsArr[i].id === projectId) {
        for (let j = 0; j < projectsArr[i].todos.length; j++) {
          if (projectsArr[i].todos[j].id === todoId) {
            projectsArr[i].todos[j].name = todoName;
            break;
          }
        }
        break;
      }
    }
    this.ProjectController.saveCurrentProjectsToLocalStorage(projectsArr);
  }

  getTodosFromProject(projectId) {
    let projectsArr = this.ProjectController.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectsArr[i].id === projectId) {
        return projectsArr[i].todos;
      }
    }
  }

  getSingleTodoFromProject(projectId, todoId) {
    let projectsArr = this.ProjectController.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectsArr[i].id === projectId) {
        for (let j = 0; j < projectsArr[i].todos.length; j++) {
          if (projectsArr[i].todos[j].id === todoId) {
            return projectsArr[i].todos[j];
            break;
          }
        }
        break;
      }
    }
  }

  deleteTodoFromProject(projectId, todoId) {
    let projectsArr = this.ProjectController.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectsArr[i].id === projectId) {
        for (let j = 0; j < projectsArr[i].todos.length; j++) {
          if (projectsArr[i].todos[j].id === todoId) {
            projectsArr[i].todos.splice(j, 1);
            break;
          }
        }
        break;
      }
    }
    this.ProjectController.saveCurrentProjectsToLocalStorage(projectsArr);
  }
  */
}


/***/ }),

/***/ "./src/modules/models/Project.js":
/*!***************************************!*\
  !*** ./src/modules/models/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);


class Project {
  constructor(name) {
    this.name = name;
    this.id = uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
    // this.todos = []; // hmm,,
  }

  // TODO: encapsulate name, id, todos (?)
  // getId() {
  //   return this.id;
  // }

  // getName() {
  //   return this.name;
  // }

  // setName(name) {
  //   return (this.name = name);
  // }
}


/***/ }),

/***/ "./src/modules/models/Todo.js":
/*!************************************!*\
  !*** ./src/modules/models/Todo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);


class Todo {
  constructor(name, projectId) {
    this.name = name;
    this.projectId = projectId;
    this.id = uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
  }
}


/***/ }),

/***/ "./src/modules/views/Components/Button.js":
/*!************************************************!*\
  !*** ./src/modules/views/Components/Button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");

class Button extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(textContent, onClick = null, dataId = null) {
    super();
    this.textContent = textContent;
    this.onClick = onClick;
    this.dataId = dataId;
  }

  renderComponent() {
    const button = document.createElement("button");
    button.textContent = this.textContent;
    button.classList.add("btn");
    if (this.dataId) {
      button.setAttribute("data-id", this.dataId);
    }

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      if (this.onClick) {
        this.onClick(e);
      }
    });

    return button;
  }
}


/***/ }),

/***/ "./src/modules/views/Components/Component.js":
/*!***************************************************!*\
  !*** ./src/modules/views/Components/Component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
class Component {
  constructor() {
    if (new.target === Component) {
      throw new TypeError("Cannot construct Component instances directly.");
    }
  }

  renderComponent() {
    throw new Error("Method 'renderComponent()' must be implemented.");
  }

  attachEvent(element) {
    element.addEventListener("click", (e) => {
      console.log(
        `ID: ${element.getAttribute("data-id") ?? "no id"} was clicked`
      );
    });
  }
}


/***/ }),

/***/ "./src/modules/views/Components/Modal.js":
/*!***********************************************!*\
  !*** ./src/modules/views/Components/Modal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/modules/views/Components/Button.js");


class Modal extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(projectCallback) {
    super();
    this.projectCallback = projectCallback;
  }

  renderComponent(projectId) {
    const projectModal = document.createElement("div");
    projectModal.innerHTML = `
      <div class="modal-content">
        <form id="editProjectForm">
          <label for="projectName">Project Name:</label>
          <input type="text" id="projectName" name="projectName" required>
          <input type="hidden" id="projectId" name="projectId" ${
            projectId ? `data-id="${projectId}"` : ""
          }>
          <button type="submit">${projectId ? "Save changes" : "Add"}</button>
        </form>
      </div>
      `;

    projectModal.classList.add("modal-hidden");
    const closeButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button("x", (e) =>
      this.handleCloseButtonClick(e)
    ).renderComponent();
    projectModal.querySelector(".modal-content").appendChild(closeButton);

    document.body.appendChild(projectModal);
    document
      .querySelector("#editProjectForm")
      .addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const projectName = formData.get("projectName");
    const projectId = formData.get("projectId");
    this.projectCallback(projectId, projectName);
    this.closeModal();
  }

  handleCloseButtonClick(e) {
    // close modal
    this.closeModal();
  }

  closeModal() {
    const projectModal = document.querySelector(".modal-content").parentNode;
    const modalInput = document.querySelector("#projectName");
    modalInput.value = "";
    const modalHiddenProjectId = document.querySelector("#projectId");
    modalHiddenProjectId.value = "";
    projectModal.classList.add("modal-hidden");
  }

  showModal() {
    const projectModal = document.querySelector(".modal-content").parentNode;
    projectModal.classList.remove("modal-hidden");
  }
}


/***/ }),

/***/ "./src/modules/views/Components/Navbar.js":
/*!************************************************!*\
  !*** ./src/modules/views/Components/Navbar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navbar: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/modules/views/Components/Button.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");
/* harmony import */ var _controllers_ProjectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/ProjectController */ "./src/modules/controllers/ProjectController.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./src/modules/views/Components/Modal.js");
/* harmony import */ var _controllers_TodoController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controllers/TodoController */ "./src/modules/controllers/TodoController.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Todo */ "./src/modules/views/Components/Todo.js");







class Navbar extends _Component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
    this.ProjectController = new _controllers_ProjectController__WEBPACK_IMPORTED_MODULE_2__.ProjectController();
    this.Modal = new _Modal__WEBPACK_IMPORTED_MODULE_3__.Modal();
    this.TodoController = new _controllers_TodoController__WEBPACK_IMPORTED_MODULE_4__.TodoController();
    this.TodoComponent = new _Todo__WEBPACK_IMPORTED_MODULE_5__.TodoComponent();

    // to counter this.Modal == undefined
    this.handleProjectAddClick = this.handleProjectAddClick.bind(this);
  }

  renderComponent(projectsArr) {
    const navEl = document.querySelector(".nav");
    navEl.innerHTML = "";
    projectsArr.forEach((project) => {
      const projectNavDiv = document.createElement("div");
      projectNavDiv.classList.add("nav__project");
      projectNavDiv.setAttribute("data-id", project.id);
      const projectText = document.createElement("h3");

      const projectEditButton = new _Button__WEBPACK_IMPORTED_MODULE_0__.Button(
        "edit",
        (e) => this.handleProjectEditClick(e),
        project.id
      ).renderComponent();

      // button close
      const projectCloseButton = new _Button__WEBPACK_IMPORTED_MODULE_0__.Button(
        "x",
        () => this.handleProjectCloseClick(project.id),
        project.id
      ).renderComponent();
      // this.attachEvent(projectCloseButton);

      const projectButtonsDiv = document.createElement("div");

      projectNavDiv.appendChild(projectText);
      projectButtonsDiv.appendChild(projectEditButton);
      projectButtonsDiv.appendChild(projectCloseButton);
      projectNavDiv.appendChild(projectButtonsDiv);
      projectText.textContent = project.name;

      // navDiv click handling
      projectNavDiv.addEventListener("click", (e) =>
        this.handleProjectDivClick(e)
      );

      navEl.appendChild(projectNavDiv);
    });
    const addProjectButton = new _Button__WEBPACK_IMPORTED_MODULE_0__.Button(
      "+",
      this.handleProjectAddClick
    ).renderComponent();
    navEl.appendChild(addProjectButton);
  }

  handleProjectDivClick(e) {
    // render all todos with the data-id
    const projectId = e.target.getAttribute("data-id");
    const hiddentTodoInput = document.querySelector("#todo-projectId");
    hiddentTodoInput.value = projectId;
    const myTodosArr = this.TodoController.getTodosWithProjectId(projectId);

    this.TodoComponent.renderComponent(myTodosArr);
  }

  handleProjectEditClick(e) {
    const projectId = e.target.getAttribute("data-id");

    const hiddenInput = document.querySelector("#projectId");
    const formInput = document.querySelector("#projectName");
    hiddenInput.value = projectId;
    const selectedProjectName =
      this.ProjectController.getProject(projectId).name; //FIXME: sometimes undefined
    formInput.value = selectedProjectName;
    this.Modal.showModal();
    formInput.focus();
  }

  handleProjectAddClick() {
    // TODO: reset modal
    this.Modal.showModal();
  }

  handleProjectCloseClick(projectId) {
    // TODO: add modal to confirm

    // delete project
    try {
      this.ProjectController.deleteProject(projectId);
      // remove from ui
      document.querySelector(`[data-id="${projectId}"]`).remove();
    } catch (error) {
      console.log(error);
    }
  }
}


/***/ }),

/***/ "./src/modules/views/Components/Todo.js":
/*!**********************************************!*\
  !*** ./src/modules/views/Components/Todo.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoComponent: () => (/* binding */ TodoComponent)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/modules/views/Components/Button.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/modules/views/Components/Modal.js");
/* harmony import */ var _TodoModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoModal */ "./src/modules/views/Components/TodoModal.js");
/* harmony import */ var _controllers_TodoController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controllers/TodoController */ "./src/modules/controllers/TodoController.js");





class TodoComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.Modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__.Modal();
    this.TodoModal = new _TodoModal__WEBPACK_IMPORTED_MODULE_3__.TodoModal();
    this.TodoController = new _controllers_TodoController__WEBPACK_IMPORTED_MODULE_4__.TodoController();
  }

  renderComponent(todosArr) {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const todosContainer = document.createElement("div");
    todosContainer.classList.add("todos-container");

    todosArr.forEach((todo) => {
      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-container");
      todoContainer.setAttribute("data-id", todo.id);
      todoContainer.setAttribute("data-projectId", todo.projectId);
      const todoName = document.createElement("p");

      const todoEditButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button(
        "edit",
        (e) => this.handleTodoEditClick(e),
        todo.id
      ).renderComponent();

      // button close
      const todoCloseButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button(
        "x",
        () => this.handleTodoCloseClick(todo.id),
        todo.id
      ).renderComponent();

      const todoButtonsDiv = document.createElement("div");
      todoButtonsDiv.appendChild(todoEditButton);
      todoButtonsDiv.appendChild(todoCloseButton);

      todoName.textContent = todo.name;
      todoContainer.appendChild(todoName);
      todoContainer.appendChild(todoButtonsDiv);
      todosContainer.appendChild(todoContainer);
    });

    content.appendChild(todosContainer);

    const addTodoButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button("+", (e) =>
      this.handleTodoAddClick(e)
    ).renderComponent();
    content.appendChild(addTodoButton);
  }

  handleTodoAddClick(e) {
    this.TodoModal.showModal();
  }

  handleTodoEditClick(e) {
    const todoId = e.target.getAttribute("data-id");

    const hiddenInput = document.querySelector("#todoId"); //
    const formInput = document.querySelector("#todoName");
    hiddenInput.value = todoId;
    const selectedTodoName = this.TodoController.getSingleTodo(todoId).name;
    formInput.value = selectedTodoName;
    this.TodoModal.showModal();
    formInput.focus();
  }

  handleTodoCloseClick(todoId) {
    try {
      this.TodoController.removeTodoById(todoId);
      document.querySelector(`[data-id="${todoId}"]`).remove();
    } catch (error) {
      console.log(error);
    }
  }
}


/***/ }),

/***/ "./src/modules/views/Components/TodoModal.js":
/*!***************************************************!*\
  !*** ./src/modules/views/Components/TodoModal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoModal: () => (/* binding */ TodoModal)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/modules/views/Components/Button.js");


class TodoModal extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(todoCallback) {
    super();
    this.todoCallback = todoCallback;
  }

  renderComponent(todoId) {
    const todoModal = document.createElement("div");
    todoModal.innerHTML = `
      <div class="todoModal-content">
        <form id="editTodoForm">
          <label for="todoName">Todo Name:</label>
          <input type="text" id="todoName" name="todoName" required>
          <input type="hidden" id="todoId" name="todoId" ${
            todoId ? `value="${todoId}"` : ""
          }>
          <input type="hidden" id="todo-projectId" name="todo-projectId" ${
            projectId ? `value="${projectId}"` : ""
          }>
          <button type="submit">${todoId ? "Save changes" : "Add"}</button>

        </form>
      </div>
    `;

    todoModal.classList.add("modal-hidden");
    const closeButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button("x", (e) =>
      this.handleCloseButtonClick(e)
    ).renderComponent();
    todoModal.querySelector(".todoModal-content").appendChild(closeButton);

    // TODO: ADD TODO MODAL TO CONTENT SO THAT THE UX IS BETTER
    document.body.appendChild(todoModal);
    // document.querySelector("#content").appendChild(todoModal);
    // console.log(document.querySelector("#content"));
    document
      .querySelector("#editTodoForm")
      .addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const todoName = formData.get("todoName");
    const todoId = formData.get("todoId");
    this.todoCallback(todoId, todoName);
    this.closeModal();
  }

  handleCloseButtonClick(e) {
    e.preventDefault();
    this.closeModal();
  }

  closeModal() {
    const todoModal = document.querySelector(".todoModal-content").parentNode;
    const modalInput = document.querySelector("#todoName");
    modalInput.value = "";
    const modalHiddenTodoId = document.querySelector("#todoId");
    modalHiddenTodoId.value = "";
    todoModal.classList.add("modal-hidden");
    todoModal.classList.remove("modal-overlay");
  }

  showModal() {
    const todoModal = document.querySelector(".todoModal-content").parentNode;
    todoModal.classList.add("modal-overlay");
    todoModal.classList.remove("modal-hidden");
  }
}


/***/ }),

/***/ "./src/modules/views/UIController.js":
/*!*******************************************!*\
  !*** ./src/modules/views/UIController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIController: () => (/* binding */ UIController)
/* harmony export */ });
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Navbar */ "./src/modules/views/Components/Navbar.js");
/* harmony import */ var _Components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Modal */ "./src/modules/views/Components/Modal.js");
/* harmony import */ var _controllers_ProjectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/ProjectController */ "./src/modules/controllers/ProjectController.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Project */ "./src/modules/models/Project.js");
/* harmony import */ var _Components_TodoModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/TodoModal */ "./src/modules/views/Components/TodoModal.js");
/* harmony import */ var _controllers_TodoController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/TodoController */ "./src/modules/controllers/TodoController.js");
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Todo */ "./src/modules/models/Todo.js");
/* harmony import */ var _Components_Todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Todo */ "./src/modules/views/Components/Todo.js");


// import projectController here?






class UIController {
  constructor() {
    this.Navbar = new _Components_Navbar__WEBPACK_IMPORTED_MODULE_0__.Navbar();
    // this.Modal = new Modal();
    this.ProjectController = new _controllers_ProjectController__WEBPACK_IMPORTED_MODULE_2__.ProjectController();
    this.TodoController = new _controllers_TodoController__WEBPACK_IMPORTED_MODULE_5__.TodoController();
    this.Todo = new _models_Todo__WEBPACK_IMPORTED_MODULE_6__.Todo();
    this.TodoComponent = new _Components_Todo__WEBPACK_IMPORTED_MODULE_7__.TodoComponent();
  }

  init(projectsArr) {
    this.Navbar.renderComponent(projectsArr);
    this.initProjectModal();
    this.initTodoModal();
    this.initFirstDivClick();
  }

  initProjectModal() {
    // render modal
    const modal = new _Components_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal((projectId, projectName) => {
      if (projectId === "") {
        const newProject = new _models_Project__WEBPACK_IMPORTED_MODULE_3__.Project(projectName);
        this.ProjectController.addProject(newProject);

        // rerender navbar
        const newProjectsArr = this.ProjectController.getProjects();
        this.Navbar.renderComponent(newProjectsArr);
      } else {
        this.ProjectController.editProject(projectId, projectName);

        // rerender navbar
        const newProjectsArr = this.ProjectController.getProjects();
        this.Navbar.renderComponent(newProjectsArr);
      }
    });

    modal.renderComponent();
  }

  initTodoModal() {
    // render todoModal
    const todoModal = new _Components_TodoModal__WEBPACK_IMPORTED_MODULE_4__.TodoModal((todoId, todoName) => {
      const projectId = document.querySelector("#todo-projectId").value;
      if (todoId === "") {
        const newTodo = new _models_Todo__WEBPACK_IMPORTED_MODULE_6__.Todo(todoName, projectId);
        this.TodoController.addTodo(newTodo);

        // rerender todos
        const newTodoArr = this.TodoController.getTodosWithProjectId(projectId);
        this.TodoComponent.renderComponent(newTodoArr);
      } else {
        this.TodoController.editTodoName(todoId, todoName);

        // rerender todos
        const newTodoArr = this.TodoController.getTodosWithProjectId(projectId);
        this.TodoComponent.renderComponent(newTodoArr);
      }
    });

    todoModal.renderComponent();
  }

  initFirstDivClick() {
    document.addEventListener("DOMContentLoaded", (e) => {
      const myFirstNavDiv = document.querySelector(".nav__project");
      if (myFirstNavDiv) {
        myFirstNavDiv.click();
      }
    });
  }
}


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
/* harmony import */ var _modules_controllers_AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/controllers/AppController */ "./src/modules/controllers/AppController.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


let app = new _modules_controllers_AppController__WEBPACK_IMPORTED_MODULE_0__.AppController();
app.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0U7QUFDbEM7QUFDbEMsY0FBYyw2RUFBYTtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdW5pcWlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvQXBwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL1Byb2plY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvU3RvcmFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9Ub2RvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL21vZGVscy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvbW9kZWxzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy92aWV3cy9Db21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL3ZpZXdzL0NvbXBvbmVudHMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvdmlld3MvQ29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL3ZpZXdzL0NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvdmlld3MvQ29tcG9uZW50cy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvdmlld3MvQ29tcG9uZW50cy9Ub2RvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy92aWV3cy9VSUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5uYXZfX3Byb2plY3QsXHJcbi50b2RvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5uYXZfX3Byb2plY3Q6aG92ZXIsXHJcbi50b2RvLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdl9fcHJvamVjdDphY3RpdmUsXHJcbi50b2RvLWNvbnRhaW5lcjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDE4OCwgMTU5KTtcclxufVxyXG5cclxuLyogU1RSVUNUVVJFICovXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLyogTU9EQUwgKi9cclxuLm1vZGFsLWhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogLm1vZGFsLW92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn0gKi9cclxuXHJcbi8qIFRPRE9TICovXHJcbi50b2Rvcy1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi8qIEJUTlMgKi9cclxuLmJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsb0NBQW9DO0FBQ3RDOztBQUVBLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBLFVBQVU7QUFDVjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7Ozs7O0dBU0c7O0FBRUgsVUFBVTtBQUNWO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9fcHJvamVjdCxcXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZfX3Byb2plY3Q6aG92ZXIsXFxyXFxuLnRvZG8tY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9fcHJvamVjdDphY3RpdmUsXFxyXFxuLnRvZG8tY29udGFpbmVyOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAxODgsIDE1OSk7XFxyXFxufVxcclxcblxcclxcbi8qIFNUUlVDVFVSRSAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTU9EQUwgKi9cXHJcXG4ubW9kYWwtaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIC5tb2RhbC1vdmVybGF5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyogVE9ET1MgKi9cXHJcXG4udG9kb3MtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEJUTlMgKi9cXHJcXG4uYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCJpbXBvcnQgeyBTdG9yYWdlQ29udHJvbGxlciB9IGZyb20gXCIuL1N0b3JhZ2VDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSBcIi4vUHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgVG9kb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9Ub2RvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL21vZGVscy9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi4vbW9kZWxzL1RvZG9cIjtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSBcIi4uL3ZpZXdzL1VJQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5TdG9yYWdlQ29udHJvbGxlciA9IG5ldyBTdG9yYWdlQ29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5Qcm9qZWN0Q29udHJvbGxlciA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5Ub2RvQ29udHJvbGxlciA9IG5ldyBUb2RvQ29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5VSUNvbnRyb2xsZXIgPSBuZXcgVUlDb250cm9sbGVyKCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJBcHBDb250cm9sbGVyIGluaXQoKSBjYWxsZWRcIik7XHJcblxyXG4gICAgLy8gaW5pdCBuZXcgc2FtcGxlIHByb2plY3RcclxuICAgIGxldCBteVNhbXBsZVByb2ogPSBuZXcgUHJvamVjdChcIkhlbGxvXCIpO1xyXG4gICAgbGV0IG15U2FtcGxlUHJvajEgPSBuZXcgUHJvamVjdChcIkhlbGxvMVwiKTtcclxuXHJcbiAgICBsZXQgY3VycmVudEV4aXN0aW5nUHJvamVjdHMgPSB0aGlzLlByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RzKCk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRFeGlzdGluZ1Byb2plY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAvLyBhZGQgc2FtcGxlIHByb2plY3RcclxuICAgICAgdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5hZGRQcm9qZWN0KG15U2FtcGxlUHJvaik7IC8vIHByb2plY3RPYmpcclxuICAgICAgdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5hZGRQcm9qZWN0KG15U2FtcGxlUHJvajEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGRlbGV0ZSBzYW1wbGUgcHJvamVjdFxyXG4gICAgLy8gdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5kZWxldGVQcm9qZWN0KGN1cnJlbnRFeGlzdGluZ1Byb2plY3RzWzFdLmlkKTsgLy8gcHJvamVjdElkXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZWRpdCBzYW1wbGUgcHJvamVjdCAobHRzaHUxeXosIFwiSGVsbG9cIilcclxuICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIuZWRpdFByb2plY3QoXCJsdHNodTF5elwiLCBcIkhBSEFzSEFcIik7IC8vIHByb2plY3RJZCwgbmV3TmFtZVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGluaXQgbmV3IHRvZG8gaXRlbVxyXG4gICAgY29uc3QgbXlTYW1wbGVUb2RvID0gbmV3IFRvZG8oXCJIZXlcIiwgXCJsdHc2cDVqMVwiKTtcclxuICAgIGNvbnN0IG15U2FtcGxlVG9kbzIgPSBuZXcgVG9kbyhcInRvZG8xXCIsIFwibHR3NnA1ajFcIik7XHJcbiAgICBjb25zdCBteVNhbXBsZVRvZG8zID0gbmV3IFRvZG8oXCJ0bzEyM2RvMjEzXCIsIFwibHR3OWt1YzhcIik7XHJcbiAgICBjb25zdCBteVNhbXBsZVRvZG80ID0gbmV3IFRvZG8oXCJ0bzg5NDlkbzIxM1wiLCBcImx0dzZwNWowXCIpO1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIEdldCBBbGwgVG9kb3MgKFNFUEFSQVRFIExPQ0FMIFNUT1JBR0UpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLlRvZG9Db250cm9sbGVyLmdldFRvZG9zKCkpO1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIEFkZCBUb2RvIChTRVBBUkFURSBMT0NBTCBTVE9SQUdFKVxyXG5cclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kbyhteVNhbXBsZVRvZG8pO1xyXG4gICAgLy8gdGhpcy5Ub2RvQ29udHJvbGxlci5hZGRUb2RvKG15U2FtcGxlVG9kbzIpO1xyXG4gICAgLy8gdGhpcy5Ub2RvQ29udHJvbGxlci5hZGRUb2RvKG15U2FtcGxlVG9kbzMpO1xyXG4gICAgLy8gdGhpcy5Ub2RvQ29udHJvbGxlci5hZGRUb2RvKG15U2FtcGxlVG9kbzQpO1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gR2V0IHNpbmdsZSB0b2RvXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLlRvZG9Db250cm9sbGVyLmdldFNpbmdsZVRvZG8oXCJsdHN3eTlnc1wiKSk7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZGVsZXRlKGx0c3d4OGl0KVxyXG4gICAgLy8gdGhpcy5Ub2RvQ29udHJvbGxlci5yZW1vdmVUb2RvQnlJZChcImx0c3hkbHRxXCIpO1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIHVwZGF0ZVxyXG4gICAgLy8gdGhpcy5Ub2RvQ29udHJvbGxlci5lZGl0VG9kb05hbWUoXCJsdHN4ZGx0dFwiLCBcInRoaXMgaXMgRURJVEVEXCIpO1xyXG5cclxuICAgIC8qIFNFUEFSQVRPUiAqL1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIEFkZCBUb2RvIG9ialxyXG4gICAgLy8gdGhpcy5Ub2RvQ29udHJvbGxlci5hZGRUb2RvVG9Qcm9qZWN0KG15U2FtcGxlVG9kbywgXCJsdHNodTF5elwiKTsgLy8gdG9kb09iaiwgcHJvamVjdElkXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZWRpdCB0b2RvIG5hbWVcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuZWRpdFRvZG9OYW1lKFwiVEhJUyBJUyBORVchIFwiLCBcImx0c2h1MXl6XCIsIFwibHRzajc2YXZcIik7IC8vIG5ld05hbWUsIHByb2plY3RJZCwgdG9kb0lkXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZ2V0IHRvZG9zIHdpdGggY2VydGFpbiBwcm9qZWN0SWRcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuZ2V0VG9kb3NGcm9tUHJvamVjdChcImx0c2h1MXl6XCIpOyAvLyBwcm9qZWN0SWRcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBnZXQgc2luZ2xlIHRvZG8gKFwibHRzajc2YXZcIilcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuZ2V0U2luZ2xlVG9kb0Zyb21Qcm9qZWN0KFwibHRzaHUxeXpcIiwgXCJsdHNqNzZhdlwiKTsgLy8gcHJvamVjdElkLCB0b2RvSWRcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBkZWxldGUgdG9kbyBmcm9tIHByb2plY3RcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuZGVsZXRlVG9kb0Zyb21Qcm9qZWN0KFwibHRzaHUxeXpcIiwgXCJsdHNqNzZhdlwiKTtcclxuXHJcbiAgICAvL2h0dHBzOi8vY2hhdC5vcGVuYWkuY29tL2MvZDNiMzhkM2QtNjZhMy00ZjA0LThiY2QtY2VlYjZlZjBkMDU0XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gVUlcclxuXHJcbiAgICB0aGlzLlVJQ29udHJvbGxlci5pbml0KGN1cnJlbnRFeGlzdGluZ1Byb2plY3RzKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRPRE86IGRhdGEgdGlnaHRseSBjb3VwbGVkIHdpdGggdWkgaW4gVUlDb250cm9sbGVyXHJcbiIsImltcG9ydCB7IFN0b3JhZ2VDb250cm9sbGVyIH0gZnJvbSBcIi4vU3RvcmFnZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvUHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIgPSBuZXcgU3RvcmFnZUNvbnRyb2xsZXIoKTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHNKU09OID0gdGhpcy5TdG9yYWdlQ29udHJvbGxlci5nZXQoXCJwcm9qZWN0c1wiKTtcclxuICAgIGlmICghcHJvamVjdHNKU09OKSB7XHJcbiAgICAgIHJldHVybiBbXTsgLy8gcmV0dXJuIGVtcHR5IGFyciBpZiBubyBkYXRhIGluIGxvY2FsU3RvcmFnZVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gdHJ5IGJlY2F1c2UgZXJyb3IgbWlnaHQgb2NjdXIgaW4gcGFyc2VcclxuICAgICAgY29uc3QgcGFyc2VkUHJvamVjdHMgPSBKU09OLnBhcnNlKHByb2plY3RzSlNPTik7XHJcblxyXG4gICAgICAvLyB0aGUgYmVsb3cgYXNzdXJlcyB0aGF0IGl0IGlzIGFuIGFycmF5XHJcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZFByb2plY3RzKVxyXG4gICAgICAgID8gcGFyc2VkUHJvamVjdHNcclxuICAgICAgICA6IHBhcnNlZFByb2plY3RzXHJcbiAgICAgICAgPyBbcGFyc2VkUHJvamVjdHNdXHJcbiAgICAgICAgOiBbXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy8gaWYgZXJyb3IsIHJldHVybiBhbiBhcnJheVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgbGV0IHByb2plY3RBcnIgPSB0aGlzLmdldFByb2plY3RzKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHByb2plY3RBcnJbaV0uaWQgPT09IHByb2plY3RJZCkge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0QXJyW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KHByb2plY3RPYmopIHtcclxuICAgIGxldCBwcm9qZWN0c0FyciA9IHRoaXMuZ2V0UHJvamVjdHMoKTtcclxuICAgIHByb2plY3RzQXJyLnB1c2gocHJvamVjdE9iaik7IC8vIHB1c2ggcmVjZWl2ZWQgYXJndW1lbnQgdG8gcHJvamVjdHNBcnJcclxuXHJcbiAgICB0aGlzLlN0b3JhZ2VDb250cm9sbGVyLnNhdmVDdXJyZW50QXJyYXlUb0xvY2FsU3RvcmFnZShcclxuICAgICAgXCJwcm9qZWN0c1wiLFxyXG4gICAgICBwcm9qZWN0c0FyclxyXG4gICAgKTsgLy8gb3ZlcndyaXRlIHByb2plY3RzIHdpdGggdXBkYXRlZEFyciBpbiBsb2NhbFN0b3JhZ2VcclxuICB9XHJcblxyXG4gIGVkaXRQcm9qZWN0KHByb2plY3RJZCwgbmFtZSkge1xyXG4gICAgbGV0IHByb2plY3RzQXJyID0gdGhpcy5nZXRQcm9qZWN0cygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocHJvamVjdHNBcnJbaV0uaWQgPT09IHByb2plY3RJZCkge1xyXG4gICAgICAgIHByb2plY3RzQXJyW2ldLm5hbWUgPSBuYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5TdG9yYWdlQ29udHJvbGxlci5zYXZlQ3VycmVudEFycmF5VG9Mb2NhbFN0b3JhZ2UoXHJcbiAgICAgIFwicHJvamVjdHNcIixcclxuICAgICAgcHJvamVjdHNBcnJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgbGV0IHByb2plY3RzQXJyID0gdGhpcy5nZXRQcm9qZWN0cygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocHJvamVjdElkID09PSBwcm9qZWN0c0FycltpXS5pZCkge1xyXG4gICAgICAgIHByb2plY3RzQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5TdG9yYWdlQ29udHJvbGxlci5zYXZlQ3VycmVudEFycmF5VG9Mb2NhbFN0b3JhZ2UoXHJcbiAgICAgIFwicHJvamVjdHNcIixcclxuICAgICAgcHJvamVjdHNBcnJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTdG9yYWdlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgfVxyXG5cclxuICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUN1cnJlbnRBcnJheVRvTG9jYWxTdG9yYWdlKGtleSwgYXJyYXlUb1NhdmUpIHtcclxuICAgIHRoaXMuc2V0KGtleSwgSlNPTi5zdHJpbmdpZnkoYXJyYXlUb1NhdmUpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Qcm9qZWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBTdG9yYWdlQ29udHJvbGxlciB9IGZyb20gXCIuL1N0b3JhZ2VDb250cm9sbGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBUb2RvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLlByb2plY3RDb250cm9sbGVyID0gbmV3IFByb2plY3RDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLlN0b3JhZ2VDb250cm9sbGVyID0gbmV3IFN0b3JhZ2VDb250cm9sbGVyKCk7XHJcbiAgICAvLyB0aGlzLlN0b3JhZ2VDb250cm9sbGVyID0gbmV3IFN0b3JhZ2VDb250cm9sbGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvcygpIHtcclxuICAgIGNvbnN0IHRvZG9zSlNPTiA9IHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIuZ2V0KFwidG9kb3NcIik7XHJcbiAgICBpZiAoIXRvZG9zSlNPTikge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyc2VkVG9kb3MgPSBKU09OLnBhcnNlKHRvZG9zSlNPTik7XHJcbiAgICAgIC8vIHJldHVybiBhcnJheSBmb3JtIG5vIG1hdHRlciB3aGF0XHJcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZFRvZG9zKVxyXG4gICAgICAgID8gcGFyc2VkVG9kb3NcclxuICAgICAgICA6IHBhcnNlZFRvZG9zXHJcbiAgICAgICAgPyBbcGFyc2VkVG9kb3NdXHJcbiAgICAgICAgOiBbXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb3NXaXRoUHJvamVjdElkKHByb2plY3RJZCkge1xyXG4gICAgY29uc3QgdG9kb3NBcnIgPSB0aGlzLmdldFRvZG9zKCk7XHJcbiAgICBsZXQgbWF0Y2hpbmdBcnIgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3NBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRvZG9zQXJyW2ldLnByb2plY3RJZCA9PT0gcHJvamVjdElkKSB7XHJcbiAgICAgICAgbWF0Y2hpbmdBcnIucHVzaCh0b2Rvc0FycltpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWF0Y2hpbmdBcnI7XHJcbiAgfVxyXG5cclxuICBnZXRTaW5nbGVUb2RvKHRvZG9JZCkge1xyXG4gICAgY29uc3QgdG9kb3NBcnIgPSB0aGlzLmdldFRvZG9zKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0b2Rvc0FycltpXS5pZCA9PT0gdG9kb0lkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9zQXJyW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRvZG9PYmopIHtcclxuICAgIGxldCB0b2Rvc0FyciA9IHRoaXMuZ2V0VG9kb3MoKTtcclxuICAgIHRvZG9zQXJyLnB1c2godG9kb09iaik7XHJcblxyXG4gICAgdGhpcy5TdG9yYWdlQ29udHJvbGxlci5zYXZlQ3VycmVudEFycmF5VG9Mb2NhbFN0b3JhZ2UoXCJ0b2Rvc1wiLCB0b2Rvc0Fycik7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb2RvQnlJZCh0b2RvSWQpIHtcclxuICAgIGxldCB0b2Rvc0FyciA9IHRoaXMuZ2V0VG9kb3MoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0b2Rvc0FycltpXS5pZCA9PT0gdG9kb0lkKSB7XHJcbiAgICAgICAgdG9kb3NBcnIuc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLlN0b3JhZ2VDb250cm9sbGVyLnNhdmVDdXJyZW50QXJyYXlUb0xvY2FsU3RvcmFnZShcInRvZG9zXCIsIHRvZG9zQXJyKTtcclxuICB9XHJcblxyXG4gIGVkaXRUb2RvTmFtZSh0b2RvSWQsIG5hbWUpIHtcclxuICAgIGxldCB0b2Rvc0FyciA9IHRoaXMuZ2V0VG9kb3MoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0b2Rvc0FycltpXS5pZCA9PT0gdG9kb0lkKSB7XHJcbiAgICAgICAgdG9kb3NBcnJbaV0ubmFtZSA9IG5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUN1cnJlbnRBcnJheVRvTG9jYWxTdG9yYWdlKFwidG9kb3NcIiwgdG9kb3NBcnIpO1xyXG4gIH1cclxuICAvKlxyXG4gIGFkZFRvZG9Ub1Byb2plY3QodG9kb09iaiwgcHJvamVjdElkKSB7XHJcbiAgICBsZXQgcHJvamVjdHNBcnIgPSB0aGlzLlByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RzKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwcm9qZWN0c0FycltpXS5pZCA9PT0gcHJvamVjdElkKSB7XHJcbiAgICAgICAgcHJvamVjdHNBcnJbaV0udG9kb3MucHVzaCh0b2RvT2JqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5zYXZlQ3VycmVudFByb2plY3RzVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHNBcnIpO1xyXG4gIH1cclxuXHJcbiAgZWRpdFRvZG9OYW1lKHRvZG9OYW1lLCBwcm9qZWN0SWQsIHRvZG9JZCkge1xyXG4gICAgbGV0IHByb2plY3RzQXJyID0gdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0cygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocHJvamVjdHNBcnJbaV0uaWQgPT09IHByb2plY3RJZCkge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHNBcnJbaV0udG9kb3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGlmIChwcm9qZWN0c0FycltpXS50b2Rvc1tqXS5pZCA9PT0gdG9kb0lkKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzQXJyW2ldLnRvZG9zW2pdLm5hbWUgPSB0b2RvTmFtZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLlByb2plY3RDb250cm9sbGVyLnNhdmVDdXJyZW50UHJvamVjdHNUb0xvY2FsU3RvcmFnZShwcm9qZWN0c0Fycik7XHJcbiAgfVxyXG5cclxuICBnZXRUb2Rvc0Zyb21Qcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgbGV0IHByb2plY3RzQXJyID0gdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0cygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocHJvamVjdHNBcnJbaV0uaWQgPT09IHByb2plY3RJZCkge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0c0FycltpXS50b2RvcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlVG9kb0Zyb21Qcm9qZWN0KHByb2plY3RJZCwgdG9kb0lkKSB7XHJcbiAgICBsZXQgcHJvamVjdHNBcnIgPSB0aGlzLlByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RzKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwcm9qZWN0c0FycltpXS5pZCA9PT0gcHJvamVjdElkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0c0FycltpXS50b2Rvcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgaWYgKHByb2plY3RzQXJyW2ldLnRvZG9zW2pdLmlkID09PSB0b2RvSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzQXJyW2ldLnRvZG9zW2pdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Gcm9tUHJvamVjdChwcm9qZWN0SWQsIHRvZG9JZCkge1xyXG4gICAgbGV0IHByb2plY3RzQXJyID0gdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0cygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocHJvamVjdHNBcnJbaV0uaWQgPT09IHByb2plY3RJZCkge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHNBcnJbaV0udG9kb3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGlmIChwcm9qZWN0c0FycltpXS50b2Rvc1tqXS5pZCA9PT0gdG9kb0lkKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzQXJyW2ldLnRvZG9zLnNwbGljZShqLCAxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLlByb2plY3RDb250cm9sbGVyLnNhdmVDdXJyZW50UHJvamVjdHNUb0xvY2FsU3RvcmFnZShwcm9qZWN0c0Fycik7XHJcbiAgfVxyXG4gICovXHJcbn1cclxuIiwiaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaWQgPSB1bmlxaWQoKTtcclxuICAgIC8vIHRoaXMudG9kb3MgPSBbXTsgLy8gaG1tLCxcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IGVuY2Fwc3VsYXRlIG5hbWUsIGlkLCB0b2RvcyAoPylcclxuICAvLyBnZXRJZCgpIHtcclxuICAvLyAgIHJldHVybiB0aGlzLmlkO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gZ2V0TmFtZSgpIHtcclxuICAvLyAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBzZXROYW1lKG5hbWUpIHtcclxuICAvLyAgIHJldHVybiAodGhpcy5uYW1lID0gbmFtZSk7XHJcbiAgLy8gfVxyXG59XHJcbiIsImltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3RJZCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkO1xyXG4gICAgdGhpcy5pZCA9IHVuaXFpZCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IodGV4dENvbnRlbnQsIG9uQ2xpY2sgPSBudWxsLCBkYXRhSWQgPSBudWxsKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgdGhpcy5vbkNsaWNrID0gb25DbGljaztcclxuICAgIHRoaXMuZGF0YUlkID0gZGF0YUlkO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRoaXMudGV4dENvbnRlbnQ7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcclxuICAgIGlmICh0aGlzLmRhdGFJZCkge1xyXG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0aGlzLmRhdGFJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAodGhpcy5vbkNsaWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrKGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb25lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb25zdHJ1Y3QgQ29tcG9uZW50IGluc3RhbmNlcyBkaXJlY3RseS5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb21wb25lbnQoKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2QgJ3JlbmRlckNvbXBvbmVudCgpJyBtdXN0IGJlIGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaEV2ZW50KGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGBJRDogJHtlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgPz8gXCJubyBpZFwifSB3YXMgY2xpY2tlZGBcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmV4cG9ydCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvamVjdENhbGxiYWNrKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5wcm9qZWN0Q2FsbGJhY2sgPSBwcm9qZWN0Q2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb21wb25lbnQocHJvamVjdElkKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdE1vZGFsLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICA8Zm9ybSBpZD1cImVkaXRQcm9qZWN0Rm9ybVwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3ROYW1lXCI+UHJvamVjdCBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3ROYW1lXCIgbmFtZT1cInByb2plY3ROYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwicHJvamVjdElkXCIgbmFtZT1cInByb2plY3RJZFwiICR7XHJcbiAgICAgICAgICAgIHByb2plY3RJZCA/IGBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCJgIDogXCJcIlxyXG4gICAgICAgICAgfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPiR7cHJvamVjdElkID8gXCJTYXZlIGNoYW5nZXNcIiA6IFwiQWRkXCJ9PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuXHJcbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhpZGRlblwiKTtcclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gbmV3IEJ1dHRvbihcInhcIiwgKGUpID0+XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2xvc2VCdXR0b25DbGljayhlKVxyXG4gICAgKS5yZW5kZXJDb21wb25lbnQoKTtcclxuICAgIHByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdE1vZGFsKTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRQcm9qZWN0Rm9ybVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZm9ybURhdGEuZ2V0KFwicHJvamVjdE5hbWVcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBmb3JtRGF0YS5nZXQoXCJwcm9qZWN0SWRcIik7XHJcbiAgICB0aGlzLnByb2plY3RDYWxsYmFjayhwcm9qZWN0SWQsIHByb2plY3ROYW1lKTtcclxuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayhlKSB7XHJcbiAgICAvLyBjbG9zZSBtb2RhbFxyXG4gICAgdGhpcy5jbG9zZU1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsKCkge1xyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBtb2RhbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKTtcclxuICAgIG1vZGFsSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgY29uc3QgbW9kYWxIaWRkZW5Qcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJZFwiKTtcclxuICAgIG1vZGFsSGlkZGVuUHJvamVjdElkLnZhbHVlID0gXCJcIjtcclxuICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGlkZGVuXCIpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKCkge1xyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpLnBhcmVudE5vZGU7XHJcbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLWhpZGRlblwiKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0Q29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9Qcm9qZWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XHJcbmltcG9ydCB7IFRvZG9Db250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL1RvZG9Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFRvZG9Db21wb25lbnQgfSBmcm9tIFwiLi9Ub2RvXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLlByb2plY3RDb250cm9sbGVyID0gbmV3IFByb2plY3RDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLk1vZGFsID0gbmV3IE1vZGFsKCk7XHJcbiAgICB0aGlzLlRvZG9Db250cm9sbGVyID0gbmV3IFRvZG9Db250cm9sbGVyKCk7XHJcbiAgICB0aGlzLlRvZG9Db21wb25lbnQgPSBuZXcgVG9kb0NvbXBvbmVudCgpO1xyXG5cclxuICAgIC8vIHRvIGNvdW50ZXIgdGhpcy5Nb2RhbCA9PSB1bmRlZmluZWRcclxuICAgIHRoaXMuaGFuZGxlUHJvamVjdEFkZENsaWNrID0gdGhpcy5oYW5kbGVQcm9qZWN0QWRkQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbXBvbmVudChwcm9qZWN0c0Fycikge1xyXG4gICAgY29uc3QgbmF2RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuICAgIG5hdkVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBwcm9qZWN0c0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwcm9qZWN0TmF2RGl2LmNsYXNzTGlzdC5hZGQoXCJuYXZfX3Byb2plY3RcIik7XHJcbiAgICAgIHByb2plY3ROYXZEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0LmlkKTtcclxuICAgICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RWRpdEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgXCJlZGl0XCIsXHJcbiAgICAgICAgKGUpID0+IHRoaXMuaGFuZGxlUHJvamVjdEVkaXRDbGljayhlKSxcclxuICAgICAgICBwcm9qZWN0LmlkXHJcbiAgICAgICkucmVuZGVyQ29tcG9uZW50KCk7XHJcblxyXG4gICAgICAvLyBidXR0b24gY2xvc2VcclxuICAgICAgY29uc3QgcHJvamVjdENsb3NlQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICBcInhcIixcclxuICAgICAgICAoKSA9PiB0aGlzLmhhbmRsZVByb2plY3RDbG9zZUNsaWNrKHByb2plY3QuaWQpLFxyXG4gICAgICAgIHByb2plY3QuaWRcclxuICAgICAgKS5yZW5kZXJDb21wb25lbnQoKTtcclxuICAgICAgLy8gdGhpcy5hdHRhY2hFdmVudChwcm9qZWN0Q2xvc2VCdXR0b24pO1xyXG5cclxuICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgcHJvamVjdE5hdkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XHJcbiAgICAgIHByb2plY3RCdXR0b25zRGl2LmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnV0dG9uKTtcclxuICAgICAgcHJvamVjdEJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdENsb3NlQnV0dG9uKTtcclxuICAgICAgcHJvamVjdE5hdkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uc0Rpdik7XHJcbiAgICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5cclxuICAgICAgLy8gbmF2RGl2IGNsaWNrIGhhbmRsaW5nXHJcbiAgICAgIHByb2plY3ROYXZEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PlxyXG4gICAgICAgIHRoaXMuaGFuZGxlUHJvamVjdERpdkNsaWNrKGUpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBuYXZFbC5hcHBlbmRDaGlsZChwcm9qZWN0TmF2RGl2KTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgIFwiK1wiLFxyXG4gICAgICB0aGlzLmhhbmRsZVByb2plY3RBZGRDbGlja1xyXG4gICAgKS5yZW5kZXJDb21wb25lbnQoKTtcclxuICAgIG5hdkVsLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvamVjdERpdkNsaWNrKGUpIHtcclxuICAgIC8vIHJlbmRlciBhbGwgdG9kb3Mgd2l0aCB0aGUgZGF0YS1pZFxyXG4gICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuICAgIGNvbnN0IGhpZGRlbnRUb2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tcHJvamVjdElkXCIpO1xyXG4gICAgaGlkZGVudFRvZG9JbnB1dC52YWx1ZSA9IHByb2plY3RJZDtcclxuICAgIGNvbnN0IG15VG9kb3NBcnIgPSB0aGlzLlRvZG9Db250cm9sbGVyLmdldFRvZG9zV2l0aFByb2plY3RJZChwcm9qZWN0SWQpO1xyXG5cclxuICAgIHRoaXMuVG9kb0NvbXBvbmVudC5yZW5kZXJDb21wb25lbnQobXlUb2Rvc0Fycik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9qZWN0RWRpdENsaWNrKGUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcblxyXG4gICAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJZFwiKTtcclxuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIik7XHJcbiAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IHByb2plY3RJZDtcclxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdE5hbWUgPVxyXG4gICAgICB0aGlzLlByb2plY3RDb250cm9sbGVyLmdldFByb2plY3QocHJvamVjdElkKS5uYW1lOyAvL0ZJWE1FOiBzb21ldGltZXMgdW5kZWZpbmVkXHJcbiAgICBmb3JtSW5wdXQudmFsdWUgPSBzZWxlY3RlZFByb2plY3ROYW1lO1xyXG4gICAgdGhpcy5Nb2RhbC5zaG93TW9kYWwoKTtcclxuICAgIGZvcm1JbnB1dC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvamVjdEFkZENsaWNrKCkge1xyXG4gICAgLy8gVE9ETzogcmVzZXQgbW9kYWxcclxuICAgIHRoaXMuTW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9qZWN0Q2xvc2VDbGljayhwcm9qZWN0SWQpIHtcclxuICAgIC8vIFRPRE86IGFkZCBtb2RhbCB0byBjb25maXJtXHJcblxyXG4gICAgLy8gZGVsZXRlIHByb2plY3RcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIuZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xyXG4gICAgICAvLyByZW1vdmUgZnJvbSB1aVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiXWApLnJlbW92ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcclxuaW1wb3J0IHsgVG9kb01vZGFsIH0gZnJvbSBcIi4vVG9kb01vZGFsXCI7XHJcbmltcG9ydCB7IFRvZG9Db250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL1RvZG9Db250cm9sbGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBUb2RvQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLk1vZGFsID0gbmV3IE1vZGFsKCk7XHJcbiAgICB0aGlzLlRvZG9Nb2RhbCA9IG5ldyBUb2RvTW9kYWwoKTtcclxuICAgIHRoaXMuVG9kb0NvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbXBvbmVudCh0b2Rvc0Fycikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kb3MtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIHRvZG9zQXJyLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpO1xyXG4gICAgICB0b2RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdG9kby5pZCk7XHJcbiAgICAgIHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0SWRcIiwgdG9kby5wcm9qZWN0SWQpO1xyXG4gICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgICAgY29uc3QgdG9kb0VkaXRCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIFwiZWRpdFwiLFxyXG4gICAgICAgIChlKSA9PiB0aGlzLmhhbmRsZVRvZG9FZGl0Q2xpY2soZSksXHJcbiAgICAgICAgdG9kby5pZFxyXG4gICAgICApLnJlbmRlckNvbXBvbmVudCgpO1xyXG5cclxuICAgICAgLy8gYnV0dG9uIGNsb3NlXHJcbiAgICAgIGNvbnN0IHRvZG9DbG9zZUJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgXCJ4XCIsXHJcbiAgICAgICAgKCkgPT4gdGhpcy5oYW5kbGVUb2RvQ2xvc2VDbGljayh0b2RvLmlkKSxcclxuICAgICAgICB0b2RvLmlkXHJcbiAgICAgICkucmVuZGVyQ29tcG9uZW50KCk7XHJcblxyXG4gICAgICBjb25zdCB0b2RvQnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRvZG9CdXR0b25zRGl2LmFwcGVuZENoaWxkKHRvZG9FZGl0QnV0dG9uKTtcclxuICAgICAgdG9kb0J1dHRvbnNEaXYuYXBwZW5kQ2hpbGQodG9kb0Nsb3NlQnV0dG9uKTtcclxuXHJcbiAgICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xyXG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcclxuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uc0Rpdik7XHJcbiAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2Rvc0NvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IG5ldyBCdXR0b24oXCIrXCIsIChlKSA9PlxyXG4gICAgICB0aGlzLmhhbmRsZVRvZG9BZGRDbGljayhlKVxyXG4gICAgKS5yZW5kZXJDb21wb25lbnQoKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUb2RvQWRkQ2xpY2soZSkge1xyXG4gICAgdGhpcy5Ub2RvTW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUb2RvRWRpdENsaWNrKGUpIHtcclxuICAgIGNvbnN0IHRvZG9JZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcblxyXG4gICAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9JZFwiKTsgLy9cclxuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb05hbWVcIik7XHJcbiAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IHRvZG9JZDtcclxuICAgIGNvbnN0IHNlbGVjdGVkVG9kb05hbWUgPSB0aGlzLlRvZG9Db250cm9sbGVyLmdldFNpbmdsZVRvZG8odG9kb0lkKS5uYW1lO1xyXG4gICAgZm9ybUlucHV0LnZhbHVlID0gc2VsZWN0ZWRUb2RvTmFtZTtcclxuICAgIHRoaXMuVG9kb01vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgZm9ybUlucHV0LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUb2RvQ2xvc2VDbGljayh0b2RvSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuVG9kb0NvbnRyb2xsZXIucmVtb3ZlVG9kb0J5SWQodG9kb0lkKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3RvZG9JZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xyXG5leHBvcnQgY2xhc3MgVG9kb01vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcih0b2RvQ2FsbGJhY2spIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnRvZG9DYWxsYmFjayA9IHRvZG9DYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbXBvbmVudCh0b2RvSWQpIHtcclxuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RvTW9kYWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG9kb01vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICA8Zm9ybSBpZD1cImVkaXRUb2RvRm9ybVwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG9OYW1lXCI+VG9kbyBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRvZG9OYW1lXCIgbmFtZT1cInRvZG9OYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwidG9kb0lkXCIgbmFtZT1cInRvZG9JZFwiICR7XHJcbiAgICAgICAgICAgIHRvZG9JZCA/IGB2YWx1ZT1cIiR7dG9kb0lkfVwiYCA6IFwiXCJcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwidG9kby1wcm9qZWN0SWRcIiBuYW1lPVwidG9kby1wcm9qZWN0SWRcIiAke1xyXG4gICAgICAgICAgICBwcm9qZWN0SWQgPyBgdmFsdWU9XCIke3Byb2plY3RJZH1cImAgOiBcIlwiXHJcbiAgICAgICAgICB9PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+JHt0b2RvSWQgPyBcIlNhdmUgY2hhbmdlc1wiIDogXCJBZGRcIn08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgdG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oaWRkZW5cIik7XHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IG5ldyBCdXR0b24oXCJ4XCIsIChlKSA9PlxyXG4gICAgICB0aGlzLmhhbmRsZUNsb3NlQnV0dG9uQ2xpY2soZSlcclxuICAgICkucmVuZGVyQ29tcG9uZW50KCk7XHJcbiAgICB0b2RvTW9kYWwucXVlcnlTZWxlY3RvcihcIi50b2RvTW9kYWwtY29udGVudFwiKS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcblxyXG4gICAgLy8gVE9ETzogQUREIFRPRE8gTU9EQUwgVE8gQ09OVEVOVCBTTyBUSEFUIFRIRSBVWCBJUyBCRVRURVJcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb01vZGFsKTtcclxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmRDaGlsZCh0b2RvTW9kYWwpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpKTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRUb2RvRm9ybVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcclxuICAgIGNvbnN0IHRvZG9OYW1lID0gZm9ybURhdGEuZ2V0KFwidG9kb05hbWVcIik7XHJcbiAgICBjb25zdCB0b2RvSWQgPSBmb3JtRGF0YS5nZXQoXCJ0b2RvSWRcIik7XHJcbiAgICB0aGlzLnRvZG9DYWxsYmFjayh0b2RvSWQsIHRvZG9OYW1lKTtcclxuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Nb2RhbC1jb250ZW50XCIpLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBtb2RhbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvTmFtZVwiKTtcclxuICAgIG1vZGFsSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgY29uc3QgbW9kYWxIaWRkZW5Ub2RvSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9JZFwiKTtcclxuICAgIG1vZGFsSGlkZGVuVG9kb0lkLnZhbHVlID0gXCJcIjtcclxuICAgIHRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGlkZGVuXCIpO1xyXG4gICAgdG9kb01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vdmVybGF5XCIpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKCkge1xyXG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvTW9kYWwtY29udGVudFwiKS5wYXJlbnROb2RlO1xyXG4gICAgdG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1vdmVybGF5XCIpO1xyXG4gICAgdG9kb01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1oaWRkZW5cIik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5hdmJhciB9IGZyb20gXCIuL0NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vQ29tcG9uZW50cy9Nb2RhbFwiO1xyXG4vLyBpbXBvcnQgcHJvamVjdENvbnRyb2xsZXIgaGVyZT9cclxuaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvUHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBUb2RvTW9kYWwgfSBmcm9tIFwiLi9Db21wb25lbnRzL1RvZG9Nb2RhbFwiO1xyXG5pbXBvcnQgeyBUb2RvQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9Ub2RvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4uL21vZGVscy9Ub2RvXCI7XHJcbmltcG9ydCB7IFRvZG9Db21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL1RvZG9cIjtcclxuZXhwb3J0IGNsYXNzIFVJQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLk5hdmJhciA9IG5ldyBOYXZiYXIoKTtcclxuICAgIC8vIHRoaXMuTW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuVG9kb0NvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuVG9kbyA9IG5ldyBUb2RvKCk7XHJcbiAgICB0aGlzLlRvZG9Db21wb25lbnQgPSBuZXcgVG9kb0NvbXBvbmVudCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdChwcm9qZWN0c0Fycikge1xyXG4gICAgdGhpcy5OYXZiYXIucmVuZGVyQ29tcG9uZW50KHByb2plY3RzQXJyKTtcclxuICAgIHRoaXMuaW5pdFByb2plY3RNb2RhbCgpO1xyXG4gICAgdGhpcy5pbml0VG9kb01vZGFsKCk7XHJcbiAgICB0aGlzLmluaXRGaXJzdERpdkNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBpbml0UHJvamVjdE1vZGFsKCkge1xyXG4gICAgLy8gcmVuZGVyIG1vZGFsXHJcbiAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgocHJvamVjdElkLCBwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICBpZiAocHJvamVjdElkID09PSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICB0aGlzLlByb2plY3RDb250cm9sbGVyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcblxyXG4gICAgICAgIC8vIHJlcmVuZGVyIG5hdmJhclxyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RzQXJyID0gdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgIHRoaXMuTmF2YmFyLnJlbmRlckNvbXBvbmVudChuZXdQcm9qZWN0c0Fycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5lZGl0UHJvamVjdChwcm9qZWN0SWQsIHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgLy8gcmVyZW5kZXIgbmF2YmFyXHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdHNBcnIgPSB0aGlzLlByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RzKCk7XHJcbiAgICAgICAgdGhpcy5OYXZiYXIucmVuZGVyQ29tcG9uZW50KG5ld1Byb2plY3RzQXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kYWwucmVuZGVyQ29tcG9uZW50KCk7XHJcbiAgfVxyXG5cclxuICBpbml0VG9kb01vZGFsKCkge1xyXG4gICAgLy8gcmVuZGVyIHRvZG9Nb2RhbFxyXG4gICAgY29uc3QgdG9kb01vZGFsID0gbmV3IFRvZG9Nb2RhbCgodG9kb0lkLCB0b2RvTmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tcHJvamVjdElkXCIpLnZhbHVlO1xyXG4gICAgICBpZiAodG9kb0lkID09PSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKHRvZG9OYW1lLCBwcm9qZWN0SWQpO1xyXG4gICAgICAgIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kbyhuZXdUb2RvKTtcclxuXHJcbiAgICAgICAgLy8gcmVyZW5kZXIgdG9kb3NcclxuICAgICAgICBjb25zdCBuZXdUb2RvQXJyID0gdGhpcy5Ub2RvQ29udHJvbGxlci5nZXRUb2Rvc1dpdGhQcm9qZWN0SWQocHJvamVjdElkKTtcclxuICAgICAgICB0aGlzLlRvZG9Db21wb25lbnQucmVuZGVyQ29tcG9uZW50KG5ld1RvZG9BcnIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuVG9kb0NvbnRyb2xsZXIuZWRpdFRvZG9OYW1lKHRvZG9JZCwgdG9kb05hbWUpO1xyXG5cclxuICAgICAgICAvLyByZXJlbmRlciB0b2Rvc1xyXG4gICAgICAgIGNvbnN0IG5ld1RvZG9BcnIgPSB0aGlzLlRvZG9Db250cm9sbGVyLmdldFRvZG9zV2l0aFByb2plY3RJZChwcm9qZWN0SWQpO1xyXG4gICAgICAgIHRoaXMuVG9kb0NvbXBvbmVudC5yZW5kZXJDb21wb25lbnQobmV3VG9kb0Fycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRvZG9Nb2RhbC5yZW5kZXJDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIGluaXRGaXJzdERpdkNsaWNrKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgbXlGaXJzdE5hdkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19wcm9qZWN0XCIpO1xyXG4gICAgICBpZiAobXlGaXJzdE5hdkRpdikge1xyXG4gICAgICAgIG15Rmlyc3ROYXZEaXYuY2xpY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XHJcbmxldCBhcHAgPSBuZXcgQXBwQ29udHJvbGxlcigpO1xyXG5hcHAuaW5pdCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=