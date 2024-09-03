'use strict';

const inputElement = document.querySelector('#username');
const attributes = inputElement.attributes;

for (let i = 0; i < attributes.length; i++) {
  // console.log(attributes[i]);
  // console.log(`${attributes[i].name} = ${attributes[i].value}`);
}

// getAttribute()
{
  const inputElement = document.querySelector('#username');
  const idValue = inputElement.getAttribute('id');
  console.log(idValue);
}

// set attribute and remove attribute
{
  const inputElement = document.querySelector('#username');
  inputElement.setAttribute('placeholder', 'Enter username');
  inputElement.setAttribute('value', 'John Doe');
  inputElement.setAttribute('class', 'bg-red');
  inputElement.removeAttribute('class');
}

// hasAttribute()
{
  const inputElement = document.querySelector('#username');
  const hasId = inputElement.hasAttribute('id');
  console.log(hasId);
}
