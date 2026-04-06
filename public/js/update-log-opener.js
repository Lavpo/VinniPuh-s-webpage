// lt = log top
// lb = log bottom 

function LogOpener (){
    let lt = document.getElementById("log-top");
    let lb = document.getElementById("log-message");
    let ul = document.getElementById("updatelog");
    let ci = document.getElementById("imgChloe");

    if (lb && lt && ul && ci){
        if (getComputedStyle(lb).display === "block"){
            lb.style.display = "none";
            lt.style.borderRadius = "10px";
            ul.style.border = "none";
            lt.style.border = "solid 1px #741A2E";
            ci.src = "images/icons/chenrons/chevron-down-svgrepo-com.svg";
        }
        else if(getComputedStyle(lb).display === "none"){
            lb.style.display = "block";
            lt.style.borderRadius = "10px 10px 0 0";
            ul.style.border = "solid 1px #741A2E";
            lt.style.border = "none";
            ci.src = "images/icons/chenrons/chevron-up-svgrepo-com.svg";
        }
    }
}