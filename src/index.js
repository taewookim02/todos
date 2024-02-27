import { Projects } from "./classes/Projects";
import { Project } from "./classes/Project";
import { Todo } from "./classes/Todo";
import uniqid from "uniqid";

console.log("Hello, world!");

const projects = new Projects();
const project1 = new Project(uniqid(), "Project 1");
console.log(project1);
const todo1 = new Todo(
  uniqid(),
  "Todo 1",
  "Description 1",
  Date.now(),
  10,
  "Notes... 1",
  false
);
project1.addTodo(todo1);

console.log(project1);
