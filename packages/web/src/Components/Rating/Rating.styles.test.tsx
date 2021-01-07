import { getFontSize } from "./Rating.styles";
import { IThemeWeb, themes } from "../../Themes";
import { IRatingProps } from "./Rating.props";

describe("Rating.styles", () => {
  describe("getFontSize", () => {
    it("should return the correct font size", () => {

      const theme: IThemeWeb = themes.natura.light;
      const props: IRatingProps = {
        size: "small",
      };
      const fontSize = getFontSize(theme)(props);

      expect(fontSize).toEqual(`${theme.sizes[props.size]}px`);
    });

    it("should return nothing with a wrong size value", () => {

      const theme: IThemeWeb = themes.natura.light;
      const props: IRatingProps = {
        size: null,
      };
      const fontSize = getFontSize(theme)(props);

      expect(fontSize).toEqual("");
    });
  });
});
