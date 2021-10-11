import React from "react"
import PropTypes from "prop-types"
//import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import { withStyles } from "@material-ui/core/styles"
import Typography from "./Utils/Typography"
import Button from "./Utils/Button"

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    fontSize: 46,

  },

  // button: {
  //   color: theme.palette.primary.white,
  //   textDecoration: "none",
  //   fontSize: "1.25rem",
  //   fontWeight: 500,
  // },
  button: {
    color: theme.palette.primary.white,
    textDecoration: "none",
    minWidth: 200,
  },
  link: {
    fontSize: "1.3rem",
    //fontSize: "1.25rem",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    fontWeight: 300,
  },
})

function ProductSmokingHero(props) {
  const { classes } = props

  return (
    <Container className={classes.root} component="section">
        <Typography className={classes.title} variant="h4" marked="center" align="center" component="span">
          Get Early Access!
        </Typography>
      <Typography variant="subtitle1" align="center" className={classes.link}>
      SwayDM is currently invitation only for earners. Click below to sign up for your invitation. We will let you know when it's your turn.
      </Typography>
      <Button 
          color="primary" 
          variant="contained" 
          size="large"
          className={classes.button}
          component={Link}
          to="/register"
          >
          Sign Me Up
        </Button>
      {/* <img src={ProductBuoy} className={classes.buoy} alt="buoy" /> */}
    </Container>
  )
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductSmokingHero)
