import { Component } from "./Component";
export class Button extends Component {
  constructor(textContent, onClick) {
    super();
    this.textContent = textContent;
    this.onClick = onClick;
  }

  renderComponent() {
    const button = document.createElement("button");
    button.textContent = this.textContent;

    button.classList.add("btn");

    this.onClick ?? button.addEventListener("click", this.onClick);

    return button;
  }
}
