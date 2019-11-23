import { makeMockStore } from "../../utils/jestUtils";
import * as actions from "./timerAction";
import types from "../types";
import { SECOND } from "../../utils/api";

const store = makeMockStore();

describe("Redux Timer action", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  describe("incrementBreak()", () => {
    it("Dispatches the correct actions", async () => {
      const expectedAction = [
        {
          type: types.INCREMENT_BREAK,
          breakLength: 6
        },
        { type: types.RESET_TIME }
      ];

      store.dispatch(actions.incrementBreak(5));
      await expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe("decrementBreak()", () => {
    it("Dispatches the correct actions", async () => {
      const expectedActions = [
        {
          type: types.DECREMENT_BREAK,
          breakLength: 4
        },
        { type: types.RESET_TIME }
      ];

      store.dispatch(actions.decrementBreak(5));
      await expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("incrementSession()", () => {
    it("Dispatches the correct actions", async () => {
      const expectedActions = [
        {
          type: types.INCREMENT_SESSION,
          sessionLength: 6
        },
        { type: types.RESET_TIME }
      ];

      store.dispatch(actions.incrementSession(5));
      await expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("decrementSession()", () => {
    it("Dispatches the correct actions", async () => {
      const expectedActions = [
        {
          type: types.DECREMENT_SESSION,
          sessionLength: 4
        },
        { type: types.RESET_TIME }
      ];

      store.dispatch(actions.decrementSession(5));
      await expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("startStop()", () => {
    it("Dispatches the correct action", async () => {
      store.dispatch(actions.startStop());
      await expect(store.getActions()).toContainEqual({
        type: types.START_STOP
      });
    });
  });

  describe("resetTime()", () => {
    it("Dispatches the correct action", async () => {
      store.dispatch(actions.resetTime());
      await expect(store.getActions()).toContainEqual({
        type: types.RESET_TIME
      });
    });
  });

  describe("resetTimer()", () => {
    it("Dispatches the correct action", async () => {
      store.dispatch(actions.resetTimer());
      await expect(store.getActions()).toContainEqual({
        type: types.RESET_TIMER
      });
    });
  });

  describe("updateTime()", () => {
    it("Dispatches the correct action if time is positive", async () => {
      store.dispatch(actions.updateTime(5 * SECOND));
      await expect(store.getActions()).toContainEqual({
        type: types.UPDATE_TIME,
        time: 4 * SECOND
      });
    });

    it("Dispatches the correct action if time is negative ", async () => {
      store.dispatch(actions.updateTime(0));
      await expect(store.getActions()).toContainEqual({
        type: types.TOGGLE_TIMER_TYPE
      });
    });
  });

  describe("toggleTimerType()", () => {
    it("Dispatches the correct action", async () => {
      const expectedActions = [
        { type: types.TOGGLE_TIMER_TYPE },
        { type: types.RESET_TIME }
      ];
      store.dispatch(actions.toggleTimerType());
      await expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
