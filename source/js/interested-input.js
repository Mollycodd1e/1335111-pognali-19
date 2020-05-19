var indexForm = document.querySelector('.interested__form');

if (document.querySelector('.interested__form')) {
  var indexInput = document.querySelector('.interested__input');
  var indexFormButton = document.querySelector('.interested__button');

  indexForm.addEventListener("submit", function (evt) {
    if (!indexInput.value) {
      evt.preventDefault();
      indexInput.classList.add('interested__input--error');
      indexInput.placeholder = 'Введите e-mail';
    } else {
      indexInput.classList.remove('interested__input--error');
    }
  });
}
