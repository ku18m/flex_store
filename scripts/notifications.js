
// Handle the notification area.
function notificationPlaceHolderHandler(message, className) {
    var text = document.getElementById('notificationPlaceholder');
    text.innerHTML = message;
    text.className = className;
    notificationsTimeOut(text);
}

// Timeout for the notification area.
function notificationsTimeOut(element) {
    setTimeout(function() {
        element.innerHTML = "";
    }, 3000);
}


export { notificationPlaceHolderHandler };