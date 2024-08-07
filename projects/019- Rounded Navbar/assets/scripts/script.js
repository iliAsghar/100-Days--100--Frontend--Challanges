"use strict";

const navList = document.querySelector('.nav__list');
const navToggleBtn = document.querySelector('.nav__toggle');

navToggleBtn.addEventListener('click', () => {
  navList.classList.toggle('nav__list--active');
  navToggleBtn.classList.toggle('nav__toggle--active')
})