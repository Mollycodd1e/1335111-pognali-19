var formSubmit = document.querySelector('.companion-form');
var formInput = document.querySelector('.companion-form__entertainment-input--bosnia');
var formSubmitButton = document.querySelector('.companion-form__form-button');

formSubmitButton.addEventListener("click", function (evt) {
  if (!formInput.value) {
    evt.preventDefault();
}});
