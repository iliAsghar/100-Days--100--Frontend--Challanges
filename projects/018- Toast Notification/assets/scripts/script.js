"use strict";

const generateButton = document.querySelector('.generate-button');
const toastsContainer = document.querySelector('.toasts');

let activeToastCount = 0;
let isButtonActive = true;

let toastTypes = [
  'toast--info',
  'toast--error',
  'toast--success'
]

let toastMessages = [
  "Woah what's this?",
  "Something's fishy..",
  "Another one!",
  "Who are you?!"
]

function generateToast() {
  if(isButtonActive) {
    let newToast = document.createElement('div');
    newToast.classList.add('toast');
    
    let newToastType = toastTypes[Math.floor(Math.random() * toastTypes.length)];
    newToast.classList.add(newToastType);
    
    let newToastMessage = toastMessages[Math.floor(Math.random() * toastMessages.length)];
    newToast.innerHTML = newToastMessage;

    toastsContainer.append(newToast);
    activeToastCount++;
    handleButtonActive();
    
    setTimeout(() => {
      newToast.remove();
      activeToastCount--;
      handleButtonActive();
    }, 2500);
  }
}

function handleButtonActive() {
  if (activeToastCount == 3) {
    isButtonActive = false;
    generateButton.classList.add('generate-button--disabled');
  } else {
    isButtonActive = true;
    generateButton.classList.remove('generate-button--disabled');
  }
}

generateButton.addEventListener('click', generateToast);