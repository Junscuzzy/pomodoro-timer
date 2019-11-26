import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { SECOND } from "../../utils/api";
import useInterval from "../../hooks/useInterval";

// ? Add LinearProgress

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: "flex"
  },
  wrapper: {
    margin: "auto"
  },

  title: {
    textTransform: "capitalize",
    marginBottom: theme.spacing(1)
  },
  time: {
    fontFamily: "Orbitron",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    boxShadow: theme.shadows[4]
  }
}));

function Timer({ counter, timerType, formatedDate, isRunning, tick }) {
  const classes = useStyles();
  useInterval(() => tick(), isRunning ? SECOND : null);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Typography
          id="timer-label"
          className={classes.title}
          component="p"
          variant="h5"
        >
          {`${timerType} ${counter}`.toString()}
        </Typography>

        <Typography id="time-left" variant="h2" className={classes.time}>
          {formatedDate}
        </Typography>
      </div>
    </div>
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
  isRunning: false
};

export default Timer;
