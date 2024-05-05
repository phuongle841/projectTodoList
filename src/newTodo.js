import { customSelectProject } from "./selectProjectBox";
import { toDoItem } from "./toDoItem";

function addTodo() {
  // add project temporary
  const showButton = document.getElementById("addTask");
  const projectDialog = document.getElementById("TodoDialog");
  const confirmBtn = projectDialog.querySelector("#submitTodo");

  let values = [];
  const todo = new toDoItem("");
  const title = projectDialog.querySelector("#title");
  const description = projectDialog.querySelector("#description");
  const dueDate = projectDialog.querySelector("#dueDate");
  const priority = projectDialog.querySelector("#priority");
  const note = projectDialog.querySelector("#note");
  const status = projectDialog.querySelector("#status");
  const belong = projectDialog.querySelector("#belong");

  values.push(title);
  values.push(description);
  values.push(dueDate);
  values.push(priority);
  values.push(note);
  values.push(status);
  values.push(belong);

  function checkValid() {
    let unValid = title.parentNode.querySelector("p");
    if (title.value == "") {
      unValid.innerHTML = `please input title for todo!!`;
      return false;
    }
    unValid.innerHTML = ``;
    return true;
  }

  showButton.addEventListener("click", () => {
    projectDialog.showModal();
  });
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // check the valid of the box
    let Valid = checkValid();
    if (Valid == false) {
      return;
    }
    projectDialog.close();
  });

  projectDialog.addEventListener("click", function (event) {
    var rect = projectDialog.getBoundingClientRect();
    var isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      projectDialog.close();
    }
  });
}
export { addTodo };
