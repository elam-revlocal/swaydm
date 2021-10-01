import React from "react"
import PropTypes from "prop-types"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { withStyles } from "@material-ui/core/styles"
import Paper from "./Utils/Paper"
import ProductCurvyLines from "../assets/images/productCurvyLines.png"
import TwoPhonesMockup from "../assets/images/twoPhonesMockup.png"

const styles = theme => ({
  root: {
    display: "flex",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.white,
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
    alignItems: "center",
    overflow: "hidden",

    },
  outerBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
    maxWidth:"sm",
  },
},
  box: {
    color: theme.palette.primary.white,
    // [theme.breakpoints.down("md")]: {
    //   display: "none",
    // },
  },
  right: {
     [theme.breakpoints.down("md")]: {
       display: "none",
     },
  },
  phones: {
    height: "800px",
    width: "auto",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  paper: {
    color: theme.palette.primary.white,
    borderRadius: 10,
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 6),
    },
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -160,
    left: -100,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
})

function AppForm(props) {
  const { children, classes } = props

  return (
    <div className={classes.root}>
      <Container className={classes.outerBox} maxWidth="xl">
      {/* <img
          src={ProductCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        <Box mt={7} mb={12} className={classes.box}>
          <Paper className={classes.paper} elevation="2">{children}</Paper>
        </Box>
        <div className={classes.right}>
          <img src={TwoPhonesMockup} className={classes.phones} />
        </div>
      </Container>
    </div>
  )
}

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppForm)
