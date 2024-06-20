/* Handle the profile div */
import * as validation from './validation.js';
import { getCurrentUser } from './user.js';
import { notificationPlaceHolderHandler } from './notifications.js';
import { userExists, emailExists } from './users.js';
import { updateCurrentUser } from './user.js';
import { processLogin } from './login.js';


// Initialize update profile tab.
function initializeUpdateProfile() {
    var currentUserName = getCurrentUser().firstName;
    var profileUpdateNameSpan = document.getElementById('profileUpdateName');
    profileUpdateNameSpan.innerHTML = currentUserName;
    handleUpdateProfileForm();
}


// Handle register form submission.
function handleUpdateProfileForm() {
    var form = document.getElementById('profileUpdateForm');
    var updateProperty = document.getElementById('profileUpdateProperty');
    var updateValue = document.getElementById('profileUpdateValue');
    var userPassword = document.getElementById('profileUpdatePassword');
    updateProperty.addEventListener('change', function () {
        assignEventListener(updateProperty, updateValue);
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateUpdateProfile(userPassword.value, updateProperty.value, updateValue.value);
    });
}


// Assign event listener to update profile value.
function assignEventListener(updateProperty, updateValue) {
    updateValue.value = '';
    updateValue.type = 'text';
    updateValue.removeEventListener('input', validation.validateName);
    updateValue.removeEventListener('input', validation.validateUsername);
    updateValue.removeEventListener('input', validation.validateEmail);
    updateValue.removeEventListener('input', validation.validatePassword);
    switch (updateProperty.value) {
        case 'firstName':
            updateValue.addEventListener('input', validation.validateName);
            updateValue.placeholder = 'Enter your new first name';
            break;
        case 'lastName':
            updateValue.addEventListener('input', validation.validateName);
            updateValue.placeholder = 'Enter your new last name';
            break;
        case 'username':
            updateValue.addEventListener('input', validation.validateUsername);
            updateValue.placeholder = 'Enter your new username';
            break;
        case 'email':
            updateValue.addEventListener('input', validation.validateEmail);
            updateValue.placeholder = 'Enter your new email';
            updateValue.type = 'email';
            break;
        case 'password':
            updateValue.addEventListener('input', validation.validatePassword);
            updateValue.placeholder = 'Enter your new password';
            updateValue.type = 'password';
            break;
    }
}


// Validate update profile.
function validateUpdateProfile(userPassword, updateProperty, updateValue) {
    var user = getCurrentUser();
    if (user.password != userPassword) {
        notificationPlaceHolderHandler('Wrong password', 'failed');
        return;
    }
    if (updateProperty == 'username' && user.username == updateValue) {
        notificationPlaceHolderHandler('New username must be different from the old one', 'failed');
        return;
    }
    if (updateProperty == 'email' && user.email == updateValue) {
        notificationPlaceHolderHandler('New email must be different from the old one', 'failed');
        return;
    }
    if (updateProperty == 'username' && userExists(updateValue)) {
        notificationPlaceHolderHandler('Username already taken', 'failed');
        return;
    }
    if (updateProperty == 'email' && emailExists(updateValue)) {
        notificationPlaceHolderHandler('Email already exists', 'failed');
        return;
    }
    user = updateCurrentUser(updateProperty, updateValue);
    processLogin(user);
}


// export Update Profile initialization function.
export { initializeUpdateProfile };