var nav = document.querySelector('.main-nav');
window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY < 74) {
      nav.classList.remove('main-nav--scrolled');
    } else {
      nav.classList.add('main-nav--scrolled');
    }
});
