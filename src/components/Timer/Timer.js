import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { SECOND } from "../../utils/api";
import useInterval from "../../hooks/useInterval";

// ? Add LinearProgress

function Timer({ label, formatedDate, isOn, tick }) {
  useInterval(() => tick(), isOn ? SECOND : null);

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
  label: PropTypes.string
};

Timer.defaultProps = {
  label: "Session 1"
};

export default Timer;
