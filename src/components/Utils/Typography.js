import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { capitalize } from "@material-ui/core/utils"
import MuiTypography from "@material-ui/core/Typography"

const styles = theme => ({
  markedH1Center: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
  },
  markedH2Center: {
    height: 4,
    //width: 73,
    //width: 580,
    width: 73,
    display: "block",
    margin: `${theme.spacing(1)}px ${theme.spacing(8)}px 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH3Center: {
    height: 4,
    width: 55,
    display: "block",
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: "block",
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: "block",
    marginTop: theme.spacing(0.5),
    background: "currentColor",
  },
  titleAlign: {
      align: "left",
      [theme.breakpoints.down("md")]: {
        align: "center",
      },
    },
})

const variantMapping = {
  h1: "h1",
  h2: "h1",
  h3: "h1",
  h4: "h1",
  h5: "h3",
  h6: "h2",
  subtitle1: "h3",
}

function Typography(props) {
  const { children, classes, marked = false, variant, ...other } = props

  return (
    <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {marked ? (
        <span
          className={
            classes[`marked${capitalize(variant) + capitalize(marked)}`]
          }
        />
      ) : null}
    </MuiTypography>
  )
}

Typography.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  marked: PropTypes.oneOf([false, "center", "left"]),
  variant: PropTypes.string,
}

export default withStyles(styles)(Typography)
