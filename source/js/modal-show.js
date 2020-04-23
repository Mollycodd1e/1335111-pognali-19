var link = document.querySelector('.profile__button');
var popup = document.querySelector('.modal-info');
var close = document.querySelecetor('.modal__button');

link.addEventListener('click', function() {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener('click', function() {
   popup.classList.remove("modal-show");
  });
