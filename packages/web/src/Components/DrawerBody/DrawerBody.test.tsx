import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import DrawerBody from "./DrawerBody";

describe("DrawerBody component", () => {

  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

  describe("when a children is provided", () => {
    it("should match snapshot", () => {
      testRenderer = TestRenderer.create(<DrawerBody><div>Custom children</div></DrawerBody>);
      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when children and component are provided", () => {
    it("should match snapshot", () => {
      testRenderer = TestRenderer.create(<DrawerBody component="section"><div>Custom children</div></DrawerBody>);
      expect(testRenderer).toMatchSnapshot();
    });
  });

});
