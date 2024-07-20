export const projects = [
  {
    id: 1,
    title: 'Image Bg Text',
    summary: 'In this project the main goal was to create a text that has an image background . i also used an API to create a random word each time the page is refreshed.',
    screenshot: '../../../100-Days--100--Frontend--Challanges/project screenshots/1.png',
    liveLink: 'https://iliasghar.github.io/100-Days--100--Frontend--Challanges/projects/001-%20Image%20Bg%20Text/',
    dirLink: 'https://github.com/iliAsghar/100-Days--100--Frontend--Challanges/tree/main/projects/001-%20Image%20Bg%20Text'
  }
];


export function getProjectById(id){
  return projects.find(project => project.id == id);
}

export function getNumberOfProjects(){
  return projects.length;
}