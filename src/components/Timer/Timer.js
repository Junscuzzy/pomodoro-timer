import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { SECOND } from "../../utils/api";
import useInterval from "../../hooks/useInterval";
import { classes } from "istanbul-lib-coverage";

// ? Add LinearProgress

const useStyles = makeStyles(() => ({
  title: {
    textTransform: "capitalize"
  }
}));

function Timer({ counter, timerType, formatedDate, isRunning, tick }) {
  const classes = useStyles();
  useInterval(() => tick(), isRunning ? SECOND : null);

  return (
    <Box>
      <Typography
        id="timer-label"
        className={classes.title}
        component="p"
        variant="h5"
      >
        {`${timerType} ${counter}`}
      </Typography>

      <Typography id="time-left" variant="h2">
        {formatedDate}
      </Typography>
    </Box>
  );
}

Timer.propTypes = {
  timerType: PropTypes.oneOf(["break", "session"]).isRequired,
  counter: PropTypes.number.isRequired,
  formatedDate: PropTypes.string.isRequired,
  isRunning: PropTypes.bool,
  tick: PropTypes.func.isRequired
};

Timer.defaultProps = {
  label: "Session 1",
  isRunning: false
};

export default Timer;
