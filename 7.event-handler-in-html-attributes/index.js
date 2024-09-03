'use strict';

function displayMsg(e) {
  // console.log('Button clicked from Fn');
  // console.log(e.target);
}

const button = document.querySelector('button');

button.onclick = function (e) {
  console.log(e.target.textContent);
};
