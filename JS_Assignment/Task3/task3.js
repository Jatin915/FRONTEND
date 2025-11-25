// IMAGE CAROUSEL
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let index = 0;

const imgTag = document.getElementById("carouselImage");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showImage(i) {
  imgTag.src = images[i];
}

nextBtn.onclick = () => {
  index = (index + 1) % images.length;
  showImage(index);
};

prevBtn.onclick = () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
};

// Auto-slide every 3 sec
let slideShow = setInterval(() => {
  index = (index + 1) % images.length;
  showImage(index);
}, 3000);

// BONUS → Pause on hover
imgTag.addEventListener("mouseenter", () => clearInterval(slideShow));
imgTag.addEventListener("mouseleave", () => {
  slideShow = setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
  }, 3000);
});