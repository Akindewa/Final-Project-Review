function number(number) {
  return number < 10 ? `0${number}` : number;
}

setInterval(function(){

 
  
  // Set the target date for the countdown
  const targetDate = new Date('2024-03-25T23:59:59');
  const currentDate = new Date();
  const remainingTime = targetDate - currentDate;
  // Calculate the remaining days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
  // Update the countdown elements with the remaining time
  document.querySelector('.number-day div').innerHTML = number(days);
  document.querySelector('.number-hours div').innerHTML = number(hours);
  document.querySelector('.number-minutes div').innerHTML = number(minutes);
  document.querySelector('.number-seconds div').innerHTML = number(seconds);
  
  
  },1000)

