import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Toolbar } from "./Toolbar";
import { Provider } from "../../Provider";
import { variants } from "./__fixtures__/variants";
import { ToolbarVariant } from "./Toolbar.props";

describe("Toolbar styles", () => {

  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

  describe("given no theme was provided", () => {
    describe("when no prop is overridden", () => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Toolbar />);
        expect(testRenderer).toMatchSnapshot();
      });
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    describe.each(Object.keys(variants))("when variant property is %p", (variant: ToolbarVariant) => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Toolbar variant={variant} />);
        expect(testRenderer).toMatchSnapshot();
      });
    });
  });

  describe("given a default theme is provided", () => {
    describe("when no prop is overridden", () => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Provider><Toolbar /></Provider>);
        expect(testRenderer).toMatchSnapshot();
      });
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    describe.each(Object.keys(variants))("when variant property is %p", (variant: ToolbarVariant) => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Provider><Toolbar variant={variant} /></Provider>);
        expect(testRenderer).toMatchSnapshot();
      });
    });
  });

});
