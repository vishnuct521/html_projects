let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let day = document.querySelector("#day")

function time(){
let clock = new Date()
let hr = clock.getHours()  
let minu = clock.getMinutes()
let sec = clock.getSeconds()

let ampm = "Pm"
if(hr>12){
    ampm = "Am";
    hr = hr-12;}
day.innerHTML = ampm;
hours.innerHTML = hr;

if(minu<10){minu = "0"+minu;}
minutes.innerHTML = minu;

if(sec<10){sec = "0"+sec;}
seconds.innerHTML = sec
}
setInterval(time,1000)