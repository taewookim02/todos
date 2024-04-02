import { Component } from "./Component";
import { Button } from "./Button";
export class TodoModal extends Component {
  constructor(todoCallback) {
    super();
    this.todoCallback = todoCallback;
  }

  renderComponent(todoId) {
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

    // TODO: FIX TODO MODAL POSITION SO THAT THE UX IS BETTER
    // console.log(document.querySelector("#content"));
    // document.body.appendChild(todoModal);
    document.querySelector("#content").appendChild(todoModal);
    // console.log(document.querySelector("#content"));
    document
      .querySelector("#editTodoForm")
      .addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const todoName = formData.get("todoName");
    const todoId = formData.get("todoId");
    this.todoCallback(todoId, todoName);
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
    }
  }

  showModal() {
    let todoModal = document.querySelector(".todo-form-container");

    if (!todoModal) {
      // FIXME: fix modal not being functional after 1 submit
    }

    todoModal.classList.add("modal-overlay");
    todoModal.classList.remove("modal-hidden");

    const todosContainer = document.querySelector("#todos-container");
    todosContainer.appendChild(todoModal);
  }
}
