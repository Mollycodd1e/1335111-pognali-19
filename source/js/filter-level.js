var levelMain = document.querySelector('.filter-range');

if (document.querySelector('.filter-range')) {
  levelMain.classList.remove('filter-form__level--nojs');
  var levelToggle = document.querySelector('.filter-form__toggle--level');

  levelToggle.addEventListener('click', function() {
    if (levelMain.classList.contains('filter-form__level--closed')) {
      levelMain.classList.remove('filter-form__level--closed');
      levelMain.classList.add('filter-form__level--opened');
    }
    else {
      levelMain.classList.remove('filter-form__level--opened');
      levelMain.classList.add('filter-form__level--closed');
    }
  });
}
