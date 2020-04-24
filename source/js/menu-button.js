var navMain = document.querySelector('.main-nav');
var navOpen = document.querySelector('.main-nav__toggle');
var navClose = document.querySelector('.main-nav__menu-toggle');

  navMain.classList.remove('main-nav--nojs');

  navOpen.addEventListener('click', function() {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
  },

  navClose.addEventListener('click', function() {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
  }));
