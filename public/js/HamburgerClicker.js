const menu = document.querySelector(".Menu");
const hambtn = document.getElementById("hambtn");

hambtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});