"use strict";

const loadPrecentage = document.querySelector('.loading-precent');
const title = document.querySelector('.title');

let load = 0;

let intervalId = setInterval(() => {
                   loadUp();
                 }, 30 + Math.random()*100);

function loadUp() {
  load++;
  if(load <= 100) {
    loadPrecentage.innerHTML = `${load}%`;
    loadPrecentage.style.backdropFilter = `blur(${(100-load)/100*20}px)`
    loadPrecentage.style.color = `rgb(255, 255, 255, ${1-(load/99)})`;
  } else {
    loadPrecentage.style.display = "none";
    title.classList.add('title--active');
    clearInterval(intervalId);
  }
}