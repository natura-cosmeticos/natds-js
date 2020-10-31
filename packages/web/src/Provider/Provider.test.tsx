import * as TestRenderer from "react-test-renderer";
// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { themes } from "../Themes";
import { Provider } from "./Provider";

describe("Provider component", () => {
  describe("when no theme was provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Provider>Provider content</Provider>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when Natura light theme is provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Provider theme={themes.natura.light}>Provided content</Provider>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when customized Natura dark theme is provided", () => {
    it("should match snapshot", () => {
      const theme = themes.natura.dark;

      theme.palette = {
        ...theme.palette,
        primary: {
          main: "#000000",
        },
      };
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Provider theme={theme}>Provider content</Provider>,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
