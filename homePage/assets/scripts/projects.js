export const projects = [
  {
    id: 1,
    title: 'Image Bg Text',
    summary: 'In this project the main goal was to create a text that has an image background . i also used an API to create a random word each time the page is refreshed.',
    screenshot: '../../../project screenshots/1.png',
    liveLink: '',
    dirLink: ''
  }
];


export function getProjectById(id){
  return projects.find(project => project.id == id);
}

export function getNumberOfProjects(){
  return projects.length;
}