import { combineReducers } from "redux"
import formSections from "./formSections"
import progressSteps from "./progressSteps"

const checkoutApp = combineReducers({
  formSections,
  progressSteps
})

export default checkoutApp
