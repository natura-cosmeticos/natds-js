import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { DrawerMenuSection } from "./DrawerMenuSection";

describe("DrawerMenuSection component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<DrawerMenuSection />);

    expect(testRenderer).toMatchSnapshot();
  });
});
