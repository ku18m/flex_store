import { display } from './display.js';
import { getCookie } from './cookies.js';
import { handleLoginForm } from './login.js';


// Main display handler.
function loginDisplayHandler(isUserLoggedIn) {
    console.log(isUserLoggedIn);
    if (isUserLoggedIn) {
        console.log("loggedIn");
        display("mainLayer", "loggedIn");
    } else {
        handleLoginForm();
        display("mainLayer", "login");
        console.log("Registeration always dispaly for testing");
        // display("mainLayer", "register");
        console.log(isUserLoggedIn, "Not logged in");
    }
}

// Checks if the user is logged in
function checkLogin() {
    console.log("arrived checkLogin");
    loginDisplayHandler(getCookie('loggedInUser'));
}

export { checkLogin };