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

    // init new sample project
    let mySampleProj = new Project("Hello");
    let mySampleProj1 = new Project("Hello1");

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
    // edit sample project (ltshu1yz, "Hello")
    this.ProjectController.editProject("ltshu1yz", "HAHAsHA"); // projectId, newName

    ///////////////////////////////////////////
    // init new todo item
    const mySampleTodo = new Todo("Hey", "ltw6p5j1");
    const mySampleTodo2 = new Todo("todo1", "ltw6p5j1");
    const mySampleTodo3 = new Todo("to123do213", "ltw9kuc8");
    const mySampleTodo4 = new Todo("to8949do213", "ltw6p5j0");

    this.UIController.init(currentExistingProjects);
  }
}
