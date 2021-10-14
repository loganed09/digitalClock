const showTime = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let mornNight = "AM";

    if (hours == 0) {
        hours = 12;
    }

    if (hours === 12) {
        mornNight = "PM";
    } else if(hours > 12) {
        hours = hours - 12;
        mornNight = "PM";
    }

   

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds: seconds;

    let currentTime = hours + ":" + minutes + ":" + seconds + " " + mornNight;
    document.getElementById('MyClock').innerHTML = currentTime;
    document.getElementById('MyClock').textContent = currentTime;

    setTimeout(showTime, 1000);
}

showTime();