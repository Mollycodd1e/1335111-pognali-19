var validationForm = document.querySelector('.companion-form');

if (validationForm) {

  validationForm.addEventListener('invalid', checkForm, true)

  target.addEventListener("input", function() {
    target.classList.remove('companion-form__entertainment-input--error');
    errorMessage.classList.remove('companion-form__error--show');
  })

  function checkForm(evt) {
    var target = evt.target;
    var inputWrapper = target.parentElement;
    var errorMessage = inputWrapper.querySelector('.companion-form__error');

    target.setCustomValidity(' ');

    target.classList.add('companion-form__entertainment-input--error');
    errorMessage.classList.add('companion-form__error--show');

    console.log('невалидно');

    inputWrapper.addEventListener("input", function(evt) {
      target.classList.remove('companion-form__entertainment-input--error');
      errorMessage.classList.remove('companion-form__error--show');
    })
  }
}
