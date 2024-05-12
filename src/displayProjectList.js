import { createSection } from "./Section";
import { customSelectProject } from "./selectProjectBox";

function displayProjects(projectList) {
  let MainTable = document.querySelector("#MainTable");
  MainTable.innerHTML = "";

  projectList.List.forEach((element) => {
    // create section for main table
    let section = createSection(element.project);
    MainTable.appendChild(section.Section);
  });
  // this is the select box custom
  customSelectProject(projectList);
}

export { displayProjects };
