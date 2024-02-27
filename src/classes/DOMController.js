export class DOMController {
  // render page structure
  static renderPage() {
    const content = document.querySelector("#content");
    const nav = document.querySelector(".nav");
    const header = document.querySelector(".header");
    const container = document.querySelector(".container");

    // reset content
    nav.innerHTML = `
      <h2>Projects</h2>
      <div class="nav__projects"></div>
    `;
    content.innerHTML = `
      <h2>Todos</h2>
      <div class="todos__container"></div>
    `;

    // add project button
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project__btn");
    projectBtn.textContent = "+";
    header.appendChild(projectBtn);
    projectBtn.addEventListener("click", (e) => {
      e.preventDefault();
    });

    DOMController.renderModal(container);
  }

  static renderModal(container) {
    // modal overlay
    const overlayModal = document.createElement("div");
    overlayModal.classList.add("modal__overlay");
    container.appendChild(overlayModal);

    // project modal
    const projectModal = document.createElement("div");
    projectModal.classList.add("project__modal");
    projectModal.innerHTML = `
  <form class="project__form">
    <h2>Add Project</h2>
    <button class="project__close">X</button>
    <input type="text" class="project__name" placeHolder="Project Name:" />
    <button class="project__submit">Submit</button>
  </form>
`;
    container.appendChild(projectModal);
  }

  // render all projects
  static renderProjects(projects) {
    const projectsContainer = document.querySelector(".nav__projects");
    projectsContainer.innerHTML = "";
    projects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.innerHTML = `<h3>${project.name}</h3>`;
      projectsContainer.appendChild(projectDiv);
    });
  }
}
