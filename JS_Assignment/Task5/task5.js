// PRODUCT FILTER TASK
const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Smartphone", category: "electronics" },
  { name: "Headphones", category: "electronics" },
  { name: "T-Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Jacket", category: "clothing" },
  { name: "Book - JavaScript Guide", category: "books" },
  { name: "Novel - Harry Potter", category: "books" },
  { name: "Tablet", category: "electronics" },
  { name: "Sweater", category: "clothing" }
];

const productList = document.getElementById("productList");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchBox = document.getElementById("searchBox");

// Display products
function displayProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const li = document.createElement("li");
    li.innerText = p.name;
    productList.appendChild(li);
  });
}

// Default: show all
displayProducts(products);

// FILTER BUTTONS
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    let filtered = [];

    if (category === "all") {
      filtered = products;
    } else {
      filtered = products.filter(p => p.category === category);
    }

    // also apply search filter if text exists
    const searchText = searchBox.value.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchText));

    displayProducts(filtered);
  });
});

// BONUS → SEARCH BOX FILTER
searchBox.addEventListener("input", () => {
  const text = searchBox.value.toLowerCase();

  // Filter by search + selected button category
  const activeCategory = document.querySelector(".filter-btn.active")?.dataset.category || "all";

  let filtered = [];

  if (activeCategory === "all") {
    filtered = products;
  } else {
    filtered = products.filter(p => p.category === activeCategory);
  }

  filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(text)
  );

  displayProducts(filtered);
});

// Optional: Add active button UI
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});