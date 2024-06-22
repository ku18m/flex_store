import { clearIntervals } from "./intervals.js";

// Main display handler.
export function display(parent, childToDisplay, e) {
    clear(parent); // Hide all the parent components.
    childToDisplay = document.querySelector(`.${childToDisplay}`);
    childToDisplay.style.display = "block";
}

// Clear the display and the intervals.
function clear(parent) {
    var children = document.getElementsByClassName(parent);
    for (var i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    clearIntervals();
}
