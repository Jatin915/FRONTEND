// TASK 8 — RANDOM IMAGE GALLERY

const galleryGrid = document.getElementById("galleryGrid");
const loadMoreBtn = document.getElementById("loadMore");

let count = 0;

// Fetch random images (fake async for practice)
async function fetchRandomImages(num = 6) {
  const images = [];

  for (let i = 0; i < num; i++) {
    // Using Unsplash random endpoint
    const url = `https://source.unsplash.com/random/300x300?sig=${count++}`;
    images.push(url);
  }

  return images; // resolves instantly, but async kept for flow
}

// Display images with fade-in
async function loadImages() {
  const imgs = await fetchRandomImages();

  imgs.forEach(src => {
    const img = document.createElement("img");
    img.src = src;

    img.onload = () => img.classList.add("loaded"); // BONUS FADE-IN

    galleryGrid.appendChild(img);
  });
}

loadImages();

// Load more images
loadMoreBtn.addEventListener("click", loadImages);