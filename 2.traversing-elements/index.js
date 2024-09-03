'use strict';

// const text = document.getElementsByClassName('.text')[0];
const text = document.querySelector('.text');
console.log(text.parentElement);

{
  const container = document.querySelector('.container');

  const firstChild = container.firstElementChild;
  const lastChild = container.lastElementChild;
}

{
  const container = document.querySelector('.container');

  const firstChild = container.firstElementChild;
  const secondParagraph = firstChild.nextElementSibling;
  const firstParagraph = secondParagraph.previousElementSibling;

  console.log(firstParagraph);
  console.log(secondParagraph);
}

// mengambil semua element child
{
  const container = document.querySelector('.container');
  const paragraphs = container.children;
  console.log(paragraphs);
}
