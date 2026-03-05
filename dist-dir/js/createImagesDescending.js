console.log("test 1");

function CreateDescendingImages(containerSelector, start, end, classPrefix, folderPath, fileExt){
  if (start === undefined) start = 51;
  if (end === undefined) end = 0;
  if (classPrefix == undefined) classPrefix = "img";
  if (folderPath == undefined) folderPath = "/images/gallery-images/2025/";
  if (fileExt == undefined) fileExt = "webp";
  
  var container = document.querySelector(containerSelector);
  if (!container){
    console.error("Container not found", containerSelector);
    return;
  }
console.log("test 2");  
  for (var i = start; i >= end; i--) {
    var img = document.createElement("img");
    
    img.className = classPrefix + i;
    
    img.src = folderPath + "img"+ i + "." + fileExt;
    img.alt = "image " + i;
    img.loading = "lazy";
    console.log("test 3");
    
    container.appendChild(img);
  }
  console.log("test 4");
}