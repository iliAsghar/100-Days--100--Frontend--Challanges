"use strict";

const lightCircle = document.querySelector('.light-circle');

function setLightLocation(event) {
  lightCircle.style.backgroundColor = 'transparent';
  let positionX = event.clientX - 10 + 'px';
  let positionY = event.clientY - 10 + 'px';
  lightCircle.style.setProperty('--posX', positionX);
  lightCircle.style.setProperty('--posY', positionY);
  
}

function removeLight() {
  lightCircle.style.backgroundColor = 'black';
}

window.addEventListener('mousemove', (e) => {
  setLightLocation(e);
})

window.addEventListener('mouseout', () => {
  removeLight();
})