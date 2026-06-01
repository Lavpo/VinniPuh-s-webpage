let darkmode = localStorage.getItem("darkmode");

if(darkmode === "1"){
    document.body.classList.add("darkmode");
}
else{
    document.body.classList.add("lightmode");
}

bulbbtn?.addEventListener("click", () =>{
    darkmode = localStorage.getItem("darkmode");
    if (darkmode === "1"){
        document.body.classList.remove("darkmode");
        document.body.classList.add("lightmode");
        localStorage.setItem("darkmode", "0");
    }
    else {
        document.body.classList.add("darkmode");
        document.body.classList.remove("lightmode");
        localStorage.setItem("darkmode", "1");
    }
})