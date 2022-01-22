// Mobile menu toggle

(() => {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.querySelector("nav");

  if (!(toggle && nav)) return;

  const toggleButton = () => {
    toggle.setAttribute(
      "aria-expanded",
      toggle.getAttribute("aria-expanded") == "true" ? "false" : "true"
    );
  };

  const toggleNav = () => {
    nav.classList.toggle("menu-visible");
  };

  toggle.addEventListener("click", () => {
    toggleButton();
    toggleNav();
  });
})();
