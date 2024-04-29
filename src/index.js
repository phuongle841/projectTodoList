import "./style.css";

// create new project
class ProjectList {
  listOfProject;
  constructor() {
    this.listOfProject = [];
  }
  get ProjectsList() {
    return this.listOfProject;
  }
  set ProjectsList(tittle) {
    const project = new Projects(tittle);
    this.listOfProject.push(project);
  }
}

class Projects {
  title;
  description;
  todoList;
  constructor(title) {
    this.title = title;
  }
}
const notifyBanner = {
  notify() {
    console.log(`this is: ${this.title}`);
  },
};
Object.assign(projects.prototype, notifyBanner);

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
// const toDoItem1 = new toDoItem("this is my first todo-item");
// console.log(toDoItem1.title);
