export class DOMController {
  // static variables
  static overlayModal = null;
  static projectModal = null;

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

    projectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      DOMController.toggleModal();
    });

    DOMController.overlayModal.addEventListener(
      "click",
      DOMController.toggleModal
    );
    DOMController.projectModal
      .querySelector(".project__close")
      .addEventListener("click", (e) => {
        e.preventDefault();
        DOMController.toggleModal();
      });
  }

  static renderModal(container) {
    // modal overlay
    DOMController.overlayModal = document.createElement("div");
    DOMController.overlayModal.classList.add("modal__overlay");
    container.appendChild(DOMController.overlayModal);

    // project modal
    DOMController.projectModal = document.createElement("div");
    DOMController.projectModal.classList.add("project__modal");
    DOMController.projectModal.innerHTML = `
    <form class="project__form">
      <h2>Add Project</h2>
      <button class="project__close">X</button>
      <input type="text" id="project__name" name ="project__name" class="project__name" placeHolder="Project Name:" />
      <button class="project__submit">Submit</button>
    </form>
`;

    // initially hidden
    DOMController.overlayModal.style.display = "none";
    DOMController.projectModal.style.display = "none";

    container.appendChild(DOMController.projectModal);
  }

  static acceptForm(callback) {
    const projectForm =
      DOMController.projectModal.querySelector(".project__form");
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const projectName = projectForm.querySelector(".project__name").value;
      if (projectName) {
        callback(projectName);
        DOMController.toggleModal();
      }
    });
  }

  static toggleModal() {
    const isHidden = DOMController.projectModal.style.display === "none";
    DOMController.projectModal.style.display = isHidden ? "block" : "none";
    DOMController.overlayModal.style.display = isHidden ? "block" : "none";

    // reset form
    const projectForm =
      DOMController.projectModal.querySelector(".project__form");
    projectForm.reset();
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
