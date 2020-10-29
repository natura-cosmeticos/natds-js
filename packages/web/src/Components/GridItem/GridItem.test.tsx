import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { GridItem } from "./GridItem";

describe("GridItem component", () => {
  test("should match to snapshot", () => {
    const testRenderer = TestRenderer.create(<GridItem />);

    expect(testRenderer).toMatchSnapshot();
  });
});
