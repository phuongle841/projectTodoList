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
    ShortReview.appendChild(title);
    title.classList.add("Tittle");
    title.innerText = todo.title;
  });
  return { Section };
}

export { createSection };
