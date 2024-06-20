/* Intervals handler */

var intervals = {};


// Add an interval to the intervals object.
function addInterval(name, interval) {
    intervals[name] = interval;
}

// Clear all the intervals.
function clearIntervals() {
    for (var interval in intervals) {
        clearInterval(intervals[interval]);
    }
}

// Remove a specific interval.
function removeInterval(name) {
    clearInterval(intervals[name]);
    delete intervals[name];
}

export { addInterval, clearIntervals, removeInterval };