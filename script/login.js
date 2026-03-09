// console.log("ok");

document.getElementById("Sign-In-btn").addEventListener("click", function () {
    // console.log("Sign-In-btn");

    const UsernameInput = document.getElementById("Enter-Username");
    const Username = UsernameInput.value;

    // console.log(Username);

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    // console.log(password);

    if(Username == "admin" && password == "admin123"){
        alert("login Success");

        window.location.assign("home.html")
    }
    else{
        alert("login Failed");
        return;
    }
})