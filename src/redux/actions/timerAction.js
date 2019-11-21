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

export const incrementBreak = () => (dispatch, getState) =>
  dispatch({
    type: INCREMENT_BREAK,
    breakLength: increment(getState().timer.breakLength)
  });

export const decrementBreak = () => (dispatch, getState) =>
  dispatch({
    type: DECREMENT_BREAK,
    breakLength: decrement(getState().timer.breakLength)
  });

export const incrementSession = () => (dispatch, getState) => {
  dispatch({
    type: INCREMENT_SESSION,
    sessionLength: increment(getState().timer.sessionLength)
  });
  dispatch(reset());
};

export const decrementSession = () => (dispatch, getState) => {
  dispatch({
    type: DECREMENT_SESSION,
    sessionLength: decrement(getState().timer.sessionLength)
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
