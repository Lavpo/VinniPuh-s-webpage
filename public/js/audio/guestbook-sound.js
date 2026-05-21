document.getElementById("gbtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    let audio = document.getElementById("guestbook-sound");
    const btn = document.getElementById("gbtn");
    const target = btn.dataset.target;

    if(!audio && target) return;
    
    audio.volume = 0.2;
    audio.play();

    const width = 400;
    const height = 400;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 4;

    window.open(
    `https://vinnipuh.atabook.org`,
    ``,
    `width=${width},height=${height},left=${left},top=${top}`
    );

})