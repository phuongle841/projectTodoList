import "./style.css";
import { displayProjects } from "./displayProjectList";
import { addProject } from "./newProject";
import { addTodo } from "./newTodo";
import { initialProjectList } from "./initialProjectList";
let projectList = initialProjectList();
displayProjects(projectList);
addTodo(projectList);
addProject(projectList);
