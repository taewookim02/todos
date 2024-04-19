import uniqid from "uniqid";

export class Todo {
  constructor(
    name,
    projectId,
    description = "",
    dueDate = "",
    priority = "",
    isFinished = false
  ) {
    this.id = uniqid();
    this.name = name;
    this.projectId = projectId;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isFinished = isFinished;
  }

  setPriority = (priority) => (this.priority = priority);
  setDueDate = (dueDate) => (this.dueDate = dueDate);
}
