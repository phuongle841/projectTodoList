import { time } from "date-fns";
import "./style.css";

// create new project
class ProjectList {
  listOfProject;
  constructor() {
    this.listOfProject = [];
  }
  get List() {
    return this.listOfProject;
  }
}

const ProjectAdder = {
  addProject(project) {
    this.listOfProject.push(project);
  },
};

const ProjectRemover = {
  removeProject(removedProject) {
    let index = this.listOfProject.findIndex(
      (project) => project == removedProject
    );
    this.listOfProject.splice(index, 1);
  },
};

Object.assign(ProjectList.prototype, ProjectAdder);
Object.assign(ProjectList.prototype, ProjectRemover);

class Project {
  title;
  description;
  todoList;
  constructor(title) {
    this.title = title;
    this.todoList = [];
  }
  get todoList() {
    return this.todoList;
  }
}

const todoAdder = {
  addTodoItem(toDoItem) {
    this.todoList.push(toDoItem);
    console.log("is this working");
  },
};

const todoRemover = {
  removeTodoItem(removedToDoItem) {
    let index = this.todoList.findIndex(
      (toDoItem) => toDoItem == removedToDoItem
    );
    this.todoList.splice(index, 1);
  },
};

Object.assign(Project.prototype, todoAdder);
Object.assign(Project.prototype, todoRemover);

class toDoItem {
  title;
  description;
  dueDate;
  priority;
  note;
  checkList;
  constructor(title) {
    this.title = title;
  }
}

const tittleChanger = {
  change(title) {
    console.log(true);
  },
};

const projectList = new ProjectList();

console.log(projectList);

const project1 = new Project("household");
projectList.addProject(project1);

const toDoItem1 = new toDoItem("laundry");
project1.addTodoItem(toDoItem1);
console.log(project1);
