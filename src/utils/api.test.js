import {
  increment,
  decrement,
  intervalToObj,
  intervalObjToString,
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

    it("should decrement until 0 min", () => {
      expect(decrement(0)).toStrictEqual(0);
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

  describe("intervalObjToString()", () => {
    it("should return string formated date", () => {
      expect(intervalObjToString({ minutes: 25, seconds: 54 })).toBe("25:54");
      expect(intervalObjToString({ minutes: 45, seconds: 32 })).toBe("45:32");
    });

    it("should always be displayed in mm:ss format", () => {
      expect(intervalObjToString({ minutes: 6, seconds: 54 })).toBe("06:54");
      expect(intervalObjToString({ minutes: 45, seconds: 5 })).toBe("45:05");
      expect(intervalObjToString({ minutes: 7, seconds: 9 })).toBe("07:09");
    });

    it("should return 00:00 if timeout", () => {
      expect(intervalObjToString({ minutes: 0, seconds: 0 })).toBe("00:00");
    });
  });

  describe("getFormatedDate()", () => {
    it("should always be displayed in mm:ss format", () => {
      expect(getFormatedDate(414000)).toBe("06:54");
    });

    it("should return max 60:00", () => {
      expect(getFormatedDate(61 * MINUTE + 61 * SECOND)).toBe("60:00");
    });

    it("should return min 00:00", () => {
      expect(getFormatedDate(0)).toBe("00:00");
    });
  });
});
