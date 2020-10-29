import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import DrawerMenuItem from "./DrawerMenuItem";

describe("Drawer Menu Item component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<DrawerMenuItem />);

    expect(testRenderer).toMatchSnapshot();
  });
});
