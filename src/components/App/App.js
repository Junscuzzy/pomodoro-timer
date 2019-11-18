import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Timer from "../Timer/Timer";
import { MINUTE, SECOND } from "../../api";
import Footer from "../Footer/Footer";
import useInterval from "../../hooks/useInterval";
import Header from "../Header/Header";

const useStyles = makeStyles(({ palette, spacing }) => ({
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
  title: {
    marginTop: spacing(4),
    marginBottom: spacing(2)
  },
  buttons: {
    marginBottom: spacing(2),
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  }
}));

function App() {
  const classes = useStyles();
  const sessionLength = 25;
  const [time, setTime] = useState(sessionLength * MINUTE);
  const [isOn, setOn] = useState(false);

  const resetTimer = () => {
    setTime(sessionLength * MINUTE);
    if (isOn) {
      setOn(false);
    }
  };

  useInterval(() => setTime(time - SECOND), isOn ? SECOND : null);

  console.log({ time, isOn });

  return (
    <main className={classes.root}>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <Paper className={classes.paper}>
          <Header />
          <Timer sessionName="Session X" time={time} />
          <Footer
            isOn={isOn}
            startStop={() => setOn(!isOn)}
            reset={resetTimer}
          />
        </Paper>
      </Container>
    </main>
  );
}

export default App;
