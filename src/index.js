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
DOMController.renderProjects(projects);

// add project
DOMController.acceptForm(
  (formData) => {
    const newProject = new Project(uniqid(), formData.project__name);
    projects.addProject(newProject);
    DOMController.renderProjects(projects);
  },
  ".project__form",
  DOMController.projectModal
);

// TODO: accept todo form
DOMController.acceptForm(
  (formData) => {
    // if (!DOMController.selectedProjectId) {
    //   console.log("No project selected");
    //   return;
    // }
    const newTodo = new Todo(
      uniqid(),
      formData.todo__name,
      formData.todo__description,
      formData.todo__dueDate,
      formData.todo__priority,
      formData.todo__notes,
      false
    );

    const project = projects.findProjectById(DOMController.selectedProjectId);
    project.addTodo(newTodo);
    DOMController.renderTodosForProject(DOMController.selectedProjectId);
  },
  ".todo__form",
  DOMController.todoModal
);

// TODO: clicking on the dropdown should save the project id somewhere
