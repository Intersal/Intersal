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