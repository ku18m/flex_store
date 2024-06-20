/* Card render module */
import { addProductToCart } from "./cartControler.js";
import { showProduct } from "./secLayerDisplay.js";


// Render card.
function renderCard(product) {
    var card = document.createElement('div');
    card.className = 'card';
    card.appendChild(renderCardImg(product));
    card.appendChild(renderCardTitle(product));
    card.appendChild(renderCardDescription(product));
    card.appendChild(renderCardPrice(product));
    card.appendChild(renderAddToCart(product));
    return card;
}


// Render card image.
function renderCardImg(product) {
    var cardImg = document.createElement('img');
    cardImg.src = product.image;
    cardImg.alt = product.title;
    cardImg.className = 'cardPic';
    return cardImg;
}


// Render card title.
function renderCardTitle(product) {
    var cardTitle = document.createElement('button');
    cardTitle.innerHTML = product.title;
    cardTitle.className = 'cardTitle';
    cardTitle.onclick = function() { showProduct(product.id) };
    return cardTitle;
}


// Render card description.
function renderCardDescription(product) {
    var cardDescription = document.createElement('p');
    cardDescription.innerHTML = product.description.slice(0, 100) + '...';
    cardDescription.className = 'cardParagraph';
    return cardDescription;
}


// Render card price.
function renderCardPrice(product) {
    var cardPrice = document.createElement('p');
    cardPrice.innerHTML = '$' + product.price;
    cardPrice.className = 'cardPrice';
    return cardPrice;
}


// Render add to cart button.
function renderAddToCart(product) {
    var addToCart = document.createElement('button');
    var addToCartImg = document.createElement('img');
    addToCartImg.src = './assets/card/add-to-cart.png';
    addToCart.appendChild(addToCartImg);
    addToCart.className = 'cardAddToCart';
    addToCart.onclick = function() { addProductToCart(product.id) };
    return addToCart;
}


// Export the renderCard function.
export { renderCard }
