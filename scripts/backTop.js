/* Back to top button */


// Initialize back to top button.
function initializeBackToTop() {
    window.onscroll = function() { scrollFunction(); };
}

// Scroll function.
function scrollFunction() {
    var mybutton = document.getElementById("backToTopButton");
    mybutton.addEventListener("click", topFunction);
    if (document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


// Scroll to top function.
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Export the initializeBackToTop function.
export { initializeBackToTop };