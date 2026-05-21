document.addEventListener("DOMContentLoaded", () => {

    const imgContainer = document.getElementById("doodle-link");
    if (!imgContainer) return;
    const img = imgContainer.querySelector("img");
    if (!img) return;
    const images = [
        "/images/gallery-images/2026/shiho.webp",
        "/images/gallery-images/2026/shiho.webp",
        "/images/gallery-images/2026/shiho.webp"
    ];

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
        console.log(src);

        const width = 400;
        const height = 400;
        const left = 0;
        const top = 0;

        window.open(
        `https://vinnipuh.neocities.org/pages/popup.html?img=${encodeURIComponent(src)}`,
        ``,
        `width=${width},height=${height},left=${left},top=${top}`
        );
    } ) ;

});