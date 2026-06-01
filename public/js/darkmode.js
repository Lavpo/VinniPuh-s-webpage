const bulbbtn = document.getElementById("darkmode-switcher");
let bulb = document.querySelector(".bulb");
let switchaudio = document.getElementById("light-switch");
switchaudio.volume = 0.1;

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

if(darkmode === "1"){
    document.body.classList.add("darkmode");
    bulb.src = "images/other/bulb-dark.png";
}
else{
    document.body.classList.add("lightmode");
    bulb.src = "images/other/bulb.png";
}


bulbbtn?.addEventListener("click", () =>{
    darkmode = localStorage.getItem("darkmode");
    if (darkmode === "1"){
        document.body.classList.remove("darkmode");
        document.body.classList.add("lightmode");
        localStorage.setItem("darkmode", "0");
        bulb.src = "gifs/bulb-light.gif";
        switchaudio.currentTime = 0;
        switchaudio.play();
    }
    else{
        document.body.classList.remove("lightmode");
        document.body.classList.add("darkmode");
        localStorage.setItem("darkmode", "1");
        bulb.src = "gifs/bulb-dark.gif";
        switchaudio.currentTime = 0;
        switchaudio.play();
    }
})