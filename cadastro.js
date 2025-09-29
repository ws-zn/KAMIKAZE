const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Seleciona o botão de menu e a lista de navegação
const menuButton = document.querySelector(".menu-button");
const navList = document.querySelector(".nav-access");

// Adiciona evento de clique
menuButton.addEventListener("click", () => {
  navList.classList.toggle("active"); // alterna entre mostrar/esconder
});
