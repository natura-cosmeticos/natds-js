import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import CustomIcon from "./CustomIcon";

describe("CustomIcon component", () => {
  describe("when no props are provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<CustomIcon />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when onIconPress property is provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<CustomIcon onIconPress={() => Function.prototype()} />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
