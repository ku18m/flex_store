import * as cookies from './cookies.js';
import { getUser, updateUser, deleteUser } from './users.js';
import { removeCart } from './cartControler.js';


// Get current logged in user.
function getCurrentUser() {
    var user = getUser(cookies.getCookie("loggedInUser"));
    return user;
}


// Update user.
function updateCurrentUser(key, value) {
    var user = getCurrentUser();
    if (key == 'username') {
        deleteUser(user.username);
    }
    user[key] = value;
    updateUser(user);
    return user;
}


// Log out user.
function logout() {
    removeCart();
    cookies.setCookie("loggedInUser", "", -1);
}

export { getCurrentUser, updateCurrentUser, logout };