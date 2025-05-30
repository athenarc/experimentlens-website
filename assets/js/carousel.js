let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function plusSlides(n) {
  slides[slideIndex].style.opacity = 0;
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  slides[slideIndex].style.opacity = 1;
}
