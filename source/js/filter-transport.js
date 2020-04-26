var transportMain = document.querySelector('.filter-form__transport-list');
var transportToggle = document.querySelector('.filter-form__toggle--transport');

  transportMain.classList.remove('filter-form--nojs');

  transportToggle.addEventListener('click', function() {
    if (transportMain.classList.contains('filter-form__transport-list--closed')) {
      transportMain.classList.remove('filter-form__transport-list--closed');
      transportMain.classList.add('filter-form__transport-list--opened');
    }
    else {
      transportMain.classList.remove('filter-form__transport-list--opened');
      transportMain.classList.add('filter-form__transport-list--closed');
    }
  });
