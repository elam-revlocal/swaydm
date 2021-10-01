import React from "react"
import PropTypes from "prop-types"
//import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import { withStyles } from "@material-ui/core/styles"
import Typography from "./Utils/Typography"
import Button from "./Utils/Button"
import ProductBuoy from "../assets/images/productBuoy.svg"

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
    marginLeft: theme.spacing(3),
  },
  link: {
    fontSize: "1.25rem",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    fontWeight: 300,
  },
  buoy: {
    width: 60,
  },
})

function ProductSmokingHero(props) {
  const { classes } = props

  return (
    <Container className={classes.root} component="section">
        <Typography className={classes.title} variant="h4" component="span">
          Interested in being an Earner?
        </Typography>
      <Typography variant="subtitle1" className={classes.link}>
        We'd love to work with you. Early access is live and people like you are already making money on Sway! Sign up here to be considered for our next cohort of early access users. Stay tuned for our public launch in early 2022!
        <span>
        </span>
      </Typography>
      <Button 
          color="primary" 
          variant="contained" 
          size="large"
          className={classes.button}
          component={Link}
          to="/register"
          >
          Get in touch
        </Button>
      {/* <img src={ProductBuoy} className={classes.buoy} alt="buoy" /> */}
    </Container>
  )
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductSmokingHero)
