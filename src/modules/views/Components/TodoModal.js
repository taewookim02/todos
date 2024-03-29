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

    todoModal.classList.add("modal-hidden");
    const closeButton = new Button("x", (e) =>
      this.handleCloseButtonClick(e)
    ).renderComponent();
    todoModal.querySelector(".todoModal-content").appendChild(closeButton);

    // TODO: ADD TODO MODAL TO CONTENT SO THAT THE UX IS BETTER
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
    const todoModal = document.querySelector(".todoModal-content").parentNode;
    const modalInput = document.querySelector("#todoName");
    modalInput.value = "";
    const modalHiddenTodoId = document.querySelector("#todoId");
    modalHiddenTodoId.value = "";
    todoModal.classList.add("modal-hidden");
    todoModal.classList.remove("modal-overlay");
  }

  showModal() {
    const todoModal = document.querySelector(".todoModal-content").parentNode;
    todoModal.classList.add("modal-overlay");
    todoModal.classList.remove("modal-hidden");
  }
}
