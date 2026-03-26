const menu = document.querySelector(".Menu");

document.getElementById("hambtn")?.addEventListener("click", () => {

    console.log("menu = " + menu);
    console.log("hambtn = " + document.getElementById("hambtn"));

    if (!menu) return;
    
    menu.classList.toggle("active");
});