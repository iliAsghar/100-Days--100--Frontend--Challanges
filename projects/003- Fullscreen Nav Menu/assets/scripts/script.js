"use strict";

const hamburgerButton = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click',() => {
  menu.classList.toggle('menu--active')
})

const menuOptions = document.querySelectorAll('.js-menu__option');

menuOptions.forEach(option => {
  option.addEventListener('click',() => {
    location.href = location.href
  })
})