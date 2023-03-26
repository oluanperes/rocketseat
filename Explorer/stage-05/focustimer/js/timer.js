import sounds from "./sounds.js"

/* Dessa forma também se trata de named export, e aqui estamos utilizando 
o projeto factoring que simplesmente consiste em colocar tudo o que precisa em uma função */
export default function Timer({
  /* aqui está sendo feito um processo chamada destructuring, desestruturando o objeto direto nos parametros */
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)


  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown(){
    timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent) 
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)
    if(isFinished) {
      resetControls()
      updateDisplay() 
      sounds().timeEnd() 
      return
    }

    if(seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  /* Aqui retorna(pra fora) o objeto que será usado */
  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}