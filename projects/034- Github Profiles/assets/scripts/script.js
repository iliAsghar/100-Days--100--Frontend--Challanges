"use strict";

const APIURL = 'https://api.github.com/users/';
const profilePictureElem = document.querySelector('.profile__picture');
const usernameElem = document.querySelector('.profile__id');
const redirectElem = document.querySelector('.profile__username > a')
const bioElem = document.querySelector('.profile__about-me');
const followersValueElem = document.querySelector('.value-followers');
const followingValueElem = document.querySelector('.value-following');
const reposValueElem = document.querySelector('.value-repos');
const repoListElem = document.querySelector('.profile__repos');

function getUser(username) {
  fetch(APIURL + username)
    .then(rawResponse => {
      if(!rawResponse.ok) {
        throw new Error();
      } else {
        return rawResponse.json();
      }
    })
    .then(data => {
      let repos = [];
      fetch(data.repos_url)
        .then(response => response.json())
        .then(repoData => {
          for (let i = 0; i < 5; i++) {
            repos.push({
              name: repoData[i].name,
              link: repoData[i].html_url
            });
          }
          fillDatas(data, repos);
        })
    })
    .catch(err => {
      console.log(err);
    })
}

function fillDatas(data, repos) {
  let link = data.html_url;
  let username = data.login || '';
  let avatarUrl = data.avatar_url || '';
  let about = data.bio || '';
  let followerCount = data.followers || 0;
  let followingCount = data.following || 0;
  let repoCount = data.public_repos || 0;
  let repositoryList = repos || [];

  usernameElem.innerHTML = username;
  redirectElem.href = link;
  profilePictureElem.src = avatarUrl;
  bioElem.innerHTML = about;
  followersValueElem.innerHTML = followerCount; 
  followingValueElem.innerHTML = followingCount; 
  reposValueElem.innerHTML = repoCount;  

  for(let repo of repos) {
    let newRepo = document.createElement('a');
    newRepo.classList.add('profile__repo');
    newRepo.target = '_blank';
    newRepo.innerHTML = repo.name;
    newRepo.href = repo.link
    repoListElem.append(newRepo);
  }
}

getUser('iliAsghar')

const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup',(e) => {
  if(e.key === 'Enter'){
    getUser(searchInput.value);
    searchInput.value = '';
  }
})

const searchIcon = document.querySelector('.js-search');
searchIcon.addEventListener('click',() => {
  getUser(searchInput.value);
  searchInput.value = '';
})