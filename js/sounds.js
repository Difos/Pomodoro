export default function (){
    const buttonPressAudio = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
    )

    const kitcheTimer = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
    )

    const forestButton = new Audio(
        //1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA
        "https://docs.google.com/uc?export=download&id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA"
    )

    const rainButton = new Audio(
        "https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view?allow=autoplay"
    )
    const coffeShop = new Audio(
        "https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view?allow=autoplay"
    )

    const firePlace = new Audio(
        "https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view?allow=autoplay"
    )

    function pressButton(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        kitcheTimer.play()
    }

    function forest(){
        forestButton.play()
    }

    function rain(){
        rainButton.play()
    }

    return {
        pressButton,
        timeEnd,
        forest,
        rain,
        coffeShop,
        firePlace
    }
}