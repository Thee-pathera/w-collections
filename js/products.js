const PHONE_NUMBER = "2547XXXXXXXX"; // Replace with your WhatsApp number

function whatsappLink(productName) {
  const message = `Hi W Collections 👋
I'm interested in ${productName}.
Is it still available?`;

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

const PRODUCTS = {
  women: [
    { name: "Women 1", image: "images/women-1.jpg" },
    { name: "Women 2", image: "images/women-2.jpg" },
    { name: "Women 3", image: "images/women-3.png" },
    { name: "Women 4", image: "images/women-4.jpg" },
    { name: "Women 5", image: "images/women-5.webp" },
    { name: "Women 6", image: "images/women-6.jpg" },
    { name: "Women 7", image: "images/women-7.png" },

  ],

  men: [
    { name: "Men 1", image: "images/men-1.jpg" },
    { name: "Men 2", image: "images/men-2.jpg" }
  ],

  streetwear: [
    { name: "Streetwear 1", image: "images/streetwear-1.jpg" },
    { name: "Streetwear 2", image: "images/streetwear-2.jpg" },
    { name: "Streetwear 3", image: "images/streetwear-3.jpg" },
    { name: "Streetwear 4", image: "images/streetwear-4.jpg" }
  ],

  children: [
    { name: "Kids 1", image: "images/children-1.jpg" },
    { name: "Kids 2", image: "images/children-2.png" },
    { name: "Kids 3", image: "images/children-3.png" }
  ]
};