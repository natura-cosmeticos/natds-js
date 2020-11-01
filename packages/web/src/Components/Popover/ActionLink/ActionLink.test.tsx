import * as TestRenderer from "react-test-renderer";
// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { ActionLink } from "./ActionLink";

describe("Action link component", () => {
  describe("when no props are provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <ActionLink />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when text property is provided", () => {
    it("should render correctly", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <ActionLink text={"Test text"} />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when both text and children properties are provided", () => {
    it("should render correctly", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <ActionLink text={"Test text"}>Test children content</ActionLink>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
