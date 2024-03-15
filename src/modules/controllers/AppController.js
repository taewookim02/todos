import { StorageController } from "./StorageController";
import { ProjectController } from "./ProjectController";
import { Project } from "../models/Project";

export class AppController {
  constructor() {
    this.StorageController = new StorageController();
    this.ProjectController = new ProjectController();
    // this.projects = JSON.parse(this.StorageController.get("projects")) || []; // this is from localStorage
  }

  init() {
    console.log("AppController init() called");

    // init new sample project
    let mySampleProj = new Project("Hello");
    let mySampleProj1 = new Project("Hello1");

    let currentExistingProjects = this.ProjectController.getProjects();

    if (currentExistingProjects.length > 0) {
      // do nothing
    } else {
      // save sample project
      this.ProjectController.addProject(mySampleProj);
      this.ProjectController.addProject(mySampleProj1);
    }

    // delete sample project
    // this.ProjectController.deleteProject(currentExistingProjects[1].id);

    // edit sample project (ltshu1yz, "Hello")
    this.ProjectController.editProject("ltshu1yz", "HAHAHA");

    // console.log(this.StorageController.get("projects"));

    // init new todo item

    // save new todo item to corresponding project
  }
}
