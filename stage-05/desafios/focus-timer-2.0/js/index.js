import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
import { AlertError } from "./alert-error.js";

import { 
  minutesDisplay,
  secondsDisplay
 } from "./elements.js"

const control = Controls()
const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sound = Sounds()

Events({control, timer, sound})

window.addEventListener('keydown', handleKeydown)
window.addEventListener('mouseup', handleMouseup)
function handleKeydown(event) {
  if (event.key) {
    AlertError.close()
  }
}

function handleMouseup(event) {
  if (event) {
    AlertError.close()
  }
}