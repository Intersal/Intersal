document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slideshow-container .slide');
    let current = 0;
    slides[current].style.opacity = 1;
    setInterval(() => {
        slides[current].style.opacity = 0;
        current = (current + 1) % slides.length;
        slides[current].style.opacity = 1;
    }, 3000);
});

window.addEventListener('scroll', function() {
  const neon = document.getElementById('sticky-neon');
  const header = document.querySelector('header');
  const neonTop = neon.getBoundingClientRect().top;

  if (neonTop <= 0) {
    neon.classList.add('stuck');
    header.classList.add('hide-navbar');
  } else {
    neon.classList.remove('stuck');
    header.classList.remove('hide-navbar');
  }
});