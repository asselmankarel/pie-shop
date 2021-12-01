const nav = document.getElementById("primaryNav");
const menuBtn = document.getElementById("hamburgerBtn");

const toggleMenu = () => {
  nav.classList.toggle("open");
};

menuBtn.addEventListener("click", toggleMenu);
