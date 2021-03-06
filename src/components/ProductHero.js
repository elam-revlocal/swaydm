import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Button from "./Utils/Button"
import Typography from "./Utils/Typography"
import ProductHeroLayout from "./ProductHeroLayout"
import { mergeClasses } from "@material-ui/styles"

//import PoolVideo from "../assets/videos/dynamicProductHero.mp4"
// import PoolPlaceholder from "../assets/images/dynamicVidPlaceholder.jpg"

// const backgroundImage =
//   "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80"

const styles = theme => ({
  background: {
    backgroundPosition: "center",
  },
  title: {
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      justifyContent: "center",
    },  
  },
  button: {
    minWidth: 200,
  },
  h4: {
    fontWeight: 300,
    fontSize: 38,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("xs")]: {
      marginTop: theme.spacing(12),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  // dynamicBackground: {
  //   backgroundImage: `url(${PoolPlaceholder})`,
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   background: "#03a9f4",
  //   mixBlendMode: "overlay",
  // },
  // dynamicVideo: {
  //   zIndex: -1,
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   objectFit: "cover",
  //   opacity: 0.8,
  // },
})

function ProductHero(props) {
  const { classes, dynamic } = props
  const [initiated, setInitiated] = React.useState(false)

  useEffect(() => {
    setInitiated(true)
  }, [])

  return (
    <ProductHeroLayout
      backgroundClassName={
  //      dynamic ? classes.dynamicBackground :
         classes.background
      }
    >
      {/* <img
        src={PoolPlaceholder}
        style={{ display: "none" }}
        alt="increase priority"
      /> */}
      {/* Increase the network loading priority of the background image. */}
      {/* {!dynamic && (
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
      )}
      {dynamic && (
        <>
          {!initiated && (
            <img
              src={PoolPlaceholder}
              alt="pool video placeholder"
              className={classes.dynamicVideo}
            />
          )}
          <video
            src={PoolVideo}
            muted
            loop
            autoPlay
            className={classes.dynamicVideo}
          />
        </>
      )} */}
      <Typography 
      color="inherit" 
      variant="h1"
      className={classes.title}
      // marked="center"
      >
      Messaging is Messy
      </Typography>
      {/* <Typography color="inherit" align="center" variant="h2" marked="center">
      Monetize Your Attention.
      </Typography> */}
      <Typography 
        color="inherit"
        align="left"
        variant="h4"
        className={classes.h4}
      >
        Take Control 
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
      {/* <Typography variant="body2" color="inherit" className={classes.more}>
        Watch our video
      </Typography> */}
    </ProductHeroLayout>
  )
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductHero)
