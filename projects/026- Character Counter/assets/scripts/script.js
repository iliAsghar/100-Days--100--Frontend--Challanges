"use strict";

const container = document.querySelector('.container');
const inputArea = document.querySelector('.input');
const stats = document.querySelector('.stats');
const entered = document.querySelector('.stats__entered');

inputArea.addEventListener('keyup',() => {
  entered.innerHTML = inputArea.value.length;
  if(inputArea.value.length === 50) {
    container.classList.add('container--shake');
    setTimeout(() => {
      container.classList.remove('container--shake');
    }, 250);
    stats.style.color = 'red';
  } else {
    container.classList.remove('container--shake')
    stats.style.color = 'black';
  }
})