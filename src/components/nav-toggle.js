// Mobile menu toggle

(() => {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.querySelector("nav");
  const scrim = document.getElementById("nav-scrim");

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

  const toggleScrim = () => {
    scrim.setAttribute(
      "data-visible",
      scrim.getAttribute("data-visible") == "true" ? "false" : "true"
    );
  };

  toggle.addEventListener("click", () => {
    toggleButton();
    toggleNav();
    toggleScrim();
  });

  scrim.addEventListener("click", () => {
    toggleButton();
    toggleNav();
    toggleScrim();
  });
})();
