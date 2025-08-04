function formvalidation(){
    var email=document.getElementById("email").value.trim();
    var password=document.getElementById("password").value.trim();
    console.log(email);
    console.log(password);
    if(email.length==0){
        alert("please enter your email");

    }
    else if(password.length==0){
        alert("please enter your password");

    }
    document.getElementById("email").value="";
    document.getElementById("password").value="";
}


function register(){
    document.getElementById("login").value="Register";
    document.getElementById("heading").textContent="Register";
    document.getElementById("message").innerHTML = "Already have an account? <a href='login.html'>Login</a>";
}