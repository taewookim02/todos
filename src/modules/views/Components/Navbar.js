import { Button } from "./Button";
import { Component } from "./Component";
import { ProjectController } from "../../controllers/ProjectController";
export class Navbar extends Component {
  constructor() {
    super();
    this.ProjectController = new ProjectController();
  }

  renderComponent(projectsArr) {
    const navEl = document.querySelector(".nav");

    projectsArr.forEach((project) => {
      const projectNavDiv = document.createElement("div");
      projectNavDiv.classList.add("nav__project");
      projectNavDiv.setAttribute("data-id", project.id);
      const projectText = document.createElement("h3");
      const projectCloseButton = new Button(
        "x",
        () => this.handleProjectCloseClick(project.id),
        project.id
      ).renderComponent();
      // this.attachEvent(projectCloseButton);

      projectNavDiv.appendChild(projectText);
      projectNavDiv.appendChild(projectCloseButton);
      projectText.textContent = project.name;

      this.attachEvent(projectNavDiv); // this is from Component class, you could define one later too..

      navEl.appendChild(projectNavDiv);
    });
    const addProjectButton = new Button(
      "+",
      this.handleProjectAddClick
    ).renderComponent();
    navEl.appendChild(addProjectButton);
  }

  handleProjectAddClick() {
    console.log("Add project!");
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
