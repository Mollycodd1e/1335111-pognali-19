var modalForm = document.querySelector('.modal-country');

if (document.querySelector('.modal-country')) {
  var modalToggle = document.querySelector('.companion-form__select-show-button--modal');
  var selectModal = document.querySelector('.companion-form__select-wrapper--new');
  var deleteButton = document.querySelector('.companion-form__select-close-button--modal-close');

  modalToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (window.innerWidth < 768) {
      if (modalForm.classList.contains('modal-country--open')) {
        modalForm.classList.remove('modal-country--open');
        selectModal.classList.remove('companion-form__select-wrapper--modal-show');
        deleteButton.classList.add('companion-form__select-close-button--modal-close');
        deleteButton.classList.remove('companion-form__select-close-button--modal-open');
      } else {
        modalForm.classList.add('modal-country--open');
        selectModal.classList.add('companion-form__select-wrapper--modal-show');
        deleteButton.classList.remove('companion-form__select-close-button--modal-close');
        deleteButton.classList.add('companion-form__select-close-button--modal-open');
      }
    }

    if (window.innerWidth >= 768) {
      if (modalForm.classList.contains('modal-country--open')) {
        modalForm.classList.remove('modal-country--open');
        selectModal.classList.remove('companion-form__select-wrapper--modal-show');
      } else {
        modalForm.classList.add('modal-country--open');
        selectModal.classList.add('companion-form__select-wrapper--modal-show');
      }
    }
  });
}
