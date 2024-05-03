// need input project
// return div section
// use factory

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
    ShortReview.appendChild(title);
    title.classList.add("Tittle");
    title.innerText = todo.title;
  });

  function buildSideTable(toDoItem, event) {
    let sideTable = document.querySelector("#sideTable");

    createSideTaleContent(sideTable, "Tittle", toDoItem.title);
    createSideTaleContent(sideTable, "Due", toDoItem.dueDate);

    // let Tittle = sideTable.querySelector("#Tittle>p");
    let Due = sideTable.querySelector("#Due>p");
    let Priority = sideTable.querySelector("#Priority>p");
    let Description = sideTable.querySelector("#Description>p");
    let Status = sideTable.querySelector("#Status>h2>input");
    let Note = sideTable.querySelector("#Note>p");
    Tittle.innerHTML = toDoItem.title;
    Due.innerHTML = toDoItem.Due;
    Priority.innerHTML = toDoItem.Priority;
    Description.innerHTML = toDoItem.Description;
    Status.innerHTML = toDoItem.Status;
    Note.innerHTML = toDoItem.Note;
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
    console.log(element);
  }
  return { Section };
}

export { createSection };
