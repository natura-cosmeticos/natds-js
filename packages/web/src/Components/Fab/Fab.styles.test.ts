import { styles } from "./Fab.styles";
import { IThemeWeb } from "../../Themes";

describe("Fab styles", () => {
  describe("when theme is an empty object", () => {
    const actual = styles({} as IThemeWeb);

    it("should not override styles", () => {
      expect(actual.primary).toStrictEqual({});
      expect(actual.root).toStrictEqual({});
      expect(actual.secondary).toStrictEqual({});
    });

  });
  describe("when theme palette is empty", () => {
    const actual = styles({ palette: {} } as IThemeWeb);

    it("should not override styles", () => {
      expect(actual.primary).toStrictEqual({});
      expect(actual.root).toStrictEqual({});
      expect(actual.secondary).toStrictEqual({});
    });
  });
});
