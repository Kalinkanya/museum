const burger = document.querySelector('.header__burger');
const welcome_content = document.querySelector('.welcome__content');
const burger_menu = document.querySelector('.header__burger-wrapper');
const burger_links = document.querySelectorAll('.header__burger-menu__link');
const body = document.querySelector('.body');
const overlay = document.querySelector('.overlay');

function toggleBurgermenu() {
  burger.classList.toggle('active');
  welcome_content.classList.toggle('hidden');
  burger_menu.classList.toggle('visible');
  body.classList.toggle('no-scroll');
  overlay.classList.toggle('visible');
}

export default function initBurgerMenu() {
  burger.addEventListener('click', toggleBurgermenu);
  burger_links.forEach((e) => {
    e.addEventListener('click', toggleBurgermenu);
  });
  overlay.addEventListener('click', toggleBurgermenu);
}