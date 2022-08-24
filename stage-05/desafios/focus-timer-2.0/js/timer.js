import Controls from "./controls.js"
import Sounds from "./sounds.js"
import { AlertError } from "./alert-error.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay
}) {
  let minutes = Number(minutesDisplay.textContent)
  let timerTimeOut

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    
    timerTimeOut = setTimeout( function() {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      if(minutes <= 0 && seconds <= 0){
        Sounds().kitchenTimerAudio()
        reset()
        return;
      }
      
      updateDisplay(minutes, 0)
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))
      countdown()
    }, 1000)
  }

  function plusMinutes() {
    let minutes = Number(minutesDisplay.textContent) + 5
    let seconds = Number(secondsDisplay.textContent)

    updateDisplay(minutes, String(seconds))
  }

  function minusMinutes() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 5) {
      AlertError.open()
      return;
    } else {
      minutes = minutes - 5
    }

    updateDisplay(minutes, String(seconds))
  }

  return {
    countdown,
    updateDisplay,
    reset,
    plusMinutes,
    minusMinutes
  }
}