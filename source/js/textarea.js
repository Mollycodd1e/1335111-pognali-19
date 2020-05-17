var formSubmit = document.querySelector('.companion-form');
var formInput = document.querySelector('.companion-form__entertainment-input');
var formSubmitButton = document.querySelector('.companion-form__form-button');

formSubmitButton.addEventListener("submit", function (evt) {
  if (!formInput.value) {
    evt.preventDefault();
    formInput.classList.add('companion-form__entertainment-input--error');
    formInput.placeholder = 'Введите e-mail';
  } else {
    formInput.classList.remove('companion-form__entertainment-input--error');
  }
});
