"use strict";

const hourElem = document.querySelector('.clock__time__hour');
const minuteElem = document.querySelector('.clock__time__minute');
const secondElem = document.querySelector('.clock__time__second');

const monthElem = document.querySelector('.clock__date__month');
const weekdayElem = document.querySelector('.clock__date__weekday');
const dayElem = document.querySelector('.clock__date__day');


setInterval(() => {
  refreshTime();
}, 1000);

const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function refreshTime() {
  let now = new Date;

  let hour = now.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  let second = now.getSeconds();
  if (second < 10) {
    second = "0" + second;
  }
  hourElem.innerHTML = hour;
  minuteElem.innerHTML = minute;
  secondElem.innerHTML = second;

  let weekday = weekDays[now.getDay()];
  let month = months[now.getMonth()];
  let day = now.getDate();
  weekdayElem.innerHTML = weekday;
  monthElem.innerHTML = month;
  dayElem.innerHTML = day;
}

refreshTime();