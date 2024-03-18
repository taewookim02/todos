import { Button } from "./Button";
import { Component } from "./Component";
import { ProjectController } from "../../controllers/ProjectController";
import { Modal } from "./Modal";
export class Navbar extends Component {
  constructor() {
    super();
    this.ProjectController = new ProjectController();
    this.Modal = new Modal();

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

      // button close
      const projectCloseButton = new Button(
        "x",
        () => this.handleProjectCloseClick(project.id),
        project.id
      ).renderComponent();
      // this.attachEvent(projectCloseButton);

      projectNavDiv.appendChild(projectText);
      projectNavDiv.appendChild(projectCloseButton);
      projectText.textContent = project.name;

      // navDiv click handling
      projectNavDiv.addEventListener("click", (e) =>
        this.handleProjectDivClick(e)
      ); // this is from Component class, you could define one later too..

      navEl.appendChild(projectNavDiv);
    });
    const addProjectButton = new Button(
      "+",
      this.handleProjectAddClick
    ).renderComponent();
    navEl.appendChild(addProjectButton);
  }

  handleProjectDivClick(e) {
    const projectId = e.target.getAttribute("data-id");

    const hiddenInput = document.querySelector("#projectId");
    const formInput = document.querySelector("#projectName");
    hiddenInput.value = projectId;
    const selectedProjectName =
      this.ProjectController.getProject(projectId).name; // undefined
    formInput.value = selectedProjectName;
    // open modal here
    this.Modal.showModal();
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
    } catch (e) {
      console.log(e);
    }
  }
}
