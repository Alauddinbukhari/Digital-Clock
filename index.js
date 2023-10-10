// Get references to HTML elements with specific IDs
const hourE1 = document.getElementById("hour");      // Element for hours
const minuteE1 = document.getElementById("minutes");  // Element for minutes
const secondE1 = document.getElementById("second");   // Element for seconds
const ampmE1 = document.getElementById("ampm");       // Element for AM/PM indicator

// Function to update the digital clock
function updateClock() {
    // Get the current time
    let h = new Date().getHours();    // Current hours (24-hour format)
    let m = new Date().getMinutes();  // Current minutes
    let s = new Date().getSeconds();  // Current seconds

    // Determine whether it's AM or PM
    var ampm = h >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format (if needed)
    if (h > 12) {
        h = h - 12;
    }

    // Ensure hours, minutes, and seconds are displayed with leading zeros
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Update the HTML elements with the formatted time
    hourE1.innerText = h;       // Update the hours element
    minuteE1.innerText = m;     // Update the minutes element
    secondE1.innerText = s;     // Update the seconds element
    ampmE1.innerHTML = ampm;    // Update the AM/PM indicator

    // Log the AM/PM value to the console (for debugging)
    console.log(ampm);

    // Schedule the updateClock() function to run again after 1 second (1000 milliseconds)
    setTimeout(() => {
        updateClock();
    }, 1000);
}

// Initially call the updateClock() function to start the clock
updateClock();
