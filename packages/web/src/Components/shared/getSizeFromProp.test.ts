import { ISizes } from "@naturacosmeticos/natds-styles";
import { getSizeFromProp } from "./getSizeFromProp";

describe("Size from prop", () => {
  describe("when no arguments are passed", () => {
    it("should be empty", () => {
      const actual = getSizeFromProp({});

      expect(actual).toBe("");
    });
  });
  describe("when size property value is a number and theme sizes are undefined", () => {
    it("should be the same number", () => {
      const actual = getSizeFromProp({
        sizePropValue: 0,
      });

      const expected = 0;

      expect(actual).toBe(expected);
    });
  });

  describe("given theme sizes are defined", () => {
    const themeSizes = {
      none: 0,
    } as ISizes;

    describe("when no property value is provided", () => {
      it("should be empty", () => {
        const actual = getSizeFromProp({
          themeSizes,
        });

        expect(actual).toBe("");
      });
    });
    describe("when property value is a valid size token", () => {
      it("should be the equivalent size in number", () => {
        const actual = getSizeFromProp({
          sizePropValue: "none",
          themeSizes,
        });
        const expected = 0;

        expect(actual).toBe(expected);
      });
    });
    describe("when property value is not a valid size token", () => {
      it("should be empty", () => {
        const actual = getSizeFromProp({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          sizePropValue: "invalid",
          themeSizes,
        });

        expect(actual).toBe("");
      });
    });
  });

});
