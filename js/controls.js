export default function Controls({ 
  buttonPlay, 
  buttonPause, 
  buttonStop,
  buttonPlus,
  buttonLess,
  buttonMode,
  buttonForest,
  buttonRain,
  buttonHouse,
  buttonFire,
  cardForestDisplay,
body}) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }

  function pumpMinutes(){
    
  }

  function reset(){
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
   // buttonSet.classList.remove("hide");
    buttonStop.classList.add("hide");
  }

  function changeMode(){
    if(body.classList.contains("chagebody")){
      
      body.classList.remove("chagebody")
     
      buttonPlay.classList.remove("play", "svg", "path");
      buttonPlay.classList.add("svg","path")
      buttonPlay.setAttribute("class", "play");
      buttonPlay.setAttribute("class", buttonPlay.getAttribute("class") + " svg path");

      if(!buttonPause.classList.contains("hide")){
        buttonPause.classList.remove("pause", "svg", "path");
        buttonPause.classList.add("svg","path")
        buttonPause.setAttribute("class", "pause");
        buttonPause.setAttribute("class", buttonPause.getAttribute("class") + " svg path");
        buttonPlay.classList.add("hide")
      }

      buttonStop.classList.remove("stop", "svg", "path");
      buttonStop.classList.add("svg","path")
      buttonStop.setAttribute("class", "stop");
      buttonStop.setAttribute("class", buttonStop.getAttribute("class") + " svg path");

      buttonPlus.classList.remove("plus", "svg", "path");
      buttonPlus.classList.add("svg","path")
      buttonPlus.setAttribute("class", "plus");
      buttonPlus.setAttribute("class", buttonPlus.getAttribute("class") + " svg path");

      buttonLess.classList.remove("less", "svg", "path");
      buttonLess.classList.add("svg","path")
      buttonLess.setAttribute("class", "less");
      buttonLess.setAttribute("class", buttonPlus.getAttribute("class") + " svg path");

      /*buttonForest.classList.remove("forest", "svg", "path");
      buttonForest.classList.add("svg","path")
      buttonForest.setAttribute("class", "forest");
      buttonForest.setAttribute("class", buttonForest.getAttribute("class") + " svg path");

      buttonRain.classList.remove("rain", "svg", "path");
      buttonRain.classList.add("svg","path")
      buttonRain.setAttribute("class", "rain");
      buttonRain.setAttribute("class", buttonRain.getAttribute("class") + " svg path");

      buttonHouse.classList.remove("house", "svg", "path");
      buttonHouse.classList.add("svg","path")
      buttonHouse.setAttribute("class", "house");
      buttonHouse.setAttribute("class", buttonHouse.getAttribute("class") + " svg path");

      buttonFire.classList.remove("fire", "svg", "path");
      buttonFire.classList.add("svg","path")
      buttonFire.setAttribute("class", "fire");
      buttonFire.setAttribute("class", buttonFire.getAttribute("class") + " svg path");
*/
      buttonMode.classList.remove("mode", "svg", "path");
      buttonMode.classList.add("svg","path")
      buttonMode.setAttribute("class", "mode");
      buttonMode.setAttribute("class", buttonMode.getAttribute("class") + " svg path");
     // buttonMode.classList.add("mode")

     for(var i in cardForestDisplay){
      cardForestDisplay[i].classList.add("card-wrapper");
      cardForestDisplay[i].classList.remove("card-wrapperNight")
     }
      
      
    }
    else{
      
      body.classList.add("chagebody")
      
    
      buttonPlay.classList.add("changeButtons")
      buttonPlay.classList.add("svg","path")
      buttonPlay.setAttribute("class", "changeButtons");
      buttonPlay.setAttribute("class", buttonPlay.getAttribute("class") + " svg path");

      buttonStop.classList.add("changeButtons")
      buttonStop.classList.add("svg","path")
      buttonStop.setAttribute("class", "changeButtons");
      buttonStop.setAttribute("class", buttonStop.getAttribute("class") + " svg path");

      buttonPlus.classList.add("changeButtons")
      buttonPlus.classList.add("svg","path")
      buttonPlus.setAttribute("class", "changeButtons");
      buttonPlus.setAttribute("class", buttonPlus.getAttribute("class") + " svg path");

      buttonLess.classList.add("changeButtons")
      buttonLess.classList.add("svg","path")
      buttonLess.setAttribute("class", "changeButtons");
      buttonLess.setAttribute("class", buttonLess.getAttribute("class") + " svg path");

      /*buttonForest.classList.add("changeButtonsCards")
      buttonForest.classList.add("svg","path")
      buttonForest.setAttribute("class", "changeButtonsCards");
      buttonForest.setAttribute("class", buttonForest.getAttribute("class") + " svg path");

      buttonRain.classList.add("changeButtonsCards")
      buttonRain.classList.add("svg","path")
      buttonRain.setAttribute("class", "changeButtonsCards");
      buttonRain.setAttribute("class", buttonRain.getAttribute("class") + " svg path");

      buttonHouse.classList.add("changeButtonsCards")
      buttonHouse.classList.add("svg","path")
      buttonHouse.setAttribute("class", "changeButtonsCards");
      buttonHouse.setAttribute("class", buttonHouse.getAttribute("class") + " svg path");

      buttonFire.classList.add("changeButtonsCards")
      buttonFire.classList.add("svg","path")
      buttonFire.setAttribute("class", "changeButtonsCards");
      buttonFire.setAttribute("class", buttonFire.getAttribute("class") + " svg path");*/

      
      buttonMode.classList.remove("mode", "svg", "path");
      buttonMode.classList.add("changeButtonsModeLight")
      buttonMode.classList.add("changeButtonsModeLight","svg","path")
      buttonMode.setAttribute("class", "changeButtonsModeLight");
      buttonMode.setAttribute("class", buttonMode.getAttribute("class") + " svg path");

      for(var i in cardForestDisplay){
        
        cardForestDisplay[i].classList.remove("card-wrapper");
        cardForestDisplay[i].classList.add("card-wrapperNight")
       }
      
      
      
      
      if(!buttonPause.classList.contains("hide")){
        buttonPause.classList.add("changeButtons")
        buttonPause.classList.add("svg","path")
        buttonPause.setAttribute("class", "changeButtons");
        buttonPause.setAttribute("class", buttonPause.getAttribute("class") + " svg path");
        buttonPlay.classList.add("hide")
      }
      else{
        buttonPause.classList.add("changeButtons")
        buttonPause.classList.add("svg","path")
        buttonPause.setAttribute("class", "changeButtons");
        buttonPause.setAttribute("class", buttonPause.getAttribute("class") + " svg path");
        buttonPause.classList.add("hide")
      }
      
      
      

    

      
    }
    
  }

  function pause() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  }

  function stop(){
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide")
    buttonStop.classList.remove("hide")
  }

  function getMinutes(){
    let minutesVerify = false;
    if(!minutesVerify){
      return false;
    }

    return minutesVerify
  }
  return{
      play,
      pause,
      stop,
      reset,
      getMinutes,
      changeMode
  }
}
