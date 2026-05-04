let index = 0;

function moveSlide(direction) {
  const track = document.getElementById("galleryTrack");
  const cards = document.querySelectorAll(".gallery-card");
  const visible = 3;
  const total = cards.length;

  index += direction;

  // LOOP
  if (index < 0) {
    index = total - visible;
  }
  if (index > total - visible) {
    index = 0;
  }

  const gap = 20;
  const cardWidth = cards[0].offsetWidth + gap;

  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });