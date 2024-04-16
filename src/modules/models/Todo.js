import uniqid from "uniqid";

export class Todo {
  constructor(name, projectId, details = "", dueDate = "", priority = "") {
    this.id = uniqid();
    this.name = name;
    this.projectId = projectId;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
