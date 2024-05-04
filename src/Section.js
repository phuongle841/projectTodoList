// need input project
// return div section
// use factory

import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { makeId } from "./randomString";

function createSection(project) {
  let Section = document.createElement("div");
  Section.classList.add("Section");

  let h2 = document.createElement("h2");
  h2.innerText = project.title;

  let ShortReview = document.createElement("div");
  ShortReview.classList.add("ShortReview");

  Section.appendChild(h2);
  Section.appendChild(ShortReview);

  project.todoList.forEach((todo) => {
    let title = document.createElement("div");
    title.addEventListener("click", buildSideTable.bind(null, todo), false);
    title.classList.add("Tittle");
    title.innerText = todo.title;

    ShortReview.appendChild(title);
  });
  return { Section };
}

function buildSideTable(toDoItem, event) {
  let sideTable = document.querySelector("#sideTable");
  sideTable.innerHTML = "";
  for (const key in toDoItem) {
    if (Object.hasOwnProperty.call(toDoItem, key)) {
      const element = toDoItem[key];
      createSideTaleContent(sideTable, capitalizeFirstLetter(key), element);
    }
  }
}

function createSideTaleContent(parentNode, name, inner) {
  let element = document.createElement("div");
  let title = document.createElement("h2");
  let content = document.createElement("p");
  element.appendChild(title);
  element.appendChild(content);
  parentNode.appendChild(element);
  element.classList.add(`#${name}`);
  title.innerHTML = name;
  content.innerHTML = inner;
}
function createSideTaleContentCheckBox(parentNode, name, inner) {
  let element = document.createElement("div");
  let title = document.createElement("h2");
  let content = document.createElement("input");
}

Object.assign(createSection.prototype, buildSideTable);
Object.assign(createSection.prototype, createSideTaleContent);

export { createSection };
