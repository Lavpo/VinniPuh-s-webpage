(() => {
  var key = "sadforever";
  
  var img = document.getElementById("idMelia");
  if (!img) return;

  var srcsaver = img.src;
  var ismousedown = false;
  var isclicked = false;
  let revertTimer = null;
  let isexpressing = false;
  let count = 0;
  let wasinov2;
  let wasinov1;

  //surprised expression
  var sur = "/images/Melia/Melia-surprised.webp";
  
  // for happy face expressions
  var smile = "/images/Melia/Melia-smile.webp";
  var happy = "/images/Melia/Melia-happy.webp";
  var veryhappy = "/images/Melia/Melia-very-happy.webp";
  
  // for >_< face expression
  var squint = "/images/Melia/Melia-squint.webp";
  
  // for sad face expressions
  var sad = "/images/Melia/Melia-sad.webp";
  var verysad ="/images/Melia/Melia-very-sad.webp";
  var veryverysad ="/images/Melia/Melia-very-very-sad.webp";
  
  //Check if key is 0, 1 nor not present
  if (localStorage.getItem(key) === "1") {
    RevertFunc();
    img.src = veryverysad;
  
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


  //-------------------------------------
  //             happy face 
  //-------------------------------------

  document.querySelector("#overlay1").addEventListener("click", () => {

    if (ismousedown) return;

    wasinov1 = true;

    if (wasinov2){
      count = 0;
      wasinov2 = false;
      isexpressing = false;
    } 

    img.src = veryhappy;
    
    revertTimer = setTimeout(() => {
      if (count >= 0 && count < 10){
        img.src = sur;
        srcsaver = smile;
        // restoreHoverExpression();
      }
      else if (count >= 10){
        isexpressing = true;
        srcsaver = happy;
        img.src = happy;
      }
      isclicked = false;
    }, 1000);
    
    count++;
    isclicked = true;
    
  }); 
  
  document.querySelector("#overlay1").addEventListener("mousedown", () => {

    RevertFunc();
    let audio = document.getElementById("bubble-pop");

    audio.volume = 0.1;
    audio.play();

    ismousedown = true;

    img.src = veryhappy;
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

    wasinov2 = true;

    if(wasinov1) {
      count = 0;
      wasinov1 = false;
      isexpressing = false;
    }
    let audio = document.getElementById("retro-hurt");

    audio.volume = 0.05;
    audio.play();
    
    img.src = squint;
    
    
    revertTimer = setTimeout(() => {
      
      if (count >= 0 && count < 10){
        img.src = sur;
        srcsaver = smile;
        // restoreHoverExpression();
      }
      else if (count >= 10 && count < 20){
        img.src = sad;
        srcsaver = sad;
        isexpressing = true;
      }
      else if (count >= 20 && count < 30){
        srcsaver = verysad;
        img.src = verysad;
      }
      isclicked = false;
    }, 500);

    count++;
    isclicked = true;
      
    if (count === 30){
      localStorage.setItem(key, "1");
      count = 0;
      RevertFunc();
      img.src = veryverysad;
      srcsaver = veryverysad;
      
      setOverlayMode(false);
    }
  });

  //--------------------------------------------------------------------------
  //    surprised expression while hovering main image nor it's overlays
  //--------------------------------------------------------------------------

  const hovered = new Set();
  const abssmile = new URL(smile, document.baseURI).href;
  const abssur = new URL(sur, document.baseURI).href;

  document.querySelectorAll(".ov").forEach(e =>{
    e.addEventListener("mouseenter", () => {
      hovered.add(e);
      if (!isexpressing && localStorage.getItem(key) === null && img?.src === abssmile){
        img.src = sur;
      }
    })
    
    e.addEventListener("mouseleave", () => {
      hovered.delete(e);

      if (!isexpressing && localStorage.getItem(key) === null && hovered.size === 0){
        if (img.src === new URL(sur, document.baseURI).href) {
          img.src = srcsaver;
        }
      }
    })
  })
  // function restoreHoverExpression() {
  // if (
  //   hovered.size > 0 &&
  //   !isexpressing &&
  //   localStorage.getItem(key) === null &&
  //   srcsaver === abssmile
  // ) {
  //   img.src = sur;
  // }
})();