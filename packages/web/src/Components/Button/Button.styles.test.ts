import { getLabelStyles, getRootStyles } from "./Button.styles";
import { IThemeWeb } from "../../Themes";

describe("Button styles", () => {
  describe("when theme is undefined", () => {
    describe("root styles", () => {
      it("should not be overridden", () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const actual = getRootStyles();

        expect(actual).toStrictEqual({});
      });
    });
    describe("label styles", () => {
      it("should not be overriden", () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const actual = getLabelStyles();

        expect(actual).toStrictEqual({});
      });
    });
  });

  describe("when theme sizes are undefined", () => {
    describe("root styles", () => {
      it("should be not overridden", () => {
        const actual = getRootStyles({} as IThemeWeb);

        expect(actual).toStrictEqual({});
      });
    });
  });
  describe("when theme small size is defined", () => {
    const theme = {
      sizes: {
        none: 0,
        micro: 4,
        tiny: 8,
        small: 16,
        standard: 24,
        semi: 32,
        semiX: 40,
        medium: 48,
        mediumX: 56,
        large: 64,
        largeX: 72,
        largeXX: 80,
        largeXXX: 88,
        huge: 96,
        hugeX: 128,
        hugeXX: 144,
        hugeXXX: 192,
        veryHuge: 256,
      },
    } as IThemeWeb;

    describe("button horizontal padding", () => {
      it("should use small size token", () => {
        const actual = getRootStyles(theme);
        const small = 16;

        expect(actual).toHaveProperty("paddingLeft", small);
        expect(actual).toHaveProperty("paddingRight", small);
      });
    });

    describe("label line height", () => {
      it("should use standard size token be pixel measured", () => {
        const actual = getLabelStyles(theme);
        const standard = "24px";

        expect(actual).toHaveProperty("lineHeight", standard);
      });
    });

  });
});
