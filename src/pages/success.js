import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/UI/Layout"
import MuiLink from "@material-ui/core/Link"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "../components/Utils/Typography"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    width: "100vw",
    marginTop: theme.spacing(30),
  },
}))

function SuccessPage() {
  const classes = useStyles()

  return (
    <Layout>
    <Seo title="Thank You!" />
      <Container align="center" className={classes.container}>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom  align="center" justify="center">
            Thank you for your interest in Sway!
          </Typography>
          <Typography variant="h3" gutterBottom marked="center" align="center" justify="center">
            We look forward to connecting with you.
          </Typography>
          {/* <Typography
            variant="body1"
            gutterBottom
            align="center"
            style={{ height: "30vh" }}
          >
            Theme Ported by{" "}
            <MuiLink href="https://snappywebdesign.net">
              Snappy Web Design
            </MuiLink>
          </Typography> */}
        </Box>
      </Container>
    </Layout>
  )
}


export default SuccessPage