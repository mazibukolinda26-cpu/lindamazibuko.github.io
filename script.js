// Button that says hello
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greetText").textContent = "Hello! Your first bit of JavaScript is working 🎉";
});

// Dark mode toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark");
  modeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact form (no backend yet, just confirms visually)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formStatus").textContent = "Thanks! Your message has been noted (this form isn't connected to email yet).";
  this.reset();
});
