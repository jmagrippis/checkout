const progressStep = (state, action) => {
  switch (action.type) {
    case "CHANGE_STEP":
      if (
        (state.id === action.nextStep && state.current === true)
        || (state.id !== action.nextStep && state.current === false)
      ) {
        return state
      }

      return Object.assign({}, state, {
        current: !state.current
      })

    default:
      return state
  }
}

const progressSteps = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_STEP":
      if (action.nextStep > state.length) {
        return state
      }
      return state.map(p =>
        progressStep(p, action)
      )
    default:
      return state
  }
}

export default progressSteps
