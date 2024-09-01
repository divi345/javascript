const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

function updateClock(){
    const currentDate = new Date();
    // setTimeout(updateClock,1000);
    const hour = currentDate.getHours();
    const min = currentDate.getMinutes();
    const sec = currentDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    const minDeg = (min / 60) * 360;
    minEl.style.transform = `rotate(${minDeg}deg)`;
    const secDeg = (sec / 60) * 360;
    secEl.style.transform = `rotate(${secDeg}deg)`;
    
}

setInterval(updateClock,1000);