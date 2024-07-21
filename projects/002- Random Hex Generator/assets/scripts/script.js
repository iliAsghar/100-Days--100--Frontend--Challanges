"use strict";

const hexElem = document.querySelector('.color-hex')
const changeButton = document.querySelector('.change-color-btn');

changeButton.addEventListener('click',() => {
  randomHexGenerator();
})

function randomHexGenerator(){
  let newHex = generateHex();
  hexElem.innerHTML = newHex;
  document.body.style.backgroundColor = newHex;
}

randomHexGenerator();

function generateHex(){
  let hexValues = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  let hexString = '';
  for (let i = 0; i < 6; i++) {
    let thing = Math.floor(Math.random() * hexValues.length);
    let newHexDigit = hexValues[thing];
    hexString += newHexDigit;
  }
  return ('#' + hexString);
}

function typeLetters(element, string){
  for(let i = 0; i<string.length; i++){
    setTimeout(() => {
      element.insertAdjacentHTML('beforeend',string[i]);
    }, (i * 200));
  }
}

hexElem.addEventListener('click',() => {
  navigator.clipboard.writeText(hexElem.innerHTML.toUpperCase());
  alert('Hex Copied!')
})