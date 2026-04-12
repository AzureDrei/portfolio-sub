const menuIcon = document.querySelector(".menuicon");
const navLinks = document.querySelector("#nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const contactButton = document.querySelector(".contact-button");
const formReveal = document.querySelector(".formreveal");

contactButton.addEventListener("click", () => {
  formReveal.classList.toggle("active");
});
