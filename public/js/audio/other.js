console.log("something");

document.querySelectorAll("#sound-capturer").forEach((element) => {
    element.addEventListener("click", () => {
        console.log("something1");
        let audio = document.getElementById("pop");

        audio.volume = 0.2;
        audio.play();
    });
});