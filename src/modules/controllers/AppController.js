import { StorageController } from "./StorageController";
import { ProjectController } from "./ProjectController";
import { TodoController } from "./TodoController";
import { Project } from "../models/Project";
import { Todo } from "../models/Todo";
////////////////////////////////////////////
import { UIController } from "../views/UIController";

export class AppController {
  constructor() {
    this.UIController = new UIController();
    this.StorageController = new StorageController();
    this.ProjectController = new ProjectController();
    this.TodoController = new TodoController();
  }

  init() {
    console.log("AppController init() called");

    let currentExistingProjects = this.ProjectController.getProjects();

    if (currentExistingProjects.length == 0) {
      // DUMMY DATA
      currentExistingProjects = this.generateDummyData();
    }
    this.UIController.init(currentExistingProjects);
  }

  generateDummyData = () => {
    const mySampleProj = new Project("Hello");
    const mySampleProj1 = new Project("Hello1");

    this.ProjectController.addProject(mySampleProj); // projectObj
    this.ProjectController.addProject(mySampleProj1);

    ///////////////////////////////////////////
    // init new todo item
    const mySampleTodo = new Todo("Hey", mySampleProj.getId());
    const mySampleTodo2 = new Todo("todo1", mySampleProj.getId());
    const mySampleTodo3 = new Todo("to123do213", mySampleProj1.getId());
    const mySampleTodo4 = new Todo("to8949do213", mySampleProj1.getId());

    this.TodoController.addTodo(mySampleTodo);
    this.TodoController.addTodo(mySampleTodo2);
    this.TodoController.addTodo(mySampleTodo3);
    this.TodoController.addTodo(mySampleTodo4);

    return this.ProjectController.getProjects();
  };
}
