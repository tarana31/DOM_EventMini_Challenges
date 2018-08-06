// #Problem : 4
function checks(){
    var uname= document.getElementById("username").value;
    var pwwd= document.getElementById("password").value;
    var a=uname.length;
    
if (pwwd== 12345678 && a<14) {
    document.getElementById("heading").innerHTML = "Congrats on knowing your username and password!";
}else {
    alert("Incorrect Username or Password")
}
}