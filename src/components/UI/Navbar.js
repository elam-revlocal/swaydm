import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MuiLink from "@material-ui/core/Link"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Button from "../Utils/Button"
import Logo from "../../assets/images/logo/png/Sway Logo_Alternate-White.png"
import smallLogo from "../../assets/images/logo/png/Sway Icon_2.png"


const useStyles = makeStyles(theme => ({
  abRoot: {
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    color: theme.palette.primary.white,
  },
  logo: {
    height: "80px",
    width: "auto",
    marginTop: ".5em",
    marginBottom: "-.5em",
    [theme.breakpoints.down("xs")]: {
      height: "80px",
    },
    smallLogo: {
      height: "20px",
      width: "auto",
    },
  },
  title: {
    fontSize: "1.4rem",
    color: theme.palette.primary.white,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2.25em",
    },
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: "0.5em",
  },
  drawerIconCtr: {
    marginLeft: "auto",
  },
  tab: {
    minWidth: 10,
    fontSize: "1rem",
    opacity: 1,
    "& .MuiTab-Root": {
      minWidth: 10,
    },
  },
  tabRoot: {
    minWidth: 10,
    color: theme.palette.primary.white,
  },
  tabSecondary: {
    fontSize: "1rem",
    color: theme.palette.primary.white,
  },
  button: {
    height: "3.5em",
  },
  drawer: {
    backgroundColor: theme.palette.primary.white,
    ...theme.typography.h6,
  },
  drawerItem: {
    color: theme.palette.primary.black,
    textTransform: "uppercase",
    fontSize: "1rem",
    fontWeight: 600,
    opacity: 0.9,
    padding: ".25em 1em",
  },
  drawerItemSecondary: {
    color: theme.palette.primary.black,
    // textTransform: "uppercase",
    fontSize: "1rem",
    fontWeight: 600,
    opacity: 0.95,
    padding: ".25em 1em",
  },
}))

export default function Navbar() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [openDrawer, setOpenDrawer] = React.useState(false)

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{
          paper: classes.drawer,
        }}
      >
        <List disablePadding>
        <ListItem
            divider
            button
            component={Link}
            to="#"
            title="Link to App"
            onClick={() => {
              setOpenDrawer(false)
            }}
          >
            <img src={smallLogo} className={classes.smallLogo}/>
          </ListItem>
        <ListItem
            divider
            button
            component={Link}
            to="/"
            title="Link to App"
            onClick={() => {
              setOpenDrawer(false)
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Who We Are
            </ListItemText>
          </ListItem>
        <ListItem
            divider
            button
            component={Link}
            to="/"
            title="Link to App"
            onClick={() => {
              setOpenDrawer(false)
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Why Sway.DM
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/"
            title="Link to App"
            onClick={() => {
              setOpenDrawer(false)
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              <a href="#how-it-works">How It Works</a>
            </ListItemText>
          </ListItem>
            <ListItem
            className={classes.button}
            divider
            button
            component={Link}
            href="#how-it-works"
            title="Link to How It Works"
            style={{ display: "block" }}
            onClick={() => {
              setOpenDrawer(false)
            }}
          >
            <ListItemText
              className={`${classes.drawerItem}, ${classes.drawerItemSecondary}`}
              disableTypography
            >
              Release
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.button}
            divider
            button
            component={Link}
            to="/register"
            title="Link to Register Page"
            style={{ display: "block" }}
            onClick={() => {
              setOpenDrawer(false)
            }}
          >
            <ListItemText
              className={`${classes.drawerItem}, ${classes.drawerItemSecondary}`}
              disableTypography
            >
              Link To App
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.button}
            divider
            button
            component={Link}
            to="/register"
            title="Link to Register Page"
            style={{ display: "block" }}
            onClick={() => {
              setOpenDrawer(false)
            }}
          >
            <ListItemText
              className={`${classes.drawerItem}, ${classes.drawerItemSecondary}`}
              disableTypography
            >
              Sign Up
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <div className={classes.right}>
        <IconButton
          aria-label="navigation menu"
          className={classes.drawerIconCtr}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
        >
          <MenuIcon style={{ color: theme.palette.primary.white}} />
        </IconButton>
      </div>
    </>
  )

  const tabs = (
    <>
      <div className={classes.right}>
        <Tabs
          value={1}
          className={classes.tabContainer}
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          <Tab
            className={`${classes.smallLogo}`}
            component={Link}
//insert href
            to="/"
            label=""
            aria-label="Home"
            disableRipple
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            className={`${classes.tab}`}
            component={Link}
//insert href
            to="#who"
            label="Who We Are"
            aria-label="Who We Are"
            variant="h6"
            underline="none"
            color="inherit"
            disableRipple
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            className={`${classes.tab}`}
            component={Link}
//insert href
            to="#why"
            label="Why Sway.DM"
            aria-label="Why Sway.DM"
            variant="h6"
            underline="none"
            color="inherit"
            disableRipple
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            className={`${classes.tab}`}
            component={Link}
//insert href
            to="#how"
            label="How it Works"
            aria-label="How it Works"
            variant="h6"
            underline="none"
            color="inherit"
            disableRipple
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            className={`${classes.tab}`}
            component={Link}
//insert href
            to="#release"
            label="Release"
            aria-label="Release"
            variant="h6"
            underline="none"
            color="inherit"
            disableRipple
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            className={`${classes.tab}`}
            component={Link}
//insert href
            to=""
            label="Link to App"
            aria-label="Link to App"
            variant="h6"
            underline="none"
            color="inherit"
            disableRipple
            classes={{ root: classes.tabRoot }}
          />
          <Button className={classes.button} color="primary" variant="contained">           
          <Tab
            className={`${classes.tab}, ${classes.tabSecondary}`}
            classes={{ root: classes.tabRoot }}
            component={Link}
            to="/register"
            label="Sign Up"
            aria-label="Sign Up Button"
            variant="h6"
            underline="none"
            disableRipple
          />
          </Button>
        </Tabs>
      </div>
    </>
  )

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.abRoot}>
        <Toolbar>
        <MuiLink
            component={Link}
            to="/"
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.title}
          >
          <img className={classes.logo}
          src={Logo}
          alt="Primary Sway DM Logo"
          className={classes.logo}
          />  
          </MuiLink>          
          <div className={classes.center} />
          {matchesXS || matchesMD ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
