/* Validation Module */
import { notificationPlaceHolderHandler } from "./notifications.js";


// Validate name.
function validateName(e) {
    var name = e.target.value;
    var nameRegex = /^[a-zA-Z]{3,}$/;
    if (!nameRegex.test(name)) {
        e.target.style.borderColor = "red";
        e.target.setCustomValidity('Name Must be 3 characters long');
        notificationPlaceHolderHandler("Name Must be 3 characters long", "alert")
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
        notificationPlaceHolderHandler("Username must be 3 characters long", "alert")
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
        notificationPlaceHolderHandler("Invalid Email", "alert")
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
        notificationPlaceHolderHandler("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters", "alert");
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


// export Validate functions
export { validateName, validateUsername, validateEmail, validatePassword, validatePasswordConfirm };