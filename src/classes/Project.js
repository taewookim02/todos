import { Todo } from "./Todo";

export class Project {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    if (todo instanceof Todo) {
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
