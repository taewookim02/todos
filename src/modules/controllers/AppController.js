import { StorageController } from "./StorageController";
import { ProjectController } from "./ProjectController";
import { TodoController } from "./TodoController";
import { Project } from "../models/Project";
import { Todo } from "../models/Todo";

export class AppController {
  constructor() {
    this.StorageController = new StorageController();
    this.ProjectController = new ProjectController();
    this.TodoController = new TodoController();
    // this.projects = JSON.parse(this.StorageController.get("projects")) || []; // this is from localStorage
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
    // delete sample project
    // this.ProjectController.deleteProject(currentExistingProjects[1].id); // projectId

    ///////////////////////////////////////////
    // edit sample project (ltshu1yz, "Hello")
    this.ProjectController.editProject("ltshu1yz", "HAHAsHA"); // projectId, newName

    ///////////////////////////////////////////
    // init new todo item
    const mySampleTodo = new Todo("Hey");

    ///////////////////////////////////////////
    // Add Todo obj
    // this.TodoController.addTodoToProject(mySampleTodo, "ltshu1yz"); // todoObj, projectId

    ///////////////////////////////////////////
    // edit todo name
    this.TodoController.editTodoName("THIS IS NEW! ", "ltshu1yz", "ltsj76av"); // newName, projectId, todoId

    ///////////////////////////////////////////
    // get todos with certain projectId
    this.TodoController.getTodosFromProject("ltshu1yz"); // projectId

    ///////////////////////////////////////////
    // get single todo ("ltsj76av")
    this.TodoController.getSingleTodoFromProject("ltshu1yz", "ltsj76av"); // projectId, todoId

    ///////////////////////////////////////////
    // delete todo from project
    this.TodoController.deleteTodoFromProject("ltshu1yz", "ltsj76av");
  }
}
