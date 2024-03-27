import { ProjectController } from "./ProjectController";
import { StorageController } from "./StorageController";
export class TodoController {
  constructor() {
    this.ProjectController = new ProjectController();
    this.StorageController = new StorageController();
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
