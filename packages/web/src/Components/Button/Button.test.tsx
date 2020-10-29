import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import { Button } from ".";

const label = "A Button Component";

describe("Button component", () => {
  describe("when size is small", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<Button size="small">{label}</Button>);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when size is medium", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<Button size="medium">{label}</Button>);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when size is large", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<Button size="large">{label}</Button>);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when variant is text", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<Button variant="text">{label}</Button>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when variant is outlined", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<Button variant="outlined">{label}</Button>);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when variant is contained", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(<Button variant="contained">{label}</Button>);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  it.todo("should call onClick");
});
