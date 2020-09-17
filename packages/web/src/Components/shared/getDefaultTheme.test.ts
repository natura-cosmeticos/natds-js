import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";
import getDefaultTheme from "./getDefaultTheme";
import { themes } from "../../Themes";

describe("Default theme", () => {
  describe("when provided theme is from Natura Design System", () => {
    it("should be the own theme", () => {
      const actualTheme = themes.natura.light;
      const actual = getDefaultTheme(actualTheme);

      expect(actual).toStrictEqual(themes.natura.light);
    });
  });
  describe("when provided theme is not from Natura Design System", () => {
    it("should be the Natura Light theme", () => {
      const actualTheme = createMuiTheme({});
      const actual = getDefaultTheme(actualTheme);
      const expectedTheme = createMuiTheme(themes.natura.light as unknown as ThemeOptions);

      expect(JSON.stringify(actual)).toBe(JSON.stringify(expectedTheme));
    });
  });
});
