import { display } from "./display.js";
import * as users from "./users.js";
import { checkLogin } from "./checkLogin.js";
import { notificationPlaceHolderHandler } from "./notifications.js";
import { setCookie } from "./cookies.js";
import { handleRegisterForm } from "./register.js";


// Handle login form submission.
function handleLoginForm() {
    var form = document.getElementById("loginForm");
    var showRegisterButoon = document.getElementById("showRegister");
    showRegisterButoon.addEventListener("click", function (e) {
        handleRegisterForm();
        display("mainLayer", "register");
    });
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = new FormData(e.target);
        var username = data.get("username");
        var password = data.get("password");
        var user = {
            username: username,
            password: password
        };
        validateLogin(user);
    });
}

// Validate login.
function validateLogin(user) {
    if (!users.userExists(user.username)) {
        notificationPlaceHolderHandler("User not found", "failed");
        return;
    }
    var userData = users.getUser(user.username);
    if (userData.password != user.password) {
        notificationPlaceHolderHandler("Invalid password", "failed");
        return;
    }
    processLogin(user);
}


// Process login.
function processLogin(user) {
    setCookie("loggedInUser", user.username, 3);
    checkLogin();
}


export { handleLoginForm, processLogin }