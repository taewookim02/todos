import { Navbar } from "./Components/Navbar";
import { Modal } from "./Components/Modal";
import { ProjectController } from "../controllers/ProjectController";
import { Project } from "../models/Project";
import { TodoController } from "../controllers/TodoController";
import { Todo } from "../models/Todo";
import { TodoModal } from "./Components/TodoModal";
import { TodoComponent } from "./Components/Todo";
import { TodoDetailModal } from "./Components/TodoDetailModal";

export class UIController {
  static isTodoModalOpen = false;
  static isProjectModalOpen = false;

  constructor() {
    this.Navbar = new Navbar();
    this.Modal = new Modal();
    this.ProjectController = new ProjectController();
    this.TodoController = new TodoController();
    this.Todo = new Todo();
    this.TodoModal = new TodoModal();
    this.TodoDetailModal = new TodoDetailModal();
    this.TodoComponent = new TodoComponent();
  }

  init(projectsArr) {
    this.Navbar.renderComponent(projectsArr);
    this.initProjectModal();
    this.initTodoModal();
    this.initFirstDivClick();
    this.initTodoDetailModal();
    document.addEventListener("DOMContentLoaded", (e) => {
      this.initContentClickBehavior();
      this.initHeaderClickBehavior();
      this.initOverlayClickBehavior();
      this.initScrollBehavior();
    });
  }

  initScrollBehavior() {
    const content = document.querySelector("#content");

    let isAtTop = true;
    document.addEventListener("scroll", (e) => {
      if (window.scrollY === 0) {
        isAtTop = true;
        console.log("At the top of the page");
      } else {
        isAtTop = false;
      }
    });

    document.addEventListener("wheel", (e) => {
      if (isAtTop && e.deltaY < 0) {
        const completedContainer = document.querySelector(
          ".completed-container"
        );
        completedContainer.classList.remove("hidden");
      }
    });
  }

  initTodoDetailModal() {
    const todoDetailModal = new TodoDetailModal(
      this.todoDetailCallback.bind(this)
    );
    todoDetailModal.renderComponent();
  }

  initProjectModal() {
    // render modal
    const modal = new Modal(this.projectModalCallback.bind(this));

    modal.renderComponent();
  }

  initOverlayClickBehavior() {
    const overlay = document.querySelector(".overlay");
    const detailModalContent = document.querySelector(".detail-todo-content");
    const closeBtn = document.querySelector(".close");
    overlay.addEventListener("click", (e) => {
      if (
        !detailModalContent.contains(e.target) ||
        closeBtn.contains(e.target)
      ) {
        this.closeTodoDetailModal();
      }
    });
  }

  closeTodoDetailModal() {
    this.TodoDetailModal.closeModal();
  }

  initHeaderClickBehavior() {
    const headerElement = document.querySelector(".header");
    // const navContainer = document.querySelector(".nav");
    const navItemElements = document.querySelectorAll(".nav__project");

    const projectFormContainer = document.querySelector(
      ".project-form-container"
    );

    // modal
    headerElement.addEventListener("click", (e) => {
      let isClickInsideNavItem = Array.from(navItemElements).some((element) =>
        element.contains(e.target)
      );
      if (
        // !navItemElement.contains(e.target) &&
        !isClickInsideNavItem &&
        !projectFormContainer.contains(e.target)
      ) {
        if (!UIController.isProjectModalOpen) {
          this.showProjectModal();
          const projectNameElement = document.querySelector("#projectName");
          projectNameElement.focus();
        } else {
          this.closeProjectModal();
        }
      }
    });
  }

  initContentClickBehavior() {
    const contentElement = document.querySelector("#content");
    const todosContainer = document.querySelector(".todos-container");
    const todoFormContainer = document.querySelector(".todo-form-container");

    contentElement.addEventListener("click", (e) => {
      if (
        !todosContainer.contains(e.target) &&
        !todoFormContainer.contains(e.target)
      ) {
        if (!UIController.isTodoModalOpen) {
          this.showTodoModal();
          const todoNameElement = document.querySelector("#todoName");
          todoNameElement.focus();
        } else {
          this.closeTodoModal();
        }
      }
    });
  }

  closeTodoModal() {
    this.TodoModal.closeModal();
  }
  closeProjectModal() {
    this.Modal.closeModal();
  }

  showTodoModal() {
    this.TodoModal.showModal();
    this.Modal.closeModal();
  }

  showProjectModal() {
    this.Modal.showModal();
    this.TodoModal.closeModal();
  }
  initTodoModal() {
    // render todoModal
    const todoModal = new TodoModal(this.todoModalCallback.bind(this));

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

  todoDetailCallback(
    todoId,
    todoName,
    projId,
    description,
    dueDate,
    prio,
    isFinished
  ) {
    this.TodoController.editTodoWithValues(
      todoId,
      todoName,
      projId,
      description,
      dueDate,
      prio,
      isFinished
    );
    const newTodoArr = this.TodoController.getTodosWithProjectId(projId);
    this.TodoComponent.renderComponent(newTodoArr);
  }

  projectModalCallback(projectId, projectName) {
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
  }

  todoModalCallback(todoId, todoName) {
    const projectId = document.querySelector("#todo-projectId").value;
    if (todoId === "") {
      // create new todo
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
  }
}
