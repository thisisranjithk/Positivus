const hamburger = document.getElementById("hamburger");
const accordions = document.getElementById("Accordions");

const mobileMenuToggle = () => {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
};

const handleAccordions = (e) => {
  const accordion = e.target.parentElement.parentElement;
  if (e.target.classList.contains("accordian-icon")) {
    accordion.querySelector("p").classList.toggle("hidden");
    accordion.classList.toggle("bg-lime");
  }

  if (e.target.src.includes("plus-icon.svg")) {
    e.target.src = "./assets/svg/minus-icon.svg";
  } else {
    e.target.src = "./assets/svg/plus-icon.svg";
  }
};

// Event Listeners
hamburger.addEventListener("click", mobileMenuToggle);
accordions.addEventListener("click", handleAccordions);
