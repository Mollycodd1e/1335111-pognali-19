var hobbyMain = document.querySelector('.filter-form__fieldset--hobby');

if (document.querySelector('.filter-form__fieldset--hobby')) {
  hobbyMain.classList.remove('filter-form__fieldset--nojs');
  var hobbyToggle = document.querySelector('.filter-form__toggle--hobby');

  hobbyToggle.addEventListener('click', function() {
    if (hobbyMain.classList.contains('filter-form__fieldset--closed')) {
      hobbyMain.classList.remove('filter-form__fieldset--closed');
      hobbyMain.classList.add('filter-form__fieldset--opened');
    }
    else {
      hobbyMain.classList.remove('filter-form__fieldset--opened');
      hobbyMain.classList.add('filter-form__fieldset--closed');
    }
  });
}
