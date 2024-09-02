function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openLightbox(src) {
  document.getElementById('lightbox').style.display = 'block';
  document.getElementById('lightbox-img').src = src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}