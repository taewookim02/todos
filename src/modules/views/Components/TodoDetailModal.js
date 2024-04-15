import { Component } from "./Component";

export class TodoDetailModal extends Component {
  renderComponent(todoId) {
    const detailedModal = document.createElement("div");
    detailedModal.innerHTML = `
        <div class="detail-todo-content">
        <span class="close">&times;</span>
          <form id="detailTodoForm">
            <div class="detail-todo-container">
              <label for="todoDetailName">Todo Name:</label>
              <input type="text" id="todoDetailName" name="todoDetailName" required></input>
              <label for="todoDetailDueDate">Due: </label>
              <input type="date" id="todoDetailDueDate" name="todoDetailDueDate"></input>
              <label for="todoDetailDesc">Details</label>
              <textarea id="todoDetailDesc" name="todoDetailDesc"></textarea>
              <fieldset>
                <legend>Priority</legend>
                <div>
                  <input type="radio" name="todoDetailPrio" id="urgent" value="urgent" />
                  <label for="urgent">Urgent</label>
                </div>
                <div>
                  <input type="radio" name="todoDetailPrio" id="medium" value="medium" />
                  <label for="medium">Medium</label>
                </div>
                <div>
                  <input type="radio" name="todoDetailPrio" id="chill" value="chill" />
                  <label for="chill">Chill</label>
                </div>
              </fieldset>
              <input type="hidden" id="todoDetailId" name="todoDetailId" ${
                todoId ? `value="${todoId}"` : ""
              }></input>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    `;

    // TODO: only attaches once
    detailedModal.classList.add("overlay");
    detailedModal.addEventListener("click", this.attachEvent);

    const bodyElement = document.querySelector("body");
    bodyElement.appendChild(detailedModal);
  }

  attachEvent(e) {
    // TODO: only attaches once
    // overlay
    const overlay = document.querySelector(".overlay");

    // close button
    const closeBtn = document.querySelector(".close");

    window.onclick = function (e) {
      if (e.target == overlay) {
        overlay.style.display = "none";
      }
    };
  }
}
