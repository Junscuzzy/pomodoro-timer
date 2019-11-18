import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PauseIcon from "@material-ui/icons/Pause";
import PlayIcon from "@material-ui/icons/PlayArrow";
import ResetIcon from "@material-ui/icons/RotateLeft";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(({ spacing }) => ({
  wrapper: {
    marginTop: spacing(4),
    width: "100%",
    position: "relative"
  },
  play: {
    width: "100%",
    marginBottom: 0,
    borderRadius: 0
  },
  reset: {
    position: "absolute",
    right: spacing(4),
    top: 0,
    transform: "translateY(-50%)"
  }
}));

function Footer({ isOn, startStop, reset }) {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Button
        id="start_stop"
        color="primary"
        variant="contained"
        size="large"
        className={classes.play}
        onClick={startStop}
      >
        {isOn ? (
          <>
            <PauseIcon /> Stop{" "}
          </>
        ) : (
          <>
            <PlayIcon /> Start{" "}
          </>
        )}
      </Button>
      <Fab
        id="reset"
        color="secondary"
        size="medium"
        onClick={reset}
        className={classes.reset}
      >
        <ResetIcon />
      </Fab>
    </Box>
  );
}

Footer.propTypes = {
  isRunning: PropTypes.bool,
  startStop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

Footer.defaultPros = {
  isRunning: false
};

export default Footer;
