import {
  IIconSizes, ITheme, themes, tokens,
} from "@naturacosmeticos/natds-styles";
import {getFontSize} from "../../Components/Icon/getFontSize";

describe("Font size", () => {

  const iconSizes = Object.keys(tokens.iconSizes);

  iconSizes.forEach((size) => {

    describe("when size is undefined", () => {
      describe("but theme icon sizes are defined", () => {

        // @ts-ignore
        const actual = getFontSize({
          theme: themes.natura.light,
        });

        it("should not be undefined", () => {
          expect(actual).not.toContain("undefined");
        });

        it("should be measured in pixels", () => {
          expect(actual).toContain("px");
        });

      });
    });

    describe(`when size is ${size}`, () => {
      describe("when theme icon sizes are defined", () => {

        const actual = getFontSize({
          size: size as keyof IIconSizes,
          theme: themes.natura.light,
        });

        it("should not be undefined", () => {
          expect(actual).not.toContain("undefined");
        });

        it("should be measured in pixels", () => {
          expect(actual).toContain("px");
        });

      });

      describe("when theme icon sizes are not defined", () => {

        const actual = getFontSize({
          size: size as keyof IIconSizes,
          theme: {} as ITheme,
        });

        it("can be undefined", () => {
          expect(actual).toContain("undefined");
        });

      });

      describe("when theme is not defined", () => {

        // @ts-ignore
        const actual = getFontSize({
          size: size as keyof IIconSizes,
        });

        it("can be undefined", () => {
          expect(actual).toContain("undefined");
        });

      });

    });
  });

});
