let countDownDate = new Date("Apr 11, 2022 18:00:00 GMT").getTime();

let updater = setInterval(function(){

let currentTime = new Date().getTime();
let timeLeft = countDownDate -currentTime;

let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

document.querySelector("#days").innerHTML = days + "d"
document.querySelector("#hours").innerHTML = hours + "h"
document.querySelector("#mins").innerHTML = minutes + "m"
document.querySelector("#secs").innerHTML = seconds + "s"

if (timeLeft < -7200000){
    clearInterval(updater);
    document.querySelector("#days").innerHTML = ""
    document.querySelector("#hours").innerHTML = "" 
    document.querySelector("#mins").innerHTML = ""
    document.querySelector("#secs").innerHTML = ""
    document.querySelector("#end").innerHTML = "Meeting over! Resetting timer shortly";
} else if (timeLeft < 0) {
    clearInterval(updater);
    document.querySelector("#days").innerHTML = ""
    document.querySelector("#hours").innerHTML = "" 
    document.querySelector("#mins").innerHTML = ""
    document.querySelector("#secs").innerHTML = ""
    document.querySelector("#end").innerHTML = "Meeting Time";
}


//Next meeting date


//Meeting date after that

}, 1000)