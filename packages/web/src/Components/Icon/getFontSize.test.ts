import {
  IIconSizes, tokens,
} from "@naturacosmeticos/natds-styles";
import { getFontSize } from "./getFontSize";
import { IThemeWeb, themes } from "../../Themes";

describe("Font size", () => {

  const iconSizes = Object.keys(tokens.iconSizes);

  iconSizes.forEach((size) => {

    describe("when size is undefined", () => {
      describe("but theme icon sizes are defined", () => {

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
          theme: {} as IThemeWeb,
        });

        it("should be not undefined", () => {
          expect(actual).not.toContain("undefined");
        });

      });

      describe("when theme is not defined", () => {

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const actual = getFontSize({
          size: size as keyof IIconSizes,
        });

        it("should be 1em", () => {
          expect(actual).toContain("1em");
        });

      });

    });
  });

});
