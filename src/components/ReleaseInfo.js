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

function ReleaseInfo(props) {
  const { classes } = props

  return (
    <Container className={classes.root} component="section">
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Release Info
        </Typography>
      <Typography variant="subtitle1" className={classes.link}>
      Early access is live and people like you are already making money on Sway! Sign up here to be considered for our next cohort of early access users.  
Stay tuned for our public launch in early 2022!  
      </Typography>
    </Container>
  )
}

ReleaseInfo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ReleaseInfo)


