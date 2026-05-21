document.querySelector(".log-btn")?.addEventListener("click", LogOpener);

function LogOpener (){
    // rewritten the whole script in that way, so the css will handle all the style
    // let lt = document.getElementById("log-top");
    let lb = document.querySelector(".log-message");
    let lt = document.querySelector(".log-top");
    let ci = document.querySelector(".log-btn");

    if (!lb) return;
    if (!lt) return;
    if (!ci) return;

    lb.classList.toggle("opened");
    lt.classList.toggle("opened");
    ci.classList.toggle("opened");
}