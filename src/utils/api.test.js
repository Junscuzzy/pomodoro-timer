import {
  increment,
  decrement,
  intervalToObj,
  getFormatedDate,
  SECOND,
  MINUTE
} from "./api";

describe("API", () => {
  describe("increment()", () => {
    it("should increment", () => {
      expect(increment(3)).toStrictEqual(4);
    });

    it("should increment until 60 max", () => {
      expect(increment(60)).toStrictEqual(60);
    });
  });

  describe("decrement()", () => {
    it("should decrement", () => {
      expect(decrement(3)).toStrictEqual(2);
    });

    it("should decrement until 1 min", () => {
      expect(decrement(1)).toStrictEqual(1);
    });
  });

  describe("intervalToObj()", () => {
    it("should return an object for 0 second", () => {
      expect(intervalToObj(0)).toMatchObject({
        minutes: 0,
        seconds: 0
      });
    });

    it("should return an object for 3 seconds", () => {
      expect(intervalToObj(3 * SECOND)).toMatchObject({
        minutes: 0,
        seconds: 3
      });
    });

    it("should return an object for 15 seconds", () => {
      expect(intervalToObj(15 * SECOND)).toMatchObject({
        minutes: 0,
        seconds: 15
      });
    });

    it("should return an object for 1 minute", () => {
      expect(intervalToObj(MINUTE)).toMatchObject({
        minutes: 1,
        seconds: 0
      });
    });

    it("should handle minutes", () => {
      expect(intervalToObj(3 * MINUTE + 15 * SECOND + 125)).toMatchObject({
        minutes: 3,
        seconds: 15
      });
    });

    it("should return 60 minutes max", () => {
      expect(intervalToObj(80 * MINUTE + 15 * 1025)).toMatchObject({
        minutes: 60,
        seconds: 0
      });
    });

    it("should return 0 seconds min", () => {
      expect(intervalToObj(-1025)).toMatchObject({
        minutes: 0,
        seconds: 0
      });
    });
  });

  describe("getFormatedDate()", () => {
    it("should always be displayed in mm:ss format", () => {
      expect(getFormatedDate(414000)).toBe("06:54");
      expect(getFormatedDate(25 * MINUTE + 54 * SECOND)).toBe("25:54");
      expect(getFormatedDate(45 * MINUTE + 32 * SECOND)).toBe("45:32");
    });

    it("should return max 60:00", () => {
      expect(getFormatedDate(61 * MINUTE + 61 * SECOND)).toBe("60:00");
    });

    it("should return 00:00 if timeout", () => {
      expect(getFormatedDate(0)).toBe("00:00");
    });

    it("should return min 00:00", () => {
      expect(getFormatedDate(-1000)).toBe("00:00");
    });
  });
});
