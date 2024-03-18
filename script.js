const heroImage = document.getElementById('hero-image');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  heroImage.style.opacity = 1 - scrollPosition / 200; // Adjust opacity based on scroll
});
