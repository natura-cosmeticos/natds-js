import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { InputStateHelpTextProvider } from "./InputStateHelpTextProvider";

describe("InputStateHelpTextProvider component", () => {
  describe("when state is error", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <InputStateHelpTextProvider state={"error"} />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when state is success", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <InputStateHelpTextProvider state={"success"} />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when readonly property is explicitly true", () => {
    describe("and when state is error", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <InputStateHelpTextProvider readOnly={true} state={"error"} />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
    describe("and when state is success", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <InputStateHelpTextProvider readOnly={true} state={"success"} />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when readonly property is explicitly false", () => {
    describe("and when state is error", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <InputStateHelpTextProvider readOnly={false} state={"error"} />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
    describe("and when state is success", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <InputStateHelpTextProvider readOnly={false} state={"success"} />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when help text is set", () => {
    describe("and when state is error", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <InputStateHelpTextProvider helpText={"Test help text"} state={"error"} />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
    describe("and when state is success", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <InputStateHelpTextProvider helpText={"Test help text"} state={"success"} />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
