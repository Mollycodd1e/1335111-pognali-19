var circleCatalog = document.querySelectorAll('.companion-card__round-diagram circle');

for (var i = 0 ; i < circleCatalog.length; i++) {
  if (window.innerWidth < 768) {
    circleCatalog[i].setAttribute('r', '21.5');
    circleCatalog[i].setAttribute('cx', '30');
    circleCatalog[i].setAttribute('cy', '30');
  } else {
    circleCatalog[i].setAttribute('r', '28.5');
    circleCatalog[i].setAttribute('cx', '30');
    circleCatalog[i].setAttribute('cy', '30');
  }
};
