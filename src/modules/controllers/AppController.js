import { StorageController } from "./StorageController";
import { Project } from "../models/Project";

export class AppController {
  constructor() {
    this.StorageController = new StorageController();
    this.projects = JSON.parse(this.StorageController.get("projects")) || [];
  }

  init() {
    console.log("AppController init() called");
    console.log(new Project("Hello"));
    // this.addProject("project 1");
    console.log(this.projects);
  }

  addProject(name) {
    let project = new Project(name);
    console.log(project);
    this.projects.push(project);

    this.StorageController.set("projects", JSON.stringify(this.projects));
  }
}
