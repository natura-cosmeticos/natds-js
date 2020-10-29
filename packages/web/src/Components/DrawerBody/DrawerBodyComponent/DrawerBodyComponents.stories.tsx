import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { DrawerBodyComponent } from "./DrawerBodyComponent";

describe("DrawerBody internal styled component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<DrawerBodyComponent />);

    expect(testRenderer).toMatchSnapshot();
  });
});
