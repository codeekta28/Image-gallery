console.log("This is index.js file");
let opacity = 0.4;
let mainImg = document.querySelector("#current");
let imgs = document.querySelectorAll(".img");
imgs[0].style.opacity = opacity;
imgs.forEach((img)=>{
 img.addEventListener("click",(e)=>{ 
     imgs.forEach((img)=>{
         img.style.opacity=1;
     })
    //  change the src
    mainImg.src =  e.target.src;
    // add fade in class
    mainImg.classList.add("fade-in");
    setTimeout(() => {
        mainImg.classList.remove("fade-in");   
    }, 500);
    // change the opacity to var
    e.target.style.opacity = opacity;
  
 })
})
