import React, { PropTypes } from "react"
import { connect } from "react-redux"
import Expander from "./Expander"
import { toggleSection } from "../actions"

const FormSection = ({ id, label, expandable, expanded, dispatch, content }) => (
  <div>
    <h3>{label}</h3>
    {expandable ? <Expander expanded={expanded} onClick={() => dispatch(toggleSection(id))} /> : ""}
    {expandable && !expanded ? "" : content}
  </div>
)

FormSection.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string.isRequired,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired
}

export default connect()(FormSection)
