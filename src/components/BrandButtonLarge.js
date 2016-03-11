import React, { PropTypes } from "react"

const BrandButtonLarge = ({ onClick, text }) => (
  <button
    onClick={onClick}
    style={{
      textTransform: "uppercase"
    }}
  >
    {text}
  </button>
)

BrandButtonLarge.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default BrandButtonLarge
