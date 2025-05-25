// IMAGE SLIDER

(function() {
  // Select all images in the slider
  const slides = document.querySelectorAll(".slides img");
  let slideIndex = 0;
  let intervalId = null;

  document.addEventListener("DOMContentLoaded", initializeSlider);

  function initializeSlider(){
     if (slides.length === 0) return;

     slides[slideIndex].classList.add("displaySlide");
     intervalId = setInterval(nextSlide, 3000);
     }
  }
})();

function showSlide(index) {

    if(index >= slides.length) {
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length - 1;
    }

const currentSlide = document.querySelector(".displaySlide");
if (currentSlide) {
    currentSlide.classList.remove("displaySlide");
}
slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 3000);
}
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}