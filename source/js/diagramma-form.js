var circleForm = document.querySelectorAll('.companion-form__round-diagram circle');

for (var i = 0 ; i < circleForm.length; i++) {
  if (window.innerwidth < 768) {
  circleForm[i].setAttribute('r', '48.5');
  circleForm[i].setAttribute('cx', '50');
  circleForm[i].setAttribute('cy', '50');
  } else {
    circleForm[i].setAttribute('r', '45.5');
    circleForm[i].setAttribute('cx', '50');
    circleForm[i].setAttribute('cy', '50');
  }
};


