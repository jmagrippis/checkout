import React, { PropTypes } from "react"

const ProgressStep = ({ current, text }) => (
  <li
    style={{
      fontWeight: current ? "700" : "400"
    }}
  >
    {text}
  </li>
)

ProgressStep.propTypes = {
  current: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default ProgressStep
