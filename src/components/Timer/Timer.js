import React from "react";
import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { SECOND } from "../../utils/api";
import useInterval from "../../hooks/useInterval";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: "flex"
  },
  wrapper: {
    margin: "auto"
  },
  progressWrap: {
    width: 180,
    margin: "auto"
  },
  progressBar: {
    width: "100%"
  },
  textWrap: {
    marginTop: -90
  },
  title: {
    textTransform: "capitalize",
    marginBottom: theme.spacing(1)
  },
  time: {
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: theme.shadows[4]
  }
}));

function Timer({
  counter,
  timerType,
  formatedDate,
  isRunning,
  tick,
  percentage
}) {
  const classes = useStyles();
  const theme = useTheme();

  useInterval(() => tick(), isRunning ? SECOND : null);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.progressWrap}>
          <CircularProgressbar
            value={isRunning ? percentage : 0}
            text={``}
            strokeWidth={4}
            circleRatio={0.6}
            className={classes.progressBar}
            styles={buildStyles({
              rotation: 0.7,
              strokeLinecap: "round",
              pathTransitionDuration: 0.5,
              pathColor: theme.palette.secondary.main,
              trailColor: theme.palette.common.white
            })}
          />
        </div>
        <div className={classes.textWrap}>
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
    </div>
  );
}

Timer.propTypes = {
  timerType: PropTypes.oneOf(["break", "session"]).isRequired,
  counter: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  formatedDate: PropTypes.string.isRequired,
  isRunning: PropTypes.bool,
  tick: PropTypes.func.isRequired
};

Timer.defaultProps = {
  isRunning: false
};

export default Timer;
