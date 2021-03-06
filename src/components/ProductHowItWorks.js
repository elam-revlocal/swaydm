import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Button from "./Utils/Button"
import Typography from "./Utils/Typography"
import BackgroundTexture from "../assets/images/BackgroundTexture.svg"
import ProductCurvyLines from "../assets/images/productCurvyLines.png"
import ProductHowItWorks1 from "../assets/images/productHowItWorks1.png"
import ProductHowItWorks2 from "../assets/images/productHowItWorks2.png"
import ProductHowItWorks3 from "../assets/images/productHowItWorks3.png"

const styles = theme => ({
  root: {
    display: "flex",
    // backgroundColor: theme.palette.extended.accent.blueGreyLight,
    overflow: "hidden",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(8),
    fontSize: 46,
  },
  number: {
    fontSize: 22,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
})

function ProductHowItWorks(props) {
  const { classes } = props

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={ProductCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          How It Works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                {/* <div className={classes.number}>1.</div> */}
                <img
                  src={ProductHowItWorks1}
                  alt="chat bubble"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  <span className={classes.number}>1. </span>Create a profile and set your messaging prices.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                {/* <div className={classes.number}>2.</div> */}
                <img
                  src={ProductHowItWorks2}
                  alt="megaphone"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                <span className={classes.number}>2. </span>Share your SwayDM link anywhere people usually try to find you ??? social media bios, email signatures, and websites ??? and encourage them to "SwayDM" you. 
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                {/* <div className={classes.number}>3.</div> */}
                <img
                  src={ProductHowItWorks3}
                  alt="dollar sign"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                <span className={classes.number}>3. </span>Get paid by viewing and responding to messages. 
                  {/* {"New offers every week. New experiences, new surprises. "}
                  {"Your Sundays will no longer be alike."} */}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component={Link}
          to="/register"
        >
          Get started
        </Button> */}
      </Container>
    </section>
  )
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductHowItWorks)
