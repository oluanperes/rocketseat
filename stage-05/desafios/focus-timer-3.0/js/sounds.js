import {
  forestVolume,
  rainVolume,
  coffeeShopVolume,
  firePlaceVolume
} from "./elements.js"

export default function Sounds() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const forestAudio = new Audio("./sounds/forest.wav")
  const rainAudio = new Audio("./sounds/rain.wav")
  const coffeeshopAudio = new Audio("./sounds/coffeeshop.wav")
  const fireplaceAudio = new Audio("./sounds/fireplace.wav")
  
  function pressButton() {
    buttonPressAudio.play()
    buttonPressAudio.volume = 0.3
  }

  function kitchenTimerAudio(){
    kitchenTimer.play()
    kitchenTimer.volume = 0.5
  }
  
  function pressCardForest(cardForest) {
    if (cardForest.classList.contains('select')) {
      forestAudio.loop = true
      forestAudio.play()
      forestAudio.volume = 0.5
      forestVolume.value = 0.5
    } else {
      forestAudio.load()
      forestVolume.value = 0
    }
  }

  function pressCardRain(cardRain) {
    if (cardRain.classList.contains('select')) {
      rainAudio.loop = true
      rainAudio.play()

      rainAudio.volume = 0.5
      rainVolume.value = 0.5
    } else {
      rainAudio.load()
      rainVolume.value = 0
    }
  }

  function pressCardCoffeeshop(cardCoffeeshop) {
    if (cardCoffeeshop.classList.contains('select')) {
      coffeeshopAudio.loop = true
      coffeeshopAudio.play()

      coffeeshopAudio.volume = 0.5
      coffeeShopVolume.value = 0.5
    } else {
      coffeeshopAudio.load()
      coffeeShopVolume.value = 0
    }
  }

  function pressCardFireplace(cardFireplace) {
    if (cardFireplace.classList.contains('select')) {
      fireplaceAudio.loop = true
      fireplaceAudio.play()

      fireplaceAudio.volume = 0.5
      firePlaceVolume.value = 0.5
    } else {
      fireplaceAudio.load()
      firePlaceVolume.value = 0
    }
  }

  return {
    pressButton,
    kitchenTimerAudio,
    pressCardForest,
    pressCardRain,
    pressCardCoffeeshop,
    pressCardFireplace,
    forestAudio,
    rainAudio,
    coffeeshopAudio,
    fireplaceAudio
  }
}