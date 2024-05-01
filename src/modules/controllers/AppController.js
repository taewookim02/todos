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
    const mySampleProj = new Project("Welcome Aboard!");
    const mySampleProj1 = new Project("Cooking");

    this.ProjectController.addProject(mySampleProj); // projectObj
    this.ProjectController.addProject(mySampleProj1);

    ///////////////////////////////////////////
    // init new todo item
    const dummyTodo1 = new Todo("Watch The Hobbit", mySampleProj.getId());
    const dummyTodo2 = new Todo("Take a power nap", mySampleProj.getId());
    const dummyTodo3 = new Todo("Listen to some pop", mySampleProj.getId());
    const dummyTodo4 = new Todo(
      "Take the pup out for a walk",
      mySampleProj.getId()
    );
    const dummyTodo5 = new Todo("Buy groceries", mySampleProj1.getId());
    const dummyTodo6 = new Todo("Buy frying pan", mySampleProj1.getId());

    // set dummy prio and duedate
    dummyTodo1.setPriority("medium");
    dummyTodo1.setDueDate(new Date());
    dummyTodo2.setPriority("chill");
    dummyTodo3.setPriority("chill");
    dummyTodo4.setPriority("urgent");
    dummyTodo5.setPriority("medium");

    this.TodoController.addTodo(dummyTodo1);
    this.TodoController.addTodo(dummyTodo2);
    this.TodoController.addTodo(dummyTodo3);
    this.TodoController.addTodo(dummyTodo4);
    this.TodoController.addTodo(dummyTodo5);
    this.TodoController.addTodo(dummyTodo6);

    return this.ProjectController.getProjects();
  };
}
