import uniqid from "uniqid";

export class Todo {
  constructor(name) {
    this.name = name;
    this.id = uniqid();
  }
}
