import { Component } from "./Component";

export class Modal extends Component {
  constructor(editProjectCallback) {
    super();
    // this.editProjectCallback = editProjectCallback;
  }

  renderComponent(projectId) {
    const projectModal = document.createElement("div");
    projectModal.innerHTML = `
      <div class="modal-content">
        <form id="editProjectForm">
          <label for="projectName">Project Name:</label>
          <input type="text" id="projectName" name="projectName" required>
          <input type="hidden" id="projectId" name="projectId" ${
            projectId ? `[data-id]=${projectId}` : ""
          }>
          <button type="submit">${projectId ? "Save changes" : "Add"}</button>
        </form>
      </div>
    `;

    document.body.appendChild(projectModal);
    document
      .querySelector("#editProjectForm")
      .addEventListener("submit", this.handleSubmit);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const projectName = formData.get("projectName");
    const projectId = formData.get("projectId");

    // this.editProjectCallback(projectId, projectName);
    console.log(projectId, projectName);
  }
}
