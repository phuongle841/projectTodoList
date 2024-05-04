import { Project } from "./Project";
import { toDoItem } from "./toDoItem";
import { makeId } from "./randomString";

function createDefaultProject() {
  let project = new Project("The Odin Project");

  for (let i = 0; i < 3; i++) {
    const rndInt = Math.floor(Math.random() * 25) + 6;
    let inner = makeId(rndInt);
    const todo = new toDoItem(inner);
    todo.changeTittle(makeId(rndInt));
    todo.changeDescription(makeId(rndInt));
    todo.changeDate(makeId(rndInt));
    todo.changePriority(makeId(rndInt));
    todo.changeNote(makeId(rndInt));
    project.addTodoItem(todo);
  }
  return { project };
}

export { createDefaultProject };
