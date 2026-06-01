document.getElementById("hambtn")?.addEventListener("click", () => {
    console.log("click sound");
    let audio = document.getElementById("button-click");
    audio.currentTime = 0;
    audio.play();
})