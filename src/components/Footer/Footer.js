import React from "react";
import PropTypes from "prop-types";

import PauseIcon from "@material-ui/icons/Pause";
import PlayIcon from "@material-ui/icons/PlayArrow";
import ResetIcon from "@material-ui/icons/RotateLeft";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(({ spacing }) => ({
  wrapper: {
    marginBottom: spacing(2),
    marginTop: spacing(2)
  }
}));

function Footer({ isRunning, startStop, reset }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Fab
          id="start_stop"
          color="secondary"
          size="medium"
          variant="extended"
          onClick={startStop}
        >
          {isRunning ? (
            <>
              <PauseIcon /> Stop{" "}
            </>
          ) : (
            <>
              <PlayIcon /> Start{" "}
            </>
          )}
        </Fab>
      </Grid>
      <Grid item xs={3}>
        <Fab id="reset" color="secondary" size="small" onClick={reset}>
          <ResetIcon />
        </Fab>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  startStop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export default Footer;
