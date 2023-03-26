export default function Sounds() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const forestAudio = new Audio("./sounds/forest.wav")
  const rainAudio = new Audio("./sounds/rain.wav")
  const coffeeshopAudio = new Audio("./sounds/coffeeshop.wav")
  const fireplaceAudio = new Audio("./sounds/fireplace.wav")
  
  function pressButton() {
    buttonPressAudio.play()
  }

  function kitchenTimerAudio(){
    kitchenTimer.play()
  }
  
  function pressCardForest(cardForest) {
    stopAudio()
    if (cardForest.classList.contains('select')) {
      forestAudio.loop = true
      forestAudio.play()
    }
  }

  function pressCardRain(cardRain) {
    stopAudio()
    if (cardRain.classList.contains('select')) {
      rainAudio.loop = true
      rainAudio.play()
    } 
  }

  function pressCardCoffeeshop(cardCoffeeshop) {
    stopAudio()
    if (cardCoffeeshop.classList.contains('select')) {
      coffeeshopAudio.loop = true
      coffeeshopAudio.play()
    }
  }

  function pressCardFireplace(cardFireplace) {
    stopAudio()
    if (cardFireplace.classList.contains('select')) {
      fireplaceAudio.loop = true
      fireplaceAudio.play()
    }
  }

  function stopAudio () {
    if (forestAudio.play() || rainAudio.play() || coffeeshopAudio.play() || fireplaceAudio.play()) {
      forestAudio.load()
      rainAudio.load()
      coffeeshopAudio.load()
      fireplaceAudio.load()
    }
  }

  return {
    pressButton,
    kitchenTimerAudio,
    pressCardForest,
    pressCardRain,
    pressCardCoffeeshop,
    pressCardFireplace
  }
}