import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Alignments, Playground, Variants } from "./Typography.stories";

describe("Typography stories", () => {

  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

  describe("with interactive arguments", () => {
    it("renders correctly", () => {
      testRenderer = TestRenderer.create(<Playground>Playground story</Playground>);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("with variants", () => {
    it("renders correctly", () => {
      testRenderer = TestRenderer.create(<Variants>Variants story</Variants>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("with alignments", () => {
    it("renders correctly", () => {
      testRenderer = TestRenderer.create(<Alignments>Alignments story</Alignments>);

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
