export const projects = [
  {
    id: 1,
    title: 'Image Bg Text',
    summary: 'In this project the main goal was to create a text that has an image background . i also used an API to create a random word each time the page is refreshed.',
    screenshot: '/project screenshots/1.png',
    liveLink: 'https://iliasghar.github.io/100-Days--100--Frontend--Challanges/projects/001-%20Image%20Bg%20Text/',
    dirLink: 'https://github.com/iliAsghar/100-Days--100--Frontend--Challanges/tree/main/projects/001-%20Image%20Bg%20Text'
  },
  {
    id: 2,
    title: 'Random Hex Generator',
    summary: 'This project is a Random Hex code generator. by clicking the change color button, the hex value and the background color changes randomly. you can also copy the hex by clicking on it.',
    screenshot: '/project screenshots/2.png',
    liveLink: 'https://iliasghar.github.io/100-Days--100--Frontend--Challanges/projects/002-%20Random%20Hex%20Generator/',
    dirLink: 'https://github.com/iliAsghar/100-Days--100--Frontend--Challanges/tree/main/projects/002-%20Random%20Hex%20Generator'
  }
];


export function getProjectById(id){
  return projects.find(project => project.id == id);
}

export function getNumberOfProjects(){
  return projects.length;
}