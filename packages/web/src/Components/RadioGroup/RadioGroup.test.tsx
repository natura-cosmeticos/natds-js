import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { RadioGroup } from "./RadioGroup";

describe("RadioGroup component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<RadioGroup />);

    expect(testRenderer).toMatchSnapshot();
  });
});
