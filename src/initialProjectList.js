import { ProjectList } from "./ProjectList";
import { createDefaultProject } from "./defaultProject";

function initialProjectList() {
  const projectList = new ProjectList();

  let defaultProject = createDefaultProject("Fitness");
  let defaultProject2 = createDefaultProject("Groceries");
  let defaultProject3 = createDefaultProject("Appointment");

  projectList.addProject(defaultProject);
  projectList.addProject(defaultProject2);
  projectList.addProject(defaultProject3);
  return projectList;
}
export { initialProjectList };
