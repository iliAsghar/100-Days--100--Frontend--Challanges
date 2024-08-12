"use strict";

const ctaElem = document.querySelector('.cta');
const infoElem = document.querySelector('.info');
const keyElem = document.querySelector('#key-elem');
const keycodeElem = document.querySelector('#keycode-elem');
const codeElem = document.querySelector('#code-elem');

window.addEventListener('keydown', e => {
  let key = e.key;
  let keycode = e.keyCode;
  let code = e.code;

  logKeypressInfo(key, keycode, code);
})

function logKeypressInfo(key, keycode, code) {
  infoElem.classList.remove('info--animation');
  void infoElem.offsetWidth;
  infoElem.classList.add('info--animation');
  ctaElem.classList.add('cta--hidden');
  infoElem.classList.remove('info--hidden');

  keyElem.innerHTML = key;
  keycodeElem.innerHTML = keycode;
  codeElem.innerHTML = code;
}