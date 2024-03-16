import { Button } from "./Button";
import { Component } from "./Component";
export class Navbar extends Component {
  constructor() {
    super();
    this.Button = new Button();
  }

  renderComponent(projectsArr) {
    const navEl = document.querySelector(".nav");

    projectsArr.forEach((project) => {
      const projectNavDiv = document.createElement("div");
      projectNavDiv.classList.add("nav__project");
      projectNavDiv.setAttribute("data-id", project.id);
      const projectText = document.createElement("h3");
      const projectCloseButton = new Button("x").renderComponent();
      this.attachEvent(projectCloseButton);

      projectNavDiv.appendChild(projectText);
      projectNavDiv.appendChild(projectCloseButton);
      projectText.textContent = project.name;

      this.attachEvent(projectNavDiv); // this is from Component class, you could define one later too..

      navEl.appendChild(projectNavDiv);
    });
  }
}
