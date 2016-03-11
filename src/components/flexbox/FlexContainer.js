import React, { PropTypes } from "react"

const FlexContainer = ({ children, justifyContent, flexDirection }) => (
  <div
    style={{
      display: "flex",
      justifyContent,
      flexDirection
    }}
  >
    {children}
  </div>
)

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string
}
FlexContainer.defaultProps = {
  justifyContent: "center",
  flexDirection: "row"
}

export default FlexContainer
