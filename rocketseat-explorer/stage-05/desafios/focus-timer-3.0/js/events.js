import { 
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  cardForest,
  cardRain,
  cardCoffeeshop,
  cardFireplace,
  forestVolume,
  rainVolume,
  coffeeShopVolume,
  firePlaceVolume,
  btnDarkMode,
  btnLightMode,
  body
} from "./elements.js"

export default function Events({control, timer, sound}) {

  buttonPlay.addEventListener('click', function() {
    control.togglePlay(buttonPlay, buttonStop)
    sound.pressButton()
    timer.countdown()
  })

  buttonStop.addEventListener('click', function() {
    control.togglePlay(buttonStop, buttonPlay)
    sound.pressButton()
    timer.reset()
  })

  buttonPlus.addEventListener('click', function() {
    sound.pressButton()
    timer.plusMinutes()
  })

  buttonMinus.addEventListener('click', function() {
    sound.pressButton()
    timer.minusMinutes()
  })

  cardForest.addEventListener('click', function() {
    control.cardForest(cardForest)
    sound.pressCardForest(cardForest)
  })

  cardRain.addEventListener('click', function() {
    control.cardRain(cardRain)
    sound.pressCardRain(cardRain)
  })

  cardCoffeeshop.addEventListener('click', function() {
    control.cardCoffeeshop(cardCoffeeshop)
    sound.pressCardCoffeeshop(cardCoffeeshop)
  })

  cardFireplace.addEventListener('click', function() {
    control.cardFireplace(cardFireplace)
    sound.pressCardFireplace(cardFireplace)
  }) 

  forestVolume.addEventListener('input', function() {
    sound.forestAudio.volume = forestVolume.value / 1
  })

  rainVolume.addEventListener('input', function() {
    sound.rainAudio.volume = rainVolume.value / 1
  })

  coffeeShopVolume.addEventListener('input', function() {
    sound.coffeeshopAudio.volume = coffeeShopVolume.value / 1
  })

  firePlaceVolume.addEventListener('input', function() {
    sound.fireplaceAudio.volume = firePlaceVolume.value / 1
  })

  btnLightMode.addEventListener('click', function() {
    btnDarkMode.classList.remove('off')
    btnLightMode.classList.add('off')
    body.classList.add('dark-mode')
  })

  btnDarkMode.addEventListener('click', function() {
    btnDarkMode.classList.add('off')
    btnLightMode.classList.remove('off')
    body.classList.remove('dark-mode')
  })

  return {
    Events
  }
}