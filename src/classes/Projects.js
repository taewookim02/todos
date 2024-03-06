import { Util } from "./Util";

export class Projects {
  constructor() {
    this.projects = this.loadFromLocalStorage() || [];
  }

  // should addProject be here?
  addProject(project) {
    this.projects.push(project);
    // localStorage.setItem("projects", JSON.stringify(this.projects));
    this.saveToLocalStorage();
  }

  getProjects() {
    // Util.getFromLocalStorage("projects");
    return this.projects;
    // return this.projects;
  }

  findProjectById(id) {
    return this.projects.find((project) => project.id === id);
  }

  removeProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem("projects");
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
}
