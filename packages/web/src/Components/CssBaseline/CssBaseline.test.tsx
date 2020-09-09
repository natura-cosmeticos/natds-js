import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import CssBaseline from "./CssBaseline";

describe("CssBaseline component", () => {
  it("renders correctly", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<React.Fragment><CssBaseline /></React.Fragment>);

    expect(testRenderer).toMatchSnapshot();
  });
});
