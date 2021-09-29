import React from "react"
import PropTypes from "prop-types"
//import Button from "@material-ui/core/Button"
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
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  // button: {
  //   border: "4px solid currentColor",
  //   borderRadius: 10,
  //   height: "auto",
  //   padding: theme.spacing(2, 5),
  // },
  button: {
    color: theme.palette.primary.white,
    textDecoration: "none",
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  link: {
    fontSize: "1.5rem",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
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
        We'd love to work with you. <Button color="primary" variant="contained"><Typography><a href="/register" className={classes.button}>Get in touch</a></Typography></Button>
      </Typography>
      {/* <img src={ProductBuoy} className={classes.buoy} alt="buoy" /> */}
    </Container>
  )
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductSmokingHero)
