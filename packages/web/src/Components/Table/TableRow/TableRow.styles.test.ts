import { style } from "./TableRow.styles";
import { IThemeWeb } from "../../../Themes";

describe("Table Row styles", () => {
  describe("when row is selected", () => {
    describe("and theme is empty", () => {
      it("should not be overridden", () => {
        const actualStyles = style({} as IThemeWeb);

        expect(actualStyles.selected).toStrictEqual({});
      });
    });
    describe("and theme palette is empty", () => {
      it("should not be overridden", () => {
        const actualStyles = style({ palette: {} } as IThemeWeb);

        expect(actualStyles.selected).toStrictEqual({});
      });
    });
    describe("and theme palette primary is empty", () => {
      it("should not be overridden", () => {
        const actualStyles = style({ palette: { primary: {} } } as unknown as IThemeWeb);

        expect(actualStyles.selected).toStrictEqual({});
      });
    });
    describe("and theme palette primary main color is defined", () => {
      const actualStyles = style({ palette: { primary: { main: "#FFFFFF" } } } as unknown as IThemeWeb);

      expect(actualStyles.selected).toHaveProperty("backgroundColor", "rgba(255, 255, 255, 0.16) !important");
    });
  });
});
