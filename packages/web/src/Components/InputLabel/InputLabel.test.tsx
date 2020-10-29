import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import InputLabel from "./InputLabel";

describe("InputLabel component", () => {
  describe("when no props are provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<InputLabel />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when state is error", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<InputLabel state={"error"} />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when state is success", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<InputLabel state={"success"} />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
