import { StorageController } from "./StorageController";
import { Project } from "../models/Project";

export class ProjectController {
  constructor() {
    this.StorageController = new StorageController();
  }

  getProjects() {
    const projectsJSON = this.StorageController.get("projects");
    if (!projectsJSON) {
      return []; // return empty arr if no data in localStorage
    }
    try {
      // try because error might occur in parse
      const parsedProjects = JSON.parse(projectsJSON);

      // the below assures that it is an array
      return Array.isArray(parsedProjects)
        ? parsedProjects
        : parsedProjects
        ? [parsedProjects]
        : [];
    } catch (e) {
      // if error, return an array
      return [];
    }
  }

  getProject(projectId) {
    let projectArr = this.getProjects();
    for (let i = 0; i < projectArr.length; i++) {
      if (projectArr[i].id === projectId) {
        return projectArr[i];
      }
    }
  }

  addProject(projectObj) {
    let projectsArr = this.getProjects();
    projectsArr.push(projectObj); // push received argument to projectsArr

    this.StorageController.set("projects", JSON.stringify(projectsArr)); // overwrite projects with updatedArr in localStorage
  }

  editProject(projectId, name) {
    let projectsArr = this.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectsArr[i].id === projectId) {
        projectsArr[i].name = name;
      }
    }

    this.saveCurrentProjectsToLocalStorage(projectsArr);
  }

  deleteProject(projectId) {
    let projectsArr = this.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectId === projectsArr[i].id) {
        projectsArr.splice(i, 1);
      }
    }
    this.saveCurrentProjectsToLocalStorage(projectsArr);
  }

  saveCurrentProjectsToLocalStorage(projectsArr) {
    this.StorageController.set("projects", JSON.stringify(projectsArr));
  }
}
