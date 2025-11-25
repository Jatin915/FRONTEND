// TASK 6 — FETCH PRODUCTS + SEARCH + DEBOUNCE

const apiSearch = document.getElementById("apiSearch");
const productGrid = document.getElementById("productGrid");

let storeProducts = []; // global store

// 1. Fetch products
async function loadProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  storeProducts = data; // save globally
  displayProducts(storeProducts);
}

loadProducts();

// 2. Display products
function displayProducts(list) {
  productGrid.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");

    card.innerHTML = `
      ${item.title}
      <span>$${item.price}</span>
    `;

    productGrid.appendChild(card);
  });
}

// 3. Debounce function (BONUS)
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, arguments), delay);
  };
}

// 4. Search logic
function filterProducts() {
  const text = apiSearch.value.toLowerCase();

  const filtered = storeProducts.filter(p =>
    p.title.toLowerCase().includes(text)
  );

  displayProducts(filtered);
}

apiSearch.addEventListener("input", debounce(filterProducts, 300));