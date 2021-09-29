import { createMuiTheme } from "@material-ui/core/styles"
import { green, grey, red } from "@material-ui/core/colors"

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#9300f5",
      main: "#9300f5",
      dark: "#9300f5",
      purple: "#9300f5",
      white: "#ffffff",
      black: "#000000"
    },
    secondary: {
      light: "#ffd232",
      main: "#ed6a60",
      dark: "#ed6a60",
      darkTeal: "#25a8af",
      orange: "#ed6a60",
      yellow: "#ffd232",
    },
    extended: {
      blueGreyDark: "#7688A9", 
      blueGreyMedium: "#E4EAF1",
      blueGreyLight: "#F4F8FB",
    },
    warning: {
      main: "#ffd232",
      dark: "#ed6a60",
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary:"'Nunito Sans', sans-serif",
  },
})

const fontHeader = {
  color: rawTheme.palette.text.primary.white,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: "uppercase",
}

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
}

export default theme
