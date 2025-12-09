const rangeInput = document.getElementById("musicRange");
const currentTimeDisplay = document.getElementById("currentTime");
const totalDurationDisplay = document.getElementById("totalDuration");

// Helper function to format total seconds into M:SS or MM:SS format
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  let secs = Math.floor(seconds % 60);

  // Add leading zero if seconds is less than 10
  if (secs < 10) {
    secs = "0" + secs;
  }

  return `${mins}:${secs}`;
}

// Function to handle all UI updates
function updateMusicPlayerDisplay(inputElement) {
  const val = inputElement.value;
  const min = inputElement.min;
  const max = inputElement.max;

  // 1. Update the current time display with the formatted time
  currentTimeDisplay.textContent = formatTime(val);

  // 2. Update the track fill percentage
  const percentage = ((val - min) / (max - min)) * 100;
  inputElement.style.backgroundSize = `${percentage}% 100%`;
}

// Set the total duration display once on load
totalDurationDisplay.textContent = formatTime(rangeInput.max);

// Initialize the current time display on load
updateMusicPlayerDisplay(rangeInput);

// Update the display every time the user moves the slider
rangeInput.addEventListener("input", function () {
  updateMusicPlayerDisplay(this);
});
