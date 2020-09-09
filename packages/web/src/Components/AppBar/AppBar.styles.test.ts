import { styles } from "./AppBar.styles";
import { IThemeWeb } from "../../Themes";

describe("AppBar styles", () => {
  describe("when an empty theme is provided", () => {
    it("should not override colorDefault styles", () => {
      const actual = styles({} as IThemeWeb);

      expect(actual).toStrictEqual({ colorDefault: {} });
    });
  });
  describe("when an empty palette is provided", () => {
    it("should not override colorDefault styles", () => {
      const actual = styles({ palette: {} } as IThemeWeb);

      expect(actual).toStrictEqual({ colorDefault: {} });
    });
  });
  describe("when an empty background palette is provided", () => {
    it("should not override colorDefault styles", () => {
      const actual = styles({ palette: { background: {} } } as IThemeWeb);

      expect(actual).toStrictEqual({ colorDefault: {} });
    });
  });
  describe("when a paper background color is specified", () => {
    it("should override colorDefault styles", () => {
      const theme = {
        palette: {
          background: {
            paper: "#FFFFFF",
          },
        },
      } as IThemeWeb;

      const actual = styles(theme);

      expect(actual).toStrictEqual({
        colorDefault: {
          backgroundColor: "#FFFFFF",
        },
      });
    });
  });
  describe("when a paper contrast text is specified", () => {
    it("should override colorDefault styles", () => {
      const theme = {
        palette: {
          background: {
            paperContrastText: "#000000",
          },
        },
      } as IThemeWeb;

      const actual = styles(theme);

      expect(actual).toStrictEqual({
        colorDefault: {
          color: "#000000",
        },
      });
    });
  });
  describe("when paper background color and contrast text is specified", () => {
    it("should override colorDefault styles", () => {
      const theme = {
        palette: {
          background: {
            paper: "#FFFFFF",
            paperContrastText: "#000000",
          },
        },
      } as IThemeWeb;

      const actual = styles(theme);

      expect(actual).toStrictEqual({
        colorDefault: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
        },
      });
    });
  });
});
