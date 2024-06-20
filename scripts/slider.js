/* Slider Module */
import { getAll } from "./products.js";
import { addInterval, clearIntervals } from "./intervals.js";
import { showProduct } from "./secLayerDisplay.js";
import { addProductToCart } from "./cartControler.js";

var allProducts = [];
var currentProduct = 0;


// Initialize the slider.
function initializeSlider() {
    var nextButton = document.getElementById('sliderNext');
    var previousButton = document.getElementById('sliderPrevious');
    nextButton.addEventListener('click', nextProduct);
    previousButton.addEventListener('click', previousProduct);
    getAll(renderSlider);
}


// Render the slider.
function renderSlider(products) {
    allProducts = products;
    var interval = setInterval(function () {
        if (currentProduct == allProducts.length) {
            currentProduct = 0;
        }
        displaySliderProduct(allProducts[currentProduct]);
        currentProduct++;
    }, 5000);
    addInterval("slider", interval);
}

// Display the slider product.
function displaySliderProduct(product) {
    var slider = document.getElementsByClassName('sliderBlock')[0];
    var sliderProductTitle = document.getElementById('sliderProductTitle');
    var sliderProductDescription = document.getElementById('sliderProductDescription');
    var sliderProductAddToCart = document.getElementById('sliderButton');
    sliderProductAddToCart.innerText = "Add to cart";
    slider.style.backgroundImage = `url(${product.image})`;
    sliderProductTitle.innerHTML = product.title;
    sliderProductTitle.onclick = function () {
        showProduct(product.id);
    }
    sliderProductDescription.innerHTML = product.description;
    sliderProductAddToCart.onclick = function () {
        addProductToCart(product.id);
    }
}

// Display next product in the slider.
function nextProduct() {
    clearIntervals();
    if (currentProduct == allProducts.length) {
        currentProduct = 0;
    } else {
        currentProduct++;
    }
    displaySliderProduct(allProducts[currentProduct]);
}

// Display previous product in the slider.
function previousProduct() {
    clearIntervals();
    if (currentProduct == 0) {
        currentProduct = allProducts.length;
    } else {
        currentProduct--;
    }
    displaySliderProduct(allProducts[currentProduct]);
}

// Export the initializeSlider function.
export { initializeSlider };