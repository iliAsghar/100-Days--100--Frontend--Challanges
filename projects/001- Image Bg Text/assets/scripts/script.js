const text = document.querySelector('.title');

let num = Math.ceil(Math.random() * 6);
text.style.backgroundImage = `url(./assets/images/bg-${num}.jpg)`;

fetch('https://random-word.ryanrk.com/api/en/word/random/?minlength=3&maxlength=8')
    .then(response => response.json())
    .then(data => data[0])
    .then(word => {
      typeLetters(text, word)
    })
    .catch(() => {
      typeLetters(text, 'NET?:/')
    })

function typeLetters(element, string){
  for(let i = 0; i<string.length; i++){
    setTimeout(() => {
      element.insertAdjacentHTML('beforeend',string[i]);
    }, (i * 200));
  }
}