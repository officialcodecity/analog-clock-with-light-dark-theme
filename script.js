// Selecting the clock hands
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".seconds");

/**
 * Function to update the clock hands based on the current time.
 */
const updateClock = () => {
  const currentTime = new Date(); // Get the current date and time
  const hr = currentTime.getHours() * 30 + currentTime.getMinutes() / 2; // Convert hours to degrees
  const min = currentTime.getMinutes() * 6 + currentTime.getSeconds() * 0.1; // Convert minutes to degrees
  const sec =
    currentTime.getSeconds() * 6 + currentTime.getMilliseconds() * 0.006; // Convert seconds to degrees

  // Rotate clock hands based on calculated angles
  hourHand.style.transform = ` rotateZ(${hr}deg)`;
  minuteHand.style.transform = `rotateZ(${min}deg)`;
  secondHand.style.transform = `translate(-50%, -77%) rotateZ(${sec}deg)`;

  // Call the function again to update continuously
  requestAnimationFrame(updateClock);
};

// Start updating the clock
updateClock();

// Selecting the theme button
const themeButton = document.getElementById("themebutton");

// Toggle between light and dark themes when the button is clicked
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme"); // Switch theme
  themeButton.classList.toggle("bxs-sun"); // Change icon
});
