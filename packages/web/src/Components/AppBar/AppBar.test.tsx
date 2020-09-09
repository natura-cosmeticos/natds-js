import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import { AppBar } from "./AppBar";

describe("AppBar component", () => {

  describe("when default props are provided", () => {
    it("should render correctly", () => {
      const testRenderer: TestRenderer.ReactTestRenderer = TestRenderer.create(<AppBar />);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when elevation is zero", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<AppBar elevation={0} />);

    expect(testRenderer).toMatchSnapshot();
  });

});
