import React from "react"
import PropTypes from "prop-types"
import Container from "@material-ui/core/Container"
import { withStyles } from "@material-ui/core/styles"
import Typography from "./Utils/Typography"

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    backgroundColor: theme.palette.secondary.darkTeal,
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
})

function HowItWorks(props) {
  const { classes } = props

  return (
    <Container className={classes.root} component="section">
        <Typography variant="h3" component="span">
          How It Works
        </Typography>
      <Typography variant="subtitle1" className={classes.link}>
        
      </Typography>
    </Container>
  )
}

HowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HowItWorks)
