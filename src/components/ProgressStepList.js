import React, { PropTypes } from "react"
import { connect } from "react-redux"
import ProgressStep from "./ProgressStep"

const ProgressStepList = ({ progressSteps }) => (
  <ul>
    {progressSteps.map(progressStep =>
      <ProgressStep
        key={progressStep.id}
        {...progressStep}
      />
    )}
  </ul>
)

ProgressStepList.propTypes = {
  progressSteps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    current: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

function mapStateToProps(state) {
  return { progressSteps: state.progressSteps }
}

export default connect(mapStateToProps)(ProgressStepList)
