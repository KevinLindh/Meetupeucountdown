class CountdownClock{
    constructor(date){
        this.date = date
    }
    countDown(){
        let meetingTime = new Date(this.date).getTime();
        let currentTime = new Date().getTime()
        let timeLeft = meetingTime - currentTime;
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
    }
}

let clock1EU = new CountdownClock("Apr 11, 2022 18:00:00 GMT");
let clock2EU = new CountdownClock("Apr 19, 2022 12:00:00 GMT");
let clock3EU = new CountdownClock("Apr 28, 2022 20:00:00 GMT");

function time () {
document.querySelector("#clock1").innerHTML = clock1EU.countDown();
document.querySelector("#clock2").innerHTML = clock2EU.countDown();
document.querySelector("#clock3").innerHTML = clock3EU.countDown();
}

let timeInterval = setInterval(time, 1000); //refresh every second