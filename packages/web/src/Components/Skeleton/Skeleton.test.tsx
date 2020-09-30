import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import Skeleton from "./Skeleton";
import { Provider } from "../../Provider";

describe("Skeleton component", () => {

  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

  describe("given no theme is provided", () => {
    describe("when no props are overridden", () => {
      it("renders correctly", () => {
        testRenderer = TestRenderer.create(<Skeleton />);

        expect(testRenderer).toMatchSnapshot();
      });
    });
    describe("when height prop is provided", () => {
      it("renders correctly", () => {
        testRenderer = TestRenderer.create(<Skeleton height={"small"} />);

        expect(testRenderer).toMatchSnapshot();
      });
    });
    describe("when width prop is provided", () => {
      it("renders correctly", () => {
        testRenderer = TestRenderer.create(<Skeleton width={"small"} />);

        expect(testRenderer).toMatchSnapshot();
      });
    });
    describe("when height and width props are provided", () => {
      it("renders correctly", () => {
        testRenderer = TestRenderer.create(<Skeleton height={"small"} width={"small"} />);

        expect(testRenderer).toMatchSnapshot();
      });
    });
  });

  describe("given a default theme is provided", () => {
    describe("when no props are overridden", () => {
      it("renders correctly", () => {
        testRenderer = TestRenderer.create(<Provider><Skeleton /></Provider>);

        expect(testRenderer).toMatchSnapshot();
      });
    });
    describe("when height prop is provided", () => {
      it("renders correctly", () => {
        testRenderer = TestRenderer.create(<Provider><Skeleton height={"small"} /></Provider>);

        expect(testRenderer).toMatchSnapshot();
      });
    });
    describe("when width prop is provided", () => {
      it("renders correctly", () => {
        testRenderer = TestRenderer.create(<Provider><Skeleton width={"small"} /></Provider>);

        expect(testRenderer).toMatchSnapshot();
      });
    });
    describe("when height and with props are provided", () => {
      it("renders correctly", () => {
        testRenderer = TestRenderer.create(<Provider><Skeleton height={"small"} width={"small"} /></Provider>);

        expect(testRenderer).toMatchSnapshot();
      });
    });
  });
});
