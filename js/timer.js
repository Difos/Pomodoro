export default function Timer({
    minutesDisplay,
    secondsDisplay,
    reset
}){
    let minutes = Number(minutesDisplay.textContent);
    let secondsToUpdate=0
    let timerTimerOut;

    function updateDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes:newMinutes
        seconds = seconds || 0
        minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
        secondsDisplay.textContent = String(seconds).padStart(2,"0")
        
    }

    function reset(){
        minutes = newMinutes
    }

    function updateMinutes(newMinutes){ 
        minutes = newMinutes;
    }

    function updateSeconds(newSeconds){ 
        secondsToUpdate = newSeconds
    }

    function pumpitMinutes(){
        
        minutes =  minutes+5 
        updateDisplay(minutes,getSeconds())
    }

    function dumpitMinutes (){
        minutes = minutes-5 <= 0 ? 0 : minutes-5
        updateDisplay(minutes,getSeconds())
    }

    function getMinutes(){
        return minutes
    }

    function getSeconds(){
        return secondsToUpdate
    }

    function hold(){
        clearTimeout(timerTimerOut)
    }

    function countdown(){
        timerTimerOut = setTimeout(function (){ 

            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinish = minutes <= 0 && seconds <=0

            updateDisplay(minutes,0)
            updateSeconds(seconds-1)
            
            if(isFinish){
                reset();
                updateDisplay();
               
                return;
            }

            if(seconds <=0){
                seconds = 60

                --minutes
            }

            updateDisplay(minutes, String(seconds)-1)
            
            countdown();
        },1000)
    }

    return{
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        updateSeconds,
        pumpitMinutes,
        dumpitMinutes,
        getMinutes,
        getSeconds,
        hold
    }
}