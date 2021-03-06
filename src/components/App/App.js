import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../Header/Header.container";
import Timer from "../Timer/Timer.container";
import Footer from "../Footer/Footer.container";
import Audio from "../Audio/Audio.container";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      display: "flex",
      height: "100vh"
    }
  },
  root: {
    display: "flex",
    width: "100vw",
    height: "100%",
    textAlign: "center"
  },
  paper: {
    width: 320,
    height: "100%",
    maxHeight: 568,
    minHeight: 400,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    margin: "auto",
    borderRadius: theme.spacing(3),
    boxShadow: theme.shadows[6]
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Header />
          <Timer />
          <Footer />
          <Audio />
        </Paper>
      </div>
    </>
  );
}

export default App;
