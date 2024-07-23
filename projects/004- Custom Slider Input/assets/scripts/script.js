"use strict";

const sliderInput = document.querySelector('.slider-input');
const sliderTooltip = document.querySelector('.slider-tooltip');
const root = document.querySelector(':root');

function setSlider() {
  sliderTooltip.innerHTML = sliderInput.value + '%';

  let sliderWidth = parseFloat(window.getComputedStyle(sliderInput).width);
  let screenWidth = window.innerWidth;

  let factor;

  if (screenWidth < 350){
    factor = 0.91;
  } else if (screenWidth < 430){
    factor = 0.93;
  } else {
    factor = 0.945;
  }
  
  let xFix = (sliderWidth * factor) / 100 * (sliderInput.value - 50);
  root.style.setProperty('--x-fix', `${xFix}px`);
}

setSlider();

sliderInput.addEventListener('input', setSlider);
window.addEventListener('resize', setSlider);
