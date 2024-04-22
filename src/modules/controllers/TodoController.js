import { ProjectController } from "./ProjectController";
import { StorageController } from "./StorageController";
import { isToday } from "date-fns";
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

  getUncompletedTodosWithProjectId(projectId) {
    const todosArr = this.getTodos();
    let matchingArr = [];
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].projectId === projectId && !todosArr[i].isFinished) {
        matchingArr.push(todosArr[i]);
      }
    }

    return matchingArr;
  }

  getCompletedTodosWithProjectId(projectId) {
    const todosArr = this.getTodos();
    let matchingArr = [];
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].projectId === projectId && todosArr[i].isFinished) {
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
    const todosArr = this.getTodos();
    todosArr.push(todoObj);

    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  removeTodoById(todoId) {
    const todosArr = this.getTodos();

    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr.splice(i, 1);
        break;
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  editTodoName(todoId, name) {
    const todosArr = this.getTodos();

    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr[i].name = name;
        break;
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  editTodoProjectId(todoId, projectId) {
    const todosArr = this.getTodos();

    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr[i].projectId = projectId;
        break;
      }
    }

    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  // TODO: projId needed?
  editTodoWithValues(
    todoId,
    todoName,
    projId,
    description,
    dueDate,
    prio,
    isFinished
  ) {
    const todosArr = this.getTodos();
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr[i].name = todoName;
        todosArr[i].description = description;
        todosArr[i].dueDate = dueDate;
        todosArr[i].priority = prio ?? "";
        todosArr[i].isFinished = isFinished;
        break;
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  editIsFinished(todoId, checkedStatus) {
    const todosArr = this.getTodos();
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr[i].isFinished = checkedStatus;
        break;
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  getTodayCount = () => {
    const todosArr = this.getTodos();
    let count = 0;
    for (let i = 0; i < todosArr.length; i++) {
      if (isToday(todosArr[i].dueDate) && !todosArr[i].isFinished) {
        count++;
      }
    }
    return count;
  };

  getTodayTodoItems = () => {
    const todosArr = this.getTodos();
    const matchingItems = [];

    for (let i = 0; i < todosArr.length; i++) {
      if (isToday(todosArr[i].dueDate) && !todosArr[i].isFinished) {
        matchingItems.push(todosArr[i]);
      }
    }

    return matchingItems;
  };

  getScheduledCount = () => {
    const todosArr = this.getTodos();
    let count = 0;
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].dueDate && !todosArr[i].isFinished) {
        count++;
      }
    }
    return count;
  };

  getScheduledTodoItems = () => {
    const todosArr = this.getTodos();
    const matchingItems = [];

    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].dueDate && !todosArr[i].isFinished) {
        matchingItems.push(todosArr[i]);
      }
    }

    return matchingItems;
  };

  getAllCount = () => {
    const todosArr = this.getTodos();
    let count = 0;
    for (let i = 0; i < todosArr.length; i++) {
      if (!todosArr[i].isFinished) {
        count++;
      }
    }

    return count;
  };

  getAllTodoItems = () => {
    const todosArr = this.getTodos();
    const matchingItems = [];
    for (let i = 0; i < todosArr.length; i++) {
      if (!todosArr[i].isFinished) {
        matchingItems.push(todosArr[i]);
      }
    }
    return matchingItems;
  };

  getUrgentCount = () => {
    const todosArr = this.getTodos();
    let count = 0;
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].priority != "" && !todosArr[i].isFinished) {
        count++;
      }
    }
    return count;
  };

  getUrgentTodoItems = () => {
    const todosArr = this.getTodos();
    const matchingItems = [];
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].priority != "" && !todosArr[i].isFinished) {
        matchingItems.push(todosArr[i]);
      }
    }
    return matchingItems;
  };
}
