import { ProjectList } from "./ProjectList";
import { createDefaultProject } from "./defaultProject";

import { createSection } from "./Section";

function displayProjects() {
  const projectList = new ProjectList();

  let MainTable = document.querySelector("#MainTable");

  let defaultProject = createDefaultProject();
  let defaultProject2 = createDefaultProject();
  let defaultProject3 = createDefaultProject();

  projectList.addProject(defaultProject);
  projectList.addProject(defaultProject2);
  projectList.addProject(defaultProject3);

  projectList.List.forEach((element) => {
    // create section for main table
    let section = createSection(element.project);
    MainTable.appendChild(section.Section);
  });
}

export { displayProjects };
