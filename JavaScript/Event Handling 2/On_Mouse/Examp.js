let x=document.getElementById("mydiv");
x.onmouseover = () => {
    x.style.color="red";
    x.style.fontWeight="bold";
    x.style.fontStyle="italic";
}
x.onmouseout = () => {
    x.style.color="black";
    x.style.fontWeight="normal";
    x.style.fontStyle="normal";
}