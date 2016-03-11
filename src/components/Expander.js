import React, { PropTypes } from "react"

let styles = (expanded) => {
  return {
    transform: expanded ? "" : "rotateX(0.5turn)",
    transition: "transform 0.5s",
    cursor: "pointer"
  }
}

const Expander = ({ onClick, expanded }) => (
  <div
    onClick={onClick}
    style={styles(expanded)}
  >
    ^
  </div>
)

Expander.propTypes = {
  onClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired
}

export default Expander
