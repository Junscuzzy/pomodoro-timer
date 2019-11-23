import { increment, decrement, SECOND } from "../../utils/api";
import TIMER from "../types";

const {
  INCREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_BREAK,
  DECREMENT_SESSION,
  START_STOP,
  RESET_TIME,
  RESET_TIMER,
  UPDATE_TIME,
  TOGGLE_TIMER_TYPE
} = TIMER;

export const incrementBreak = count => dispatch => {
  dispatch({
    type: INCREMENT_BREAK,
    breakLength: increment(count)
  });
  dispatch(resetTime());
};

export const decrementBreak = count => dispatch => {
  dispatch({
    type: DECREMENT_BREAK,
    breakLength: decrement(count)
  });
  dispatch(resetTime());
};

export const incrementSession = count => dispatch => {
  dispatch({
    type: INCREMENT_SESSION,
    sessionLength: increment(count)
  });
  dispatch(resetTime());
};

export const decrementSession = count => dispatch => {
  dispatch({
    type: DECREMENT_SESSION,
    sessionLength: decrement(count)
  });
  dispatch(resetTime());
};

export const startStop = () => ({
  type: START_STOP
});

export const resetTime = () => ({
  type: RESET_TIME
});

export const resetTimer = () => ({
  type: RESET_TIMER
});

export const updateTime = time => dispatch => {
  if (time < 999) {
    dispatch(toggleTimerType());
  } else {
    dispatch({
      type: UPDATE_TIME,
      time: time - SECOND
    });
  }
};

export const toggleTimerType = () => dispatch => {
  dispatch({ type: TOGGLE_TIMER_TYPE });
  dispatch(resetTime());
};
