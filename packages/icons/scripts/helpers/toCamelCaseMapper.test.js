import toCamelCaseMapper from "./toCamelCaseMapper";

describe("Camel case mapper", () => {
  describe("when is the first word", () => {
    it("should return same value", () => {
      const FIRST_WORD_INDEX = 0;
      const actual = toCamelCaseMapper("first", FIRST_WORD_INDEX);

      expect(actual).toBe("first");
    });
  });
  describe("when is not the first word", () => {
    it("should returned capitalized word", () => {
      const SECOND_WORD_INDEX = 1;
      const actual = toCamelCaseMapper("second", SECOND_WORD_INDEX);

      expect(actual).toBe("Second");
    });
  });
});
