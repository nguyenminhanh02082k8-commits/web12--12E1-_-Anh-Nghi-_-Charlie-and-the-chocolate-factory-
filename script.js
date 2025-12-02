window.onload = () => {
  const header = document.querySelector("header");
  header.style.opacity = 1;
  header.style.transform = "translateY(0)";
};

const exploreBtn = document.querySelector(".btn-explore");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    exploreBtn.classList.add("clicked");
    setTimeout(() => exploreBtn.classList.remove("clicked"), 200);
  });
}

const fadeElements = document.querySelectorAll(".section-title, .character-card, .room-card");

window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("fade-show");
    }
  });
});

setTimeout(() => {
  alert("🍫 Welcome to Wonka’s Factory!");
}, 500);

function showGreeting() {
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) message = "Good morning!";
  else if (hour < 18) message = "Good afternoon!";
  else message = "Good evening!";

  document.getElementById("greeting").innerText = message;
}

let count = 0;
function changeBackground() {
  const colors = ["pink", "lightblue", "lightgreen", "lavender", "khaki"];
  document.body.style.background = colors[count % colors.length];
  count++;
  document.getElementById("counter").innerText = "Clicked: " + count;
}

function autoChangeColor() {
  const colors = ["red", "blue", "green", "purple"];
  let i = 0;
  setInterval(() => {
    document.getElementById("title").style.color = colors[i % colors.length];
    i++;
  }, 2000);
}

window.onload = () => {
  showGreeting();
  autoChangeColor();
};

// ===== CAROUSEL =====
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++)
    slides[i].style.display = "none";

  for (let i = 0; i < dots.length; i++)
    dots[i].classList.remove("active-dot");

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active-dot");
}

// Auto slide (optional)
setInterval(() => { plusSlides(1); }, 5000);
