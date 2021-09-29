import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Container from "@material-ui/core/Container"
import Typography from "./Utils/Typography"
import testimonialPhoto from "../assets/images/testimonialPhoto.jpg"


const styles = theme => ({
  root: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
    display: "flex",
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: "block",
    borderRadius: 10,
    backgroundColor: theme.palette.secondary.yellow,
    color: theme.palette.primary.white,
    padding: theme.spacing(8, 3),
    minHeight: 350,
  },
  cardContent: {
    maxWidth: 500,
    height: 350,
  },

  imagesWrapper: {
    position: "relative",
  },
  // imageDots: {
  //   position: "absolute",
  //   top: -67,
  //   left: -67,
  //   right: 0,
  //   bottom: 0,
  //   width: "100%",
  //   background: "url(/static/onepirate/productCTAImageDots.png)",
  // },
  image: {
    position: "absolute",
    borderRadius: 10,
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: 600,
    maxHeight: 400,

  },
})

function ProductTestimonials(props) {
  const { classes } = props
  const [open, setOpen] = React.useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
              <Typography variant="h4" component="h4" gutterBottom>
                Influencer Testimonial
              </Typography>
              <Typography variant="h5">
                "Working with the people at SwayDm has been a breeze! I love being able to connect with my fans in an innovative way!"
              </Typography>
              <Typography variant="subtitle1">
              - Influencer name
              </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            {/* @ TODO - REPLACE IMAGE DOTS */}
            {/* <div className={classes.imageDots} />  */}
            <img
              src= {testimonialPhoto}
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  )
}

ProductTestimonials.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductTestimonials)
