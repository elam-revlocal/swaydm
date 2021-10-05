import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import MuiLink from "@material-ui/core/Link"
import Container from "@material-ui/core/Container"
import Typography from "../Utils/Typography"
// import TextField from "../Utils/TextField"
import instagramIcon from "../../assets/images/instagramIcon.png"
import TwitterIcon from "../../assets/images/twitterIcon.png"

function Copyright() {
  return (
    <React.Fragment color>
      {/* {"© "} */}
      <MuiLink color="inherit" href="">
      © SwayDM <span>{new Date().getFullYear()}</span>
      </MuiLink>{" "}
    </React.Fragment>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.extended.neutral.systemGreys300,
    color: theme.palette.primary.black,
    zIndex: 3,
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconsWrapper: {
    height: 120,
    // display: "flex",
    // align: "center",
    // justifyContent: "center",

  },
  icons: {
    display: "flex",
    flexDirection: "row",
    align: "center",
    justifyContent: "center",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.white,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
    zIndex: "1"
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    textDecoration: "none",
    color: theme.palette.primary.black,
  },
  top: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid align="center" className={classes.top} container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="center"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://www.instagram.com/swaydm/" className={classes.icon}>
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a
                  href="https://twitter.com/swaydmme"
                  className={classes.icon}
                >
                  <img src={TwitterIcon} alt="Twitter" />
                </a>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <MuiLink component={Link} to="/terms" className={classes.listItem}>
                  Terms
                </MuiLink>
              </li>
              <li className={classes.listItem}>
                <MuiLink component={Link} to="/privacy" className={classes.listItem}>
                  Privacy
                </MuiLink>
              </li>
            </ul>
          </Grid> */}
          {/* <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
            >
              {LANGUAGES.map(language => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid> */}
          {/* <Grid item>
            <Typography variant="caption">
              {"Icons made by "}
              <MuiLink
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </MuiLink>
              {" from "}
              <MuiLink
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </MuiLink>
              {" is licensed by "}
              <MuiLink
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </MuiLink>
            </Typography>
          </Grid> */}
          {/* <Grid item>
                <Copyright />
              </Grid> */}
          {/* <Grid item xs={12}>
            <Typography variant="caption">
              {"Theme ported by "}
              <MuiLink
                href="https://snappywebdesign.net"
                rel="tag"
                title="Snappy Web Design"
                target="_blank"
              >
                Snappy Web Design
              </MuiLink>
            </Typography>
          </Grid> */}
        </Grid>
        <Copyright className="classes.copyright" />
      </Container>
    </Typography>
  )
}
