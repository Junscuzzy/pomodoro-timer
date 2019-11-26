import { createMuiTheme } from "@material-ui/core/styles";

import MondaTtf from "./assets/fonts/Monda/Monda-Regular.ttf";

const monda = {
  fontFamily: "Monda",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Monda'),
    local('Monda-Regular'),
    url(${MondaTtf}) format('trueType')
  `
};

const theme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      white: "#f8f8f2"
    },
    primary: {
      main: "#50fa7b",
      contrastText: "#f8f8f2"
    },
    secondary: {
      main: "#bd93f9",
      contrastText: "#f8f8f2"
    },
    background: {
      paper: "#44475a",
      default: "#282a36"
    }
  },
  typography: {
    fontFamily: "Monda, Arial"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [monda]
      }
    }
  }
});

export default theme;
