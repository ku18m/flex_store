/* Controls the display of the secLayer container */
import { getById } from './products.js';
import { display } from './display.js';
import { initializeUpdateProfile } from './editProfile.js';
import { displayProduct } from './product.js';
import { initializeCart } from './cart.js';
import { removeCart, getCart } from './cartControler.js';
import { updateCurrentUser } from './user.js';
import { initializeSlider } from './slider.js';


// Second layer display handler.
function secLayerDisplayHandler(divToDisplay) {
    display("secLayer", divToDisplay);
}


// Show product event listener.
function showProduct(productId) {
    getById(displayProduct, productId);
    secLayerDisplayHandler("product");
}


// Show home event listener.
function showHome() {
    initializeSlider();
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
    var cart = getCart();
    if (Object.keys(cart).length == 0) {
        secLayerDisplayHandler("emptyCart");
        return;
    }
    initializeCart();
    secLayerDisplayHandler("cart");
}

// Show checkout event listener.
function showCheckout() {
    removeCart();
    updateCurrentUser("cart", {});
    secLayerDisplayHandler("checkout");
}

export { showProduct, showHome, showCategory, showProfile, showCart, showCheckout };