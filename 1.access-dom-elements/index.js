'use strict';

const msg = document.getElementById('message')[0];
// console.log(msg);
// console.log(msg instanceof Node);

const headings = document.getElementsByTagName('h1');
// console.log(headings[1]);

const container = document.getElementById('container');

const messages = container.getElementsByClassName('message');

// console.log(document instanceof Node);
// console.log(container instanceof Node);

// console.log(
//   container.__proto__.__proto__.__proto__.__proto__ ===
//     document.__proto__.__proto__.__proto__
// );

// use querySelector
// versatile -> tag / id / className
{
  const message = document.querySelector('#container');
  // console.log('message :>> ', message);

  const messages = document
    .querySelector('#container')
    .querySelectorAll('.message');
  console.log('messages :>> ', messages);
}

// accessor methods reside in the prototype of the document and the element, not in the Node prototype
console.log(Document.prototype.hasOwnProperty('querySelector'));
console.log(Element.prototype.hasOwnProperty('querySelectorAll'));
console.log(Node.prototype.hasOwnProperty('querySelectorAll'));
