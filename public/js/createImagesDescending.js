function CreateDescendingImages(containerSelector, start, end, classPrefix, folderPath, fileExt){
  if (start === undefined) start = 51;
  if (end === undefined) end = 0;
  if (classPrefix == undefined) classPrefix = "img";
  if (folderPath == undefined) folderPath = "/images/gallery-images/2025/";
  if (fileExt == undefined) fileExt = "webp";
  
  var container = document.querySelector(containerSelector);
  if (!container){
    return;
  }
  for (var i = start; i >= end; i--) {
    var img = document.createElement("img");
    
    img.className = classPrefix + i;
    
    img.src = folderPath + "img"+ i + "." + fileExt;
    img.alt = "image " + i;
    img.loading = "lazy";
    
    container.appendChild(img);
  }
}