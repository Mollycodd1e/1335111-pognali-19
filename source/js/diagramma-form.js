var circleForm = document.querySelectorAll('.companion-form__round-diagram circle');

if (document.querySelector('.companion-form__round-diagram circle')) {
  for (var j = 0 ; j < circleForm.length; j++) {
    if (window.innerwidth < 768) {
    circleForm[j].setAttribute('r', '48.5');
    circleForm[j].setAttribute('cx', '50');
    circleForm[j].setAttribute('cy', '50');
    } else {
      circleForm[j].setAttribute('r', '45.5');
      circleForm[j].setAttribute('cx', '50');
      circleForm[j].setAttribute('cy', '50');
    }
  };
}
