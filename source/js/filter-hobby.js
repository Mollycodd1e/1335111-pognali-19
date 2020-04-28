var hobbyMain = document.querySelector('.filter-form__hobby');
var hobbyToggle = document.querySelector('.filter-form__toggle--hobby');

  hobbyMain.classList.remove('filter-form--nojs');

  hobbyToggle.addEventListener('click', function() {
    if (hobbyMain.classList.contains('filter-form__hobby--closed')) {
      hobbyMain.classList.remove('filter-form__hobby--closed');
      hobbyMain.classList.add('filter-form__hobby--opened');
    }
    else {
      hobbyMain.classList.remove('filter-form__hobby--opened');
      hobbyMain.classList.add('filter-form__hobby--closed');
    }
  });
