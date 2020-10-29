import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import Field from "./Field";

describe("Field component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<Field id={"test-field"} />);

    expect(testRenderer).toMatchSnapshot();
  });
});
