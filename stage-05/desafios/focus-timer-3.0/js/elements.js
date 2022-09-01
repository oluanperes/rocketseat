// variaveis timer
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

// variaveis sounds
const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardCoffeeshop = document.querySelector('.coffeeShop')
const cardFireplace = document.querySelector('.firePlace')

const forestVolume = document.querySelector('.vol-forest')
const rainVolume = document.querySelector('.vol-rain')
const coffeeShopVolume = document.querySelector('.vol-coffeeShop')
const firePlaceVolume = document.querySelector('.vol-firePlace')

export {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
  cardForest,
  cardRain,
  cardCoffeeshop,
  cardFireplace,
  forestVolume,
  rainVolume,
  coffeeShopVolume,
  firePlaceVolume
}