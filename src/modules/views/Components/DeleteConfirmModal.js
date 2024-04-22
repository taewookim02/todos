import { UIController } from "../UIController";
import { Component } from "./Component";
import { ProjectController } from "../../controllers/ProjectController";
import { Navbar } from "./Navbar";
export class DeleteConfirmModal extends Component {
  static renderComponent() {
    const confirmModal = document.createElement("div");
    confirmModal.innerHTML = `
      <div class="delete-confirm-modal-content">
        <span class="close confirm-close">&times;</span>
        <form id="deleteConfirmForm">
          <h3>Are you sure you want to delete?</h3>
          <div class="confirm__btns">
            <button class="deleteConfirmForm__delete--btn">Delete</button>
            <button class="deleteConfirmForm__cancel--btn">Cancel</button>
          </div>
        </form>
      </div>
    `;
    confirmModal.classList.add("overlay");
    confirmModal.classList.add("modal-hidden");
    confirmModal.classList.add("delete-confirm-modal");

    const bodyElement = document.querySelector("body");
    bodyElement.appendChild(confirmModal);

    // Button event listeners
    const deleteBtn = document.querySelector(".deleteConfirmForm__delete--btn");
    const cancelBtn = document.querySelector(".deleteConfirmForm__cancel--btn");

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      DeleteConfirmModal.handleDeleteButtonClick(e);
      //delete project
    });
    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      DeleteConfirmModal.closeModal();
    });
  }

  static closeModal() {
    const confirmModal = document.querySelector(".delete-confirm-modal");
    confirmModal.classList.add("modal-hidden");
  }

  static handleDeleteButtonClick(e) {
    try {
      const projectControllerObj = new ProjectController();
      projectControllerObj.deleteProject(
        UIController.CURRENT_DELETE_PROJECT_ID
      );

      // rerender navbar
      const projectsArr = projectControllerObj.getProjects();
      const navbarObj = new Navbar();
      navbarObj.renderComponent(projectsArr);
      DeleteConfirmModal.closeModal();
      UIController.CURRENT_DELETE_PROJECT_ID = "";
    } catch (error) {
      console.log(error);
    }
  }
}
