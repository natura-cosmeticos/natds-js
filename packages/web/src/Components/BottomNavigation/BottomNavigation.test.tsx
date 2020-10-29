import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import { BottomNavigation } from ".";

describe("BottomNavigation component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<BottomNavigation/>);

    expect(testRenderer).toMatchSnapshot();
  });
});
