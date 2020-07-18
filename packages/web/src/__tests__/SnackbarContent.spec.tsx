import * as React from "react";
import * as renderer from "react-test-renderer";
import { Provider } from "../Provider";
import SnackbarContent from "../Components/SnackbarContent";
import { themes } from "../Themes";

describe("SnackbarContent Component", () => {
  describe("Rendering", () => {
    const colors = [
      "default",
      "error",
      "success",
      "info",
      "warning",
    ];

    test("should match to snapshot - SnackbarContent default", () => {
      const wrapper = renderer.create(<SnackbarContent />);

      expect(wrapper.toJSON()).toMatchSnapshot("SnackbarContent default snapshot");
    });
    test("should match to snapshot - SnackbarContent default with custom theme", () => {
      const wrapper = renderer.create(<Provider theme={themes.natura.light}><SnackbarContent /></Provider>);

      expect(wrapper.toJSON()).toMatchSnapshot("SnackbarContent default with custom theme snapshot");
    });
    test("should match to snapshot - SnackbarContent default with colors", () => {
      colors.forEach((color: any) => {
        const wrapper = renderer.create(<Provider theme={themes.natura.light}><SnackbarContent color={color} /></Provider>);

        expect(wrapper.toJSON()).toMatchSnapshot(`SnackbarContent color ${color} snapshot`);
      });
    });
  });
});
