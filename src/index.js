import { getTime, isThisSecond, time } from "date-fns";
import { toDoItem } from "./toDoItem";
import { Project } from "./Project";
import { ProjectList } from "./ProjectList";

import { createSection } from "./Section";
import "./style.css";

let MainTable = document.querySelector("#MainTable");
let defaultProject = new Project("The Odin Project");
const readIntro = new toDoItem("Read Intro");
const readAssignment = new toDoItem("Read Assignment");
const finishQuestions = new toDoItem("Finish Question");
defaultProject.addTodoItem(readIntro);
defaultProject.addTodoItem(readAssignment);
defaultProject.addTodoItem(finishQuestions);

// create section for main table
let section = createSection(defaultProject);
MainTable.appendChild(section.Section);
