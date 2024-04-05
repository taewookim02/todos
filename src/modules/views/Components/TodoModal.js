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

    // document.querySelector("#content").appendChild(todoModal);
    // document.querySelector(".todos-container").appendChild(todoModal); <-- doing this instead of #content causes the content to be completely blank. Why?
    let contentElement = document.querySelector("#content");
    let addButton = document.querySelector("#add-todo-btn");
    contentElement.insertBefore(todoModal, addButton);

    document
      .querySelector("#editTodoForm")
      .addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("todoCallback is: ", this.todoCallback);
    const formData = new FormData(e.target);
    const todoName = formData.get("todoName");
    const todoId = formData.get("todoId");
    this.todoCallback(todoId, todoName); // this line throws error if todoCallback is not a function
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
    console.log(todoModal);
    if (todoModal) {
      todoModal.classList.add("modal-hidden");
      todoModal.classList.remove("modal-overlay");
    }
  }

  showModal() {
    let todoModal = document.querySelector(".todo-form-container");

    if (!todoModal) {
      // FIXME: fix modal not being functional after 1 submit
      // https://chat.openai.com/c/86ba84f9-e1c9-4da3-b801-4c56755907e9
      this.renderComponent();
      todoModal = document.querySelector(".todo-form-container");
    }

    todoModal.classList.add("modal-overlay");
    todoModal.classList.remove("modal-hidden");

    // const todosContainer = document.querySelector("#todos-container");
    // todosContainer.appendChild(todoModal);
  }
}
