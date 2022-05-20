import { 
    buttonPlay, 
    buttonPause, 
    buttonStop,
    minutesDisplay,
    secondsDisplay,
    buttonPlus,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonMode,
    buttonHouse,
    buttonFire,
    body,
    cardForestDisplay
} from "./elements.js";
import Controls from "./controls.js";
import Events from "./events.js";
import Sound from "./sounds.js";
import Timer from "./timer.js"

const sound = Sound();

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    minutesDisplay,
    secondsDisplay,
    buttonPlus,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonMode,
    buttonHouse,
    buttonFire,
    body,
    cardForestDisplay
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls:controls.reset
})

Events({ controls, timer,sound})


