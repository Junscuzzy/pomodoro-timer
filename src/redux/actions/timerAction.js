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

export const incrementBreak = count => ({
  type: INCREMENT_BREAK,
  breakLength: increment(count)
});

export const decrementBreak = count => ({
  type: DECREMENT_BREAK,
  breakLength: decrement(count)
});

export const incrementSession = count => ({
  type: INCREMENT_SESSION,
  sessionLength: increment(count)
});

export const decrementSession = count => ({
  type: DECREMENT_SESSION,
  sessionLength: decrement(count)
});

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
