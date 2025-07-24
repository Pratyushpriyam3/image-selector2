let images = [
  "images/img1.jpg.jpg",
  "images/img2.jpg.jpeg",
  "images/img3.jpg.jpeg",
  "images/img4.jpg.jpeg",
  "images/img5.jpg.jpeg",
  "images/img6.jpg.jpeg",
  "images/img7.jpg.jpeg",
  "images/img8.jpg.jpeg",
  "images/img9.jpg.jpeg",
  "images/img10.jpg.jpeg"
];

let currentIndex = 0;
let selected = [];

const quotes = [
"Which One Would You Prefer?",
"Which Picture Is Better In Your Opinion?",
"Which Picture Is Better",
"Nice Selection, What About This One?",
"This Is A Tough One, Select Thoughtfully",
];

const gradients = [
  "linear-gradient(to right, #8360c3, #2ebf91)",
  "linear-gradient(to right, #ffecd2, #fcb69f)",
  "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  "linear-gradient(to right, #ff9a9e, #fad0c4)",
  "linear-gradient(to right, #89f7fe, #66a6ff)"
];

function startSelection() {
  document.getElementById('startSection').style.display = 'none';
  document.getElementById('imageSection').style.display = 'block';
  updateProgress();
  showImages();
}

function showImages() {
  if (currentIndex >= images.length) {
    document.getElementById('imageSection').style.display = 'none';
    document.getElementById('endMessage').style.display = 'block';
    showSelectedImages();
    confetti();
    return;
  }

  const left = document.getElementById('leftImage');
  const right = document.getElementById('rightImage');
  left.src = images[currentIndex];
  right.src = images[currentIndex + 1];

  left.classList.remove('selected');
  right.classList.remove('selected');

  document.getElementById('quote').innerText =
    quotes[Math.floor(Math.random() * quotes.length)];

  document.body.style.background =
    gradients[Math.floor(Math.random() * gradients.length)];
}

function choose(side) {
  const left = document.getElementById('leftImage');
  const right = document.getElementById('rightImage');

  if (side === 'left') {
    left.classList.add('selected');
    selected.push(left.src);
  } else {
    right.classList.add('selected');
    selected.push(right.src);
  }

  setTimeout(() => {
    currentIndex += 2;
    updateProgress();
    showImages();
  }, 600);
}

function showSelectedImages() {
  const container = document.getElementById('selectedImages');
  container.innerHTML = '';
  selected.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    container.appendChild(img);
  });
}

function updateProgress() {
  const percent = ((currentIndex + 2) / images.length) * 100;
  document.getElementById('progressBar').style.width = `${Math.min(percent, 100)}%`;
}

function confetti() {
  window.confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) music.play();
  else music.pause();
}
