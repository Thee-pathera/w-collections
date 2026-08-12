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
