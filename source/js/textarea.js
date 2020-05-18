var formSubmit = document.querySelector('.companion-form');
var formInput = document.querySelector('.companion-form__entertainment-input');
var formSubmitButton = document.querySelector('.companion-form__form-button');
var showError = document.querySelector('.companion-form__error');

formSubmitButton.addEventListener("click", function (evt) {
  if (!formInput.textContent) {
    evt.preventDefault();
    formInput.classList.add('companion-form__entertainment-input--error');
    showError.classList.add('companion-form__error--show');
  } else {
    formInput.classList.remove('companion-form__entertainment-input--error');
    showError.classList.remove('companion-form__error--show');
  }
});
