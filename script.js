document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginOption = document.getElementById("loginOption");
    const signupOption = document.getElementById("signupOption");
    const closeButtons = document.getElementsByClassName("close-btn");

    menuIcon.onclick = function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    }

    loginOption.onclick = function() {
        loginForm.style.display = "flex";
        dropdownMenu.style.display = "none";
    }

    signupOption.onclick = function() {
        signupForm.style.display = "flex";
        dropdownMenu.style.display = "none";
    }

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            loginForm.style.display = "none";
            signupForm.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == loginForm) {
            loginForm.style.display = "none";
        }
        if (event.target == signupForm) {
            signupForm.style.display = "none";
        }
    }
});