/* Controls the display of the secLayer container */
import { getById } from './products.js';
import { display } from './display.js';
import { initializeUpdateProfile } from './editProfile.js';


// Second layer display handler.
function secLayerDisplayHandler(divToDisplay) {
    display("secLayer", divToDisplay);
}


// Show product event listener.
function showProduct(productId) {
    getById(function (product){console.log(product)}, productId);
}


// Show home event listener.
function showHome() {
    secLayerDisplayHandler("home");
}


// Show category event listener.
function showCategory(e) {
    var divName = e.target.innerText.toLowerCase().replace(" ", "").replace("'", "");
    secLayerDisplayHandler(divName);
}


// Show profile event listener.
function showProfile() {
    initializeUpdateProfile();
    secLayerDisplayHandler("profile");
}


// Show cart event listener.
function showCart() {
    secLayerDisplayHandler("cart");
}

export { showProduct, showHome, showCategory, showProfile, showCart };