import * as cookies from './cookies.js';


// Get all users.
function getUsers() {
    var users = cookies.getCookie("users");
    if (users) {
        return JSON.parse(users);
    }
}


// Get user.
function getUser(username) {
    var users = getUsers();
    return users[username];
}


// Add new user.
function addUser(user) {
    if (userExists(user.username) || emailExists(user.email)) {
        return;
    }
    var users = getUsers();
    if (!users) {
        users = {};
    }
    users[user.username] = user;
    cookies.setCookie("users", JSON.stringify(users), 30);
}


// Check if email exists.
function emailExists(email) {
    var users = getUsers();
    if (!users) {
        return false;
    }
    for (var user in users) {
        if (users[user].email == email) {
            return true;
        }
    }
    return false;
}


// Check if user exists.
function userExists(username) {
    var users = getUsers();
    if (!users) {
        return false;
    }
    return users.hasOwnProperty(username);
}


// Delete user.
function deleteUser(username) {
    var users = getUsers();
    delete users[username];
    cookies.setCookie("users", JSON.stringify(users), 30);
}


// Update user.
function updateUser(user) {
    var users = getUsers();
    users[user.username] = user;
    cookies.setCookie("users", JSON.stringify(users), 30);
}


export { getUsers, getUser, addUser, userExists, emailExists, deleteUser, updateUser };
