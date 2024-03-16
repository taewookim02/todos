import { Component } from "./Component";
export class Navbar extends Component {
  constructor() {
    super();
  }

  renderComponent(projectsArr) {
    const navEl = document.querySelector(".nav");

    projectsArr.forEach((project) => {
      const projectsNavDiv = document.createElement("div");
      projectsNavDiv.classList.add("nav__project");
      projectsNavDiv.textContent = project.name;

      projectsNavDiv.setAttribute("data-id", project.id);

      navEl.appendChild(projectsNavDiv);
    });
  }
}
