import * as users from './users.js';
import { notificationPlaceHolderHandler } from './notifications.js';
import { processLogin } from './login.js';


function handleRegisterForm() {
    var form = document.getElementById("registerForm");
    form.elements['firstName'].addEventListener("input", validateName);
    form.elements['lastName'].addEventListener("input", validateName);
    form.elements['username'].addEventListener("input", validateUsername);
    form.elements['email'].addEventListener("input", validateEmail);
    form.elements['password'].addEventListener("input", validatePassword);
    form.elements['passwordConfirm'].addEventListener("input", validatePasswordConfirm);
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = new FormData(e.target);
        var user = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            username: data.get("username"),
            email: data.get("email"),
            password: data.get("password"),
            cart: []
        };
        validateRegister(user);
    });
}


// Validate name.
function validateName(e) {
    var name = e.target.value;
    var nameRegex = /^[a-zA-Z]{3,}$/;
    if (!nameRegex.test(name)) {
        e.target.style.borderColor = "red";
        e.target.setCustomValidity('Name Must be 3 characters long');
        notificationPlaceHolderHandler("Name Must be 3 characters long", "failed")
    } else {
        e.target.style.borderColor = "green";
        e.target.setCustomValidity('');
        notificationPlaceHolderHandler("", "success");
    }
}


// Validate username.
function validateUsername(e) {
    var username = e.target.value;
    var usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    if (!usernameRegex.test(username)) {
        e.target.style.borderColor = "red";
        e.target.setCustomValidity('Username must be 3 characters long');
        notificationPlaceHolderHandler("Username must be 3 characters long", "failed")
    } else {
        e.target.style.borderColor = "green";
        e.target.setCustomValidity('');
        notificationPlaceHolderHandler("", "success");
    }
}


// Validate email.
function validateEmail(e) {
    var email = e.target.value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        e.target.style.borderColor = "red";
        e.target.setCustomValidity('Invalid Email');
        notificationPlaceHolderHandler("Invalid Email", "failed")
    } else {
        e.target.style.borderColor = "green";
        e.target.setCustomValidity('');
        notificationPlaceHolderHandler("", "success");
    }
}


// Validate password.
function validatePassword(e) {
    var password = e.target.value;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (!passwordRegex.test(password)) {
        e.target.style.borderColor = "red";
        e.target.setCustomValidity('Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
        notificationPlaceHolderHandler("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters", "failed")
    } else {
        e.target.style.borderColor = "green";
        e.target.setCustomValidity('');
        notificationPlaceHolderHandler("", "success");
    }
}


// Validate password confirm.
function validatePasswordConfirm(e) {
    var password = document.getElementById("registrationPassword").value;
    var passwordConfirm = e.target.value;
    if (password != passwordConfirm) {
        e.target.style.borderColor = "red";
        e.target.setCustomValidity('Password does not match');
        notificationPlaceHolderHandler("Password does not match", "failed")
    } else {
        e.target.style.borderColor = "green";
        e.target.setCustomValidity('');
        notificationPlaceHolderHandler("", "success");
    }
}


// Validate register.
function validateRegister(user) {
    if (users.userExists(user.username)) {
        notificationPlaceHolderHandler("Username already taken", "failed");
        return;
    }
    if (users.emailExists(user.email)) {
        notificationPlaceHolderHandler("Email already exists", "failed");
        return;
    }
    users.addUser(user);
    processLogin(user);
}


export { handleRegisterForm };