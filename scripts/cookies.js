/* Cookies Handling module */


// Get cookie function
function getCookie(key) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (cookie[0] == key) {
            return cookie[1];
        }
    }
}

// Set cookie function
function setCookie(key, value, expireDays) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + expireDays);
    document.cookie = `${key}=${value}; expires=${expireDate}; path=/;`;
}

export { getCookie, setCookie };