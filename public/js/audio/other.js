document.querySelectorAll("#sound-capturer").forEach((element) => {
    element.addEventListener("click", () => {
        let audio = document.getElementById("pop");

        audio.volume = 0.4;
        audio.play();
    });
});