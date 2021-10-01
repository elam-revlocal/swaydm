import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { withStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
//import productHeroWonder from "../assets/images/productHeroWonder.png"
import productHeroArrowDown from "../assets/images/productHeroArrowDown.png"
import TwoPhonesMockup from "../assets/images/twoPhonesMockup.png"

const styles = theme => ({
  root: {
    color: theme.palette.common.black,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    [theme.breakpoints.up("sm")]: {
      marginTop: "7em",
      height: "87vh",
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  innerContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
  },
  left: {

  },
  right: {
    [theme.breakpoints.down("md")]: {
      display: "none",
  },
},
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#ffffff",
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -2,
  },
  arrowDown: {
    position: "absolute",
    bottom: theme.spacing(4)
  },
})

function ProductHeroLayout(props) {
  const { backgroundClassName, children, classes } = props

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
      <Container className={classes.innerContainer}>
        <div className={classes.left}>
        {children}
        </div>
        </Container>
        <div className={classes.right}>
        <img src={TwoPhonesMockup} alt="Two Phones" width="550" height="auto" />
        </div>
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} /> 
        {/* <img
          className={classes.arrowDown}
          src={productHeroArrowDown}
          height="16"
          width="12"
          alt="arrow down"
        /> */}
      </Container>
    </section>
  )
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductHeroLayout)
