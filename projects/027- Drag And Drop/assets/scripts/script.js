"use strict";

const blocks = document.querySelectorAll('.zone__block');
const zones = document.querySelectorAll('.zone');

for(let block of blocks) {
  block.addEventListener('dragstart', (e) => {
    let selected = e.target;

    for(let zone of zones) {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      zone.addEventListener('drop', (e) => {
        zone.appendChild(selected);
        selected = null;
      });
    }
  });
}