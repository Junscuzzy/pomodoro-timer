import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { SECOND } from "../../utils/api";
import useInterval from "../../hooks/useInterval";

// ? Add LinearProgress

function Timer({ label, formatedDate, isRunning, tick }) {
  useInterval(() => tick(), isRunning ? SECOND : null);

  return (
    <Box>
      <Typography id="timer-label" component="p" variant="h5">
        {label}
      </Typography>

      <Typography id="time-left" variant="h2">
        {formatedDate}
      </Typography>
    </Box>
  );
}

Timer.propTypes = {
  label: PropTypes.string,
  formatedDate: PropTypes.string.isRequired,
  isRunning: PropTypes.bool,
  tick: PropTypes.func.isRequired
};

Timer.defaultProps = {
  label: "Session 1",
  isRunning: false
};

export default Timer;
