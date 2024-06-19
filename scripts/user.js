import * as cookies from './cookies.js';
import { getUser } from './users.js';

var user = {};

// Get current logged in user.
function getCurrentUser() {
    user = getUser(cookies.getCookie("loggedInUser"));
    return user;
}

// Log out user.
function logout() {
    cookies.setCookie("loggedInUser", "", -1);
}

export { getCurrentUser, logout };