function validateLogin(){

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    let error =
    document.getElementById("error");

    error.innerHTML = "";

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){

        error.innerHTML =
        "Email is required";

        return false;
    }

    if(!emailPattern.test(email)){

        error.innerHTML =
        "Enter a valid email address";

        return false;
    }

    if(password === ""){

        error.innerHTML =
        "Password is required";

        return false;
    }

    if(password.length < 6){

        error.innerHTML =
        "Password must contain at least 6 characters";

        return false;
    }

    window.location.href =
    "home.html";

    return false;
}