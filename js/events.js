import { 
    buttonPlay, 
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonMode,
  } from "./elements.js";

export default function ({ controls, timer,sound }) {
  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton()
  });

  buttonPlus.addEventListener("click",function (){
    timer.pumpitMinutes()
    sound.pressButton()
  })

  buttonLess.addEventListener("click",function(){
    timer.dumpitMinutes()
  })

  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold()
    sound.pressButton()
  });

  buttonStop.addEventListener("click", function(){
    let minutesVerify = controls.getMinutes();
    controls.stop();
    timer.reset();
    sound.pressButton()

    timer.updateDisplay(minutesVerify,0)
  })

  buttonForest.addEventListener("click",function(){
    sound.forest();
  })

  buttonMode.addEventListener("click",function(){
    controls.changeMode();
  })
}
