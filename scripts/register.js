import * as users from './users.js';
import { notificationPlaceHolderHandler } from './notifications.js';
import { processLogin } from './login.js';
import * as validation from './validation.js';


// Handle register form submission.
function handleRegisterForm() {
    var form = document.getElementById("registerForm");
    form.elements['firstName'].addEventListener("input", validation.validateName);
    form.elements['lastName'].addEventListener("input", validation.validateName);
    form.elements['username'].addEventListener("input", validation.validateUsername);
    form.elements['email'].addEventListener("input", validation.validateEmail);
    form.elements['password'].addEventListener("input", validation.validatePassword);
    form.elements['passwordConfirm'].addEventListener("input", validation.validatePasswordConfirm);
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