import { increment, decrement, SECOND } from "../../utils/api";
import TIMER from "../types";

const {
  INCREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_BREAK,
  DECREMENT_SESSION,
  START_STOP,
  RESET,
  UPDATE_TIME
} = TIMER;

export const incrementBreak = count => dispatch => {
  dispatch({
    type: INCREMENT_BREAK,
    breakLength: increment(count)
  });
  dispatch(reset());
};

export const decrementBreak = count => dispatch => {
  dispatch({
    type: DECREMENT_BREAK,
    breakLength: decrement(count)
  });
  dispatch(reset());
};

export const incrementSession = count => dispatch => {
  dispatch({
    type: INCREMENT_SESSION,
    sessionLength: increment(count)
  });
  dispatch(reset());
};

export const decrementSession = count => dispatch => {
  dispatch({
    type: DECREMENT_SESSION,
    sessionLength: decrement(count)
  });
  dispatch(reset());
};

export const startStop = () => ({
  type: START_STOP
});

export const reset = () => ({
  type: RESET
});

export const updateTime = time => ({
  type: UPDATE_TIME,
  time: time - SECOND > 0 ? time - SECOND : 0
});
