var modalForm = document.querySelector('.modal-country');
var modal = document.querySelector('.companion-form__select-show-button--modal');
var closeModal = document.querySelector('.modal-country__close-button');

modal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.add("modal-open");
});

closeModal.addEventListener('click', function() {
  modalForm.classList.remove("modal-open");
});
