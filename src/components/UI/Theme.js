import { createMuiTheme } from "@material-ui/core/styles"
import { green, grey, red } from "@material-ui/core/colors"

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#b647ff",
      main: "#9300f5",
      dark: "#e94135",
      purple: "#9300f5",
      gradient: "linear-gradient(180deg,#9300F50%,#550892100%)",
      white: "#ffffff",
      black: "#000000"
    },
    secondary: {
      light: "#6200a3",
      main: "#7a00cc",
      dark: "#ed6a60",
      darkTeal: "#25a8af",
      orange: "#ed6a60",
      yellow: "#ffd232",
    },
    extended: {
      accent: {        
        blueGreyLight: "#f4f8fb",        
        blueGreyMedium: "#e4eaf1",
        blueGreyDark: "#7688a9",
      },
      neutral: {
        systemGreys100: "#fafbfc",
        systemGreys200: "#dfe1e6",
        systemGreys300: "#c1c7d0",
        systemGreys400: "#7c878e",
        systemGreys500: "#54585a",
        systemGreys600: "#313233",
      },
      lightest: {
        purple: "#b647ff", 
        darkTeal: "#68d9df",
        orange: "#f5a9a3",
        yellow: "#ffe485",
      },
      lighter: {
        purple: "#a51fff", 
        darkTeal: "#35ccd4",
        orange: "#f1867e",
        yellow: "#ffdc5c",
      },
      main: {
        purple: "#9300f5", 
        darkTeal: "#25a8af",
        orange: "#ed6a60",
        yellow: "#ffd232",
      },
      darker: {
        purple: "#7a00cc", 
        darkTeal: "#209297",
        orange: "#eb5247",
        yellow: "#ffca0a",
      },
      darkest: {
        purple: "#6200a3", 
        darkTeal: "#1d8187",
        orange: "#e94135",
        yellow: "#f5c000",
      },
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
  overrides: {
    MuiCheckbox: {
      colorSecondary: {
        color: "white",
        "&:hover": {
          color: "blue"
        },
        "&$checked": {
          color: "white",
          "&:hover": {
            color: "#b647ff"
          },
          "&.Mui-focusVisible": {
            color: "white"
          }
        },
        "&.Mui-focusVisible": {
          color: "white"
        },
        "&.focused:not(.Mui-focusVisible):not($checked)": {
          color: "white"
        }
      }
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
  // textTransform: "uppercase",
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
