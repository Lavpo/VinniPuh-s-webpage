document.addEventListener("DOMContentLoaded", () => {

    const imgContainer = document.getElementById("doodle-link");
    if (!imgContainer) return;
    const img = imgContainer.querySelector(".doodle");
    if (!img) return;
    let images = [];
    for(let i = 0; i <= 51; i++){
        images.push(`/images/gallery-images/2025/img${i}.webp`);
    }
    for(let i = 52; i <= 56; i++){
        images.push(`/images/gallery-images/2026/img${i}.webp`);
    }
    
    const today = new Date().toDateString();
    const savedDay = localStorage.getItem("imageDay");
    let savedImage = localStorage.getItem("imageSrc");

    if (savedDay === today && savedImage) {
        if (savedDay === today && savedImage && img) {
            img.src = savedImage;
        }
    } else {
        const randomIndex = Math.floor(Math.random() * images.length);
        const newImage = images[randomIndex];

        img.src = newImage;

        localStorage.setItem("imageDay", today);
        localStorage.setItem("imageSrc", newImage);
    }

    imgContainer.addEventListener("click", (event) =>{

        event.preventDefault();

        const src = img.src;

        const width = 400;
        const height = 450;
        const left = (window.innerWidth - width) - 200;
        const top = window.innerHeight / 4;
        
        if (screen.availWidth >= 1050){

            window.open(
            `/pages/popup.html?img=${encodeURIComponent(src)}`,
            ``,
            `width=${width},height=${height},left=${left},top=${top}`
            );
        }
        else {
            window.location.href =
            `/pages/popup-mobile.html?img=${encodeURIComponent(src)}`;
        }
    } ) ;

});