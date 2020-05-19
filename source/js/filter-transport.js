var transportMain = document.querySelector('.filter-form__fieldset--transport');

if (document.querySelector('.filter-form__fieldset--transport')) {
  transportMain.classList.remove('filter-form__fieldset--nojs');
  var transportToggle = document.querySelector('.filter-form__toggle--transport');

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
}
