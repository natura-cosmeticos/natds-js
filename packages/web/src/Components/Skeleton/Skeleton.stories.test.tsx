import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Playground } from "./Skeleton.stories";

describe("Skeleton stories", () => {
  describe("Playground", () => {
    it("renders correctly", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<Playground />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
