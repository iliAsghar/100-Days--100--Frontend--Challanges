export const projects = [
  {
    id: 1,
    title: 'placeHolder1',
    summary: 'this is a placeholder for project1',
    screenshot: '',
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