document.getElementById("doodle-link")?.addEventListener("click", () => {
    let audio = document.getElementById("jingle-bells");
    audio.volume = 0.3;
    audio.play();
})