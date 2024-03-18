import { StorageController } from "./StorageController";
import { ProjectController } from "./ProjectController";
import { TodoController } from "./TodoController";
import { Project } from "../models/Project";
import { Todo } from "../models/Todo";
////////////////////////////////////////////
import { UIController } from "../views/UIController";

export class AppController {
  constructor() {
    this.StorageController = new StorageController();
    this.ProjectController = new ProjectController();
    this.TodoController = new TodoController();
    this.UIController = new UIController();
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
    const mySampleTodo = new Todo("Hey", "ltw6p5j1");
    const mySampleTodo2 = new Todo("todo1", "ltw6p5j1");
    const mySampleTodo3 = new Todo("to123do213", "ltw6p5j0");
    const mySampleTodo4 = new Todo("to8949do213", "ltw6p5j0");

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
