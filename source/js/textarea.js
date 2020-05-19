var formInputBosnia = document.querySelector('.companion-form__entertainment-input--bosnia');

if (document.querySelector('.companion-form__entertainment-input--bosnia')) {
  var formSubmitButton = document.querySelector('.companion-form__form-button');
  var showError = document.querySelector('.companion-form__error');

  formInputBosnia.addEventListener("focus", function () {
    formInputBosnia.classList.remove('companion-form__entertainment-input--error');
    showError.classList.remove('companion-form__error--show');
  }),

  formSubmitButton.addEventListener("click", function (evt) {
    if (!formInputBosnia.textContent) {
      evt.preventDefault();
      formInputBosnia.classList.add('companion-form__entertainment-input--error');
      showError.classList.add('companion-form__error--show');
    } else {
      formInputBosnia.classList.remove('companion-form__entertainment-input--error');
      showError.classList.remove('companion-form__error--show');
    }
  });
}
