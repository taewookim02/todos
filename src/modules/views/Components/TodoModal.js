import { Component } from "./Component";
import { Button } from "./Button";
import { UIController } from "../UIController";
import { ProjectController } from "../../controllers/ProjectController";
import { format } from "date-fns";
export class TodoModal extends Component {
  constructor(todoCallback) {
    super();
    this.todoCallback = todoCallback;
    this.ProjectController = new ProjectController();
  }

  renderComponent(todoId) {
    let projectArr = this.ProjectController.getProjects();
    const todoModal = document.createElement("div");
    todoModal.innerHTML = `
      <div class="todoModal-content">
        <form id="editTodoForm">
          <label for="todoName">Todo Name:</label>
          <input type="text" id="todoName" name="todoName" required>
          <input type="hidden" id="todoId" name="todoId" ${
            todoId ? `value="${todoId}"` : ""
          }>
          <input type="hidden" id="todo-projectId" name="todo-projectId" ${
            projectId ? `value="${projectId}"` : ""
          }>
          <select class="hidden" id="todo-select-projectId">
            ${projectArr
              .map((proj) => `<option value="${proj.id}">${proj.name}</option>`)
              .join("")}
          </select>
          <select class="hidden" id="todo-select-priority">
              <option value="urgent">Urgent</option>
              <option value="medium">Medium</option>
              <option value="chill">Chill</option>
          </select>
          <input type="date" id="todo-general-date" name="todo-general-date" value="${format(
            new Date(),
            "yyyy-MM-dd"
          )}" />
          
          <button type="submit">${todoId ? "Save changes" : "Add"}</button>
        </form>
      </div>
    `;

    todoModal.classList.add("todo-form-container");

    todoModal.classList.add("modal-hidden");

    const closeButton = new Button("x", (e) =>
      this.handleCloseButtonClick(e)
    ).renderComponent();

    todoModal.querySelector(".todoModal-content").appendChild(closeButton);

    let contentElement = document.querySelector("#content");
    contentElement.appendChild(todoModal);

    document
      .querySelector("#editTodoForm")
      .addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log("todoCallback is: ", this.todoCallback);
    const formData = new FormData(e.target);
    const todoName = formData.get("todoName");
    const todoId = formData.get("todoId");
    this.todoCallback(todoId, todoName);

    const projId = formData.get("todo-projectId");
    const projNameElement = document.querySelector(".todo-header");
    const projectName = this.ProjectController.getName(projId);
    if (UIController.GENERAL_LIST.includes(UIController.CURRENT_PROJECT_ID)) {
      projNameElement.textContent = UIController.CURRENT_PROJECT_ID;
    } else {
      projNameElement.textContent = projectName;
    }

    this.closeModal();
  }

  handleCloseButtonClick(e) {
    e.preventDefault();
    this.closeModal();
  }

  closeModal() {
    const todoModal = document.querySelector(".todo-form-container"); //
    const modalInput = document.querySelector("#todoName");
    if (modalInput) {
      modalInput.value = "";
    }
    const modalHiddenTodoId = document.querySelector("#todoId");
    if (modalHiddenTodoId) {
      modalHiddenTodoId.value = "";
    }

    if (todoModal) {
      todoModal.classList.add("modal-hidden");
      todoModal.classList.remove("modal-overlay");
      // if arr.contains(uicontroller.)~~
      // classList.remove
    }

    UIController.isTodoModalOpen = false;
  }

  showModal() {
    let todoModal = document.querySelector(".todo-form-container");

    if (!todoModal) {
      this.renderComponent();
      todoModal = document.querySelector(".todo-form-container");
    }

    todoModal.classList.add("modal-overlay");
    todoModal.classList.remove("modal-hidden");

    const projSelectElement = document.querySelector("#todo-select-projectId");
    const prioSelectElement = document.querySelector("#todo-select-priority");
    const generalDateElement = document.querySelector("#todo-general-date");

    // reset classes & attr
    prioSelectElement.classList.add("hidden");
    generalDateElement.classList.add("hidden");
    generalDateElement.required = false;

    // if current menu is all, today, scheduled, prio,
    // show select option for project names when adding todo
    if (UIController.GENERAL_LIST.includes(UIController.CURRENT_PROJECT_ID)) {
      projSelectElement.classList.remove("hidden");
      switch (UIController.CURRENT_PROJECT_ID) {
        case "priority":
          prioSelectElement.classList.remove("hidden");
          break;
        case "scheduled":
          generalDateElement.classList.remove("hidden");
          generalDateElement.required = true;
          break;
      }
    } else {
      projSelectElement.classList.add("hidden");
    }

    UIController.isTodoModalOpen = true;
  }
}
