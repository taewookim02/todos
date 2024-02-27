export class DOMController {
  // render page structure
  static renderPage() {
    const content = document.querySelector("#content");
    content.innerHTML = `
      <div class="projects-container">
        <h2>Projects</h2>
      </div>
    `;
  }

  // render all projects
  static renderProjects(projects) {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";
    projects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.innerHTML = `<h3>${project.name}</h3>`;
      projectsContainer.appendChild(projectDiv);
    });
  }
}
