"use strict";
import { getNumberOfProjects, getProjectById } from '../../../assets/scripts/projects.js';

function renderPage(projectId){
  if(!projectId || getNumberOfProjects()<projectId ){
    document.title = 'Project #?'
    document.body.innerHTML = `
      <main class="main">
        <a href="https://iliasghar.github.io/100-Days--100--Frontend--Challanges/homepage.html" class="btn back-btn">
          <i class="fa-solid fa-caret-left"></i>Back
        </a>
        <section class="content">
          <h4 class="content__title">Project #?</h4>
          <h4 class="project-title">[invalid project]</h4>
          <p class="project-desc">there was an error rendering the project. make sure to NOT open this page directly, and follow the links from <a href="/homePage dir/homePage.html">Home Page</a>.</p>
        </section>
        <section class="image">
          <img src="" alt="project screenshot">
        </section>
      </main>
    `;
  } else {
    let project = getProjectById(projectId);
    document.title = `Project #${project.id}`;
    document.body.innerHTML = `
      <main class="main">
        <a href="https://iliasghar.github.io/100-Days--100--Frontend--Challanges/homepage.html" class="btn back-btn">
          <i class="fa-solid fa-caret-left"></i>Back
        </a>
        <section class="content">
          <h4 class="content__title">Project #${project.id}</h4>
          <h4 class="project-title">${project.title}</h4>
          <p class="project-desc">${project.summary}</p>
          <div class="content__buttons">
            <a href="${project.dirLink}" class="btn github-repo-btn">GitHub Repository</a>
            <a href="${project.liveLink}" class="btn live-demo-btn">Live Demo</a>
          </div>
        </section>
        <section class="image">
          <img src="${project.screenshot}" alt="project screenshot">
        </section>
      </main>
    `;
  }

}

window.onload = () => {
  let projectId = new URLSearchParams(location.search).get('id');
  renderPage(projectId);
}