const hamburger = document.getElementById("hamburger");

const mobileMenuToggle = () => {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
};

// Event Listeners
hamburger.addEventListener("click", mobileMenuToggle);
