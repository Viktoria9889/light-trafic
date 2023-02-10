
const light = document.querySelectorAll('.light');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const btn = document.querySelector('.btn');

let colorNow = 0;




btn.addEventListener('click', () => {
  
    changeColor()
    


})

const changeColor = () => {
   
    light[colorNow].className = 'light';
   
    colorNow = colorNow + 1;

  
    green.classList.toggle('_active');
    red.classList.toggle('_active');
    yellow.classList.toggle('_active');
    
   if(colorNow > 2) {
    colorNow = 0;
   } 
   
    const currentLight = light[colorNow];

    currentLight.classList.add(currentLight.getAttribute('value'))
    

}
 

const lightB = document.querySelectorAll('.light_b');
const redB = document.getElementById('red_b');
const yellowB = document.getElementById('yellow_b');
const greenB = document.getElementById('green_b');
const btnB = document.querySelector('.btn_b');

let colorNowB = 0;




btnB.addEventListener('click', () => {
  
    changeColorB()
    setInterval(changeColorB, 1000);


})

const changeColorB = () => {
   
    lightB[colorNowB].className = 'light_b';
   
    colorNowB = colorNowB + 1;

  
    greenB.classList.toggle('_active_b');
    redB.classList.toggle('_active_b');
    yellowB.classList.toggle('_active_b');
    
   if(colorNowB > 2) {
    colorNowB = 0;
   } 
   
    const currentLightB = lightB[colorNowB];

    currentLightB.classList.add(currentLightB.getAttribute('value'))
    

}