let currentStep = 1

export const changeStep = (nextStep) => {
  currentStep = nextStep
  return {
    type: "CHANGE_STEP",
    nextStep
  }
}

export const nextStep = () => {
  return changeStep(currentStep + 1)
}

export const toggleSection = (id) => {
  return {
    type: "TOGGLE_SECTION",
    id
  }
}
