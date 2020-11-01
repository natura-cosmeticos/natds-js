import * as TestRenderer from "react-test-renderer";
// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { Template } from "./Template";
import { createNodeMock } from "../../__mocks__/createNodeMock";

describe("Popover component", () => {
  describe("when closed", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Template open={false}>Closed popover</Template>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
