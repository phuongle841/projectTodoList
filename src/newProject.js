import { displayProjects } from "./displayProjectList";
import { Project } from "./Project";

function addProject(projectList, observable) {
  // add project temporary
  const showButton = document.getElementById("addProject");
  const projectDialog = document.getElementById("ProjectDialog");
  const confirmBtn = projectDialog.querySelector("#submitProject");

  const title = projectDialog.querySelector("#title");
  const description = projectDialog.querySelector("#description");

  const project = new Project("");

  function checkTitle() {
    let unValid = title.parentNode.querySelector("p");
    let valid = true;
    projectList.List.forEach((element) => {
      if (title.value == element.project.title) {
        unValid.innerHTML = `Same title alert!!`;
        valid = false;
        return valid;
      }
    });
    if (title.value == "") {
      valid = false;
      unValid.innerHTML = `please input title for project!!`;
      return false;
    }
    unValid.innerHTML = ``;
    return valid;
  }

  function checkValid() {
    return checkTitle();
  }

  function refreshInput() {
    title.innerHTML = "";
    description.innerHTML = "";
  }
  showButton.addEventListener("click", () => {
    projectDialog.showModal();
  });

  function tittleChanger(newTitle) {
    project.changeTittle(newTitle);
  }
  function descriptionChanger(newDescription) {
    project.changeDescription(newDescription);
  }

  function takeInput() {
    tittleChanger(title.value);
    descriptionChanger(description.value);

    // add project into projectList
    projectList.addProject({ project });
    console.log(projectList);
  }

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // check the valid of the box
    if (checkValid() == false) {
      return;
    }
    takeInput();
    projectDialog.close();
    observable.notify(projectList, observable);
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
export { addProject };
