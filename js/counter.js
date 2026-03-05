const increase = document.getElementById("increase");
const num = document.getElementById("numeration");

let count = 0;

increase.onclick = function(){
  count++;
  num.textContent = count;
}

