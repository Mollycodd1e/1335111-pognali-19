var musicMain = document.querySelector('.filter-form__music');
var musicToggle = document.querySelector('.filter-form__toggle--music');

  musicMain.classList.remove('filter-form--nojs');

  musicToggle.addEventListener('click', function() {
    if (musicMain.classList.contains('filter-form__music--closed')) {
      musicMain.classList.remove('filter-form__music--closed');
      musicMain.classList.add('filter-form__music--opened');
    }
    else {
      musicMain.classList.remove('filter-form__music--opened');
      musicMain.classList.add('filter-form__music--closed');
    }
  });

