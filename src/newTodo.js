import { toDoItem } from "./toDoItem";
import { displayProjects } from "./displayProjectList";

function addTodo(projectList) {
  // add project temporary
  const showButton = document.getElementById("addTask");
  const projectDialog = document.getElementById("TodoDialog");
  const confirmBtn = projectDialog.querySelector("#submitTodo");

  const title = projectDialog.querySelector("#title");
  const description = projectDialog.querySelector("#description");
  const dueDate = projectDialog.querySelector("#dueDate");
  const priority = projectDialog.querySelector("#priority");
  const note = projectDialog.querySelector("#note");
  const status = projectDialog.querySelector("#status");
  const belong = projectDialog.querySelector("#belong");

  const todo = new toDoItem("");

  function checkTitle() {
    let unValid = title.parentNode.querySelector("p");
    if (title.value == "") {
      unValid.innerHTML = `please input title for todo!!`;
      return false;
    }
    unValid.innerHTML = ``;
    return true;
  }

  function checkDueDate() {
    let unValid = dueDate.parentNode.querySelector("p");
    if (dueDate.value == "") {
      unValid.innerHTML = `please input date for dueDate!!`;
      return false;
    }
    unValid.innerHTML = ``;
    return true;
  }

  function checkValid() {
    return checkTitle() && checkDueDate();
  }

  showButton.addEventListener("click", () => {
    projectDialog.showModal();
  });

  function tittleChanger(newTitle) {
    todo.changeTittle(newTitle);
  }
  function descriptionChanger(newDescription) {
    todo.changeDescription(newDescription);
  }
  function dueDateChanger(newDate) {
    todo.changeDate(newDate);
  }
  function priorityChanger(newPriority) {
    todo.changePriority(newPriority);
  }
  function noteChanger(newNote) {
    todo.changeNote(newNote);
  }
  function statusChanger(status) {
    todo.changeStatus(status);
  }

  function takeInput() {
    tittleChanger(title.value);
    descriptionChanger(description.value);
    dueDateChanger(dueDate.value);
    priorityChanger(priority.value);
    noteChanger(note.value);
    statusChanger(status.value);

    projectList.List.forEach((element) => {
      if (element.project.title == belong.value) {
        element.project.addTodoItem(todo);
      }
    });

    displayProjects(projectList);
  }
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (checkValid() == false) {
      return;
    }
    takeInput();
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
