/*var navScroll = document.querySelector('.main-nav')

window.addEventListener('scroll', function(e) {
  var lastPosition = window.scrollY
  if (lastPosition > 73 ) {
    navScroll.classList.add('.main-nav--scrolled')
  } else if (navScroll.classList.contains('.main-nav--scrolled')) {
    navScroll.classList.remove('.main-nav--scrolled')
  } else {
    navScroll.classList.remove('.main-nav--scrolled')
  }
})*/

var nav = document.querySelector('.main-nav');
window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY < 74) {
        nav.classList.remove('main-nav--scrolled');
    } else {
      nav.classList.add('main-nav--scrolled');
    }
});
