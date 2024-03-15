/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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






class AppController {
  constructor() {
    this.StorageController = new _StorageController__WEBPACK_IMPORTED_MODULE_0__.StorageController();
    this.ProjectController = new _ProjectController__WEBPACK_IMPORTED_MODULE_1__.ProjectController();
    this.TodoController = new _TodoController__WEBPACK_IMPORTED_MODULE_2__.TodoController();
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
    const mySampleTodo = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("Hey", "ltswrehu");
    const mySampleTodo2 = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("todo1", "ltswrehv");
    const mySampleTodo3 = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("to123do213", "ltswrehv");
    const mySampleTodo4 = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("to8949do213", "ltswrehu");

    ///////////////////////////////////////////
    // Get All Todos (SEPARATE LOCAL STORAGE)
    // console.log(this.TodoController.getTodos());

    ///////////////////////////////////////////
    // Add Todo (SEPARATE LOCAL STORAGE)
    // this.TodoController.addTodo(mySampleTodo);

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
  }
}


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

  getSingleTodo(todoId) {
    const todosArr = this.getTodos();
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        console.log(todosArr);
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
    this.id = uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
    this.projectId = projectId;
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
/******/ 			// no module.id needed
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


let app = new _modules_controllers_AppController__WEBPACK_IMPORTED_MODULE_0__.AppController();
app.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEtBQTJFLENBQUMsc0NBZ0I5RTs7QUFFRDtBQUNBO0FBQ0EsaUJBQWlCLHlCQUFzQiw2QkFBNkI7QUFDcEUsc0JBQXNCLDZCQUE2QjtBQUNuRCxtQkFBbUIsZ0NBQWdDOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0N3RDtBQUNBO0FBQ047QUFDTjtBQUNOO0FBQ3RDO0FBQ087QUFDUDtBQUNBLGlDQUFpQyxpRUFBaUI7QUFDbEQsaUNBQWlDLGlFQUFpQjtBQUNsRCw4QkFBOEIsMkRBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFPO0FBQ2xDLDRCQUE0QixvREFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhDQUFJO0FBQ2pDLDhCQUE4Qiw4Q0FBSTtBQUNsQyw4QkFBOEIsOENBQUk7QUFDbEMsOEJBQThCLDhDQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RndEO0FBQ1o7QUFDNUM7QUFDTztBQUNQO0FBQ0EsaUNBQWlDLGlFQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQndEO0FBQ0E7QUFDakQ7QUFDUDtBQUNBLGlDQUFpQyxpRUFBaUI7QUFDbEQsaUNBQWlDLGlFQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0Esd0JBQXdCLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0Esd0JBQXdCLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJNEI7QUFDNUI7QUFDTztBQUNQO0FBQ0E7QUFDQSxjQUFjLDZDQUFNO0FBQ3BCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCNEI7QUFDNUI7QUFDTztBQUNQO0FBQ0E7QUFDQSxjQUFjLDZDQUFNO0FBQ3BCO0FBQ0E7QUFDQTs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9FO0FBQ3BFO0FBQ0EsY0FBYyw2RUFBYTtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9Qcm9qZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL1N0b3JhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvVG9kb0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy9tb2RlbHMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL21vZGVscy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCJpbXBvcnQgeyBTdG9yYWdlQ29udHJvbGxlciB9IGZyb20gXCIuL1N0b3JhZ2VDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSBcIi4vUHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgVG9kb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9Ub2RvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL21vZGVscy9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi4vbW9kZWxzL1RvZG9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIgPSBuZXcgU3RvcmFnZUNvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuVG9kb0NvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFwcENvbnRyb2xsZXIgaW5pdCgpIGNhbGxlZFwiKTtcclxuXHJcbiAgICAvLyBpbml0IG5ldyBzYW1wbGUgcHJvamVjdFxyXG4gICAgbGV0IG15U2FtcGxlUHJvaiA9IG5ldyBQcm9qZWN0KFwiSGVsbG9cIik7XHJcbiAgICBsZXQgbXlTYW1wbGVQcm9qMSA9IG5ldyBQcm9qZWN0KFwiSGVsbG8xXCIpO1xyXG5cclxuICAgIGxldCBjdXJyZW50RXhpc3RpbmdQcm9qZWN0cyA9IHRoaXMuUHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKTtcclxuXHJcbiAgICBpZiAoY3VycmVudEV4aXN0aW5nUHJvamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIC8vIGFkZCBzYW1wbGUgcHJvamVjdFxyXG4gICAgICB0aGlzLlByb2plY3RDb250cm9sbGVyLmFkZFByb2plY3QobXlTYW1wbGVQcm9qKTsgLy8gcHJvamVjdE9ialxyXG4gICAgICB0aGlzLlByb2plY3RDb250cm9sbGVyLmFkZFByb2plY3QobXlTYW1wbGVQcm9qMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZGVsZXRlIHNhbXBsZSBwcm9qZWN0XHJcbiAgICAvLyB0aGlzLlByb2plY3RDb250cm9sbGVyLmRlbGV0ZVByb2plY3QoY3VycmVudEV4aXN0aW5nUHJvamVjdHNbMV0uaWQpOyAvLyBwcm9qZWN0SWRcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBlZGl0IHNhbXBsZSBwcm9qZWN0IChsdHNodTF5eiwgXCJIZWxsb1wiKVxyXG4gICAgdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5lZGl0UHJvamVjdChcImx0c2h1MXl6XCIsIFwiSEFIQXNIQVwiKTsgLy8gcHJvamVjdElkLCBuZXdOYW1lXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gaW5pdCBuZXcgdG9kbyBpdGVtXHJcbiAgICBjb25zdCBteVNhbXBsZVRvZG8gPSBuZXcgVG9kbyhcIkhleVwiLCBcImx0c3dyZWh1XCIpO1xyXG4gICAgY29uc3QgbXlTYW1wbGVUb2RvMiA9IG5ldyBUb2RvKFwidG9kbzFcIiwgXCJsdHN3cmVodlwiKTtcclxuICAgIGNvbnN0IG15U2FtcGxlVG9kbzMgPSBuZXcgVG9kbyhcInRvMTIzZG8yMTNcIiwgXCJsdHN3cmVodlwiKTtcclxuICAgIGNvbnN0IG15U2FtcGxlVG9kbzQgPSBuZXcgVG9kbyhcInRvODk0OWRvMjEzXCIsIFwibHRzd3JlaHVcIik7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gR2V0IEFsbCBUb2RvcyAoU0VQQVJBVEUgTE9DQUwgU1RPUkFHRSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuVG9kb0NvbnRyb2xsZXIuZ2V0VG9kb3MoKSk7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gQWRkIFRvZG8gKFNFUEFSQVRFIExPQ0FMIFNUT1JBR0UpXHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmFkZFRvZG8obXlTYW1wbGVUb2RvKTtcclxuXHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmFkZFRvZG8obXlTYW1wbGVUb2RvKTtcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kbyhteVNhbXBsZVRvZG8yKTtcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kbyhteVNhbXBsZVRvZG8zKTtcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kbyhteVNhbXBsZVRvZG80KTtcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIEdldCBzaW5nbGUgdG9kb1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5Ub2RvQ29udHJvbGxlci5nZXRTaW5nbGVUb2RvKFwibHRzd3k5Z3NcIikpO1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGRlbGV0ZShsdHN3eDhpdClcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIucmVtb3ZlVG9kb0J5SWQoXCJsdHN4ZGx0cVwiKTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyB1cGRhdGVcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuZWRpdFRvZG9OYW1lKFwibHRzeGRsdHRcIiwgXCJ0aGlzIGlzIEVESVRFRFwiKTtcclxuXHJcbiAgICAvKiBTRVBBUkFUT1IgKi9cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBBZGQgVG9kbyBvYmpcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kb1RvUHJvamVjdChteVNhbXBsZVRvZG8sIFwibHRzaHUxeXpcIik7IC8vIHRvZG9PYmosIHByb2plY3RJZFxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGVkaXQgdG9kbyBuYW1lXHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmVkaXRUb2RvTmFtZShcIlRISVMgSVMgTkVXISBcIiwgXCJsdHNodTF5elwiLCBcImx0c2o3NmF2XCIpOyAvLyBuZXdOYW1lLCBwcm9qZWN0SWQsIHRvZG9JZFxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGdldCB0b2RvcyB3aXRoIGNlcnRhaW4gcHJvamVjdElkXHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmdldFRvZG9zRnJvbVByb2plY3QoXCJsdHNodTF5elwiKTsgLy8gcHJvamVjdElkXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZ2V0IHNpbmdsZSB0b2RvIChcImx0c2o3NmF2XCIpXHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmdldFNpbmdsZVRvZG9Gcm9tUHJvamVjdChcImx0c2h1MXl6XCIsIFwibHRzajc2YXZcIik7IC8vIHByb2plY3RJZCwgdG9kb0lkXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZGVsZXRlIHRvZG8gZnJvbSBwcm9qZWN0XHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmRlbGV0ZVRvZG9Gcm9tUHJvamVjdChcImx0c2h1MXl6XCIsIFwibHRzajc2YXZcIik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFN0b3JhZ2VDb250cm9sbGVyIH0gZnJvbSBcIi4vU3RvcmFnZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvUHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIgPSBuZXcgU3RvcmFnZUNvbnRyb2xsZXIoKTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHNKU09OID0gdGhpcy5TdG9yYWdlQ29udHJvbGxlci5nZXQoXCJwcm9qZWN0c1wiKTtcclxuICAgIGlmICghcHJvamVjdHNKU09OKSB7XHJcbiAgICAgIHJldHVybiBbXTsgLy8gcmV0dXJuIGVtcHR5IGFyciBpZiBubyBkYXRhIGluIGxvY2FsU3RvcmFnZVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gdHJ5IGJlY2F1c2UgZXJyb3IgbWlnaHQgb2NjdXIgaW4gcGFyc2VcclxuICAgICAgY29uc3QgcGFyc2VkUHJvamVjdHMgPSBKU09OLnBhcnNlKHByb2plY3RzSlNPTik7XHJcblxyXG4gICAgICAvLyB0aGUgYmVsb3cgYXNzdXJlcyB0aGF0IGl0IGlzIGFuIGFycmF5XHJcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZFByb2plY3RzKVxyXG4gICAgICAgID8gcGFyc2VkUHJvamVjdHNcclxuICAgICAgICA6IHBhcnNlZFByb2plY3RzXHJcbiAgICAgICAgPyBbcGFyc2VkUHJvamVjdHNdXHJcbiAgICAgICAgOiBbXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy8gaWYgZXJyb3IsIHJldHVybiBhbiBhcnJheVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgbGV0IHByb2plY3RBcnIgPSB0aGlzLmdldFByb2plY3RzKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHByb2plY3RBcnJbaV0uaWQgPT09IHByb2plY3RJZCkge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0QXJyW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KHByb2plY3RPYmopIHtcclxuICAgIGxldCBwcm9qZWN0c0FyciA9IHRoaXMuZ2V0UHJvamVjdHMoKTtcclxuICAgIHByb2plY3RzQXJyLnB1c2gocHJvamVjdE9iaik7IC8vIHB1c2ggcmVjZWl2ZWQgYXJndW1lbnQgdG8gcHJvamVjdHNBcnJcclxuXHJcbiAgICB0aGlzLlN0b3JhZ2VDb250cm9sbGVyLnNhdmVDdXJyZW50QXJyYXlUb0xvY2FsU3RvcmFnZShcclxuICAgICAgXCJwcm9qZWN0c1wiLFxyXG4gICAgICBwcm9qZWN0c0FyclxyXG4gICAgKTsgLy8gb3ZlcndyaXRlIHByb2plY3RzIHdpdGggdXBkYXRlZEFyciBpbiBsb2NhbFN0b3JhZ2VcclxuICB9XHJcblxyXG4gIGVkaXRQcm9qZWN0KHByb2plY3RJZCwgbmFtZSkge1xyXG4gICAgbGV0IHByb2plY3RzQXJyID0gdGhpcy5nZXRQcm9qZWN0cygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocHJvamVjdHNBcnJbaV0uaWQgPT09IHByb2plY3RJZCkge1xyXG4gICAgICAgIHByb2plY3RzQXJyW2ldLm5hbWUgPSBuYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5TdG9yYWdlQ29udHJvbGxlci5zYXZlQ3VycmVudEFycmF5VG9Mb2NhbFN0b3JhZ2UoXHJcbiAgICAgIFwicHJvamVjdHNcIixcclxuICAgICAgcHJvamVjdHNBcnJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgbGV0IHByb2plY3RzQXJyID0gdGhpcy5nZXRQcm9qZWN0cygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocHJvamVjdElkID09PSBwcm9qZWN0c0FycltpXS5pZCkge1xyXG4gICAgICAgIHByb2plY3RzQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5TdG9yYWdlQ29udHJvbGxlci5zYXZlQ3VycmVudEFycmF5VG9Mb2NhbFN0b3JhZ2UoXHJcbiAgICAgIFwicHJvamVjdHNcIixcclxuICAgICAgcHJvamVjdHNBcnJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTdG9yYWdlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgfVxyXG5cclxuICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUN1cnJlbnRBcnJheVRvTG9jYWxTdG9yYWdlKGtleSwgYXJyYXlUb1NhdmUpIHtcclxuICAgIHRoaXMuc2V0KGtleSwgSlNPTi5zdHJpbmdpZnkoYXJyYXlUb1NhdmUpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Qcm9qZWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBTdG9yYWdlQ29udHJvbGxlciB9IGZyb20gXCIuL1N0b3JhZ2VDb250cm9sbGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBUb2RvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLlByb2plY3RDb250cm9sbGVyID0gbmV3IFByb2plY3RDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLlN0b3JhZ2VDb250cm9sbGVyID0gbmV3IFN0b3JhZ2VDb250cm9sbGVyKCk7XHJcbiAgICAvLyB0aGlzLlN0b3JhZ2VDb250cm9sbGVyID0gbmV3IFN0b3JhZ2VDb250cm9sbGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvcygpIHtcclxuICAgIGNvbnN0IHRvZG9zSlNPTiA9IHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIuZ2V0KFwidG9kb3NcIik7XHJcbiAgICBpZiAoIXRvZG9zSlNPTikge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyc2VkVG9kb3MgPSBKU09OLnBhcnNlKHRvZG9zSlNPTik7XHJcbiAgICAgIC8vIHJldHVybiBhcnJheSBmb3JtIG5vIG1hdHRlciB3aGF0XHJcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZFRvZG9zKVxyXG4gICAgICAgID8gcGFyc2VkVG9kb3NcclxuICAgICAgICA6IHBhcnNlZFRvZG9zXHJcbiAgICAgICAgPyBbcGFyc2VkVG9kb3NdXHJcbiAgICAgICAgOiBbXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlVG9kbyh0b2RvSWQpIHtcclxuICAgIGNvbnN0IHRvZG9zQXJyID0gdGhpcy5nZXRUb2RvcygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodG9kb3NBcnJbaV0uaWQgPT09IHRvZG9JZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zQXJyKTtcclxuICAgICAgICByZXR1cm4gdG9kb3NBcnJbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFRvZG8odG9kb09iaikge1xyXG4gICAgbGV0IHRvZG9zQXJyID0gdGhpcy5nZXRUb2RvcygpO1xyXG4gICAgdG9kb3NBcnIucHVzaCh0b2RvT2JqKTtcclxuXHJcbiAgICB0aGlzLlN0b3JhZ2VDb250cm9sbGVyLnNhdmVDdXJyZW50QXJyYXlUb0xvY2FsU3RvcmFnZShcInRvZG9zXCIsIHRvZG9zQXJyKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRvZG9CeUlkKHRvZG9JZCkge1xyXG4gICAgbGV0IHRvZG9zQXJyID0gdGhpcy5nZXRUb2RvcygpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3NBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRvZG9zQXJyW2ldLmlkID09PSB0b2RvSWQpIHtcclxuICAgICAgICB0b2Rvc0Fyci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUN1cnJlbnRBcnJheVRvTG9jYWxTdG9yYWdlKFwidG9kb3NcIiwgdG9kb3NBcnIpO1xyXG4gIH1cclxuXHJcbiAgZWRpdFRvZG9OYW1lKHRvZG9JZCwgbmFtZSkge1xyXG4gICAgbGV0IHRvZG9zQXJyID0gdGhpcy5nZXRUb2RvcygpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3NBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRvZG9zQXJyW2ldLmlkID09PSB0b2RvSWQpIHtcclxuICAgICAgICB0b2Rvc0FycltpXS5uYW1lID0gbmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5TdG9yYWdlQ29udHJvbGxlci5zYXZlQ3VycmVudEFycmF5VG9Mb2NhbFN0b3JhZ2UoXCJ0b2Rvc1wiLCB0b2Rvc0Fycik7XHJcbiAgfVxyXG4gIC8qXHJcbiAgYWRkVG9kb1RvUHJvamVjdCh0b2RvT2JqLCBwcm9qZWN0SWQpIHtcclxuICAgIGxldCBwcm9qZWN0c0FyciA9IHRoaXMuUHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHByb2plY3RzQXJyW2ldLmlkID09PSBwcm9qZWN0SWQpIHtcclxuICAgICAgICBwcm9qZWN0c0FycltpXS50b2Rvcy5wdXNoKHRvZG9PYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLlByb2plY3RDb250cm9sbGVyLnNhdmVDdXJyZW50UHJvamVjdHNUb0xvY2FsU3RvcmFnZShwcm9qZWN0c0Fycik7XHJcbiAgfVxyXG5cclxuICBlZGl0VG9kb05hbWUodG9kb05hbWUsIHByb2plY3RJZCwgdG9kb0lkKSB7XHJcbiAgICBsZXQgcHJvamVjdHNBcnIgPSB0aGlzLlByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RzKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwcm9qZWN0c0FycltpXS5pZCA9PT0gcHJvamVjdElkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0c0FycltpXS50b2Rvcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgaWYgKHByb2plY3RzQXJyW2ldLnRvZG9zW2pdLmlkID09PSB0b2RvSWQpIHtcclxuICAgICAgICAgICAgcHJvamVjdHNBcnJbaV0udG9kb3Nbal0ubmFtZSA9IHRvZG9OYW1lO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIuc2F2ZUN1cnJlbnRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzQXJyKTtcclxuICB9XHJcblxyXG4gIGdldFRvZG9zRnJvbVByb2plY3QocHJvamVjdElkKSB7XHJcbiAgICBsZXQgcHJvamVjdHNBcnIgPSB0aGlzLlByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RzKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwcm9qZWN0c0FycltpXS5pZCA9PT0gcHJvamVjdElkKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzQXJyW2ldLnRvZG9zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTaW5nbGVUb2RvRnJvbVByb2plY3QocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICAgIGxldCBwcm9qZWN0c0FyciA9IHRoaXMuUHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHByb2plY3RzQXJyW2ldLmlkID09PSBwcm9qZWN0SWQpIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzQXJyW2ldLnRvZG9zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBpZiAocHJvamVjdHNBcnJbaV0udG9kb3Nbal0uaWQgPT09IHRvZG9JZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdHNBcnJbaV0udG9kb3Nbal07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb0Zyb21Qcm9qZWN0KHByb2plY3RJZCwgdG9kb0lkKSB7XHJcbiAgICBsZXQgcHJvamVjdHNBcnIgPSB0aGlzLlByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RzKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwcm9qZWN0c0FycltpXS5pZCA9PT0gcHJvamVjdElkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0c0FycltpXS50b2Rvcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgaWYgKHByb2plY3RzQXJyW2ldLnRvZG9zW2pdLmlkID09PSB0b2RvSWQpIHtcclxuICAgICAgICAgICAgcHJvamVjdHNBcnJbaV0udG9kb3Muc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIuc2F2ZUN1cnJlbnRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzQXJyKTtcclxuICB9XHJcbiAgKi9cclxufVxyXG4iLCJpbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pZCA9IHVuaXFpZCgpO1xyXG4gICAgLy8gdGhpcy50b2RvcyA9IFtdOyAvLyBobW0sLFxyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogZW5jYXBzdWxhdGUgbmFtZSwgaWQsIHRvZG9zICg/KVxyXG4gIC8vIGdldElkKCkge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBnZXROYW1lKCkge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNldE5hbWUobmFtZSkge1xyXG4gIC8vICAgcmV0dXJuICh0aGlzLm5hbWUgPSBuYW1lKTtcclxuICAvLyB9XHJcbn1cclxuIiwiaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdElkKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pZCA9IHVuaXFpZCgpO1xyXG4gICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9jb250cm9sbGVycy9BcHBDb250cm9sbGVyXCI7XHJcblxyXG5sZXQgYXBwID0gbmV3IEFwcENvbnRyb2xsZXIoKTtcclxuYXBwLmluaXQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9