// // Countdown Clock: Create a countdown clock that takes a time input from the user in hours, minutes,
// //  and seconds and displays the countdown on the webpage. The program should provide an 
// //  alert when the countdown reaches zero.

function startCountdown() {
    var userinputhours = document.getElementById("hours");
    var userinputminutes = document.getElementById("minutes");
    var userinputseconds = document.getElementById("seconds");

    var hours = parseInt(userinputhours.value);
    var minutes = parseInt(userinputminutes.value);
    var seconds = parseInt(userinputseconds.value);

    // var countdownDate = new Date();
    // countdownDate.setHours(hours);
    // countdownDate.setMinutes(minutes);
    // countdownDate.setSeconds(seconds);
    var countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + hours);
    countdownDate.setMinutes(countdownDate.getMinutes() + minutes);
    countdownDate.setSeconds(countdownDate.getSeconds() + seconds);


    var countdown = document.getElementById("countdown");
    var countdownInterval = setInterval(() => {
        var now = new Date().getTime();
        var distance = countdownDate.getTime() - now;

        var hoursRemianing = Math.floor(distance / (1000 *60 *60));
        var minutesRemaining = Math.floor(distance % (1000 * 60 *60)/(1000 *60));
        var secondsRemaining = Math.floor(distance % (1000* 60 )/1000);
        countdown.innerHTML = hoursRemianing  +  "h "  +  minutesRemaining  +  "m "  +  secondsRemaining  +  "s ";

        if (distance <= 0) {
            clearInterval(countdownInterval);
            countdown.innerHTML = "countdown has finished";
            alert("countdown has finished");
        }

    }, 1000);





    
}