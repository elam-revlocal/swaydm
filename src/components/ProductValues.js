import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "./Utils/Typography"
import ProductCurvyLines from "../assets/images/productCurvyLines.png"
import ProductValues1 from "../assets/images/productValues1.png"
import ProductValues2 from "../assets/images/productValues2.png"
import ProductValues3 from "../assets/images/productValues3.png"
import ProductValues4 from "../assets/images/productValues4.png"


const styles = theme => ({
  root: {
    position: "relative",
    display: "flex",
    backgroundColor: theme.palette.primary.purple,
    // backgroundColor: theme.palette.extended.lighter.purple,
    // backgroundColor: theme.palette.extended.accent.blueGreyDark,
    overflow: "hidden",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: "flex",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      alignContent: "space-around",
  },
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: theme.spacing(5),
    color: theme.palette.primary.white,
    // [theme.breakpoints.down("md", "xs")]: {
    //   alignItems: "center",
    // },  
  },
  // mobile: {
  //   [theme.breakpoints.down("md")]: {
  //     textAlign: "center",
  //     justifyContent: "center",
  //   },  
  // },
  title: {
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.white,
    padding: theme.spacing(2, 2),
    // [theme.breakpoints.down("md")]: {
    //   textAlign: "center",
    //   justifyContent: "center",
    // },  
    // [theme.breakpoints.down("sm")]: {
    //   align: "center",
    //   justifyContent: "center",
    // },  
  },
  subtitle: {
    fontWeight: 500,
    padding: theme.spacing(1, 2),
    // [theme.breakpoints.down("md")]: {
    //   textAlign: "center",
    //   justifyContent: "center",
    // },  
  },
  paragraph: {
    fontWeight: 500,
    fontSize: 23,
    padding: theme.spacing(4, 2),
    // [theme.breakpoints.down("md")]: {
    //   textAlign: "center",
    //   justifyContent: "center",
    // },  
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    padding: theme.spacing(2, 2),
    color: theme.palette.primary.black,
    backgroundColor: theme.palette.extended.neutral.systemGreys100,
    borderRadius: 10,
  },
  image: {
    height: 55,
    alignSelf: "flex-start",
  },
  cardTitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
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
      <Container className={classes.left}>
      <Typography variant="h2" align="left" className={classes.title}>
        What is Sway?
        {/* <span className={classes.mobile}>What is Sway?</span> */}
      </Typography>
      <Typography variant="h4" className={classes.subtitle}>
      Sway <strong>ISN’T</strong> another social media app.   
      </Typography>
      <Typography variant="h5" className={classes.paragraph}>
      By being accessible on email, social media, texting, and more, we’ve become inaccessible. Sway is a messaging tool that helps you filter through the noise of your messaging while earning money.
      </Typography>
      </Container>
        {/* <img
          src={ProductCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={ProductValues1}
                alt="ProductValue1"
              />
              <Typography variant="h6" align="left" className={classes.cardTitle}>
                Take Control of Your DMs
              </Typography>
              <Typography variant="h5">
                {
                  "Get ahead of the crowd in a new way to utilize social media and technology."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img className={classes.image} src={ProductValues2} alt="graph" />
              <Typography variant="h6" className={classes.cardTitle}>
                Regain Your Attention
              </Typography>
              <Typography variant="h5">
                {
                  "Focus only on people and messages that matter to you."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img className={classes.image} src={ProductValues3} alt="clock" />
              <Typography variant="h6" className={classes.cardTitle}>
                Connect with Followers
              </Typography>
              <Typography variant="h5">
                {
                  "Increase your influence by creating more connections with followers."
                }
              </Typography>
            </div>
            </Grid>
            <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img className={classes.image} src={ProductValues4} alt="dollar sign" />
              <Typography variant="h6" className={classes.cardTitle}>
                Get Paid
              </Typography>
              <Typography variant="h5">
                {"Earn money by continuing to answer messages like you already do."}
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
