// loop through project list and add value = name of the project
function customSelectProject(ProjectList) {
  let select = document.querySelector("#TodoDialog #belong");

  function removeOptions(selectElement) {
    var i,
      L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
      selectElement.remove(i);
    }
  }

  // using the function:
  removeOptions(select);

  [].forEach((element) => {});
  ProjectList.List.forEach((element) => {
    var opt = document.createElement("option");
    opt.value = element.project.title;
    opt.innerHTML = element.project.title;
    select.appendChild(opt);
  });
}
export { customSelectProject };
