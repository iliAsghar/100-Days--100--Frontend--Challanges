"use strict";

const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('.button');

for (let button of buttons) {
  button.addEventListener('click', (e) => {
    performKey(button);
  })
}

function performKey (keyElem) {
  let keyValue = keyElem.dataset.key;
  let screenValue = screen.innerText;
  if (keyValue === 'add') {
    if(screenValue.length !== 0) {
      alert(`added ${screenValue} to the contacts.`);
    }
  } else if (keyValue === 'call') {
    alert(`calling ${screenValue}...`);
  } else if (keyValue === 'back') {
    screen.innerHTML = screenValue.slice(0,-1);
  } else {
    if (screenValue.length > 10) {
      return;
    } else {
      screen.innerHTML = screenValue + keyValue;
    }
  }
}