document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;

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