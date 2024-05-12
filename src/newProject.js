import { displayProjects } from "./displayProjectList";
import { Project } from "./Project";

function addProject(projectList) {
  // add project temporary
  const showButton = document.getElementById("addProject");
  const projectDialog = document.getElementById("ProjectDialog");
  const confirmBtn = projectDialog.querySelector("#submitProject");

  const title = projectDialog.querySelector("#title");
  const description = projectDialog.querySelector("#description");

  const project = new Project("");

  function checkTitle() {
    let unValid = title.parentNode.querySelector("p");
    if (title.value == "") {
      unValid.innerHTML = `please input title for project!!`;
      return false;
    }
    unValid.innerHTML = ``;
    return true;
  }
  function checkValid() {
    return checkTitle();
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
    console.log(project);
    projectList.addProject({ project });

    displayProjects(projectList);
  }

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // check the valid of the box
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
export { addProject };
