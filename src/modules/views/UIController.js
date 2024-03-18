import { Navbar } from "./Components/Navbar";
import { Modal } from "./Components/Modal";
// import projectController here?
import { ProjectController } from "../controllers/ProjectController";
import { Project } from "../models/Project";
export class UIController {
  constructor() {
    this.Navbar = new Navbar();
    // this.Modal = new Modal();
    this.ProjectController = new ProjectController();
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
  }
}
