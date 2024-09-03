'use strict';

// const heading = document.querySelector('h1');
// console.log(heading);

// const heading = new HTMLHeadingElement('h1');
// console.log(heading);

{
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'This is a new paragraph';
  document.body.appendChild(newParagraph);
}

{
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = 'New Item';
  ul.appendChild(li);
}

{
  const div = document.querySelector('div');
  div.innerHTML = '<h2>New Heading</h2><p>New content inside the div.</p>';
}

// after() / before();
{
  const existingElement = document.querySelector('p');
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new element added';
  existingElement.after(newElement);
  // existingElement.before(newElement);
}

// append
{
  const div = document.querySelector('div');
  const newElement1 = document.createElement('span');
  newElement1.textContent = 'New span 1';
  const newElement2 = document.createElement('span');
  newElement2.textContent = 'New span 2';

  div.append(newElement1, newElement2);
}

// prepend()
{
  const div = document.querySelector('div');
  const newHeading = document.createElement('h1');
  newHeading.textContent = 'Heading at the beginning';
  div.prepend(newHeading);
}

// insertAdjacentHTML()
// beforebegin: Before the element
// afterbegin: Inside the element, before the first child
// beforeend: Inside the element, after the last child
// afterend: After the element
{
  const div = document.querySelector('div');
  div.insertAdjacentHTML('afterbegin', '<p>Hello everyone.</p>');
}

// replaceChild();
{
  const parent = document.querySelector('div');
  const newHeading = document.createElement('h3');
  newHeading.textContent = 'This is a new heading';

  const oldHeading = parent.querySelector('h1');

  parent.replaceChild(newHeading, oldHeading);
}

// cloneNode();
{
  const div = document.querySelector('div');
  const clonedDiv = div.cloneNode(true);

  document.body.appendChild(clonedDiv);
}

// removeChild()
{
  const div = document.querySelector('div');
  const h3 = div.querySelector('h3');

  div.removeChild(h3);
}

// insertBefore()
{
  const div = document.querySelector('div');
  const newHeading = document.createElement('h1');
  newHeading.textContent = 'This is a new heading';

  const paragraph = div.querySelector('p');

  div.insertBefore(newHeading, paragraph);
}
