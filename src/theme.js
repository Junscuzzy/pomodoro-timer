import { createMuiTheme } from "@material-ui/core/styles";
// import indigo from "@material-ui/core/colors/indigo";

import MondaTtf from "./assets/fonts/Monda/Monda-Regular.ttf";
import OrbitronTtf from "./assets/fonts/Orbitron/static/Orbitron-Regular.ttf";

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

const orbitron = {
  fontFamily: "Orbitron",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
      local('Orbitron'),
      local('Orbitron-Regular'),
      url(${OrbitronTtf}) format('trueType')
    `
};

const theme = createMuiTheme({
  palette: {
    type: "dark",
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
        "@font-face": [monda, orbitron]
      }
    }
  }
});

export default theme;
