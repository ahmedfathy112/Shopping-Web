function show1() {
  document.getElementById("links-1").classList.toggle("mangment-links");
}

function show2() {
  document.getElementById("links-2").classList.toggle("mangment-links");
}
function show3() {
  document.getElementById("links-3").classList.toggle("mangment-links");
}
function show4() {
  document.getElementById("links-4").classList.toggle("mangment-links");
}

// show nave in responsive

function showNav() {
  document.getElementById("head").classList.toggle("show-nav");
}

const elements = document.querySelectorAll(".link-disabeld");

elements.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

// cereat slider

let slideIndex = 0;
const slides = document.querySelectorAll(".slider-container .slider img");
const totalSlides = slides.length;
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function slideShow(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector(
    ".slider-container .slider"
  ).style.transform = `translatex(-${slideWidth * slideIndex}px)`;
}

function nextSlide() {
  slideShow(1);
}
function prevSlide() {
  slideShow(-1);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
setInterval(nextSlide, 2000);

// create main auto slider

const slider = document.querySelector(".auto-slider-container .slider");
const sliderItems = slider.children;
const sliderNav = document.createElement("div");
let currentSlide = 0;

// Create navigation buttons
for (let i = 0; i < sliderItems.length; i++) {
  const navButton = document.createElement("button");
  navButton.textContent = i + 1;
  navButton.addEventListener("click", () => goToSlide(i));
  sliderNav.appendChild(navButton);
}

sliderNav.classList.add("slider-nav");
document.querySelector(".auto-slider-container").appendChild(sliderNav);

// Set the width of the slider based on the number of slides
slider.style.width = `${sliderItems.length * 100}%`;

// Go to a specific slide
function goToSlide(index) {
  currentSlide = index;
  slider.style.transform = `translateX(-${
    currentSlide * (100 / sliderItems.length)
  }%)`;
  updateNavButtons();
}

// Update navigation buttons based on current slide
function updateNavButtons() {
  const navButtons = sliderNav.querySelectorAll("button");
  navButtons.forEach((button, index) => {
    if (index === currentSlide) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide++;
  if (currentSlide >= sliderItems.length) {
    currentSlide = 0;
  }
  slider.style.transform = `translateX(-${
    currentSlide * (100 / sliderItems.length)
  }%)`;
  updateNavButtons();
}, 2000);
