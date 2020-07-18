import * as React from "react";
import * as renderer from "react-test-renderer";

import { AppBar } from "../";

describe("AppBar component", () => {
  describe("rendering", () => {
    test("it should match default snapshot", () => {
      const wrapper = renderer.create(<AppBar />);

      expect(wrapper.toJSON()).toMatchSnapshot("Default AppBar snapshot");
    });
    test("it should match elevation equals zero snapshot", () => {
      const wrapper = renderer.create(<AppBar elevation={0} />);

      expect(wrapper.toJSON()).toMatchSnapshot("Elevation equals zero AppBar snapshot");
    });
  });
});
