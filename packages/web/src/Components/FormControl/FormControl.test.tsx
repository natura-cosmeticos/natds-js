import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { FormControl } from "./FormControl";

describe("FormControl component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<FormControl />);

    expect(testRenderer).toMatchSnapshot();
  });
});
