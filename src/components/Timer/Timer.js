import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { SECOND } from "../../utils/api";
import useInterval from "../../hooks/useInterval";

// ? Add LinearProgress

function Timer({ sessionName, formatedDate, isOn, tick }) {
  useInterval(() => tick(), isOn ? SECOND : null);

  return (
    <Box>
      <Typography id="timer-label" component="p" variant="h5">
        {sessionName}
      </Typography>

      <Typography id="time-left" variant="h2">
        {formatedDate}
      </Typography>
    </Box>
  );
}

Timer.propTypes = {
  sessionName: PropTypes.string
};

Timer.defaultProps = {
  sessionName: "Session 1"
};

export default Timer;
