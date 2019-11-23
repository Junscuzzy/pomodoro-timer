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
    expect(timerReducer({ isRunning: false }, action).isRunning).toBe(true);
    expect(timerReducer({ isRunning: true }, action).isRunning).toBe(false);
  });

  test(`${types.RESET} state is correct`, () => {
    const action = { type: types.RESET };
    const state = timerReducer({ sessionLength: 30, breakLength: 3 }, action);

    expect(state.isRunning).toBeFalsy();
    expect(state.startTime).toBe(25 * MINUTE);
    expect(state.time).toBe(25 * MINUTE);
    expect(state.sessionLength).toBe(25);
    expect(state.breakLength).toBe(5);
  });

  test(`${types.UPDATE_TIME} state is correct`, () => {
    const action = { type: types.UPDATE_TIME, time: 24 * MINUTE };
    expect(timerReducer({}, action).time).toBe(24 * MINUTE);
  });

  test(`${types.TOGGLE_TIMER_TYPE} state is correct when is "break"`, () => {
    const action = { type: types.TOGGLE_TIMER_TYPE };
    const state = timerReducer(
      { timerType: "break", sessionLength: 22 },
      action
    );
    expect(state.timerType).toBe("session");
    expect(state.startTime).toBe(22 * MINUTE);
    expect(state.time).toBe(22 * MINUTE);
  });

  test(`${types.TOGGLE_TIMER_TYPE} state is correct when is "session"`, () => {
    const action = { type: types.TOGGLE_TIMER_TYPE };
    const state = timerReducer(
      { timerType: "session", breakLength: 4 },
      action
    );
    expect(state.timerType).toBe("break");
    expect(state.startTime).toBe(4 * MINUTE);
    expect(state.time).toBe(4 * MINUTE);
  });
});
