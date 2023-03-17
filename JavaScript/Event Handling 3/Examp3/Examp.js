var text=document.getElementById("mytext");
var span=document.getElementById("sp1");
text.onkeypress = (e) => {
    if(e.charCode >= 48 && e.charCode<=57){
        span.innerHTML="Correct!";
        span.style.color="limegreen";
        text.style.outline="none";
        text.style.border="solid 1px limegreen";
    }
    else{
        span.innerHTML="Only Digits Allowed!";
        span.style.color="crimson";
        text.style.outline="none";
        text.style.border="solid 1px crimson";
        return false;
    }
};