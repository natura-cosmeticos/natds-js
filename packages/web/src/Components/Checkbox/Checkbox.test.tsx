import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  describe("when no props are provided", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<Checkbox />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when color is primary", () => {
    const testRenderer = TestRenderer.create(<Checkbox color="primary" />);

    expect(testRenderer).toMatchSnapshot();
  });
  describe("when checked", () => {
    const testRenderer = TestRenderer.create(<Checkbox checked />);

    expect(testRenderer).toMatchSnapshot();
  });
  describe("when disabled", () => {
    const testRenderer = TestRenderer.create(<Checkbox disabled />);

    expect(testRenderer).toMatchSnapshot();
  });
});
