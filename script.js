const OFFER_END = "2026-08-31T23:59:59";

function updateCountdown() {
  const end = new Date(OFFER_END).getTime();
  const now = Date.now();
  const difference = end - now;

  if (difference <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      const element = document.getElementById(id);
      if (element) element.textContent = "00";
    });
    return;
  }

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = isOpen ? "×" : "☰";
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      menuButton.textContent = "☰";
    });
  });
}
