const Time = document.getElementById('time-display');
const SecondsHand = document.getElementById('seconds');
const MinutesHand = document.getElementById('minutes');
const HourHand = document.getElementById('hours');

class TimeData{
    constructor(cityName, cityOffset){
        this.cityName = cityName;
        this.offset = cityOffset;
        this.time = function(){
            let date = new Date();
            let localTime = date.getTime();
            let localOffset = date.getTimezoneOffset() * 60000;
            let utc = localTime + localOffset;  
            
            this.timeMillis = utc + (3600000 * cityOffset);
            this.date = new Date(this.timeMillis);
            this.seconds = this.date.getSeconds();
            this.minutes = this.date.getMinutes();
            this.hours = this.date.getHours();
            this.formattedTime = cityName + ' ' + this.date.toLocaleTimeString();
            Time.innerHTML = this.formattedTime;
            displayClock(this.date);
            setInterval(this.time,1);
        }
    }
};

let timeDubai = new TimeData('Tallinn', 3);
timeDubai.time();
console.log(timeDubai.formattedTime);

function displayClock(d){
    let mhm = d.getMilliseconds() / 1000;
    let secondsRatio = (d.getSeconds() + mhm) / 60;
    let minutesRatio = (d.getMinutes() + secondsRatio) / 60;
    let hoursRatio = (minutesRatio  + d.getHours()) / 12;
    SecondsHand.style.transform = `rotate(calc(${secondsRatio}*360deg)`;
    MinutesHand.style.transform = `rotate(calc(${minutesRatio}*360deg))`;
    HourHand.style.transform = `rotate(calc(${hoursRatio}*360deg))`;
}


/*  transform: rotate(calc(var(--start-seconds)*6deg));
function displayTime(){
    let clockTime = new Date();
    let Hours = clockTime.getHours();
    let Minutes = clockTime.getMinutes();
    let Seconds =  clockTime.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    Time.innerHTML = + Hours + ":" + Minutes + ":" + Seconds;
    setTimeout(displayTime,1000);
}

function  displayClock(){
    SecondsHand.style.transform = 'rotate(calc('
}

displayTime();

function checkTime(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}

*/