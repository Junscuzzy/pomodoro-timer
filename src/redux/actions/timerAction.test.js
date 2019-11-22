import { makeMockStore } from "../../utils/jestUtils";
import * as actions from "./timerAction";
import types from "../types";
import { SECOND } from "../../utils/api";

const store = makeMockStore();

describe("Redux Timer Actions", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  describe("incrementBreak()", () => {
    it("Dispatches the correct actions", async () => {
      const expectedAction = {
        type: types.INCREMENT_BREAK,
        breakLength: 6
      };

      store.dispatch(actions.incrementBreak(5));
      await expect(store.getActions()).toContainEqual(expectedAction);
    });
  });

  describe("decrementBreak()", () => {
    it("Dispatches the correct actions", async () => {
      const expectedAction = {
        type: types.DECREMENT_BREAK,
        breakLength: 4
      };

      store.dispatch(actions.decrementBreak(5));
      await expect(store.getActions()).toContainEqual(expectedAction);
    });
  });

  describe("incrementSession()", () => {
    it("Dispatches the correct actions", async () => {
      const expectedAction = {
        type: types.INCREMENT_SESSION,
        sessionLength: 6
      };

      store.dispatch(actions.incrementSession(5));
      await expect(store.getActions()).toContainEqual(expectedAction);
    });
  });

  describe("decrementSession()", () => {
    it("Dispatches the correct actions", async () => {
      const expectedAction = {
        type: types.DECREMENT_SESSION,
        sessionLength: 4
      };

      store.dispatch(actions.decrementSession(5));
      await expect(store.getActions()).toContainEqual(expectedAction);
    });
  });

  describe("startStop()", () => {
    it("Dispatches the correct actions", async () => {
      store.dispatch(actions.startStop());
      await expect(store.getActions()).toContainEqual({
        type: types.START_STOP
      });
    });
  });

  describe("reset()", () => {
    it("Dispatches the correct actions", async () => {
      store.dispatch(actions.reset());
      await expect(store.getActions()).toContainEqual({
        type: types.RESET
      });
    });
  });

  describe("updateTime()", () => {
    it("Dispatches the correct actions", async () => {
      store.dispatch(actions.updateTime(5 * SECOND));
      await expect(store.getActions()).toContainEqual({
        type: types.UPDATE_TIME,
        time: 4 * SECOND
      });
    });

    it("Not Dispatches negative time", async () => {
      store.dispatch(actions.updateTime(0));
      await expect(store.getActions()).toContainEqual({
        type: types.UPDATE_TIME,
        time: 0
      });
    });
  });
});
