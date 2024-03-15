import { StorageController } from "./StorageController";
import { ProjectController } from "./ProjectController";
import { Project } from "../models/Project";

export class AppController {
  constructor() {
    this.StorageController = new StorageController();
    this.projectController = new ProjectController();
    // this.projects = JSON.parse(this.StorageController.get("projects")) || []; // this is from localStorage
  }

  init() {
    console.log("AppController init() called");

    // init new sample project
    let mySampleProj = new Project("Hello");
    let mySampleProj1 = new Project("Hello1");

    this.projectController.getProjects();

    // save sample project
    this.projectController.addProject(mySampleProj);
    this.projectController.addProject(mySampleProj1);
    this.projectController.addProject(mySampleProj1);

    // console.log(this.StorageController.get("projects"));

    // init new todo item

    // save new todo item to corresponding project
  }
}
