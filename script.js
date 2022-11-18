

const renderClock = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    
   
    
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;
    let t = setTimeout(function(){ renderClock() }, 1000)

}


renderClock();
