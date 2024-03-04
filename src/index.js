import { Projects } from "./classes/Projects";
import { Project } from "./classes/Project";
import { Todo } from "./classes/Todo";
import { DOMController } from "./classes/DOMController";
import uniqid from "uniqid";
import css from "./styles.css";

// defining projects
const projects = new Projects();
// const project = new Project

if (projects.getProjects().length === 0) {
  const project1 = new Project(uniqid(), "Project 1");
  console.log(projects);
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
}

// render page
DOMController.renderPage();
DOMController.renderProjects(projects.getProjects());

// add project
DOMController.acceptForm(
  (formData) => {
    const newProject = new Project(uniqid(), formData.project__name);
    projects.addProject(newProject);
    DOMController.renderProjects(projects.getProjects());
    console.log(newProject);
  },
  ".project__form",
  DOMController.projectModal
);

DOMController.acceptForm(
  (formData) => {
    const newTodo = new Todo(
      uniqid(),
      formData.todo__name,
      formData.todo__description,
      formData.todo__dueDate,
      formData.todo__priority,
      formData.todo__notes,
      false
    );
    // TODO: add todo to project
    // TODO: render todos

    project.addTodo(newTodo);
    console.log(newTodo);
  },
  ".todo__form",
  DOMController.todoModal
);

// DOMController.acceptForm(
//   (todoName) => {
//     // Assuming you have similar functionality for todos
//     const newTodo = new Todo(uniqid(), todoName);
//     console.log(newTodo);
//     // todos.addTodo(newTodo);
//     // DOMController.renderTodos(todos.getTodos());
//     // console.log(newTodo);
//   },
//   ".todo__form",
//   ".todo__name",
//   DOMController.todoModal // Specify which modal to toggle
// );

// TODO: accept todo form
// DOMController.acceptForm();
