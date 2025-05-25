// IMAGE SLIDER

let slides = [];
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  slides = document.querySelectorAll(".slides img");

  if (slides.length === 0) return;

  slides[slideIndex].classList.add("displaySlide");
  intervalId = setInterval(nextSlide, 3000);
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  const currentSlide = document.querySelector(".displaySlide");
  if (currentSlide) {
    currentSlide.classList.remove("displaySlide");
  }

  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  showSlide(slideIndex - 1);
  intervalId = setInterval(nextSlide, 3000);
}

function nextSlide() {
  clearInterval(intervalId);
  showSlide(slideIndex + 1);
  intervalId = setInterval(nextSlide, 3000);
}
