const menu = document.querySelector(".Menu");
const hambtn = document.getElementById("hambtn");

hambtn.addEventListener("click", () => {
  hambtn.classList.toggle("active");
  menu.classList.toggle("active");
});