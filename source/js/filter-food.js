var foodMain = document.querySelector('.filter-form__food');
var foodToggle = document.querySelector('.filter-form__toggle--food');

  foodMain.classList.remove('filter-form--nojs');

  foodToggle.addEventListener('click', function() {
    if (foodMain.classList.contains('filter-form__food--closed')) {
      foodMain.classList.remove('filter-form__food--closed');
      foodMain.classList.add('filter-form__food--opened');
    }
    else {
      foodMain.classList.remove('filter-form__food--opened');
      foodMain.classList.add('filter-form__food--closed');
    }
  });
