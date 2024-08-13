"use strict";

const scrolledBar = document.querySelector('.scrolled-bar');

const scrollheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

function updateScrolledBar() {
  let scrolled = window.scrollY;
  let scrolledPrecent = (scrolled / scrollheight).toFixed(2);

  let scrolledBarWidth = scrolledPrecent * 90;
  console.log(scrolledBarWidth);
  scrolledBar.style.display = 'block';
  scrolledBar.style.width = scrolledBarWidth + '%';
}

window.addEventListener('scroll', () => {
  updateScrolledBar();
});

updateScrolledBar();