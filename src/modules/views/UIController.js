import { Navbar } from "./Components/Navbar";
import { Modal } from "./Components/Modal";
// import projectController here?
import { ProjectController } from "../controllers/ProjectController";
import { Project } from "../models/Project";
import { TodoModal } from "./Components/TodoModal";
import { TodoController } from "../controllers/TodoController";
import { Todo } from "../models/Todo";
import { Todo } from "./Components/Todo";
export class UIController {
  constructor() {
    this.Navbar = new Navbar();
    // this.Modal = new Modal();
    this.ProjectController = new ProjectController();
    this.TodoController = new TodoController();
    this.Todo = new Todo();
  }

  init(projectsArr) {
    this.Navbar.renderComponent(projectsArr);

    // render modal
    const modal = new Modal((projectId, projectName) => {
      if (projectId === "") {
        const newProject = new Project(projectName);
        this.ProjectController.addProject(newProject);

        // rerender navbar
        const newProjectsArr = this.ProjectController.getProjects();
        this.Navbar.renderComponent(newProjectsArr);
      } else {
        this.ProjectController.editProject(projectId, projectName);

        // rerender navbar
        const newProjectsArr = this.ProjectController.getProjects();
        this.Navbar.renderComponent(newProjectsArr);
      }
    });

    modal.renderComponent();

    // render todoModal
    const todoModal = new TodoModal((todoId, todoName) => {
      const projectId = document.querySelector("#todo-projectId").value;
      if (todoId === "") {

        const newTodo = new Todo(todoName, projectId);
        this.TodoController.addTodo(newTodo);

        // rerender todos
        const newTodoArr = this.TodoController.getTodos();
        console.log(newTodoArr);
      } else {
        this.TodoController.editTodoName(todoId, todoName);

        // rerender todos
        const newTodoArr = this.TodoController.getTodosWithProjectId(projectId);
        console.log(newTodoArr);
        // TODO: CHANGE TODO COMPONENT name
        this.Todo.


    //     const myTodosArr = this.TodoController.getTodosWithProjectId(projectId);

    // this.Todo.renderComponent(myTodosArr);
      }
    });

    todoModal.renderComponent();
  }
}
