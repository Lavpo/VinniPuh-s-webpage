document.getElementById("hambtn")?.addEventListener("click", () => {
    let audio = document.getElementById("button-click");
    audio.currentTime = 0;
    audio.play();
})