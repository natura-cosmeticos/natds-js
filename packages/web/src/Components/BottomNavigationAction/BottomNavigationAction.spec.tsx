import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import { BottomNavigationAction } from ".";

describe("BottomNavigationAction component", () => {
  describe("when no props are provided", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<BottomNavigationAction/>);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when selected", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<BottomNavigationAction selected={true}/>);

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
