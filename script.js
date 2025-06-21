// Toggle dark mode
document.getElementById("toggle-theme").onclick = () => {
  document.body.classList.toggle("dark");
};

// Form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email.includes("@")) {
    e.preventDefault();
    alert("Please enter a valid name and email!");
  }
});
