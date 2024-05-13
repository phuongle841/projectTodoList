import { Project } from "./Project";
import { toDoItem } from "./toDoItem";
import { makeId } from "./randomString";
const { startOfToday } = require("date-fns");
const { nextFriday } = require("date-fns");
const { lightFormat } = require("date-fns");

function createDefaultProject(title) {
  let project = new Project(title);

  if (title == "Fitness") {
    let todo = new toDoItem("Bicep curl");
    todo.changeDescription("Curl bicep 15 time");
    todo.changeDate(lightFormat(startOfToday(), "dd-MM-yyyy"));
    todo.changeNote("Please,workout with proper form");
    project.addTodoItem(todo);
    todo = new toDoItem("Shoulder Press");
    todo.changeDescription("Press up 15 time");
    todo.changeDate(lightFormat(startOfToday(), "dd-MM-yyyy"));
    todo.changeNote("Please,workout with proper form");
    project.addTodoItem(todo);
    todo = new toDoItem("Push up");
    todo.changeDescription("Push 15 time");
    todo.changeDate(lightFormat(startOfToday(), "dd-MM-yyyy"));
    todo.changeNote("Please,workout with proper form");
    project.addTodoItem(todo);
  }

  if (title == "Groceries") {
    let todo = new toDoItem("Buy eggs");
    todo.changeDescription("15 is enough");
    todo.changeDate(lightFormat(startOfToday(), "dd-MM-yyyy"));
    todo.changeNote("");
    project.addTodoItem(todo);
    todo = new toDoItem("Refill the water");
    todo.changeDescription("Half the the large bottle");
    todo.changeDate(lightFormat(startOfToday(), "dd-MM-yyyy"));
    todo.changeNote("");
    project.addTodoItem(todo);
    todo = new toDoItem("Complete the electricity bill");
    todo.changeDescription("");
    todo.changeDate(lightFormat(startOfToday(), "dd-MM-yyyy"));
    todo.changeNote("");
    project.addTodoItem(todo);
  }
  if (title == "Appointment") {
    let todo = new toDoItem("Software");
    todo.changeDescription("Finish Lab exercise!!");
    todo.changeDate(nextFriday(startOfToday()));
    todo.changeDate(lightFormat(nextFriday(startOfToday()), "dd-MM-yyyy"));
    todo.changeNote("");
    project.addTodoItem(todo);
    todo = new toDoItem("Network");
    todo.changeDescription("Working on project");
    todo.changeDate(lightFormat(startOfToday(), "dd-MM-yyyy"));
    todo.changeNote("");
    project.addTodoItem(todo);
    todo = new toDoItem("Chemistry");
    todo.changeDescription("");
    todo.changeDate(lightFormat(startOfToday(), "dd-MM-yyyy"));
    todo.changeNote("");
    project.addTodoItem(todo);
  }
  return { project };
}

export { createDefaultProject };
