import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import { getFormatedDate } from "../../api";

// ? Add LinearProgress

function Timer({ sessionName, time }) {
  return (
    <Box>
      <Typography id="timer-label" component="p" variant="h5">
        {sessionName}
      </Typography>

      <Typography id="time-left" variant="h2">
        {getFormatedDate(time)}
      </Typography>
    </Box>
  );
}

Timer.propTypes = {
  sessionName: PropTypes.string,
  time: PropTypes.number
};

Timer.defaultProps = {
  sessionName: "Session 1",
  time: 25 * 60 * 1000
};

export default Timer;
