/* Handles the cart */
import { getById } from "./products.js";
import { getCookie, setCookie } from "./cookies.js";
import { updateCurrentUser, getCurrentUser } from "./user.js";
import { notificationPlaceHolderHandler } from "./notifications.js";


// Get the cart.
function getCart() {
    var cart = getCookie("cart");
    if (cart == null) {
        cart = {};
    } else {
        cart = JSON.parse(cart);
    }
    return cart;
}


// Save the cart.
function saveCart(cart) {
    setCookie("cart", JSON.stringify(cart), 30);
    updateCurrentUser("cart", cart);
}


// Add a product to the cart.
function addProductToCart(productId) {
    if (!getCurrentUser()) {
        notificationPlaceHolderHandler("Please login to add products to the cart.", "failed");
        return;
    }
    var cart = getCart();
    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }
    getById(addToTotalPrice, productId);
    saveCart(cart);
}


// Remove a product from the cart.
function removeProductFromCart(productId) {
    var cart = getCart();
    if (cart[productId]) {
        cart[productId]--;
        if (cart[productId] == 0) {
            delete cart[productId];
        }
    }
    if (Object.keys(cart).length == 1) { // Total price is the only key in the cart.
        removeCart();
        updateCurrentUser("cart", {});
        return;
    }
    getById(removeFromTotalPrice, productId);
    saveCart(cart);
}


// Get total price.
function getTotalPrice() {
    return getCart().totalPrice.toFixed(2);
}


// Remove cart.
function removeCart() {
    setCookie("cart", "", -1);
}


// Add to total price.
function addToTotalPrice(product) {
    var cart = getCart();
    if (!cart.totalPrice) {
        cart.totalPrice = 0;
    }
    cart.totalPrice += product.price;
    saveCart(cart);
}

// Remove from total price.
function removeFromTotalPrice(product) {
    var cart = getCart();
    cart.totalPrice -= product.price;
    saveCart(cart);
}

export { getCart, addProductToCart, removeProductFromCart, getTotalPrice, removeCart, saveCart };