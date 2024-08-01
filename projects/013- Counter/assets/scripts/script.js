"use strict";

let count = 0;
const countNumElem = document.querySelector('.counter__count');
const incButton = document.querySelector('.counter__inc');
const resetButton = document.querySelector('.counter__reset');
const decButton = document.querySelector('.counter__dec');

function setCounter() {
  countNumElem.innerHTML = count;
}

incButton.addEventListener('click',() => {
  count++;
  setCounter();
})

decButton.addEventListener('click',() => {
  count--;
  setCounter();
})

resetButton.addEventListener('click',() => {
  count = 0;
  setCounter();
})