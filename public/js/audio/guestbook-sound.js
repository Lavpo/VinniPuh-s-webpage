document.getElementById("gbtn").addEventListener("click", function(e) {
    console.log("gtest -1");
    e.preventDefault();
    console.log("gtest 0");
    let audio = document.getElementById("guestbook-sound");
    console.log("gtest 1");
    const btn = document.getElementById("gbtn");
    console.log("gtest 2");
    const target = btn.dataset.target;

    console.log("gtest 3");

    if(!audio && target) return;
    
    audio.volume = 0.2;
    audio.play();

    audio.addEventListener("ended", () =>{
        window.location.href = target;
    });

})