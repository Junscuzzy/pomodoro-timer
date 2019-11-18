import { increment } from "./api";

describe("API", () => {
  describe("#increment()", () => {
    it("should increment", () => {
      expect(increment(3)).toStrictEqual(4);
      expect(increment(0)).toStrictEqual(1);
    });

    it("should increment until 60 max", () => {
      expect(increment(59)).toStrictEqual(60);
      expect(increment(60)).toStrictEqual(60);
    });
  });
});
