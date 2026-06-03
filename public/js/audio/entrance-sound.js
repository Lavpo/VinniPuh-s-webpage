document.addEventListener("DOMContentLoaded", () => {
    var audio = document.getElementById("entrance-sound");
    if(!audio) return;
    audio.volume = 0.8;
    audio.play(); // Play the audio manually after setting the volume
  });