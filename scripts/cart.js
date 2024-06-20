/* Cart diplay module */
import { getCart, removeProductFromCart, getTotalPrice } from "./cartControler.js";
import { showCheckout, showCart } from "./secLayerDisplay.js";
import { getById } from "./products.js";


// Initialize cart.
function initializeCart() {
    var checkoutButton = document.getElementById("checkOutButton");
    var cartTable = document.getElementById('cartPruducts');
    var cart = getCart();
    cartTable.innerHTML = '';
    checkoutButton.addEventListener("click", showCheckout);
    for (var productId in cart) {
        getById(renderCartItem, productId);
    }
}


// Render cart item.
function renderCartItem(product) {
    renderTotalPrice(); // Update total price in the call back to make it takes it's time to update the local value.
    var cartTable = document.getElementById('cartPruducts');
    var cartItem = document.createElement('tr');
    cartItem.className = 'cartItem';
    cartItem.appendChild(renderCartItemProduct(product));
    cartItem.appendChild(renderCartItemPrice(product));
    cartItem.appendChild(renderCartItemQuantity(product));
    cartItem.appendChild(renderCartItemTotalPrice(product));
    cartItem.appendChild(renderCartItemRemoveButton(product));
    cartTable.appendChild(cartItem);
}

// Render cart item product.
function renderCartItemProduct(product) {
    var cartItemProduct = document.createElement('td');
    var cartItemProductImg = document.createElement('img');
    cartItemProductImg.src = product.image;
    cartItemProductImg.alt = product.title;
    cartItemProductImg.className = 'cartItemPic';
    cartItemProduct.appendChild(cartItemProductImg);
    cartItemProduct.innerHTML += product.title;
    cartItemProduct.className = 'cartItemProduct';
    return cartItemProduct;
}

// Render cart item price.
function renderCartItemPrice(product) {
    var cartItemPricetd = document.createElement('td');
    var cartItemPrice = document.createElement('p');
    cartItemPrice.innerHTML = '$' + product.price;
    cartItemPrice.className = 'cartItemPrice';
    cartItemPricetd.appendChild(cartItemPrice);
    return cartItemPricetd;
}

// Render cart item quantity.
function renderCartItemQuantity(product) {
    var cartItemQuantitytd = document.createElement('td');
    var cartItemQuantity = document.createElement('p');
    cartItemQuantity.innerHTML = getCart()[product.id];
    cartItemQuantity.className = 'cartItemQuantity';
    cartItemQuantitytd.appendChild(cartItemQuantity);
    return cartItemQuantitytd;
}

// Render cart item total price.
function renderCartItemTotalPrice(product) {
    var cartItemTotalPricetd = document.createElement('td');
    var cartItemTotalPrice = document.createElement('p');
    cartItemTotalPrice.innerHTML = '$' + getCart()[product.id] * product.price;
    cartItemTotalPrice.className = 'cartItemTotalPrice';
    cartItemTotalPricetd.appendChild(cartItemTotalPrice);
    return cartItemTotalPricetd;
}

// Render cart item remove button.
function renderCartItemRemoveButton(product) {
    var cartItemRemovetd = document.createElement('td');
    var cartItemRemoveButton = document.createElement('button');
    var cartItemRemoveButtonImg = document.createElement('img');
    cartItemRemoveButtonImg.src = './assets/cart/remove.png';
    cartItemRemoveButtonImg.alt = 'Remove';
    cartItemRemoveButtonImg.className = 'cartItemRemoveImg';
    cartItemRemoveButton.appendChild(cartItemRemoveButtonImg);
    cartItemRemoveButton.className = 'cartItemRemoveButton';
    cartItemRemoveButton.onclick = function() {
        removeProductFromCart(product.id);
        showCart();
    };
    cartItemRemovetd.appendChild(cartItemRemoveButton);
    return cartItemRemovetd;
}

// Render total price.
function renderTotalPrice() {
    var totalPriceSpan = document.getElementById("cartTotal");
    totalPriceSpan.innerHTML = '$' + getTotalPrice();
}

// Export initializeCart function.
export { initializeCart };