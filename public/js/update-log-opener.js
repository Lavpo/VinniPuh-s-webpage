// lt = log top
// lb = log bottom 

function LogOpener (){
    let lt = document.getElementById("log-top");
    let lb = document.getElementById("log-message");

    if (lb && lt){
        if (getComputedStyle(lb).display === "block"){
            lb.style.display = "none";
            lt.style.borderRadius = "10px";
        }
        else if(getComputedStyle(lb).display === "none"){
            lb.style.display = "block";
            lt.style.borderBottomLeftRadius = "0px";
            lt.style.borderBottomRightRadius = "0px";
            lt.style.borderTopLeftRadius = "10px";
            lt.style.borderTopRightRadius = "10px";
        }
    }
}