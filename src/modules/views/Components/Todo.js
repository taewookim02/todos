import { Component } from "./Component";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { TodoModal } from "./TodoModal";
import { TodoController } from "../../controllers/TodoController";
export class TodoComponent extends Component {
  constructor() {
    super();
    this.Modal = new Modal();
    this.TodoModal = new TodoModal();
    this.TodoController = new TodoController();
  }

  renderComponent(todosArr) {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const todosContainer = document.createElement("div");
    todosContainer.classList.add("todos-container");

    todosArr.forEach((todo) => {
      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-container");
      todoContainer.setAttribute("data-id", todo.id);
      todoContainer.setAttribute("data-projectId", todo.projectId);
      const todoName = document.createElement("p");

      const todoEditButton = new Button(
        "edit",
        (e) => this.handleTodoEditClick(e),
        todo.id
      ).renderComponent();

      // button close
      const todoCloseButton = new Button(
        "x",
        () => this.handleTodoCloseClick(todo.id),
        todo.id
      ).renderComponent();

      const todoButtonsDiv = document.createElement("div");
      todoButtonsDiv.appendChild(todoEditButton);
      todoButtonsDiv.appendChild(todoCloseButton);

      todoName.textContent = todo.name;
      todoContainer.appendChild(todoName);
      todoContainer.appendChild(todoButtonsDiv);
      todosContainer.appendChild(todoContainer);
    });

    content.appendChild(todosContainer);

    const addTodoButton = new Button("+", (e) =>
      this.handleTodoAddClick(e)
    ).renderComponent();
    content.appendChild(addTodoButton);
  }

  handleTodoAddClick(e) {
    this.TodoModal.showModal();
  }

  handleTodoEditClick(e) {
    const todoId = e.target.getAttribute("data-id");

    const hiddenInput = document.querySelector("#todoId"); //
    const formInput = document.querySelector("#todoName");
    hiddenInput.value = todoId;
    const selectedTodoName = this.TodoController.getSingleTodo(todoId).name;
    formInput.value = selectedTodoName;
    this.TodoModal.showModal();
    formInput.focus();
  }

  handleTodoCloseClick(todoId) {
    try {
      this.TodoController.removeTodoById(todoId);
      document.querySelector(`[data-id="${todoId}"]`).remove();
    } catch (error) {
      console.log(error);
    }
  }
}
