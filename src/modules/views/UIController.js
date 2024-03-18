import { Navbar } from "./Components/Navbar";
import { Modal } from "./Components/Modal";
export class UIController {
  constructor() {
    this.Navbar = new Navbar();
    this.Modal = new Modal();
  }

  init(projectsArr) {
    this.Navbar.renderComponent(projectsArr);

    // render modal
    this.Modal.renderComponent(); // projectId,
  }
}
