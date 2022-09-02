const Time = document.getElementById('time-display');
const SecondsHand = document.getElementById('seconds');
const MinutesHand = document.getElementById('minutes');
const HourHand = document.getElementById('hours');
const cities = document.getElementById('cities');

let timeZoneOffset = cities.value.split(",")[1];

function getDate(){
    if (!timeZoneOffset) return;
    var date = new Date();
    var localTime = date.getTime();
    var localOffset = date.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;  
    timeMillis = utc + (3600000 * timeZoneOffset);
    date = new Date(timeMillis);
    Time.innerHTML = date.toLocaleTimeString();
    displayClock(date);//returns smth like 19:24:30
}
setInterval(getDate,1);

cities.addEventListener('click', function(){
    timeZoneOffset = cities.value.split(",")[1];
});

function displayClock(d){
    let mhm = d.getMilliseconds() / 1000;
    let secondsRatio = (d.getSeconds() + mhm) / 60;
    let minutesRatio = (d.getMinutes() + secondsRatio) / 60;
    let hoursRatio = (minutesRatio  + d.getHours()) / 12;
    SecondsHand.style.transform = `rotate(calc(${secondsRatio}*360deg)`;
    MinutesHand.style.transform = `rotate(calc(${minutesRatio}*360deg))`;
    HourHand.style.transform = `rotate(calc(${hoursRatio}*360deg))`;
}


