export class DOMController {
  // render page structure
  static renderPage() {
    const content = document.querySelector("#content");
    const nav = document.querySelector(".nav");
    const header = document.querySelector(".header");

    // add project button
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project__btn");
    projectBtn.textContent = "+";
    header.appendChild(projectBtn);

    nav.innerHTML = `
      <h2>Projects</h2>
      <div class="nav__projects"></div>
    `;
    content.innerHTML = `
      <h2>Todos</h2>
      <div class="todos__container"></div>
    `;
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
