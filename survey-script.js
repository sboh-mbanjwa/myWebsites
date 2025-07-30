const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const progress = document.getElementById("progress");
const form = document.getElementById("surveyForm");


let currentStep = 0;

function showStep(step) {
  formSteps.forEach((stepEl, i) => {
    stepEl.classList.toggle("active", i === step);
  });
  progress.style.width = `${((step + 1) / formSteps.length) * 100}%`;
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep < formSteps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});


prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();

  // Hide form and show confirmation screen
  form.innerHTML = `
    <div class="confirmation-screen">
      <h2><i class="fas fa-check-circle" style="color: #27ae60;"></i> Thank You!</h2>
      <p>Your survey has been submitted successfully.</p>
      <button onclick="location.reload()">Take Survey Again</button>
    </div>
  `;
});

showStep(currentStep);
// Select the toggle button
const darkModeToggle = document.getElementById("darkModeToggle");

// Check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeToggle.textContent = "🌞"; // Change the icon to sun when dark mode is on
}

// Add an event listener to the toggle button
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update the icon based on the mode
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "🌞"; // Sun icon for light mode
    localStorage.setItem("darkMode", "enabled"); // Save dark mode preference
  } else {
    darkModeToggle.textContent = "🌙"; // Moon icon for dark mode
    localStorage.setItem("darkMode", "disabled"); // Save light mode preference
  }
});
