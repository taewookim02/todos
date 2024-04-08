import { Component } from "./Component";
import { Button } from "./Button";
import { UIController } from "../UIController";
export class Modal extends Component {
  constructor(projectCallback) {
    super();
    this.projectCallback = projectCallback;
  }

  renderComponent(projectId) {
    const projectModal = document.createElement("div");
    projectModal.innerHTML = `
      <div class="modal-content">
        <form id="editProjectForm">
          <label for="projectName">Project Name:</label>
          <input type="text" id="projectName" name="projectName" required>
          <input type="hidden" id="projectId" name="projectId" ${
            projectId ? `data-id="${projectId}"` : ""
          }>
          <button type="submit">${projectId ? "Save changes" : "Add"}</button>
        </form>
      </div>
      `;

    projectModal.classList.add("project-form-container");
    projectModal.classList.add("modal-hidden");
    const closeButton = new Button("x", (e) =>
      this.handleCloseButtonClick(e)
    ).renderComponent();
    projectModal.querySelector(".modal-content").appendChild(closeButton);

    let headerElement = document.querySelector(".header");

    headerElement.appendChild(projectModal);

    document
      .querySelector("#editProjectForm")
      .addEventListener("submit", (e) => this.handleSubmit(e)); // FIXME:
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const projectName = formData.get("projectName");
    const projectId = formData.get("projectId");
    this.projectCallback(projectId, projectName); // FIXME:
    this.closeModal();
  }

  handleCloseButtonClick(e) {
    // close modal
    this.closeModal();
  }

  closeModal() {
    const projectModal = document.querySelector(".project-form-container");
    const modalInput = document.querySelector("#projectName");
    if (modalInput) {
      modalInput.value = "";
    }
    const modalHiddenProjectId = document.querySelector("#projectId");
    if (modalHiddenProjectId) {
      modalHiddenProjectId.value = "";
    }
    if (projectModal) {
      projectModal.classList.add("modal-hidden");
    }

    UIController.isProjectModalOpen = false;
  }

  showModal() {
    let projectModal = document.querySelector(".project-form-container");

    if (!projectModal) {
      this.renderComponent();
      projectModal = document.querySelector(".project-form-container");
    }
    projectModal.classList.add("modal-overlay");
    projectModal.classList.remove("modal-hidden");

    UIController.isProjectModalOpen = true;

    // focus input
    const inputEl = document.querySelector("#projectName");
    inputEl.focus;
    console.log(inputEl);

    // const navElement = document.querySelector(".nav");
    // navElement.appendChild(projectModal);
  }
}
