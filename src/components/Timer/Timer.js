import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { getFormatedDate, SECOND } from "../../utils/api";
import useInterval from "../../hooks/useInterval";
import { updateTime } from "../../redux/actions/timerAction";

// ? Add LinearProgress

function Timer({ sessionName }) {
  const { isOn, time } = useSelector(state => state.timer);
  const dispatch = useDispatch();

  useInterval(() => dispatch(updateTime(time)), isOn ? SECOND : null);

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
  sessionName: PropTypes.string
};

Timer.defaultProps = {
  sessionName: "Session 1"
};

export default Timer;
