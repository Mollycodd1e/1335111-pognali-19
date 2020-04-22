var filterMain = document.querySelector('.country-filter');
var filterToggle = document.querySelector('.country-filter__toggle');

  filterMain.classList.remove('country-filter--nojs');

  filterToggle.addEventListener('click', function() {
    if (filterMain.classList.contains('country-filter--closed')) {
      filterMain.classList.remove('country-filter--closed');
      filterMain.classList.add('country-filter--opened');
    } else {
      filterMain.classList.add('country-filter--closed');
      filterMain.classList.remove('country-filter--opened');
    }
  });
