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
  },
  {
    id: 3,
    title: 'Fullscreen Nav Menu',
    summary: "Today's project was to build a fullscreen nav menu that expands and collapses by a hamburger menu. it was fun and kinda hard to style. i added a cool animation on the hamburger menu. overall it was good.",
    screenshot: '/project screenshots/3.png',
    liveLink: 'https://iliasghar.github.io/100-Days--100--Frontend--Challanges/projects/003-%20Fullscreen%20Nav%20Menu/',
    dirLink: 'https://github.com/iliAsghar/100-Days--100--Frontend--Challanges/tree/main/projects/003-%20Fullscreen%20Nav%20Menu'
  },
  {
    id: 4,
    title: 'Custom Slider Input',
    summary: "In this project, I built a custom slider input with a tooltip that shows the value (0%-100%). It was a bit tricky to style because the tooltip didn’t always line up with the handle on smaller screens. I made some tweaks and got it to a pretty good place, but there might still be a tiny offset on mobile screens.",
    screenshot: '/project screenshots/4.png',
    liveLink: 'https://iliasghar.github.io/100-Days--100--Frontend--Challanges/projects/004-%20Custom%20Slider%20Input/',
    dirLink: 'https://github.com/iliAsghar/100-Days--100--Frontend--Challanges/tree/main/projects/004-%20Custom%20Slider%20Input'
  },
  {
    id: 5,
    title: 'Rotating Words',
    summary: "In this project, I created a cool-looking (I think 😊) word rotation animation using only HTML and CSS. Initially, this project was not supposed to be responsive on mobile, but I tried my best to make it work. if there is any problems, please let me know.",
    screenshot: '/project screenshots/5.png',
    liveLink: 'https://iliasghar.github.io/100-Days--100--Frontend--Challanges/projects/005-%20Rotating%20Words/',
    dirLink: 'https://github.com/iliAsghar/100-Days--100--Frontend--Challanges/tree/main/projects/005-%20Rotating%20Words'
  },
  {
    id: 6,
    title: 'Twitter Follow Clone',
    summary: `This project is a clone of Twitter's "Follow Suggestion" page, featuring a theme toggle button. Throughout this project, I utilized various techniques such as custom components, APIs, fetch requests, and theme switching. It was an engaging project, and I believe I performed well.`,
    screenshot: '/project screenshots/6.png',
    liveLink: 'https://iliasghar.github.io/100-Days--100--Frontend--Challanges/projects/006-%20Twitter%20Follow%20Clone/',
    dirLink: 'https://github.com/iliAsghar/100-Days--100--Frontend--Challanges/tree/main/projects/006-%20Twitter%20Follow%20Clone'
  }
];


export function getProjectById(id){
  return projects.find(project => project.id == id);
}

export function getNumberOfProjects(){
  return projects.length;
}