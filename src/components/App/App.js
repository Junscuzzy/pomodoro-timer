import React from "react";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import AppContainer from "./App.container";

const useStyles = makeStyles(({ palette, spacing, shadows }) => ({
  "@global": {
    body: {
      background: `linear-gradient(225deg, ${palette.primary.light} 0%, ${palette.secondary.light} 100%)`
    }
  },
  container: {
    display: "flex",
    minHeight: "100vh",
    width: "100vw",
    textAlign: "center"
  },
  paper: {
    width: "100%",
    overflow: "hidden",
    margin: "auto",
    borderRadius: spacing(3),
    boxShadow: shadows[6]
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />

      <Container maxWidth="xs" className={classes.container}>
        <Paper className={classes.paper}>
          <AppContainer />
        </Paper>
      </Container>
    </>
  );
}

export default App;
