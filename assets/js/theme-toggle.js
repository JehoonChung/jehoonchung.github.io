document.addEventListener("DOMContentLoaded", function () {

  // Create button
  const toggle = document.createElement("button");
  toggle.innerHTML = "🌙";
  toggle.className = "theme-toggle";
  toggle.style.marginLeft = "1rem";

  // Add to navigation
  const nav = document.querySelector(".visible-links");
  if (nav) {
    const li = document.createElement("li");
    li.className = "masthead__menu-item";
    li.appendChild(toggle);
    nav.appendChild(li);
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.innerHTML = "☀️";
  }

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggle.innerHTML = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggle.innerHTML = "🌙";
    }
  });
});
