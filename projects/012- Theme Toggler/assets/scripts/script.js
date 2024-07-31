"use strict";

let lightTheme = true;
const root = document.querySelector(':root');
const toggleBtn = document.querySelector('#switch');
const slider = document.querySelector('.switch-label');

function toggleTheme() {
  lightTheme = !lightTheme;
  if(lightTheme) {
    root.style.setProperty("--primary-clr", 'var(--white-clr)');
    root.style.setProperty("--secondary-clr", 'var(--black-clr)');
  } else {
    root.style.setProperty("--primary-clr", 'var(--black-clr)');
    root.style.setProperty("--secondary-clr", 'var(--white-clr)');
  }
  slider.classList.toggle('switch-label--active')
}

toggleBtn.addEventListener('click', toggleTheme)