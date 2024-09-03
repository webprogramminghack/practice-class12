'use strict';

const box3 = document.querySelector('.box3');

// box3.addEventListener('click', function (event) {
//   console.log('click');
// });

const divs = document.querySelectorAll('div');

function logClassValue(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

divs.forEach((div) => {
  div.addEventListener('click', logClassValue, {
    capture: false,
  });
});
