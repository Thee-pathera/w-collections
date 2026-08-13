function renderGallery(category, containerId) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = "";

  PRODUCTS[category].forEach(product => {
    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        decoding="async">

      <div class="product-info">
        <h3>${product.name}</h3>

        <a
          class="btn btn-primary"
          href="${whatsappLink(product.name)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire about ${product.name} on WhatsApp">
          WhatsApp Enquire
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}