(() =>{
    const audio = document.getElementById("button-click");
    document.querySelectorAll(".btn").forEach((btn) =>{
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if(!audio){
                window.location.href = btn.href; 
                return;
            }
            audio.currentTime = 0;
            audio.volume = 1;
            audio.play();

            setTimeout(() => {
                window.location.href = btn.href;
            }, 200);
        });
    })
})();