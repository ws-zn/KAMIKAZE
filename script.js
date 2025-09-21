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

function initDropdownMobile() {
  if (window.innerWidth <= 768) {
    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
      toggle.addEventListener("click", e => {
        e.preventDefault();
        let menu = toggle.nextElementSibling;

        // Fecha outros antes de abrir
        document.querySelectorAll(".dropdown-menu").forEach(m => {
          if (m !== menu) m.classList.remove("ativo");
        });

        // Alterna o menu atual
        menu.classList.toggle("ativo");
      });
    });

    // Fecha ao clicar fora
    document.addEventListener("click", e => {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("ativo"));
      }
    });
  }
}

// Inicializa
initDropdownMobile();

// Reinicializa ao redimensionar
window.addEventListener("resize", () => {
  document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("ativo"));
  initDropdownMobile();
});


// Inicializa e revalida ao redimensionar
initDropdownMobile();
window.addEventListener("resize", () => {
  document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("ativo"));
  initDropdownMobile();
});


// ==================== MENU MOBILE ====================
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector("header .second-layer").prepend(menuToggle);

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
