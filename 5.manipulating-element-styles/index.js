'use strict';

// style property
{
  const divElement = document.querySelector('#myDiv');

  divElement.style.color = 'blue';
  divElement.style.backgroundColor = 'yellow';
  divElement.style.fontSize = '20px';
}

// css text
{
  const divElement = document.querySelector('#myDiv');

  divElement.style.cssText =
    'color: red; background-color: lightgrey; font-size: 24px;';
}

// getComputedStyle
{
  const divElement = document.querySelector('#myDiv');

  // console.log(divElement.style.border);
  // console.log(divElement.style.padding);

  const computedStyle = window.getComputedStyle(divElement);

  console.log(computedStyle.border);
  console.log(computedStyle.padding);
}

// className Property
{
  const divElement = document.querySelector('#myDiv');

  // divElement.className = 'm-top';
}

// classList
{
  const divElement = document.querySelector('#myDiv');

  divElement.classList.add('m-top');

  divElement.classList.remove('m-top');

  if (divElement.classList.contains('m-top')) {
    console.log('Element has m-top');
  }

  divElement.classList.toggle('m-top');
  divElement.classList.toggle('m-top');
}
