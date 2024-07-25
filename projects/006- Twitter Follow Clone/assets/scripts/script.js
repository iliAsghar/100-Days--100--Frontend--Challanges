"use strict";

function truncateString(str, maxLength) {
  return str.length > maxLength ?
      `${str.slice(0, maxLength - 3)}` : str;
}

class User extends HTMLElement {
  constructor(){
    let isFollowed = false;
    super();
    let template = document.createElement('template');
    template.innerHTML = `
      <div class="user">
        <img class="user__picture" src="./assets/images/user-icon-placeholder.png">
        <div class="user__info">
          <h6 class="user__info__name"></h6>
          <p class="user__info__id">---</p>
        </div>
        <button class="user__follow-btn">Follow</button>
      </div>
      `;
    this.appendChild(template.content);
  }

  connectedCallback(){
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then( data => {
        let newUser = data.results[0];
        return newUser;
      })
      .then(user => {
        let userImg = user.picture.medium;
        let userName = user.name.first;
        let userIdTag = '@'+user.login.username;
        userIdTag = truncateString(userIdTag, 12);
        this.querySelector('.user__picture').src = userImg;
        this.querySelector('.user__info__name').innerHTML = userName;
        this.querySelector('.user__info__id').innerHTML = userIdTag;
      })

    const followBtn = this.querySelector('.user__follow-btn');
    followBtn.addEventListener('click', () => {
      this.followToggle();
    })
  }

  followToggle(){
    this.isFollowed = !this.isFollowed;
    const followBtn = this.querySelector('.user__follow-btn');

    followBtn.classList.toggle('user__follow-btn--active')

    followBtn.innerHTML = this.isFollowed ?
                          "Unfollow" :
                          "Follow";

  }
}

window.customElements.define('user-card',User)

document.querySelector('.show-more').addEventListener('click',() => {
  location.href = location.href;
})

const themeBtn = document.querySelector('.theme-control-btn');
let darkTheme = false;

themeBtn.addEventListener('click',() => {
  darkTheme = !darkTheme;

  if(darkTheme){
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    themeBtn.innerHTML = "Light";
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    themeBtn.innerHTML = "Dark";
  }
})