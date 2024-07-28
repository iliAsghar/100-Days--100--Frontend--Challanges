"use strict";

const counters = Array.from(document.querySelectorAll('.media__number'));

counters.forEach((counter) => {
  let counterTarget = counter.dataset.target;
  let counterStep = Math.ceil(counterTarget/200);
  updateCounter(counterTarget, counter, counterStep);
})


function updateCounter(c, elem, step) {
  setTimeout(() => {
    if(+elem.innerHTML < c) {
      elem.innerHTML = +elem.innerHTML + step;
      updateCounter(c, elem, step);
    } else {
      elem.innerText = target;
    }
  }, 10);
}
