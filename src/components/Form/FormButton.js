import React from "react"
import PropTypes from "prop-types"
import defer from "./defer"
import Button from "../Utils/Button"

function FormButton(props) {
  const { disabled, mounted, ...others } = props
  return (
    <Button
      disabled={!mounted || disabled}
      type="submit"
      variant="contained"
      color="primary"
      {...others}
    />
  )
}

FormButton.propTypes = {
  disabled: PropTypes.bool,
  mounted: PropTypes.bool,
}

export default defer(FormButton)
