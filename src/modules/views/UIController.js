import { Navbar } from "./Components/Navbar";
export class UIController {
  constructor() {
    this.Navbar = new Navbar();
  }

  init(projectsArr) {
    this.Navbar.renderComponent(projectsArr);
  }
}
