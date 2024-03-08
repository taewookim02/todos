/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  min-height: 100vh;
}

.content {
  background-color: #eee;
}

.header {
  background-color: #ddd;
  border-right: 2px solid #333;
}

/* Project Modal */
.project__modal,
.todo__modal {
  /* display: none; */
  position: fixed;
  top: 45%; /* init: 50% */
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: #fff;
  padding: 20px;
  /* border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.project__form {
  display: grid;
  grid-template-columns: min-content min-content;
  grid-template-rows: min-content min-content;
  align-items: center;
}

.project__close {
  width: min-content;
  height: min-content;
  justify-self: end;
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles.css"],
            names: [],
            mappings:
              "AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA,kBAAkB;AAClB;;EAEE,mBAAmB;EACnB,eAAe;EACf,QAAQ,EAAE,cAAc;EACxB,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb;6CAC2C;AAC7C;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,2CAA2C;EAC3C,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB",
            sourcesContent: [
              "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 0.3fr 1fr;\r\n  min-height: 100vh;\r\n}\r\n\r\n.content {\r\n  background-color: #eee;\r\n}\r\n\r\n.header {\r\n  background-color: #ddd;\r\n  border-right: 2px solid #333;\r\n}\r\n\r\n/* Project Modal */\r\n.project__modal,\r\n.todo__modal {\r\n  /* display: none; */\r\n  position: fixed;\r\n  top: 45%; /* init: 50% */\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1000;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  /* border-radius: 8px;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */\r\n}\r\n\r\n.modal__overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 999;\r\n}\r\n\r\n.project__form {\r\n  display: grid;\r\n  grid-template-columns: min-content min-content;\r\n  grid-template-rows: min-content min-content;\r\n  align-items: center;\r\n}\r\n\r\n.project__close {\r\n  width: min-content;\r\n  height: min-content;\r\n  justify-self: end;\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        "use strict";

        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/styles.css":
      /*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        "use strict";

        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        "use strict";

        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";

        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./node_modules/uniqid/index.js":
      /*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
      /***/ (module) => {
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
        var pid =
          typeof process !== "undefined" && process.pid
            ? process.pid.toString(36)
            : "";
        var address = "";
        if (false) {
          var i, networkInterfaces, mac, os;
        }

        //  Exports
        // ================================================
        module.exports = module.exports["default"] = function (prefix, suffix) {
          return (
            (prefix ? prefix : "") +
            address +
            pid +
            now().toString(36) +
            (suffix ? suffix : "")
          );
        };
        module.exports.process = function (prefix, suffix) {
          return (
            (prefix ? prefix : "") +
            pid +
            now().toString(36) +
            (suffix ? suffix : "")
          );
        };
        module.exports.time = function (prefix, suffix) {
          return (
            (prefix ? prefix : "") + now().toString(36) + (suffix ? suffix : "")
          );
        };

        //  Helpers
        // ================================================
        function now() {
          var time = Date.now();
          var last = now.last || time;
          return (now.last = time > last ? time : last + 1);
        }

        /***/
      },

    /***/ "./src/classes/DOMController.js":
      /*!**************************************!*\
  !*** ./src/classes/DOMController.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DOMController: () => /* binding */ DOMController,
          /* harmony export */
        });
        class DOMController {
          // static variables
          static overlayModal = null;
          static projectModal = null;
          static todoModal = null;
          static content = document.querySelector("#content");
          static nav = document.querySelector(".nav");
          static header = document.querySelector(".header");
          static container = document.querySelector(".container");
          static activeModal = null;

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
          <h2>Add Project</h2>
          <a class="project__close">&times;</a>
          <input type="text" id="project__name" name ="project__name" class="project__name" placeHolder="Project Name:" />
          <button class="project__submit">Submit</button>
        </form>
        `,
              },
              todo: {
                class: "todo__modal",
                content: `
        <form class="todo__form">
          <h2>Add Todo</h2>
          <a class="todo__close">&times;</a>
          <input type="text" id="todo__name" name ="todo__name" class="todo__name" placeHolder="Todo Name:" />
          <input type="text" id="todo__description" name ="todo__description" class="todo__description" placeHolder="Description:" />
          <input type="date" id="todo__dueDate" name ="todo__dueDate" class="todo__dueDate" placeHolder="Due Date:" />
          <input type="number" id="todo__priority" name ="todo__priority" class="todo__priority" placeHolder="Priority:" />
          <input type="text" id="todo__notes" name ="todo__notes" class="todo__notes" placeHolder="Notes:" />
          
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
            const isShowing =
              targetModal && targetModal.style.display === "block";

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
            });
          }

          // render all projects
          static renderProjects(projects) {
            const projectsContainer = document.querySelector(".nav__projects");
            projectsContainer.innerHTML = ""; // reset projects list

            projects.forEach((project) => {
              // FIXME: Uncaught ReferenceError: projects is not defined
              const projectDiv = document.createElement("div");
              projectDiv.classList.add("project");
              projectDiv.innerHTML = `<h3>${project.name}</h3>`;
              projectDiv.addEventListener("click", (e) => {
                e.preventDefault();
                DOMController.renderTodosForProject(project.id);
              });
              projectsContainer.appendChild(projectDiv);
            });
          }

          static renderTodosForProject(projectId) {
            const selectedProject = projects.findProjectById(projectId);
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

        /***/
      },

    /***/ "./src/classes/Project.js":
      /*!********************************!*\
  !*** ./src/classes/Project.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Project: () => /* binding */ Project,
          /* harmony export */
        });
        /* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Todo */ "./src/classes/Todo.js");

        class Project {
          constructor(id, name) {
            this.id = id;
            this.name = name;
            this.todos = [];
            // setting a date for the project
          }

          addTodo(todo) {
            if (todo instanceof _Todo__WEBPACK_IMPORTED_MODULE_0__.Todo) {
              this.todos.push(todo);
            } else {
              console.log("Not a valid todo");
            }
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

          // todo completion percentage (%)
        }

        /***/
      },

    /***/ "./src/classes/Projects.js":
      /*!*********************************!*\
  !*** ./src/classes/Projects.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Projects: () => /* binding */ Projects,
          /* harmony export */
        });
        /* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util */ "./src/classes/Util.js");
        /* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _Util__WEBPACK_IMPORTED_MODULE_0__
          );

        class Projects {
          constructor() {
            this.projects = this.loadFromLocalStorage() || [];
          }

          // should addProject be here?
          addProject(project) {
            this.projects.push(project);
            // localStorage.setItem("projects", JSON.stringify(this.projects));
            this.saveToLocalStorage();
          }

          getProjects() {
            // Util.getFromLocalStorage("projects");
            return this.projects;
            // return this.projects;
          }

          findProjectById(id) {
            return this.projects.find((project) => project.id === id);
          }

          removeProject(id) {
            this.projects = this.projects.filter(
              (project) => project.id !== id
            );
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

        /***/
      },

    /***/ "./src/classes/Todo.js":
      /*!*****************************!*\
  !*** ./src/classes/Todo.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Todo: () => /* binding */ Todo,
          /* harmony export */
        });
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

        /***/
      },

    /***/ "./src/classes/Util.js":
      /*!*****************************!*\
  !*** ./src/classes/Util.js ***!
  \*****************************/
      /***/ () => {
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
        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
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
    /* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(
        /*! ./classes/Projects */ "./src/classes/Projects.js"
      );
    /* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./classes/Project */ "./src/classes/Project.js");
    /* harmony import */ var _classes_Todo__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./classes/Todo */ "./src/classes/Todo.js");
    /* harmony import */ var _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(
        /*! ./classes/DOMController */ "./src/classes/DOMController.js"
      );
    /* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
    /* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(/*! ./styles.css */ "./src/styles.css");

    // defining projects
    const projects =
      new _classes_Projects__WEBPACK_IMPORTED_MODULE_0__.Projects();
    // const project = new Project

    if (projects.getProjects().length === 0) {
      const project1 =
        new _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project(
          uniqid__WEBPACK_IMPORTED_MODULE_4___default()(),
          "Project 1"
        );
      console.log(projects);
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
    _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderProjects(
      projects.getProjects()
    );

    // add project
    _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.acceptForm(
      (formData) => {
        const newProject =
          new _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project(
            uniqid__WEBPACK_IMPORTED_MODULE_4___default()(),
            formData.project__name
          );
        projects.addProject(newProject);
        _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderProjects(
          projects.getProjects()
        );
      },
      ".project__form",
      _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController
        .projectModal
    );

    // TODO: accept todo form
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

        const project = projects.findProjectById(
          _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController
            .selectedProjectId
        );
        project.addTodo(newTodo);
        _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderTodosForProject(
          _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController
            .selectedProjectId
        );
      },
      ".todo__form",
      _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController
        .todoModal
    );

    // TODO: clicking on the dropdown should save the project id somewhere
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFlBQVksV0FBVyxvQkFBb0IsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsNkJBQTZCLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEtBQUssb0JBQW9CLG9CQUFvQix1Q0FBdUMsd0JBQXdCLEtBQUssa0JBQWtCLDZCQUE2QixLQUFLLGlCQUFpQiw2QkFBNkIsbUNBQW1DLEtBQUssaUVBQWlFLHdCQUF3Qix3QkFBd0IsZ0JBQWdCLCtCQUErQix1Q0FBdUMsb0JBQW9CLDZCQUE2QixvQkFBb0IsNEJBQTRCLGdEQUFnRCxPQUFPLHlCQUF5QixzQkFBc0IsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLDJDQUEyQyxtQkFBbUIsS0FBSyx3QkFBd0Isb0JBQW9CLHFEQUFxRCxrREFBa0QsMEJBQTBCLEtBQUsseUJBQXlCLHlCQUF5QiwwQkFBMEIsd0JBQXdCLEtBQUssdUJBQXVCO0FBQ25zRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNqRTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxLQUEyRSxDQUFDLHNDQWdCOUU7O0FBRUQ7QUFDQTtBQUNBLGlCQUFpQix5QkFBc0IsNkJBQTZCO0FBQ3BFLHNCQUFzQiw2QkFBNkI7QUFDbkQsbUJBQW1CLGdDQUFnQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZCQUE2QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0IsZUFBZSxpQkFBaUI7QUFDaEMsb0JBQW9CLGFBQWE7QUFDakMseUJBQXlCLGNBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTzhCO0FBQzlCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVDQUFJO0FBQzVCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0I4QjtBQUM5QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQThDO0FBQ0Y7QUFDTjtBQUNrQjtBQUM1QjtBQUNHO0FBQy9CO0FBQ0E7QUFDQSxxQkFBcUIsdURBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFEQUFPLENBQUMsNkNBQU07QUFDckM7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBSTtBQUN4QixJQUFJLDZDQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFhO0FBQ2IsaUVBQWE7QUFDYjtBQUNBO0FBQ0EsaUVBQWE7QUFDYjtBQUNBLDJCQUEyQixxREFBTyxDQUFDLDZDQUFNO0FBQ3pDO0FBQ0EsSUFBSSxpRUFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQSxFQUFFLGlFQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUVBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFJO0FBQzVCLE1BQU0sNkNBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGlFQUFhO0FBQzFEO0FBQ0EsSUFBSSxpRUFBYSx1QkFBdUIsaUVBQWE7QUFDckQsR0FBRztBQUNIO0FBQ0EsRUFBRSxpRUFBYTtBQUNmO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdW5pcWlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2NsYXNzZXMvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9jbGFzc2VzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvY2xhc3Nlcy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9jbGFzc2VzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvY2xhc3Nlcy9VdGlsLmpzIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgMWZyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMzMzO1xyXG59XHJcblxyXG4vKiBQcm9qZWN0IE1vZGFsICovXHJcbi5wcm9qZWN0X19tb2RhbCxcclxuLnRvZG9fX21vZGFsIHtcclxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQ1JTsgLyogaW5pdDogNTAlICovXHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAqL1xyXG59XHJcblxyXG4ubW9kYWxfX292ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLnByb2plY3RfX2Zvcm0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0X19jbG9zZSB7XHJcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBLGtCQUFrQjtBQUNsQjs7RUFFRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFFBQVEsRUFBRSxjQUFjO0VBQ3hCLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2I7NkNBQzJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhDQUE4QztFQUM5QywyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAxZnI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvamVjdCBNb2RhbCAqL1xcclxcbi5wcm9qZWN0X19tb2RhbCxcXHJcXG4udG9kb19fbW9kYWwge1xcclxcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNDUlOyAvKiBpbml0OiA1MCUgKi9cXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgLyogYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfX2Zvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfX2Nsb3NlIHtcXHJcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCJleHBvcnQgY2xhc3MgRE9NQ29udHJvbGxlciB7XHJcbiAgLy8gc3RhdGljIHZhcmlhYmxlc1xyXG4gIHN0YXRpYyBvdmVybGF5TW9kYWwgPSBudWxsO1xyXG4gIHN0YXRpYyBwcm9qZWN0TW9kYWwgPSBudWxsO1xyXG4gIHN0YXRpYyB0b2RvTW9kYWwgPSBudWxsO1xyXG4gIHN0YXRpYyBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIHN0YXRpYyBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuICBzdGF0aWMgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgc3RhdGljIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gIHN0YXRpYyBhY3RpdmVNb2RhbCA9IG51bGw7XHJcblxyXG4gIC8vIHJlbmRlciBwYWdlIHN0cnVjdHVyZVxyXG4gIHN0YXRpYyByZW5kZXJQYWdlKCkge1xyXG4gICAgLy8gcmVzZXQgY29udGVudFxyXG4gICAgRE9NQ29udHJvbGxlci5uYXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aDI+UHJvamVjdHM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmF2X19wcm9qZWN0c1wiPjwvZGl2PlxyXG4gICAgYDtcclxuICAgIERPTUNvbnRyb2xsZXIuY29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxoMj5Ub2RvczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2Rvc19fY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIERPTUNvbnRyb2xsZXIucmVuZGVyTW9kYWwoRE9NQ29udHJvbGxlci5jb250YWluZXIsIFwicHJvamVjdFwiKTsgLy8gdGhpcyBjcmVhdGVzIHRoZSBwcm9qZWN0IG1vZGFsXHJcbiAgICBET01Db250cm9sbGVyLnJlbmRlck1vZGFsKERPTUNvbnRyb2xsZXIuY29udGFpbmVyLCBcInRvZG9cIik7IC8vIHRoaXMgY3JlYXRlcyB0aGUgcHJvamVjdCBtb2RhbFxyXG5cclxuICAgIERPTUNvbnRyb2xsZXIuYWRkQnV0dG9ucygpO1xyXG5cclxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnNcclxuICAgIERPTUNvbnRyb2xsZXIuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkQnV0dG9ucygpIHtcclxuICAgIC8vIGFkZCBwcm9qZWN0IGJ1dHRvblxyXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X19idG5cIik7XHJcbiAgICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBET01Db250cm9sbGVyLmhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcclxuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIHByb2plY3QgYnV0dG9uXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRkIHRvZG8gYnV0dG9uXHJcbiAgICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHRvZG9CdG4uY2xhc3NMaXN0LmFkZChcInRvZG9fX2J0blwiKTtcclxuICAgIHRvZG9CdG4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0J0bik7XHJcbiAgICB0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVNb2RhbENvbmZpZyhtb2RhbE5hbWUpIHtcclxuICAgIGNvbnN0IG1vZGFsQ29uZmlncyA9IHtcclxuICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgIGNsYXNzOiBcInByb2plY3RfX21vZGFsXCIsXHJcbiAgICAgICAgY29udGVudDogYFxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwicHJvamVjdF9fZm9ybVwiPlxyXG4gICAgICAgICAgPGgyPkFkZCBQcm9qZWN0PC9oMj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwicHJvamVjdF9fY2xvc2VcIj4mdGltZXM7PC9hPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0X19uYW1lXCIgbmFtZSA9XCJwcm9qZWN0X19uYW1lXCIgY2xhc3M9XCJwcm9qZWN0X19uYW1lXCIgcGxhY2VIb2xkZXI9XCJQcm9qZWN0IE5hbWU6XCIgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0X19zdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYCxcclxuICAgICAgfSxcclxuICAgICAgdG9kbzoge1xyXG4gICAgICAgIGNsYXNzOiBcInRvZG9fX21vZGFsXCIsXHJcbiAgICAgICAgY29udGVudDogYFxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwidG9kb19fZm9ybVwiPlxyXG4gICAgICAgICAgPGgyPkFkZCBUb2RvPC9oMj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwidG9kb19fY2xvc2VcIj4mdGltZXM7PC9hPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvX19uYW1lXCIgbmFtZSA9XCJ0b2RvX19uYW1lXCIgY2xhc3M9XCJ0b2RvX19uYW1lXCIgcGxhY2VIb2xkZXI9XCJUb2RvIE5hbWU6XCIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidG9kb19fZGVzY3JpcHRpb25cIiBuYW1lID1cInRvZG9fX2Rlc2NyaXB0aW9uXCIgY2xhc3M9XCJ0b2RvX19kZXNjcmlwdGlvblwiIHBsYWNlSG9sZGVyPVwiRGVzY3JpcHRpb246XCIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidG9kb19fZHVlRGF0ZVwiIG5hbWUgPVwidG9kb19fZHVlRGF0ZVwiIGNsYXNzPVwidG9kb19fZHVlRGF0ZVwiIHBsYWNlSG9sZGVyPVwiRHVlIERhdGU6XCIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJ0b2RvX19wcmlvcml0eVwiIG5hbWUgPVwidG9kb19fcHJpb3JpdHlcIiBjbGFzcz1cInRvZG9fX3ByaW9yaXR5XCIgcGxhY2VIb2xkZXI9XCJQcmlvcml0eTpcIiAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvX19ub3Rlc1wiIG5hbWUgPVwidG9kb19fbm90ZXNcIiBjbGFzcz1cInRvZG9fX25vdGVzXCIgcGxhY2VIb2xkZXI9XCJOb3RlczpcIiAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9kb19fc3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIGAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG1vZGFsQ29uZmlnc1ttb2RhbE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZEJ1dHRvbigpIHtcclxuICAgIC8vIGFkZCBwcm9qZWN0IGJ1dHRvblxyXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X19idG5cIik7XHJcbiAgICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XHJcblxyXG4gICAgLy8gYWRkIHRvZG8gYnV0dG9uXHJcbiAgICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHRvZG9CdG4uY2xhc3NMaXN0LmFkZChcInRvZG9fX2J0blwiKTtcclxuICAgIHRvZG9CdG4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0J0bik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVyTW9kYWwoY29udGFpbmVyLCBtb2RhbE5hbWUpIHtcclxuICAgIGNvbnN0IHsgY2xhc3M6IG1vZGFsQ2xhc3MsIGNvbnRlbnQgfSA9XHJcbiAgICAgIERPTUNvbnRyb2xsZXIuY3JlYXRlTW9kYWxDb25maWcobW9kYWxOYW1lKTtcclxuXHJcbiAgICAvLyBtb2RhbCBvdmVybGF5XHJcbiAgICBpZiAoIURPTUNvbnRyb2xsZXIub3ZlcmxheU1vZGFsKSB7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIub3ZlcmxheU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgRE9NQ29udHJvbGxlci5vdmVybGF5TW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19vdmVybGF5XCIpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoRE9NQ29udHJvbGxlci5vdmVybGF5TW9kYWwpO1xyXG4gICAgICBET01Db250cm9sbGVyLm92ZXJsYXlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vIEVuc3VyZSBpdCBpcyBpbml0aWFsbHkgaGlkZGVuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChtb2RhbENsYXNzKTtcclxuICAgIG1vZGFsLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBpZiAobW9kYWxOYW1lID09PSBcInByb2plY3RcIikge1xyXG4gICAgICBET01Db250cm9sbGVyLnByb2plY3RNb2RhbCA9IG1vZGFsO1xyXG4gICAgfSBlbHNlIGlmIChtb2RhbE5hbWUgPT09IFwidG9kb1wiKSB7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIudG9kb01vZGFsID0gbW9kYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdG9nZ2xlTW9kYWwodGFyZ2V0TW9kYWwpIHtcclxuICAgIC8vIENoZWNrIGlmIHRoZSB0YXJnZXRNb2RhbCBpcyBiZWluZyBzaG93biBvciBoaWRkZW5cclxuICAgIGNvbnN0IGlzU2hvd2luZyA9IHRhcmdldE1vZGFsICYmIHRhcmdldE1vZGFsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIjtcclxuXHJcbiAgICAvLyB0b2dnbGUgb3ZlcmxheSBmaXJzdFxyXG4gICAgdGhpcy5vdmVybGF5TW9kYWwuc3R5bGUuZGlzcGxheSA9IGlzU2hvd2luZyA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG5cclxuICAgIC8vIHRvZ2dsZSB0YXJnZXQgbW9kYWxcclxuICAgIGlmICh0YXJnZXRNb2RhbCkge1xyXG4gICAgICB0YXJnZXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gaXNTaG93aW5nID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgYWN0aXZlTW9kYWwgcmVmXHJcbiAgICAgIHRoaXMuYWN0aXZlTW9kYWwgPSBpc1Nob3dpbmcgPyBudWxsIDogdGFyZ2V0TW9kYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gYnV0dG9uIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9fYnRuXCIpO1xyXG4gICAgLy8gdG9nZ2xlIHByb2plY3QgbW9kYWxcclxuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy50b2dnbGVNb2RhbChET01Db250cm9sbGVyLnByb2plY3RNb2RhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvX19idG5cIik7XHJcbiAgICAvLyB0b2dnbGUgdG9kbyBtb2RhbFxyXG4gICAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsKERPTUNvbnRyb2xsZXIudG9kb01vZGFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG92ZXJsYXkgbW9kYWwgZXZlbnQgbGlzdGVuZXJcclxuICAgIERPTUNvbnRyb2xsZXIub3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX292ZXJsYXlcIikgJiZcclxuICAgICAgICBET01Db250cm9sbGVyLmFjdGl2ZU1vZGFsXHJcbiAgICAgICkge1xyXG4gICAgICAgIERPTUNvbnRyb2xsZXIudG9nZ2xlTW9kYWwoRE9NQ29udHJvbGxlci5hY3RpdmVNb2RhbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFjY2VwdEZvcm0oY2FsbGJhY2ssIGZvcm1TZWxlY3RvciwgbW9kYWwpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1TZWxlY3Rvcik7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgZm9ybURhdGEgPSB7fTtcclxuICAgICAgbmV3IEZvcm1EYXRhKGZvcm0pLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICBmb3JtRGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKE9iamVjdC5rZXlzKGZvcm1EYXRhKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZm9ybURhdGEpO1xyXG4gICAgICAgIERPTUNvbnRyb2xsZXIudG9nZ2xlTW9kYWwobW9kYWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHJlbmRlciBhbGwgcHJvamVjdHNcclxuICBzdGF0aWMgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpIHtcclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX3Byb2plY3RzXCIpO1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gcmVzZXQgcHJvamVjdHMgbGlzdFxyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgLy8gRklYTUU6IFVuY2F1Z2h0IFJlZmVyZW5jZUVycm9yOiBwcm9qZWN0cyBpcyBub3QgZGVmaW5lZFxyXG4gICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuICAgICAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBgPGgzPiR7cHJvamVjdC5uYW1lfTwvaDM+YDtcclxuICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgRE9NQ29udHJvbGxlci5yZW5kZXJUb2Rvc0ZvclByb2plY3QocHJvamVjdC5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbmRlclRvZG9zRm9yUHJvamVjdChwcm9qZWN0SWQpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xyXG4gICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zX19jb250YWluZXJcIik7XHJcbiAgICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvLyByZXNldCB0b2RvcyBsaXN0XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCkge1xyXG4gICAgICBzZWxlY3RlZFByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcclxuICAgICAgICB0b2RvRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8aDQ+JHt0b2RvLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICA8cD4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPHA+RHVlOiAke3RvZG8uZHVlRGF0ZX08L3A+XHJcbiAgICAgICAgICA8cD5Qcmlvcml0eTogJHt0b2RvLnByaW9yaXR5fTwvcD5cclxuICAgICAgICAgIDwhLS0gYWRkIG1vcmUgLS0+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gU3RlcCAzOiBBZGQgVG9kbyBGb3JtIEhhbmRsaW5nXHJcbi8vIFN0ZXAgNDogQWRqdXN0IHRoZSBUb2RvIEZvcm0gU3VibWlzc2lvbiBMb2dpY1xyXG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vVG9kb1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgLy8gc2V0dGluZyBhIGRhdGUgZm9yIHRoZSBwcm9qZWN0XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRvZG8pIHtcclxuICAgIGlmICh0b2RvIGluc3RhbmNlb2YgVG9kbykge1xyXG4gICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIHRvZG9cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb2RvQnlJZChpZCkge1xyXG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb0J5SWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcclxuICB9XHJcblxyXG4gIC8vIHRvZG8gY29tcGxldGlvbiBwZXJjZW50YWdlICglKVxyXG59XHJcbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi9VdGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB8fCBbXTtcclxuICB9XHJcblxyXG4gIC8vIHNob3VsZCBhZGRQcm9qZWN0IGJlIGhlcmU/XHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcclxuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0cygpIHtcclxuICAgIC8vIFV0aWwuZ2V0RnJvbUxvY2FsU3RvcmFnZShcInByb2plY3RzXCIpO1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICB9XHJcblxyXG4gIGZpbmRQcm9qZWN0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gaWQpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUHJvamVjdChpZCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBpZCk7XHJcbiAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaWQsXHJcbiAgICBwcm9qZWN0SWQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZXMsXHJcbiAgICBpc0NvbXBsZXRlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZDtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7IC8vIG9yZGVyYnkgcHJpb3JpdHlcclxuICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XHJcbiAgICAvLyB0aGlzLmNoZWNrTGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLy8gZWRpdCB0aXRsZVxyXG4gIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGRlc2NyaXB0aW9uXHJcbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIC8vIGVkaXQgZHVlRGF0ZVxyXG4gIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIC8vIGVkaXQgcHJpb3JpdHlcclxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgLy8gZWRpdCBub3Rlc1xyXG4gIHNldE5vdGVzKG5vdGVzKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGlzQ29tcGxldGVcclxuICBzZXRJc0NvbXBsZXRlKGlzQ29tcGxldGUpIHtcclxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XHJcbiAgfVxyXG5cclxuICAvLyBzaG91bGQgaSBhZGQgY2hlY2tsaXN0IGNsYXNzP1xyXG5cclxuICAvLyBhZGQgY2hlY2tsaXN0IGl0ZW1cclxuICBhZGRDaGVja2xpc3RJdGVtKGNoZWNrbGlzdEl0ZW0pIHtcclxuICAgIHRoaXMuY2hlY2tMaXN0LnB1c2goY2hlY2tsaXN0SXRlbSk7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGNoZWNrbGlzdCBpdGVtXHJcblxyXG4gIC8vIHJlbW92ZSBjaGVja2xpc3QgaXRlbVxyXG59XHJcbiIsIi8vIGV4cG9ydCBjbGFzcyBVdGlsIHtcclxuLy8gICBzdGF0aWMgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb3ApIHtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb3AsIEpTT04uc3RyaW5naWZ5KHRoaXNbcHJvcF0pKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIC8vICAgLy8gRklYTUU6IEkgZG9uJ3QgdGhpbmsgdGhpcyBpcyB3b3JraW5nIC8vIFVuY2F1Z2h0IFN5bnRheEVycm9yOiBcInVuZGVmaW5lZFwiIGlzIG5vdCB2YWxpZCBKU09OXHJcbi8vICAgc3RhdGljIGdldEZyb21Mb2NhbFN0b3JhZ2UocHJvcCkge1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb3ApO1xyXG4vLyAgICAgaWYgKGRhdGEpIHtcclxuLy8gICAgICAgdGhpc1twcm9wXSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcCk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vY2xhc3Nlcy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlcy9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9jbGFzc2VzL1RvZG9cIjtcclxuaW1wb3J0IHsgRE9NQ29udHJvbGxlciB9IGZyb20gXCIuL2NsYXNzZXMvRE9NQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG4vLyBkZWZpbmluZyBwcm9qZWN0c1xyXG5jb25zdCBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cygpO1xyXG4vLyBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RcclxuXHJcbmlmIChwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmxlbmd0aCA9PT0gMCkge1xyXG4gIGNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QodW5pcWlkKCksIFwiUHJvamVjdCAxXCIpO1xyXG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAvLyBleGFtcGxlIHRvZG9cclxuICBjb25zdCB0b2RvMSA9IG5ldyBUb2RvKFxyXG4gICAgdW5pcWlkKCksXHJcbiAgICBcIlRvZG8gMVwiLFxyXG4gICAgXCJEZXNjcmlwdGlvbiAxXCIsXHJcbiAgICBEYXRlLm5vdygpLCAvLyBkYXRlIHRvIHNvbWV0aGluZyBtb3JlIHJlYWRhYmxlXHJcbiAgICAxMCxcclxuICAgIFwiTm90ZXMuLi4gMVwiLFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICAvLyBhZGRpbmcgdG9kby9wcm9qZWN0IHRvIHByb2plY3QvcHJvamVjdHNcclxuICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QxKTtcclxuICBwcm9qZWN0MS5hZGRUb2RvKHRvZG8xKTtcclxufVxyXG5cclxuLy8gcmVuZGVyIHBhZ2VcclxuRE9NQ29udHJvbGxlci5yZW5kZXJQYWdlKCk7XHJcbkRPTUNvbnRyb2xsZXIucmVuZGVyUHJvamVjdHMocHJvamVjdHMuZ2V0UHJvamVjdHMoKSk7XHJcblxyXG4vLyBhZGQgcHJvamVjdFxyXG5ET01Db250cm9sbGVyLmFjY2VwdEZvcm0oXHJcbiAgKGZvcm1EYXRhKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodW5pcWlkKCksIGZvcm1EYXRhLnByb2plY3RfX25hbWUpO1xyXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgIERPTUNvbnRyb2xsZXIucmVuZGVyUHJvamVjdHMocHJvamVjdHMuZ2V0UHJvamVjdHMoKSk7XHJcbiAgfSxcclxuICBcIi5wcm9qZWN0X19mb3JtXCIsXHJcbiAgRE9NQ29udHJvbGxlci5wcm9qZWN0TW9kYWxcclxuKTtcclxuXHJcbi8vIFRPRE86IGFjY2VwdCB0b2RvIGZvcm1cclxuRE9NQ29udHJvbGxlci5hY2NlcHRGb3JtKFxyXG4gIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgLy8gaWYgKCFET01Db250cm9sbGVyLnNlbGVjdGVkUHJvamVjdElkKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiTm8gcHJvamVjdCBzZWxlY3RlZFwiKTtcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFxyXG4gICAgICB1bmlxaWQoKSxcclxuICAgICAgZm9ybURhdGEudG9kb19fbmFtZSxcclxuICAgICAgZm9ybURhdGEudG9kb19fZGVzY3JpcHRpb24sXHJcbiAgICAgIGZvcm1EYXRhLnRvZG9fX2R1ZURhdGUsXHJcbiAgICAgIGZvcm1EYXRhLnRvZG9fX3ByaW9yaXR5LFxyXG4gICAgICBmb3JtRGF0YS50b2RvX19ub3RlcyxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmRQcm9qZWN0QnlJZChET01Db250cm9sbGVyLnNlbGVjdGVkUHJvamVjdElkKTtcclxuICAgIHByb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcclxuICAgIERPTUNvbnRyb2xsZXIucmVuZGVyVG9kb3NGb3JQcm9qZWN0KERPTUNvbnRyb2xsZXIuc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG4gIH0sXHJcbiAgXCIudG9kb19fZm9ybVwiLFxyXG4gIERPTUNvbnRyb2xsZXIudG9kb01vZGFsXHJcbik7XHJcblxyXG4vLyBUT0RPOiBjbGlja2luZyBvbiB0aGUgZHJvcGRvd24gc2hvdWxkIHNhdmUgdGhlIHByb2plY3QgaWQgc29tZXdoZXJlXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==