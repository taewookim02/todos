import { Button } from "./Button";
import { Component } from "./Component";
import { ProjectController } from "../../controllers/ProjectController";
import { Modal } from "./Modal";
import { TodoModal } from "./TodoModal";
import { TodoController } from "../../controllers/TodoController";
import { TodoComponent } from "./Todo";

export class Navbar extends Component {
  constructor() {
    super();
    this.ProjectController = new ProjectController();
    this.Modal = new Modal();
    this.TodoController = new TodoController();
    this.TodoComponent = new TodoComponent();
    this.TodoModal = new TodoModal();

    // to counter this.Modal == undefined
    this.handleProjectAddClick = this.handleProjectAddClick.bind(this);
  }

  renderComponent(projectsArr) {
    const navEl = document.querySelector(".nav");
    navEl.innerHTML = "";
    projectsArr.forEach((project) => {
      const projectNavDiv = document.createElement("div");
      projectNavDiv.classList.add("nav__project");
      projectNavDiv.setAttribute("data-id", project.id);
      const projectText = document.createElement("h3");

      const projectEditButton = new Button(
        "edit",
        (e) => this.handleProjectEditClick(e),
        project.id
      ).renderComponent();

      // button close
      const projectCloseButton = new Button(
        "x",
        () => this.handleProjectCloseClick(project.id),
        project.id
      ).renderComponent();
      // this.attachEvent(projectCloseButton);

      const projectButtonsDiv = document.createElement("div");

      projectNavDiv.appendChild(projectText);
      projectButtonsDiv.appendChild(projectEditButton);
      projectButtonsDiv.appendChild(projectCloseButton);
      projectNavDiv.appendChild(projectButtonsDiv);
      projectText.textContent = project.name;

      // navDiv click handling
      projectNavDiv.addEventListener("click", (e) =>
        this.handleProjectDivClick(e)
      );

      navEl.appendChild(projectNavDiv);
    });
    const addProjectButton = new Button(
      "New Project+",
      this.handleProjectAddClick
    ).renderComponent();
    addProjectButton.classList.add("add-project-btn");
    navEl.appendChild(addProjectButton);
  }

  handleProjectDivClick(e) {
    // render all todos with the data-id
    const projectId = e.target.getAttribute("data-id");
    const hiddentTodoInput = document.querySelector("#todo-projectId");
    hiddentTodoInput.value = projectId;
    const myTodosArr = this.TodoController.getTodosWithProjectId(projectId);

    this.TodoComponent.renderComponent(myTodosArr);
    this.Modal.closeModal();
    this.TodoModal.closeModal();
  }

  handleProjectEditClick(e) {
    const projectId = e.target.getAttribute("data-id");

    const hiddenInput = document.querySelector("#projectId");
    const formInput = document.querySelector("#projectName");
    hiddenInput.value = projectId;
    const selectedProjectName =
      this.ProjectController.getProject(projectId).name; //FIXME: sometimes undefined
    formInput.value = selectedProjectName;
    this.Modal.showModal();
    formInput.focus();
  }

  handleProjectAddClick() {
    // TODO: reset modal
    this.Modal.showModal();
  }

  handleProjectCloseClick(projectId) {
    // TODO: add modal to confirm

    // delete project
    try {
      this.ProjectController.deleteProject(projectId);
      // remove from ui
      document.querySelector(`[data-id="${projectId}"]`).remove();
    } catch (error) {
      console.log(error);
    }
  }
}
