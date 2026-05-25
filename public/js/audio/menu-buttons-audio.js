document.querySelectorAll(".btn").forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        console.log("menu-buttons test");
        e.preventDefault();

        const audio = document.getElementById("button-click");
        if (!audio) return;

        audio.currentTime = 0;
        audio.play();

        const target = btn.dataset.target;
        if (!target) return;

        audio.addEventListener("ended", () => {
            window.location.href = target;
        }, { once: true });
    });
})