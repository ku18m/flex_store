/* Initialize navbar funcutionalities */
import * as secLayer from './secLayerDisplay.js';

// Navbar initialization function.
function initializeNavbar() {
    addShowHomeListener();
    addShowCategoryListener();
    addShowProfileListener();
    addShowCartListener();
}


// Assign show home event listener.
function addShowHomeListener() {
    var homeButtons = document.getElementsByClassName("showHome");
    for (var i = 0; i < homeButtons.length; i++) {
        homeButtons[i].addEventListener("click", secLayer.showHome);
    }
}


// Assign show mens wear event listener.
function addShowCategoryListener() {
    var mensWearButtons = document.getElementsByClassName("showCategory");
    for (var i = 0; i < mensWearButtons.length; i++) {
        mensWearButtons[i].addEventListener("click", secLayer.showCategory);
    }
}


// Assign show profile event listener.
function addShowProfileListener() {
    var profileButtons = document.getElementsByClassName("showProfile");
    for (var i = 0; i < profileButtons.length; i++) {
        profileButtons[i].addEventListener("click", secLayer.showProfile);
    }
}


// Assign show cart event listener.
function addShowCartListener() {
    var cartButtons = document.getElementsByClassName("showCart");
    for (var i = 0; i < cartButtons.length; i++) {
        cartButtons[i].addEventListener("click", secLayer.showCart);
    }
}


// Export the initializeNavbar function.
export { initializeNavbar };