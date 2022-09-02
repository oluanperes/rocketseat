import {
  forestVolume,
  rainVolume,
  coffeeShopVolume,
  firePlaceVolume
} from "./elements.js"

export default function Controls() {

  function cardForest(cardForest) {
    cardForest.classList.toggle('select')
    forestVolume.classList.toggle('select')
  }

  function cardRain(cardRain) {
    cardRain.classList.toggle('select')
    rainVolume.classList.toggle('select')
  }

  function cardCoffeeshop(cardCoffeeshop) {
    cardCoffeeshop.classList.toggle('select')
    coffeeShopVolume.classList.toggle('select')
  }

  function cardFireplace(cardFireplace) {
    cardFireplace.classList.toggle('select')
    firePlaceVolume.classList.toggle('select')
  }

  function togglePlay(buttonPlay, buttonStop) {
    buttonPlay.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function toggleStop(buttonStop, buttonPlay) {
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function reset(buttonPlay, buttonStop) {
    buttonPlay.classList.remove('hide')
    buttonStop.classList.remove('hide')
  }

  return {
    cardForest,
    cardRain,
    cardCoffeeshop,
    cardFireplace,
    togglePlay,
    toggleStop,
    reset
  }
}