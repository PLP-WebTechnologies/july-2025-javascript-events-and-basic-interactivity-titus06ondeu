// 🎉 Part 1: Event Handling
document.getElementById("toggleMessage").addEventListener("click", function() {
  const message = document.getElementById("message");
  message.style.display = message.style.display === "none" ? "block" : "none";
});

// 🎮 Part 2: Interactive Elements

// Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", function() {
  count--;
  document.getElementById("counter").textContent = count;
});

// 📋✅ Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  // Regex for simple email validation
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (name === "" || email === "" || password === "") {
    feedback.textContent = "All fields are required.";
    feedback.style.color = "red";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
  } else if (password.length < 6) {
    feedback.textContent = "Password must be at least 6 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  }
});
