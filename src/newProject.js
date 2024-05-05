function addProject() {
  // add project temporary
  const showButton = document.getElementById("addProject");
  const projectDialog = document.getElementById("ProjectDialog");
  const confirmBtn = projectDialog.querySelector("#submitProject");

  showButton.addEventListener("click", () => {
    projectDialog.showModal();
  });
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // check the valid of the box
    projectDialog.close();
  });

  projectDialog.addEventListener("click", function (event) {
    var rect = projectDialog.getBoundingClientRect();
    var isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      projectDialog.close();
    }
  });
}
export { addProject };
