/* Product display module */
import { addProductToCart } from "./cartControler.js";


// Display the product.
function displayProduct(product) {
    var productContainer = document.getElementsByClassName('productContainer')[0];
    productContainer.innerHTML = '';
    productContainer.appendChild(renderProduct(product));
}


// Render product.
function renderProduct(product) {
    var productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.appendChild(renderProductImg(product));
    productDiv.appendChild(renderProductTitle(product));
    productDiv.appendChild(renderProductDescription(product));
    productDiv.appendChild(renderProductPrice(product));
    productDiv.appendChild(renderProductAddToCart(product));
    productDiv.appendChild(renderProductRate(product));
    return productDiv;
}


// Render product image.
function renderProductImg(product) {
    var productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.title;
    productImg.className = 'productPic';
    return productImg;
}


// Render product title.
function renderProductTitle(product) {
    var productTitle = document.createElement('h2');
    productTitle.innerHTML = product.title;
    productTitle.className = 'productTitle';
    return productTitle;
}

// Render product description.
function renderProductDescription(product) {
    var productDescription = document.createElement('p');
    productDescription.innerHTML = product.description;
    productDescription.className = 'productParagraph';
    return productDescription;
}

// Render product price.
function renderProductPrice(product) {
    var productPrice = document.createElement('p');
    productPrice.innerHTML = '$' + product.price;
    productPrice.className = 'productPrice';
    return productPrice;
}

// Render add to cart button.
function renderProductAddToCart(product) {
    var addToCart = document.createElement('button');
    var addToCartImg = document.createElement('img');
    addToCartImg.src = './assets/card/add-to-cart.png';
    addToCartImg.alt = 'Add to cart';
    addToCartImg.className = 'cartImg';
    addToCart.appendChild(addToCartImg);
    addToCart.innerHTML += 'Add to cart';
    addToCart.className = 'productAddToCart';
    addToCart.onclick = function() { addProductToCart(product.id); };
    return addToCart;
}

// Render product rate.
function renderProductRate(product) {
    var productRating = document.createElement('div');
    var productRate = document.createElement('p');
    var productVotes = document.createElement('p');
    productRating.className = 'productRating';
    productRate.innerHTML = `<span>Rating: </span> ${product.rating.rate} / 5`;
    productRate.className = 'productRate';
    productVotes.innerHTML = `<span>Votes: </span> ${product.rating.count}`;
    productVotes.className = 'productVotes';
    productRating.appendChild(productRate);
    productRating.appendChild(productVotes);
    return productRating;
}

// Export the displayProduct function.
export { displayProduct };
