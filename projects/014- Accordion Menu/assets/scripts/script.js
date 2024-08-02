"use strict";

const accordionLabels = Array.from(document.querySelectorAll('.accordion__item__label'))

accordionLabels.forEach(label => {
  label.addEventListener('click', () => {
    label.parentElement.classList.toggle('accordion__item--active')
  })
})