import styles, { getStylesForColor } from "./Avatar.styles";
import { IThemeWeb, themes } from "../../Themes";
import { AvatarColor } from "./Avatar.props";

describe("Avatar styles", () => {
  const colors = ["primary", "secondary"];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  describe.each(colors)("when color is %p", (color: AvatarColor) => {
    describe("given template is not provided", () => {
      const theme = {} as IThemeWeb;

      it("should not be overridden", () => {
        const actual = styles({ color, theme });

        expect(actual.fallback).toStrictEqual({});
        expect(actual.root).toStrictEqual({});
      });
    });
    describe(`given main ${color} color is provided`, () => {
      const theme = themes.natura.light;

      it("should override background and text color", () => {
        if (typeof theme.palette !== "undefined") {
          theme.palette[color].main = "#FFFFFF";
          theme.palette[color].contrastText = "#000000";
        }

        const actualStylesForColor = getStylesForColor({ color, theme });
        const actualStyles = styles({ color, theme });

        expect(actualStylesForColor.root).toHaveProperty("backgroundColor", "#FFFFFF");
        expect(actualStylesForColor.root).toHaveProperty("color", "#000000");
        expect(actualStylesForColor.fallback).toHaveProperty("color", "#000000");
        expect(actualStylesForColor.fallback).toHaveProperty("fill", "#000000");

        expect(actualStyles.root).toHaveProperty("backgroundColor", "#FFFFFF");
        expect(actualStyles.root).toHaveProperty("color", "#000000");
        expect(actualStyles.fallback).toHaveProperty("color", "#000000");
        expect(actualStyles.fallback).toHaveProperty("fill", "#000000");
      });
    });
  });
});
