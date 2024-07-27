"use strict";

const digitInputs = Array.from(document.querySelectorAll('.field__input'));

digitInputs.forEach((digitInput, index) => {
  digitInput.addEventListener('input',(e) => {
    if(e.data) {
      digitInput.value = e.data;
      if(index < (digitInputs.length - 1)) {
        digitInputs[index+1].focus();
      }
    }
  })
  digitInput.addEventListener('keydown',(e) => {
    if(e.key == "Backspace") {
      e.preventDefault();
      digitInput.value = null;
      if(index > 0) {
        digitInputs[index-1].focus();
      }
    } else if(e.which === 38 || e.which === 40) {
      e.preventDefault();
    } else if(e.key == "Enter") {
      submitForm();
    }
  })
})

const submitButton = document.querySelector('.submit-btn');
const resultModal = document.querySelector('.result-modal');

submitButton.addEventListener('click',() => {
  submitForm();
})

function submitForm() {
  let code = getFullCode();
  if(code.length != 6) {
    alert('Please enter the 6 digit code currectly!');
    digitInputs[0].focus();
  } else {
    setTimeout(() => {
      resultModal.classList.add('result-modal--active');
      setTimeout(() => {
        location.href = location.href;
      }, 2500);
    }, 500)
  }
}

function getFullCode() {
  return digitInputs.reduce((str, current) => {
    return String(str) + current.value;
  },'')
}

window.addEventListener('load',() => {
  digitInputs[0].focus();
})