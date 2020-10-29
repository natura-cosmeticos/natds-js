import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { GridContainer } from "./GridContainer";

describe("GridContainer component", () => {
  test("should match to snapshot", () => {
    const testRenderer: TestRenderer.ReactTestRenderer = TestRenderer.create(<GridContainer/>);

    expect(testRenderer).toMatchSnapshot();
  });
});
