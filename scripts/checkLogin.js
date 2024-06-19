import { display } from './display.js';
import { getCookie } from './cookies.js';
import { handleLoginForm } from './login.js';
import * as user from './user.js';
import { initializeHome } from './home.js';
import { initializeNavbar } from './navbar.js';


// Main display handler.
function loginDisplayHandler(isUserLoggedIn) {
    if (isUserLoggedIn) {
        handleLoggedIn();
    } else {
        handleNotLoggedIn();
    }
    initializeNavbar();
    initializeHome();
    display("mainLayer", "loggedIn");
}

// Checks if the user is logged in
function checkLogin() {
    loginDisplayHandler(getCookie('loggedInUser'));
}

// Handle not logged in state.
function handleNotLoggedIn() {
    document.getElementById("resNotLoggedInButton").addEventListener("click", showLogin);
    document.getElementById("notLoggedInButton").addEventListener("click", showLogin);
}


// Handle logged in state.
function handleLoggedIn() {
    var loggedInUser = user.getCurrentUser();

    // Handle the logged in user in responsive mini navbar.
    document.getElementById("resloggedInUser").innerHTML = loggedInUser.firstName;
    document.getElementById("resLogoutButton").addEventListener("click", logOutListener);
    document.getElementById("resNotLoggedInButton").style.display = "none";
    document.getElementById("resLoggedInButton").style.display = "block";

    // Handle the logged in user in main navbar.
    document.getElementById("loggedInUser").innerHTML = loggedInUser.firstName;
    document.getElementById("logoutButton").addEventListener("click", logOutListener);
    document.getElementById("notLoggedInButton").style.display = "none";
    document.getElementById("loggedInButton").style.display = "block";
}


// Show login event listener.
function showLogin(e) {
    handleLoginForm();
    display("mainLayer", "login");
}


// Logout event listener.
function logOutListener(e) {
    user.logout();
    location.reload();
}

export { checkLogin };