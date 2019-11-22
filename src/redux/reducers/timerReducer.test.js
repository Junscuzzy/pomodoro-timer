import timerReducer from "./timerReducer";
import types from "../types";
import { MINUTE } from "../../utils/api";

describe("timerReducer", () => {
  test(`${types.INCREMENT_BREAK} state is correct`, () => {
    const action = { type: types.INCREMENT_BREAK, breakLength: 3 };
    expect(timerReducer(undefined, action).breakLength).toBe(3);
  });

  test(`${types.DECREMENT_BREAK} state is correct`, () => {
    const action = { type: types.DECREMENT_BREAK, breakLength: 3 };
    expect(timerReducer(undefined, action).breakLength).toBe(3);
  });

  test(`${types.INCREMENT_SESSION} state is correct`, () => {
    const action = { type: types.INCREMENT_SESSION, sessionLength: 3 };
    expect(timerReducer(undefined, action).sessionLength).toBe(3);
  });

  test(`${types.DECREMENT_SESSION} state is correct`, () => {
    const action = { type: types.DECREMENT_SESSION, sessionLength: 3 };
    expect(timerReducer(undefined, action).sessionLength).toBe(3);
  });

  test(`${types.START_STOP} state is correct`, () => {
    const action = { type: types.START_STOP };
    expect(timerReducer({ isOn: false }, action).isOn).toBe(true);
    expect(timerReducer({ isOn: true }, action).isOn).toBe(false);
  });

  test(`${types.RESET} state is correct`, () => {
    const action = { type: types.RESET };
    const state = timerReducer({ sessionLength: 30, breakLength: 3 }, action);

    expect(state.isOn).toBeFalsy();
    expect(state.startTime).toBe(25 * MINUTE);
    expect(state.time).toBe(25 * MINUTE);
    expect(state.sessionLength).toBe(25);
    expect(state.breakLength).toBe(5);
  });

  test(`${types.UPDATE_TIME} state is correct`, () => {
    const action = { type: types.UPDATE_TIME, time: 24 * MINUTE };
    expect(timerReducer({}, action).time).toBe(24 * MINUTE);
  });
});
