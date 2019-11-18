import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Timer from "../Timer/Timer";
import { MINUTE } from "../../api";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    background: `linear-gradient(225deg, ${palette.primary.light} 0%, ${palette.secondary.light} 100%)`,
    display: "flex",
    minHeight: "100vh",
    width: "100vw",
    overflow: "hidden",
    textAlign: "center"
  },
  container: {
    margin: "auto"
  },
  paper: {
    overflow: "hidden"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

function App() {
  const classes = useStyles();
  const [isRunning, setRunning] = useState(false);

  return (
    <main className={classes.root}>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <Paper className={classes.paper}>
          <Header title="Pomodoro" />
          <Timer sessionName="Session X" time={25 * MINUTE} />
          <Footer isRunning={isRunning} />
        </Paper>
      </Container>
    </main>
  );
}

export default App;
