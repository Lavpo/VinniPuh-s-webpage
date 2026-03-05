(function () {
  const STORAGE_KEY = "warning_overlay_accepted_v1";
  const overlay = document.getElementById("warningOverlay");
  const enterBtn = document.getElementById("warningEnter");

  if (!overlay || !enterBtn) return;

  // 1. Check if they've already seen it this session
  if (sessionStorage.getItem(STORAGE_KEY) === "1") {
    overlay.hidden = true;
    overlay.style.display = "none"; // Backup for older browsers
  } else {
    // 2. If NOT accepted, make sure it is visible
    overlay.hidden = false;
    overlay.style.display = "flex"; 
  }

  // 3. Handle the click inside the same scope
  enterBtn.addEventListener("click", () => {
    overlay.hidden = true;
    overlay.style.display = "none";
    sessionStorage.setItem(STORAGE_KEY, "1");
    console.log("Overlay accepted and hidden.");
  });
})();
