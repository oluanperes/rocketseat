import {
  forestVolume,
  rainVolume,
  coffeeShopVolume,
  firePlaceVolume
} from "./elements.js"

export default function Controls() {

  function cardForest(cardForest) {
    if (cardForest.classList.contains('select') == false) {
      clearSelect()
    }
    cardForest.classList.toggle('select')
    forestVolume.classList.toggle('select')
  }

  function cardRain(cardRain) {
    if (cardRain.classList.contains('select') == false) {
      clearSelect()
    }
    cardRain.classList.toggle('select')
    rainVolume.classList.toggle('select')
  }

  function cardCoffeeshop(cardCoffeeshop) {
    if (cardCoffeeshop.classList.contains('select') == false) {
      clearSelect()
    }
    cardCoffeeshop.classList.toggle('select')
    coffeeShopVolume.classList.toggle('select')
  }

  function cardFireplace(cardFireplace) {
    if (cardFireplace.classList.contains('select') == false) {
      clearSelect()
    }
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


  function clearSelect() {
    const card = document.getElementsByClassName('card')
    const slider = document.getElementsByClassName('volume')
    
    for(let i=0; i < card.length; i++) {
      let hasClass = card.item([i]).classList.contains('select')
      
      if (hasClass) {
        card.item([i]).classList.remove('select')
        slider.item([i]).classList.remove('select')
      }
    }

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