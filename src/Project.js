class Project {
  title;
  description;
  todoList;
  constructor(title) {
    this.title = title;
    this.description = "";
    this.todoList = [];
  }
  get todoList() {
    return this.todoList;
  }
  get title() {
    return this.title;
  }
}

const todoAdder = {
  addTodoItem(toDoItem) {
    this.todoList.push(toDoItem);
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

const projectTitleChanger = {
  changeTittle(newTitle) {
    this.title = newTitle;
  },
};

const projectDescriptionChanger = {
  changeDescription(newDescription) {
    this.description = newDescription;
  },
};

Object.assign(Project.prototype, todoAdder);
Object.assign(Project.prototype, todoRemover);
Object.assign(Project.prototype, projectTitleChanger);
Object.assign(Project.prototype, projectDescriptionChanger);

export { Project };
