
let currentSlide = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const button = document.getElementById('showSlider');
const header = document.getElementById('birthdayHeader');

button.addEventListener('click', () => {
  slider.classList.remove('hidden');
  header.classList.remove('hidden');
  button.style.display = 'none';
  showSlide(currentSlide);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}
