document.querySelectorAll(".btn").forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const audio = document.getElementById("button-click");
        if(!audio){
            window.location.href = btn.href; 
            return;
        }
        audio.currentTime = 0;
        audio.play();

        setTimeout(() => {
            window.location.href = btn.href;
        }, 120);
    });
})