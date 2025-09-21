// ==================== SLIDER ====================
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let slideInterval;

// Mostrar slide específico
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

// Próximo slide
function nextSlide() {
  let newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}

// Slide anterior
function prevSlideFunc() {
  let newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
}

// Dots clicáveis
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    resetAutoSlide();
  });
});

// Botões de navegação
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlideFunc();
  resetAutoSlide();
});

// Auto slide
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Inicialização
showSlide(currentIndex);
startAutoSlide();


// ==================== MENU MOBILE ====================
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector("header .second-layer").prepend(menuToggle);

const navContent = document.querySelector(".nav-content");

menuToggle.addEventListener("click", () => {
  navContent.style.display = navContent.style.display === "flex" ? "none" : "flex";
  navContent.style.flexDirection = "column";
  navContent.style.background = "#000";
  navContent.style.position = "absolute";
  navContent.style.top = "70px";
  navContent.style.left = "0";
  navContent.style.width = "100%";
  navContent.style.padding = "15px";
  navContent.style.gap = "15px";
});


// ==================== CARRINHO (BÁSICO) ====================
const addToCartButtons = document.querySelectorAll(".add-to-cart, .produto button");
const cartCount = document.querySelector(".cart-count");

let cartItems = 0;

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartItems++;
    cartCount.textContent = cartItems;
  });
});
