import uniqid from "uniqid";

export class Project {
  constructor(name) {
    this.name = name;
    this.id = uniqid();
    this.todos = [];
  }
}
