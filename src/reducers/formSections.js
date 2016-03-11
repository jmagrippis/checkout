const formSection = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SECTION":
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        expanded: !state.expanded
      })

    default:
      return state
  }
}

const formSections = (state = [], action) => {
  switch (action.type) {
    case "TOGGLE_SECTION":
      return state.map(s =>
        formSection(s, action)
      )
    case "SUBMIT_SECTIONS":
      return state
    default:
      return state
  }
}

export default formSections
