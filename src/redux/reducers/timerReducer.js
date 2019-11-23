import TIMER from "../types";
import { MINUTE, SECOND } from "../../utils/api";
import { AST_LabelRef } from "terser";

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

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  isRunning: false,
  startTime: 25 * MINUTE,
  time: 25 * MINUTE,
  timerType: "session",
  counter: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
    case DECREMENT_BREAK:
      return {
        ...state,
        breakLength: action.breakLength,
        isRunning: false
      };
    case INCREMENT_SESSION:
    case DECREMENT_SESSION:
      return {
        ...state,
        sessionLength: action.sessionLength,
        isRunning: false
      };
    case START_STOP:
      return { ...state, isRunning: !state.isRunning };
    case RESET_TIME:
      let left =
        state.timerType === "session"
          ? state.sessionLength * MINUTE
          : state.breakLength * MINUTE;
      return { ...state, time: left, startTime: left };
    case RESET_TIMER:
      return {
        ...initialState
      };
    case UPDATE_TIME:
      return { ...state, time: action.time };
    case TOGGLE_TIMER_TYPE:
      let newState = {};
      if (state.timerType === "session") {
        newState.timerType = "break";
      } else {
        newState.timerType = "session";
        newState.counter = state.counter + 1;
      }
      return { ...state, ...newState };
    default:
      return state;
  }
};
