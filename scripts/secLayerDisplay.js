/* Controls the display of the secLayer container */
import { getById } from './products.js';


// Handle the display of the secLayer container.
function showProduct(productId) {
    getById(function (product){console.log(product)}, productId);
}

export { showProduct };