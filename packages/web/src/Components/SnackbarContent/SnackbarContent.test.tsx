import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { SnackbarContent } from "./SnackbarContent";
import { ISnackbarContentColors } from "./SnackbarContent.props";
import { Provider } from "../../Provider";
import { IThemeWeb, themes } from "../../Themes";
import { colors } from "./__fixtures__/colors";

describe("SnackbarContent Component", () => {
  describe("when no theme is provided", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<SnackbarContent />);

      expect(testRenderer).toMatchSnapshot("SnackbarContent default snapshot");
    });
  });
  describe("when empty theme is provided", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<Provider theme={{} as IThemeWeb}><SnackbarContent /></Provider>);

      expect(testRenderer).toMatchSnapshot("SnackbarContent default snapshot");
    });
  });
  describe("when Natura light theme is provided", () => {
    describe("and when no props are provided", () => {
      it("should match snapshot", () => {
        const testRenderer = TestRenderer.create(<Provider theme={themes.natura.light}><SnackbarContent/></Provider>);

        expect(testRenderer).toMatchSnapshot("SnackbarContent default with custom theme snapshot");
      });
    });
    describe("and when color is provided", () => {
      it("should match to snapshot - SnackbarContent default with colors", () => {
        Object.keys(colors).forEach((color: ISnackbarContentColors) => {
          const testRenderer = TestRenderer.create(<Provider theme={themes.natura.light}><SnackbarContent
            color={color}/></Provider>);

          expect(testRenderer).toMatchSnapshot(`SnackbarContent color ${color} snapshot`);
        });
      });
    });
  });
});
