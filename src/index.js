import { Projects } from "./classes/Projects";
import { Project } from "./classes/Project";
import { Todo } from "./classes/Todo";
import { DOMController } from "./classes/DOMController";
import uniqid from "uniqid";
import css from "./styles.css";

// defining projects
const projects = new Projects();
const project1 = new Project(uniqid(), "Project 1");

// example todo
const todo1 = new Todo(
  uniqid(),
  "Todo 1",
  "Description 1",
  Date.now(), // date to something more readable
  10,
  "Notes... 1",
  false
);

// adding todo/project to project/projects
projects.addProject(project1);
project1.addTodo(todo1);

// render page
DOMController.renderPage();
DOMController.renderProjects(projects.getProjects());

// add project
DOMController.acceptForm((projectName) => {
  console.log(projectName);
  const newProject = new Project(uniqid(), projectName);
  projects.addProject(newProject);
  DOMController.renderProjects(projects.getProjects());
});
