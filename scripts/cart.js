/* Handles the cart */
import { getById } from "./products.js";

// Add a product to the cart.
function addProductToCart(productId) {
    getById(function (product){console.log(product)}, productId);
}

export { addProductToCart };