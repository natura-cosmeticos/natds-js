/* eslint-disable @typescript-eslint/ban-ts-comment,no-undefined */
import {getColorProp} from "./getColorProp";

describe("Fab color property getter", () => {
  describe("when color property is primary", () => {
    it("should return primary color", () => {
      const actual = getColorProp("primary");

      expect(actual).toBe("primary");
    });
  });
  describe("when color property is secondary", () => {
    it("should return secondary color", () => {
      const actual = getColorProp("secondary");

      expect(actual).toBe("secondary");
    });
  });
  describe("when color property is light", () => {
    it("should return default color", () => {
      const actual = getColorProp("light");

      expect(actual).toBe("default");
    });
  });
  describe("when color property is null", () => {
    it("should return null", () => {
      // @ts-ignore
      const actual = getColorProp(null);

      expect(actual).toBe(null);
    });
  });
  describe("when color property is undefined", () => {
    it("should return null", () => {
      // @ts-ignore
      const actual = getColorProp();

      expect(actual).toBe(null);
    });
  });
  describe("when color property is not a valid value", () => {
    it("should return null", () => {
      // @ts-ignore
      const actual = getColorProp("not a valid value");

      expect(actual).toBe(null);
    });
  });
});
