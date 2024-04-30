import uniqid from "uniqid";

export class Project {
  constructor(name) {
    this.name = name;
    this.id = uniqid();
    // this.todos = []; // hmm,,
  }

  getId() {
    return this.id;
  }

  // TODO: encapsulate name, id, todos (?)
  // getId() {
  //   return this.id;
  // }

  // getName() {
  //   return this.name;
  // }

  // setName(name) {
  //   return (this.name = name);
  // }
}
