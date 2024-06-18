import { clearIntervals } from "./intervals.js";

// Handle displaying of the tasks, also clear the tasks and it's intervals.
export function display(parent, childToDisplay, e) {
    clear(parent); // Clear all the tasks
    childToDisplay = document.querySelector(`.${childToDisplay}`);
    childToDisplay.style.display = "block";
    console.log(childToDisplay); // Log the displayed task
}

// Clear the display and the intervals.
function clear(parent) {
    var children = document.getElementsByClassName(parent);
    for (var i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    clearIntervals();
}

