import { StorageController } from "./StorageController";
import { Project } from "../models/Project";

export class ProjectController {
  constructor() {
    this.StorageController = new StorageController();
  }

  getProjects() {
    // let projects = [];
    const projectsJSON = this.StorageController.get("projects");
    if (!projectsJSON) {
      return []; // return empty arr if no data
    }
    try {
      const parsedProjects = JSON.parse(projectsJSON);

      // the below assures that it is an array
      return Array.isArray(parsedProjects)
        ? parsedProjects
        : parsedProjects
        ? [parsedProjects]
        : [];
    } catch (e) {}
    return [];
  }

  addProject(projectObj) {
    let projectsArr = this.getProjects();
    projectsArr.push(projectObj);

    this.StorageController.set("projects", JSON.stringify(projectsArr));
  }
}
