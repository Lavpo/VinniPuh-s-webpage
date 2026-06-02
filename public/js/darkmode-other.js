let darkmode = localStorage.getItem("darkmode");

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

if(darkmode === "1"){
    document.body.classList.add("darkmode");
}
else{
    document.body.classList.add("lightmode");
}