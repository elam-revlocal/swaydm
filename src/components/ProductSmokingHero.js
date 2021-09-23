import React from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import { withStyles } from "@material-ui/core/styles"
import Typography from "./Utils/Typography"
import ProductBuoy from "../assets/images/productBuoy.svg"

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  button: {
    border: "4px solid currentColor",
    borderRadius: 10,
    height: "auto",
    padding: theme.spacing(2, 5),
  },
  link: {
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
      <Button className={classes.button}>
        <Typography variant="h4" component="span">
          Interested in being an Earner?
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        We'd love to work with you. <a href="/register">Get in touch!</a>
      </Typography>
      {/* <img src={ProductBuoy} className={classes.buoy} alt="buoy" /> */}
    </Container>
  )
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductSmokingHero)
