(function () {
  var key = "sadforever";
  console.log("test01");
  
  
  
  var img = document.getElementById("idMelia");
  var srcsaver = img.src;
  var ismousedown = false;
  var isclicked = false;
  let revertTimer = null;
  let count = 0;
  
  // for happy face expression
  var happy = "/images/Melia/Melia-very-happy.webp";
  
  // for >_< face expression
  var squint = "/images/Melia/Melia-squint.webp";
  
  // for sad face expression
  var sad = "/images/Melia/Melia-sad.webp";
  
  //Check if key is 0, 1 nor not present
  if (localStorage.getItem(key) === "1") {
    RevertFunc();
    img.src = sad;
    setOverlayMode(false);
  }
  else {
    img.src = srcsaver;
    setOverlayMode(true);
  }
  
  // sets overlay mode
  function setOverlayMode(mode){
    let v = mode ? "auto" : "none";
    overlay1.style.pointerEvents = v;
    overlay2.style.pointerEvents = v; 
  }
  
  
  //----------------------------
  // happy expression functions
  //----------------------------
  function RevertFunc (){
    if (revertTimer !== null){
      clearTimeout(revertTimer);
      revertTimer = null;
    }
  }
  
  document.querySelector("#overlay1").addEventListener("click", () => {
      if (ismousedown) return;
      
      RevertFunc();
      
      img.src = happy;
      
      revertTimer = setTimeout(function (){
        img.src = srcsaver;
      }, 1000);
  }); 
  
  document.querySelector("#overlay1").addEventListener("mousedown", () => {
    RevertFunc();
    ismousedown = true;
    img.src = happy;
  });
  
  document.querySelector("#overlay1").addEventListener("mouseup", () => {
    RevertFunc();
    ismousedown = false;
    img.src = srcsaver;
  });
  
  // document.querySelector("#overlay1").addEventListener("mouseleave", () => {
  //   if (!ismousedown) return;
  //   RevertFunc();
  //   ismousedown = true;
  //   img.src = happy;
  // });
  
  
  //-------------------------------------
  // squint and sad expression functions
  //-------------------------------------
  
  document.querySelector("#overlay2").addEventListener("click", () =>{
    if (isclicked) return;
    
    count++;
    console.log(count);
    isclicked = true;
    
    img.src = squint;
    
    
    revertTimer = setTimeout(() => {
    img.src = srcsaver;
    isclicked = false;
    console.log("test2");
      }, 300);
      
    if (count === 31){
      localStorage.setItem(key, "1");
      count = 0;
      RevertFunc();
      img.src = sad;
      
      setOverlayMode(false);
    }
  });

})();