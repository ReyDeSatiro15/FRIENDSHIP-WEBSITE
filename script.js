const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img9.jpg",
  "images/img10.jpg",
  "images/img11.jpg",
  "images/img12.jpg"
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
