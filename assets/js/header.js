const navToggle = document.getElementById("navToggle");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Fecha o menu ao clicar num link (útil em single-page com âncoras)
document.querySelectorAll(".navbar_item a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});