import React, { PropTypes }  from "react"
import { connect } from "react-redux"
import FlexContainer from "./flexbox/FlexContainer"
import ProgressStepList from "./ProgressStepList"
import BrandButtonLarge from "./BrandButtonLarge"
import FormSection from "./FormSection"
import { nextStep } from "../actions"

const Checkout = ({ formSections, dispatch }) => (
  <div>
    <FlexContainer justifyContent="space-around" flexDirection="column">
      <FlexContainer justifyContent="space-between">
        <ProgressStepList />
        <BrandButtonLarge text="Proceed to the next step" onClick={() => dispatch(nextStep())} />
      </FlexContainer>
    </FlexContainer>
    {formSections.map(formSection =>
      <FormSection
        key={formSection.id}
        {...formSection}
      />
    )}
  </div>
)

Checkout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  formSections: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return { formSections: state.formSections }
}

export default connect(mapStateToProps)(Checkout)
