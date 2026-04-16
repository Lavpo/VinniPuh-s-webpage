// lt = log top
// lb = log bottom 

function LogOpener (){
    let lt = document.getElementById("log-top");
    let lb = document.getElementById("log-message");
    let ul = document.getElementById("updatelog");
    let ci = document.getElementById("chevron-up-down");

    if (lb && lt && ul && ci){
        if (getComputedStyle(lb).height === "224px"){
            lb.style.maxHeight = "0px";
            lb.style.padding = "0";
            lb.style.border = "0";
            lt.style.borderRadius = "10px";
            ul.style.border = "none";
            lt.style.border = "solid 1px #741A2E";
            ci.src = "images/icons/chevrons/chevron-down-svgrepo-com.svg";

            console.log("1width: " + lt.style.width + ", offsetwidth: " + lt.offsetWidth + ", boundingClient: " + lt.getBoundingClientRect().width);
        }
        else if(getComputedStyle(lb).height === "0px"){
            lb.style.maxHeight = "224px";
            lb.style.padding = "1.25rem 0.939rem 0 0.626rem";
            lb.style.border = "1px solid #f5d5d5";
            lb.style.borderTop = "solid 1px #741A2E";
            lt.style.borderRadius = "10px 10px 0 0";
            ul.style.border = "solid 1px #741A2E";
            lt.style.border = "none";
            ci.src = "images/icons/chevrons/chevron-up-svgrepo-com.svg";

            console.log("2width: " + lt.style.width + ", offsetwidth: " + lt.offsetWidth + ", boundingClient: " + lt.getBoundingClientRect().width);
        }
    }
}