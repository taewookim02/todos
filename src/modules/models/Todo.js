import uniqid from "uniqid";

export class Todo {
  constructor(name, projectId) {
    this.name = name;
    this.projectId = projectId;
    this.id = uniqid();
  }
}
