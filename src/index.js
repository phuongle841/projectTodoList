import "./style.css";
import { displayProjects } from "./displayProjectList";
displayProjects();

const showButton = document.getElementById("addProject");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");

console.log(showButton);
console.log(favDialog);

showButton.addEventListener("click", () => {
  favDialog.showModal();
});
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  favDialog.close();
});
