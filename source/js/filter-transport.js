var transportMain = document.querySelector('.filter-form__fieldset--transport');
var transportToggle = document.querySelector('.filter-form__toggle--transport');

  transportMain.classList.remove('filter-form--nojs');

  transportToggle.addEventListener('click', function() {
    if (transportMain.classList.contains('filter-form__fieldset--closed')) {
      transportMain.classList.remove('filter-form__fieldset--closed');
      transportMain.classList.add('filter-form__fieldset--opened');
    }
    else {
      transportMain.classList.remove('filter-form__fieldset--opened');
      transportMain.classList.add('filter-form__fieldset--closed');
    }
  });
