import TIMER from "./types";

const {
  INCREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_BREAK,
  DECREMENT_SESSION
} = TIMER;

const initialState = {
  breakLength: 5,
  sessionLength: 25
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
    case DECREMENT_BREAK:
      return { ...state, breakLength: action.breakLength };
    case INCREMENT_SESSION:
    case DECREMENT_SESSION:
      return { ...state, sessionLength: action.breakLength };
    case "":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
