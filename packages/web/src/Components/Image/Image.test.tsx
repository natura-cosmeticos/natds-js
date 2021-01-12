// eslint-disable-next-line no-use-before-define
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
  describe("when state is true", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Image alt={"Image alt text"} state={true} />);
      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when fallback property exist", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Image alt={"Image alt text"} fallback={"https://zeroheight.com/uploads/CKp-xkMzUziuVtBy4yXxyg.jpg"} />);
      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when radius is true", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Image alt={"Image alt text"} radius={true} />);
      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when error", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Image alt={"Image alt text"} src="https://pbs.twimg.com/profile_images/308179129267781632/wLDnEiOy_400x400.jpg" />);

      const img = testRenderer.root;
      const imgError = img.findByType("img");

      TestRenderer.act(() => {
        imgError.props.onError();
      });
      TestRenderer.act(() => {
        imgError.props.onError();
      });

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
