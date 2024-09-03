'use strict';

const button = document.querySelector('#myButton');

function handleClick1() {
  console.log('Handler 1 runs');
}

function handleClick2() {
  console.log('Handler 2 runs');
}

// tambahkan event listenernya
button.addEventListener('click', handleClick1);
button.addEventListener('click', handleClick2);

button.removeEventListener('click', handleClick1);
