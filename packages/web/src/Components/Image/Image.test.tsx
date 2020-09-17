import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import Image from "./Image";

describe("Image component", () => {
  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

  describe("when only required properties are provided", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Image alt={"Image alt text"} />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when disableSelection property is explicitly set to true", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Image alt={"Image alt text"} disableSelection={true} />);
      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when disableSelection property is explicitly set to false", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Image alt={"Image alt text"} disableSelection={false} />);
      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when height is set to auto", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Image alt={"Image alt text"} height={"auto"} />);
      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when width is set to auto", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Image alt={"Image alt text"} width={"auto"} />);
      expect(testRenderer).toMatchSnapshot();
    });
  });
});
