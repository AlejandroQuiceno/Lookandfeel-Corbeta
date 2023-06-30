const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = carouselContainer.querySelector('.carousel-items');
const prevButton = carouselContainer.querySelector('.prev-button');
const nextButton = carouselContainer.querySelector('.next-button');

const itemWidth = carouselItems.firstElementChild.offsetWidth + parseInt(getComputedStyle(carouselItems.firstElementChild).marginRight);
const containerWidth = carouselContainer.offsetWidth;
const itemCount = carouselItems.childElementCount;

let currentIndex = 0;

function updateCarousel() {
  carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % itemCount;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + itemCount) % itemCount;
  updateCarousel();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);