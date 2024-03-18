import { Component } from "./Component";
import { Button } from "./Button";
import { Modal } from "./Modal";
export class Todo extends Component {
  constructor() {
    super();
    this.Modal = new Modal();
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
  }

  handleTodoEditClick(e) {
    const todoId = e.target.getAttribute("data-id");

    // open modal
    // TODO: edit Modal.js to accept todo
  }

  handleTodoCloseClick(e) {
    console.log("closeClicked!");
  }
}
