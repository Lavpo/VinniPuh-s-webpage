let darkmode = localStorage.getItem("darkmode");

if(darkmode === "1"){
    document.body.classList.add("darkmode");
}
else{
    document.body.classList.add("lightmode");
}