(function () {
  var key = "sadforever";
  
  
  
  var img = document.getElementById("idMelia");
  if (!img) return;

  var srcsaver = img.src;
  var ismousedown = false;
  var isclicked = false;
  let revertTimer = null;
  let issad = false;
  let count = 0;
  let wasinov2;
  let wasinov1;

  //surprised expression
  var sur = "/images/Melia/Melia-surprised.webp";
  
  // for happy face expression
  var smile = "/images/Melia/Melia-smile.webp";
  var happy = "/images/Melia/Melia-happy.webp";
  var veryhappy = "/images/Melia/Melia-very-happy.webp";
  
  // for >_< face expression
  var squint = "/images/Melia/Melia-squint.webp";
  
  // for sad face expression
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
      if (wasinov2){
        count = 0;
        wasinov2 = false;
      } 

      wasinov1 = true;

      count++;
      isclicked = true;
      
      img.src = veryhappy;
      
      revertTimer = setTimeout(() => {
        if (count > 0 && count <= 10){
          img.src = srcsaver;
        }
        else if (count > 10){
          img.src = happy;
        }
        isclicked = false;
      }, 1000);
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
    }
    let audio = document.getElementById("retro-hurt");

    audio.volume = 0.05;
    audio.play();
    
    count++;
    isclicked = true;
    
    img.src = squint;
    
    
    revertTimer = setTimeout(() => {
      
      if (count > 0 && count < 10){
        img.src = srcsaver;
      }
      else if (count >= 10 && count < 20){
        img.src = sad;
        issad = true;
      }
      else if (count >= 20 && count < 30){
        img.src = verysad;
      }
      isclicked = false;
    }, 500);
      
    if (count === 30){
      localStorage.setItem(key, "1");
      count = 0;
      RevertFunc();
      img.src = veryverysad;
      
      setOverlayMode(false);
    }
  });

  //--------------------------------------------------------------------------
  //    surprised expression while hovering main image nor it's overlays
  //--------------------------------------------------------------------------

  document.querySelectorAll("#overlay1, #overlay2, .Melia").forEach(e =>{
    e.addEventListener("mouseenter", () => {
      if (!issad && localStorage.getItem(key) === null){
        img.src = sur;
      }
    })
    e.addEventListener("mouseleave", () => {
      if (!issad && localStorage.getItem(key) === null){
        img.src = smile;
      }
    })
  })

})();