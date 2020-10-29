import * as TestRenderer from "react-test-renderer";
import * as React from "react";
import { FormHelperText } from "../FormHelperText";

describe("FormHelpText", () => {
  describe("when no state is provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<FormHelperText />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when state is error is provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<FormHelperText state={"error"} />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when state is success is provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<FormHelperText state={"success"} />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
