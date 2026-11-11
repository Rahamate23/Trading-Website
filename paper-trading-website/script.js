
/* ==========================================
   PRESS & PAPER STORE
   Main JavaScript File
========================================== */

// CHANGE THIS TO YOUR BUSINESS WHATSAPP NUMBER
const WHATSAPP_NUMBER = "9779851419081";

// ==========================================
// PAPER PRODUCTS
// ==========================================

const paperProducts = [

  {
    name: "Natural Evolution (Vincent)",
    category: "Specialty Papers",
    gsm: ["125 GSM", "160 GSM", "200 GSM", "245 GSM", "300 GSM"],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Pearl Linen",
    category: "Textured Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Gold Linen",
    category: "Textured Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Diamond Glass Perfume",
    category: "Specialty Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Yellow Ash",
    category: "Specialty Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Valentino Natural",
    category: "Specialty Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Valentino White",
    category: "Specialty Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "DO",
    category: "Specialty Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Antique Gold Flower",
    category: "Antique Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Antique Gold",
    category: "Antique Papers",
    gsm: ["120 GSM"],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "GOLD",
    category: "Antique Papers",
    gsm: ["120 GSM"],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "White Wool",
    category: "Textured Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Cream Wool",
    category: "Textured Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Cream Felt",
    category: "Textured Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Cromo Gumming 90X90",
    category: "Gumming Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Cromo Gumming",
    category: "Gumming Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Mirror Coat Gumming",
    category: "Gumming Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Gloss Vinyl Gumming",
    category: "Gumming Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Transparent Gumming",
    category: "Gumming Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Silver Matt Gumming",
    category: "Gumming Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Rainbow Gumming",
    category: "Gumming Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Golden Vinyl Gumming",
    category: "Gumming Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Golden Gumming",
    category: "Gumming Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  {
    name: "Pearl Gumming",
    category: "Gumming Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  },

  ...["101","102","103","104","105","106","107","108",
      "A","C","E","F","G 120 GSM","G","I","J",
      "K 120 GSM","K","N","O","P","S","V","X",
      "Y","Z","GG","HH","KK","LL","OO","TT"].map(name => ({
    name,
    category: "Code Papers",
    gsm: [],
    sizes: ["12 x 18", "13 x 19"],
    price: ""
  }))

];

// ==========================================
// COMBINED PRODUCTS
// ==========================================

const otherProducts = [

  {
    name: "Mousepads",
    category: "Printing Materials",
    price: ""
  },

  {
    name: "Lamination Film",
    category: "Printing Materials",
    price: ""
  },

  {
    name: "Lamination Gum",
    category: "Printing Materials",
    price: ""
  },

  {
    name: "Release Paper",
    category: "Printing Materials",
    price: ""
  }

];

// ==========================================
// SHOPPING CART
// ==========================================

let cart = JSON.parse(localStorage.getItem("paperCart")) || [];

// Save cart
function saveCart() {

  localStorage.setItem(
    "paperCart",
    JSON.stringify(cart)
  );

  updateCartCount();

}

// ==========================================
// ADD PRODUCT TO CART
// ==========================================

function addToCart(productName, gsm, size) {

  const existing = cart.find(item =>
    item.name === productName &&
    item.gsm === gsm &&
    item.size === size
  );

  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      name: productName,
      gsm: gsm || "Not specified",
      size: size || "Not specified",
      quantity: 1
    });

  }

  saveCart();

  alert(productName + " added to your cart!");

}

// ==========================================
// CART COUNT
// ==========================================

function updateCartCount() {

  const countElement =
    document.getElementById("cart-count");

  if (countElement) {

    const total = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    countElement.textContent = total;

  }

}

// ==========================================
// DISPLAY CART
// ==========================================

function displayCart() {

  const cartContainer =
    document.getElementById("cart-items");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  if (cart.length === 0) {

    cartContainer.innerHTML =
      "<p>Your cart is currently empty.</p>";

    return;

  }

  cart.forEach((item, index) => {

    const div = document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `
      <h3>${escapeHTML(item.name)}</h3>
      <p>GSM: ${escapeHTML(item.gsm)}</p>
      <p>Size: ${escapeHTML(item.size)}</p>
      <p>Quantity: ${item.quantity}</p>

      <button onclick="changeQuantity(${index}, -1)">
        -
      </button>

      <button onclick="changeQuantity(${index}, 1)">
        +
      </button>

      <button onclick="removeFromCart(${index})">
        Remove
      </button>
    `;

    cartContainer.appendChild(div);

  });

}

// ==========================================
// CHANGE QUANTITY
// ==========================================

function changeQuantity(index, amount) {

  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {

    cart.splice(index, 1);

  }

  saveCart();

  displayCart();

}

// ==========================================
// REMOVE PRODUCT
// ==========================================

function removeFromCart(index) {

  cart.splice(index, 1);

  saveCart();

  displayCart();

}

// ==========================================
// WHATSAPP ORDER
// ==========================================

function orderOnWhatsApp() {

  if (cart.length === 0) {

    alert("Your cart is empty!");

    return;

  }

  let message =
    "Hello! I want to place an order for the following printing materials:\n\n";

  cart.forEach((item, index) => {

    message +=
      `${index + 1}. ${item.name}\n` +
      `GSM: ${item.gsm}\n` +
      `Size: ${item.size}\n` +
      `Quantity: ${item.quantity}\n\n`;

  });

  message +=
    "Please share your quotation and availability.\n\n" +
    "Thank you!";

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");

}

// ==========================================
// PRODUCT SEARCH
// ==========================================

function searchProducts() {

  const input =
    document.getElementById("product-search");

  if (!input) return;

  const searchValue =
    input.value.toLowerCase().trim();

  const filtered = paperProducts.filter(product =>
    product.name.toLowerCase().includes(searchValue) ||
    product.category.toLowerCase().includes(searchValue)
  );

  displayProducts(filtered);

}

// ==========================================
// DISPLAY PAPER PRODUCTS
// ==========================================

function displayProducts(products = paperProducts) {

  const container =
    document.getElementById("products-container");

  if (!container) return;

  container.innerHTML = "";

  if (products.length === 0) {

    container.innerHTML =
      "<p>No products found.</p>";

    return;

  }

  products.forEach((product, index) => {

    const gsmOptions = product.gsm.length
      ? product.gsm.map(gsm =>
          `<option value="${escapeHTML(gsm)}">${escapeHTML(gsm)}</option>`
        ).join("")
      : `<option value="">Standard</option>`;

    const sizeOptions = product.sizes.map(size =>
      `<option value="${escapeHTML(size)}">${escapeHTML(size)} inches</option>`
    ).join("");

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `

      <div class="product-image">
        <span>PRINTING PAPER</span>
      </div>

      <div class="product-details">

        <p class="product-category">
          ${escapeHTML(product.category)}
        </p>

        <h3>${escapeHTML(product.name)}</h3>

        <label>GSM</label>

        <select id="gsm-${index}">
          ${gsmOptions}
        </select>

        <label>Paper Size</label>

        <select id="size-${index}">
          ${sizeOptions}
        </select>

        <p class="product-price">
          ${product.price
            ? "Price: " + escapeHTML(String(product.price))
            : "Price on enquiry"}
        </p>

        <button onclick="
          addToCart(
            '${escapeHTML(product.name).replace(/'/g, "\\'")}',
            document.getElementById('gsm-${index}').value,
            document.getElementById('size-${index}').value
          )
        ">
          Add to Cart
        </button>

      </div>

    `;

    container.appendChild(card);

  });

}

// ==========================================
// DISPLAY OTHER PRINTING MATERIALS
// ==========================================

function displayOtherProducts() {

  const container =
    document.getElementById("other-products-container");

  if (!container) return;

  container.innerHTML = "";

  otherProducts.forEach((product, index) => {

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `

      <div class="product-image">
        <span>PRINTING MATERIAL</span>
      </div>

      <div class="product-details">

        <p>${escapeHTML(product.category)}</p>

        <h3>${escapeHTML(product.name)}</h3>

        <p>Price on enquiry</p>

        <button onclick="
          addToCart('${product.name}', '', '')
        ">
          Add to Cart
        </button>

      </div>

    `;

    container.appendChild(card);

  });

}

// ==========================================
// FILTER PRODUCTS BY CATEGORY
// ==========================================

function filterProducts(category) {

  if (category === "All") {

    displayProducts(paperProducts);

    return;

  }

  const filtered = paperProducts.filter(product =>
    product.category === category
  );

  displayProducts(filtered);

}

// ==========================================
// SAFE HTML TEXT
// ==========================================

function escapeHTML(value) {

  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);

}

// ==========================================
// INITIALISE WEBSITE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  displayProducts();

  displayOtherProducts();

  updateCartCount();

  displayCart();

});
