'use strict';

// mouse event
const mouseButton = document.querySelector('#mouseButton');

mouseButton.addEventListener('click', () => alert('Button clicked!'));
mouseButton.addEventListener('mouseover', () => console.log('Mouse over!'));
mouseButton.addEventListener('mouseout', () => console.log('Mouse out!'));

// keyboard event
const inputField = document.querySelector('#inputField');

inputField.addEventListener('keydown', (event) =>
  console.log('Key down:', event.key)
);
inputField.addEventListener('keyup', (event) =>
  console.log('Key up:', event.key)
);
inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    console.log('Enter key pressed');
  }
});

// form events
const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted!');
});

// window events
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log(`Window resized: Width = ${width}, Height = ${height}`);
});

window.addEventListener('scroll', () => {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  console.log(`Page scrolled: X = ${scrollX}, Y = ${scrollY}`);
});

window.addEventListener('load', () => {
  console.log('Page loaded');
});
