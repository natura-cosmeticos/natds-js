import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import MenuList from "./MenuList";

describe("MenuList component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<MenuList />);

    expect(testRenderer).toMatchSnapshot();
  });
});
