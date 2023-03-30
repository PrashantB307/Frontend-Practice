let x=document.getElementById("mytext1");
x.onkeypress=(e) => {
    alert("Char code is "+ e.charCode);
    alert("Key code is "+ e.keyCode);
    alert("Key is "+ e.key);
};

let y=document.getElementById("mytext2");
y.onkeydown = (e) => {
    alert("Char code is "+ e.charCode);
    alert("Key code is "+ e.keyCode);
    alert("Key is "+ e.key);
};
