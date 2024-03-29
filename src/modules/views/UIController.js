import { Navbar } from "./Components/Navbar";
import { Modal } from "./Components/Modal";
// import projectController here?
import { ProjectController } from "../controllers/ProjectController";
import { Project } from "../models/Project";
import { TodoModal } from "./Components/TodoModal";
import { TodoController } from "../controllers/TodoController";
import { Todo } from "../models/Todo";
import { TodoComponent } from "./Components/Todo";
export class UIController {
  constructor() {
    this.Navbar = new Navbar();
    // this.Modal = new Modal();
    this.ProjectController = new ProjectController();
    this.TodoController = new TodoController();
    this.Todo = new Todo();
    this.TodoComponent = new TodoComponent();
  }

  init(projectsArr) {
    this.Navbar.renderComponent(projectsArr);
    this.initProjectModal();
    this.initTodoModal();
    this.initFirstDivClick();
  }

  initProjectModal() {
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
  }

  initTodoModal() {
    // render todoModal
    const todoModal = new TodoModal((todoId, todoName) => {
      const projectId = document.querySelector("#todo-projectId").value;
      if (todoId === "") {
        const newTodo = new Todo(todoName, projectId);
        this.TodoController.addTodo(newTodo);

        // rerender todos
        const newTodoArr = this.TodoController.getTodosWithProjectId(projectId);
        this.TodoComponent.renderComponent(newTodoArr);
      } else {
        this.TodoController.editTodoName(todoId, todoName);

        // rerender todos
        const newTodoArr = this.TodoController.getTodosWithProjectId(projectId);
        this.TodoComponent.renderComponent(newTodoArr);
      }
    });

    todoModal.renderComponent();
  }

  initFirstDivClick() {
    document.addEventListener("DOMContentLoaded", (e) => {
      const myFirstNavDiv = document.querySelector(".nav__project");
      if (myFirstNavDiv) {
        myFirstNavDiv.click();
      }
    });
  }
}
