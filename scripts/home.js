/* Handles home div components */
import { getByCategory } from "./products.js";
import { renderCard } from "./card.js";
import { display } from "./display.js";


// Initialize home div components
function initializeHome() {
    display("secLayer", "home");
    getByCategory(renderMensWear, `men's clothing`);
    getByCategory(renderWomensWear, `women's clothing`);
    getByCategory(renderElectronics, `electronics`);
    getByCategory(renderJewelry, `jewelery`);
}


// Render Cards div function.
function renderCardsDiv(products, divId) {
    var cardsDiv = document.getElementById(divId);
    console.log(cardsDiv);
    // var ctgCardsDiv = document.getElementsByClassName(divId)[0];
    for (var i = 0; i < products.length; i++) {
        cardsDiv.appendChild(renderCard(products[i]));
    }
}

// Render mens wear products.
function renderMensWear(products) {
    renderCardsDiv(products, 'mensWearCards');
}

// Render womens wear products.
function renderWomensWear(products) {
    renderCardsDiv(products, 'womensWearCards');
}

// Render electronics products.
function renderElectronics(products) {
    renderCardsDiv(products, 'electronicsCards');
}

// Render jewelry products.
function renderJewelry(products) {
    renderCardsDiv(products, 'jewelryCards');
}

// Export the initializeHome function.
export { initializeHome };