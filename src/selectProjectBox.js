// loop through project list and add value = name of the project
function customSelectProject(ProjectList) {
  let select = document.querySelector("#TodoDialog #belong");
  ProjectList.List.forEach((element) => {
    var opt = document.createElement("option");
    opt.value = element.project.title;
    opt.innerHTML = element.project.title;
    select.appendChild(opt);
  });
}
export { customSelectProject };
