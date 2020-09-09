import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import Badge from "./Badge";

describe("Badge component", () => {
  it("should render correctly", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<Badge />);

    expect(testRenderer).toMatchSnapshot();
  });
});
