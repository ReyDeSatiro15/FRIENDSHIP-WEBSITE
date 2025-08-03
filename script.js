const images = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
  'img6.jpg',
  'img7.jpg',
  'img8.jpg',
  'img9.jpg',
  'img10.jpg',
  'img11.jpg',
  'img12.jpg'
];

const messages = [
  "Hey Milauni! Ur the one who keeps the group alive...Who is the ultimate kid and bounding Mom tooo - Ishita 💕",
  "Our inside jokes will never end — best moments! - Harin 😆",
  "Through thick and thin — you’ve always been here! - Vrinda 🌟",
  "U are my college ka survival kit. Without you I wouldn't even know how I would have survived this college. ! - Nupur ✨",
  "Our endless late-night talks — never forget! - Suhana 🌙",
  "Adventure buddy forever — thank you! - Yashraj🚀",
  "You light up every room — keep shining! - Vansh☀️",
  "Forever grateful for you! Happy Friendship Day! - Everyone 🫶"
];

let currentIndex = 0;

function showSlide() {
  const img = document.getElementById('slideImage');
  const msg = document.getElementById('friendMessage');

  if (img) {
    img.classList.remove('fade');
    void img.offsetWidth;
    img.src = images[currentIndex];
    img.classList.add('fade');
  }

  if (msg) {
    msg.innerText = messages[currentIndex];
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide();
}

setInterval(nextSlide, 4000);

showSlide();
