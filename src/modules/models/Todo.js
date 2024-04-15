import uniqid from "uniqid";

export class Todo {
  constructor(name, projectId) {
    // TODO: Add a way around overloading constructors
    // this is to add:

    /*
      1. duedate
      2. details
      3. priority
    */
    this.name = name;
    this.projectId = projectId;
    this.id = uniqid();
  }
}
