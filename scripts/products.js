/* Main products getter */


// API URL
const API_URL = 'https://fakestoreapi.com/';


// JSON parser.
function parser(json) {
    return JSON.parse(json);
}


// Request handler.
function requestHandler(renderFunction, endpoint) {
    var request = new XMLHttpRequest();

    request.open('GET', `${API_URL}${endpoint}`);
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            renderFunction(parser(request.responseText));
        }
    }
}


// Get all products.
function getAll(renderFunction) {
    requestHandler(renderFunction, 'products');
}


// Get product by id.
function getById(renderFunction, id) {
    requestHandler(renderFunction, `products/${id}`);
}


// Get products by category.
function getByCategory(renderFunction, category) {
    requestHandler(renderFunction, `products/category/${category}`);
}


// Get product by id in category.
function getByIdInCategory(renderFunction, category, id) {
    requestHandler(renderFunction, `products/category/${category}/${id}`);
}


// Exporting functions.
export { getAll, getById, getByCategory, getByIdInCategory }