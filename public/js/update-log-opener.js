// lt = log top
// lb = log bottom 

function LogOpener (){
    let lt = document.getElementById("log-top");
    let lb = document.getElementById("log-message");

    if (lb && lt){
        if (getComputedStyle(lb).display === "block" && getComputedStyle(lt).borderRadius === "20%"){
            lb.style.display = "none";
            lt.style.borderRadius = "0px";
        }
        else if(getComputedStyle(lb).display === "none" && getComputedStyle(lt).borderRadius === "0px"){
            lb.style.display = "block";
            lt.style.borderRadius = "20%"
        }
    }
}