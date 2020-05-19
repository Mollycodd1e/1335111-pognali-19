var formInputCzech = document.querySelector('.companion-form__entertainment-input--czech');

if (document.querySelector('.companion-form__entertainment-input--czech')) {
  var formSubmitButtonCzech = document.querySelector('.companion-form__form-button--czech');
  var showErrorCzech = document.querySelector('.companion-form__error-czech');

  formInputCzech.addEventListener("focus", function () {
    formInputCzech.classList.remove('companion-form__entertainment-input--error-czech');
    showErrorCzech.classList.remove('companion-form__error--show-czech');
  }),

  formSubmitButtonCzech.addEventListener("click", function (evt) {
    if (!formInputCzech.textContent) {
      evt.preventDefault();
      formInputCzech.classList.add('companion-form__entertainment-input--error-czech');
      showErrorCzech.classList.add('companion-form__error--show-czech');
    } else {
      formInputCzech.classList.remove('companion-form__entertainment-input--error-czech');
      showErrorCzech.classList.remove('companion-form__error--show-czech');
    }
  });
}
