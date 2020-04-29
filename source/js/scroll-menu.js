var pageScroll = document.querySelector('.page-header');
var mainNavScroll = document.querySelector('.main-nav');

window.addEventListener('scroll', function() {
  if (window.innerWidth < 1440) {
    mainNavScroll.classList.add('main-nav--scrolled');
    pageScroll.classList.add('page-header--scrolled');
    blueLogo();

  } else

  if (window.innerWidth >= 1440 && window.pageYOffset >= 750) {
    mainNavScroll.classList.add('main-nav--scrolled');
    pageScroll.classList.add('page-header--scrolled');
    blueLogo();
  }

  if ((window.pageYOffset === 0 && mainNavScroll.classList.contains('.main-nav--opened') === false) || (window.innerWidth >= 1440 && window.pageYOffset < 750)) {
    mainNavScroll.classList.remove('main-nav--scrolled');
    pageScroll.classList.remove('page-header--scrolled');
      whiteLogo();
  }
});

