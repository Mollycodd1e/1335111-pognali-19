var circleCatalog = document.querySelectorAll('.companion-card__round-diagram circle');

if (document.querySelector('.companion-form__round-diagram circle')) {
  for (var i = 0 ; i < circleCatalog.length; i++) {
    if (window.innerwidth < 768) {
    circleCatalog[i].setAttribute('r', '21.5');
    } else {
      circleCatalog[i].setAttribute('r', '28.5');
    }
  };
}
