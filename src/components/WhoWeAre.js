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

function WhoWeAre(props) {
  const { classes } = props

  return (
    <Container className={classes.root} component="section">
        {/* <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Who We Are
        </Typography> */}
      <Typography variant="h5" className={classes.link}>
      Sway ISN’T another social media app. Sway is a messaging tool that allows anyone to connect with you, for a nominal fee. Get paid for answering messages you would answer anyway.  
      </Typography>
    </Container>
  )
}

WhoWeAre.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(WhoWeAre)
