class toDoItem {
  title;
  description;
  dueDate;
  priority;
  note;
  status;
  constructor(title) {
    this.title = title;
    this.description = "";
    this.dueDate = Infinity;
    this.priority = 3;
    this.note = "";
    this.status = false;
  }
}

const tittleChanger = {
  changeTittle(newTitle) {
    this.title = newTitle;
  },
};
const descriptionChanger = {
  changeDescription(newDescription) {
    if (newDescription == "") {
      newDescription = `This todo-item don't have description`;
    }
    this.description = newDescription;
  },
};

const dueDateChanger = {
  changeDate(newDate) {
    this.dueDate = newDate;
  },
};

const priorityChanger = {
  changePriority(newPriority) {
    if (newPriority > 0 && newPriority < 3) {
      this.priority = newPriority;
    }
  },
};

const noteChanger = {
  changeNote(newNote) {
    if (newNote == "") {
      newNote = `This todo-item don't have note`;
    }
    this.note = newNote;
  },
};

const statusChanger = {
  changeStatus(status) {
    if (status == true) {
      this.status = true;
    }
    if (status == false) {
      this.status = false;
    }
  },
};

Object.assign(toDoItem.prototype, tittleChanger);
Object.assign(toDoItem.prototype, descriptionChanger);
Object.assign(toDoItem.prototype, dueDateChanger);
Object.assign(toDoItem.prototype, priorityChanger);
Object.assign(toDoItem.prototype, noteChanger);
Object.assign(toDoItem.prototype, statusChanger);

export { toDoItem };
