import TIMER from "../types";
import { MINUTE } from "../../utils/api";

const {
  INCREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_BREAK,
  DECREMENT_SESSION,
  START_STOP,
  RESET,
  UPDATE_TIME
} = TIMER;

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  isRunning: false,
  startTime: 25 * MINUTE,
  time: 25 * MINUTE
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
    case DECREMENT_BREAK:
      return {
        ...state,
        breakLength: action.breakLength
      };
    case INCREMENT_SESSION:
    case DECREMENT_SESSION:
      return {
        ...state,
        sessionLength: action.sessionLength
      };
    case START_STOP:
      return { ...state, isRunning: !state.isRunning };
    case RESET:
      return {
        ...initialState
      };
    case UPDATE_TIME:
      return { ...state, time: action.time };
    default:
      return state;
  }
};
