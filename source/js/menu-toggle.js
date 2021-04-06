import { throttle } from './utils.js';

document.documentElement.classList.remove('nojs');

const MAX_MOBILE_WIDTH = 767;

const toggle = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');

const changeButtonLabel = () => {
  if (toggle.classList.contains('burger__active')) {
    toggle.children[0].innerText = 'Закрыть меню';
  } else {
    toggle.children[0].innerText = 'Открыть меню';
  }
};

const showerMenu = function () {
  document.documentElement.classList.toggle('page--menu-open');
  toggle.classList.toggle('burger__active');
  menu.classList.toggle('header__menu-open');

  changeButtonLabel();
};

const onMenuLinkClick = evt => {
  if (evt.target.tagName === 'A') {
    showerMenu();
  }
};

const onMenuButtonClick = () => {
  throttle(showerMenu, 150)();
};

toggle.addEventListener('click', onMenuButtonClick);
menu.addEventListener('click', onMenuLinkClick);

window.addEventListener('optimizedResize', () => {
  if (window.innerWidth > MAX_MOBILE_WIDTH) {
    toggle.removeEventListener('click', onMenuButtonClick);
    menu.removeEventListener('click', onMenuLinkClick);
  } else {
    toggle.addEventListener('click', onMenuButtonClick);
    menu.addEventListener('click', onMenuLinkClick);
  }
});
