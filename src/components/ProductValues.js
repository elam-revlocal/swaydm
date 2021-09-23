import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "./Utils/Typography"
import ProductCurvyLines from "../assets/images/productCurvyLines.png"
import ProductValues1 from "../assets/images/productValues1.svg"
import ProductValues2 from "../assets/images/productValues2.svg"
import ProductValues3 from "../assets/images/productValues3.svg"

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.extended.blueGreyMedium,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
    color: theme.palette.primary.black,
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    color: theme.palette.primary.black,
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
})

function ProductValues(props) {
  const { classes } = props

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={ProductCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={ProductValues1}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Start a trend
              </Typography>
              <Typography variant="h5">
                {
                  "Get ahead of the crowd in a new way to utilize social media and technology."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={ProductValues2} alt="graph" />
              <Typography variant="h6" className={classes.title}>
                Connect with followers
              </Typography>
              <Typography variant="h5">
                {
                  "Increase your influence by creating more connections with followers."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={ProductValues3} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Earn Money
              </Typography>
              <Typography variant="h5">
                {"Continue doing what you already do and get paid for it too."}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductValues)
