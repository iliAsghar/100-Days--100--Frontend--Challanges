"use strict";
import { getNumberOfProjects, getProjectById, projects } from "./projects.js";

let itemsPerPage = 20;
const currentPage = document.querySelector('.js-current-page');
let currentPageNumber;

function navigateToPage(page){
  let newPageHTML = '';
  let project;
  let Index = ((page - 1) * itemsPerPage) + 1;
  let endIndex = Index + 20;


  for(Index; Index<endIndex; Index++){
    project = getProjectById(Index);
    if(!project){
      break;
    }
    newPageHTML += `
      <a href="./homePage/projectPage/projectPage.html?id=${project.id}">
        <li class="card">
          <img src=".${project.screenshot}" alt="${project.title}'s screenshot" class="card__image">
          <div class="card__desc">
            <h3 class="card__title">${project.title}</h3>
            <p class="card__summary">${project.summary}</p>
          </div>
        </li>
      </a>
    `;
  }

  navigationButtons.forEach(btn => {
    if(btn.dataset.pageNum == page){
      btn.classList.add('page-nav--active');
    } else {
      btn.classList.remove('page-nav--active');
    }
  })

  currentPage.innerHTML = newPageHTML;
}

const navigationButtons = document.querySelectorAll('.projects__page-nav li');

function renderNavigation(){

  navigationButtons.forEach(btn => {
    if(isPageAvailable(btn.dataset.pageNum)){
      btn.addEventListener('click',() => {
        currentPageNumber = btn.dataset.pageNum;
        sessionStorage.setItem('page',currentPageNumber);
        navigateToPage(currentPageNumber);
        navigationButtons.forEach(btn => {
          btn.classList.remove('page-nav--active');
        })
        btn.classList.add('page-nav--active');
      })
    } else {
      btn.classList.add('page-nav--disabled')
    }
  })
}

function isPageAvailable(pageNum){
  let numberOfProjects = getNumberOfProjects();
  let numberOfAvailablePages = ((numberOfProjects+20) / 20);
  return pageNum <= numberOfAvailablePages;
}

let previousPage;

window.onload = () => {
  let scrolledAmount = sessionStorage.getItem('scrolled');
  sessionStorage.setItem('scrolled', 0);
  previousPage = parseInt(sessionStorage.getItem('page')) || 1;
  currentPageNumber = previousPage;
  setTimeout(() => {
    navigateToPage(currentPageNumber);
    renderNavigation();
    window.scrollTo(0, scrolledAmount);
  }, 50);
}

window.addEventListener('beforeunload',() => {
  let scrollPosition = window.scrollY;
  sessionStorage.setItem('scrolled',scrollPosition);
  sessionStorage.setItem('page',currentPageNumber);
})

