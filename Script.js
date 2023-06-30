const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const visibleItems = 4;
const itemWidth = carouselItems[0].offsetWidth;

let currentIndex = 0;

// Function to update the carousel position
function updateCarousel() {
  carouselItems.forEach((item, index) => {
    const position = index - currentIndex;
    const transformValue = `translateX(${position * itemWidth}px)`;
    item.style.transform = transformValue;
  });
}

// Function to handle the next button click
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

// Function to handle the previous button click
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

// Add click event listeners to the arrow buttons
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);