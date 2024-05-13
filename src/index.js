import "./style.css";
import { displayProjects } from "./displayProjectList";
import { addProject } from "./newProject";
import { addTodo } from "./newTodo";
import { initialProjectList } from "./initialProjectList";
import { Observable } from "./observable";

class Controller {
  constructor() {
    this.projectList = initialProjectList();

    this.observable = new Observable();
    this.observable.subscribe(this.updateSystem);

    this.updateSystem(this.projectList, this.observable);
  }
  updateSystem = function (projectList, observable) {
    displayProjects(projectList, observable);
    addTodo(projectList, observable);
    addProject(projectList, observable);
  };
}
const controller = new Controller();
