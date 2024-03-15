import uniqid from "uniqid";

export class Todo {
  constructor(name, projectId) {
    this.name = name;
    this.id = uniqid();
    this.projectId = projectId;
  }
}
