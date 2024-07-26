"use strict";

const goodCheck = document.querySelector('#good');
const cheapCheck = document.querySelector('#cheap');
const fastCheck = document.querySelector('#fast');


[goodCheck, cheapCheck, fastCheck].forEach((btn) => {
  btn.addEventListener('change',(e) => {
    canItHappen(e.target);
  })
});

function canItHappen(lastChecked){
  if(goodCheck.checked && cheapCheck.checked && fastCheck.checked){
    switch (lastChecked) {
      case goodCheck:
        fastCheck.checked = false;
        break;
      case cheapCheck:
        goodCheck.checked = false;
        break;
      case fastCheck:
        cheapCheck.checked = false;
        break;
      default:
        alert("there was an error!");
        break;
    }
  }
}