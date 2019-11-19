import { increment, decrement } from "../api";
import TIMER from "./types";

const {
  INCREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_BREAK,
  DECREMENT_SESSION
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

export const incrementSession = () => (dispatch, getState) =>
  dispatch({
    type: INCREMENT_SESSION,
    breakLength: increment(getState().timer.sessionLength)
  });

export const decrementSession = () => (dispatch, getState) =>
  dispatch({
    type: DECREMENT_SESSION,
    breakLength: decrement(getState().timer.sessionLength)
  });
