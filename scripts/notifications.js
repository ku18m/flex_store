
// Handle the notification area.
function notificationPlaceHolderHandler(message, className) {
    var text = document.getElementById('notificationPlaceholder');
    text.innerHTML = message;
    text.className = className;
    text.style.display = "block";
    notificationsTimeOut(text);
}

// Timeout for the notification area.
function notificationsTimeOut(element) {
    setTimeout(function() {
        element.innerHTML = "";
        element.style.display = "none";
    }, 5000);
}


export { notificationPlaceHolderHandler };