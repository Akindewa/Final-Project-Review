// const date = new Date()
// const day = date.getDate()
// const hours = date.getHours()
// const minutes = date.getMinutes()
// const seconds = date.getSeconds()

// const daysElem = document.querySelector('.number-day');
// const hoursElem = document.querySelector('.number-hours');
// const minutesElem = document.querySelector('.number-minutes');
// const secondsElem = document.querySelector('.number-seconds');

// daysElem.innerHTML = day 
// hoursElem.innerHTML = hours
// minutesElem.innerHTML = minutes
// secondsElem.innerHTML = seconds

setInterval(function(){

    const date = new Date()
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    
    const dayElem = document.querySelector('.number-day div')
    const hoursElem = document.querySelector('.number-hours div')
    const minutesElem = document.querySelector('.number-minutes div')
    const secondsElem = document.querySelector('.number-seconds div')
  
    dayElem.innerText = day
    hoursElem.innerText = hours
    minutesElem.innerText = minutes
    secondsElem.innerText = seconds
  
  },1000)