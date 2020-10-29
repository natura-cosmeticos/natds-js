import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { MenuItem } from "./MenuItem";

describe("MenuItem component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<MenuItem />);

    expect(testRenderer).toMatchSnapshot();
  });
});
