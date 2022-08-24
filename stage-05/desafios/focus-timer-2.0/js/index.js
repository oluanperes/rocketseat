import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
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