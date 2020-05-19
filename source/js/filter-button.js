var filterMain = document.querySelector('.country-filter');

if (document.querySelector('.country-filter')) {
  filterMain.classList.remove('country-filter--nojs');
  var filterToggle = document.querySelector('.country-filter__toggle');
  var filterClose = document.querySelector('.country-filter__close');

  filterToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (filterMain.classList.contains('country-filter--closed')) {
      filterMain.classList.remove('country-filter--closed');
      filterMain.classList.add('country-filter--opened');
    } else {
      filterMain.classList.add('country-filter--closed');
      filterMain.classList.remove('country-filter--opened');
    }
  });

  filterClose.addEventListener('click',function() {
  filterMain.classList.remove('country-filter--opened');
  filterMain.classList.add('country-filter--closed');
  });
}
