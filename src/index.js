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

// render todos for default project
let defaultProjectId = projects.getProjects()[0].id;
DOMController.renderTodosForProject(defaultProjectId, projects);

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

// add todo
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

    let projectData = projects.findProjectById(DOMController.selectedProjectId);
    if (!projectData) {
      projectData = projects.getProjects()[0];
    }
    const project = new Project(projectData.id, projectData.name);
    project.todos = projectData.todos;

    console.log(project);
    console.log(project instanceof Project);
    project.addTodo(newTodo);
    DOMController.renderTodosForProject(
      DOMController.selectedProjectId ?? projects.getProjects()[0].id,
      projects
    );
  },
  ".todo__form",
  DOMController.todoModal
);

// TODO:2. remove project

// TODO:3. remove todo

// TODO: Currently I can only add Todos when a project is clicked on..
// if I don't click on the project beforehand, it doesn't work
// to fix this, when I add new project, the project should be selected
// and the todos should be rendered for that project

// TODO:
// Upon first load, the page should render the projects and the first project's todos.
