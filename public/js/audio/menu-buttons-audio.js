document.querySelectorAll(".btn").forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const audio = document.getElementById("button-click");
        if (!audio) return;

        audio.currentTime = 0;
        audio.play().catch(() => {});;

        const target = btn.dataset.target;
        if (!target) return;

        setTimeout(() => {
            window.location.href = target;
        }, 120);
    });
})