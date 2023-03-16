const heading=document.querySelector("h3");
heading.addEventListener("dblclick",() =>{
    heading.style.fontStyle="italic";
});

const img=document.querySelector("img");
img.addEventListener("mouseover",() =>{
    img.src="../../images/Photo.jpg"
});

img.addEventListener("mouseover",() =>{
    img.style.width="600px";
});