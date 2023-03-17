const myform = document.loginfo;
const username=myform.txtuser;
const password=myform.txtpass;
const btn=myform.btnlogin;

btn.addEventListener("click",() => {
    let uname=username.value;
    let pwd=password.value;
    let massage=`username: ${uname}\n password: ${pwd}`;
    alert(massage);
});