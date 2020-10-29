import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Input } from "./Input";

const mockClientHeight = 100;
const mockClientWidth = 300;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createNodeMock: (element: any) => (HTMLDivElement | null) = (element) => {
  if (element.type === "div") {
    const mockElement: HTMLDivElement = document.createElement("div");

    mockElement.style.padding = "0";
    Reflect.defineProperty(mockElement, "clientHeight", {
      get() {
        return mockClientHeight;
      },
      enumerable: true,
      configurable: true,
    });
    Reflect.defineProperty(mockElement, "clientWidth", {
      get() {
        return mockClientWidth;
      },
      enumerable: true,
      configurable: true,
    });

    return mockElement;
  }

  return null;
};

describe("Input component", () => {
  describe("when no props are provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Input />, { createNodeMock },
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when hasIcon property is true", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Input hasIcon={true} />, { createNodeMock },
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when hasIcon property is false", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Input hasIcon={false} />, { createNodeMock },
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when state is error", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Input state={"error"} />, { createNodeMock },
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when state is success", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Input state={"success"} />, { createNodeMock },
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when multiline property is explicitly false", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Input multiline={false} />, { createNodeMock },
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when rows property is set", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Input rows={1} />, { createNodeMock },
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when rows property is set and multiline property is explicitly false", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Input rows={1} />, { createNodeMock },
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
