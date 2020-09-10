import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import Spacing from "./Spacing";
import { spacingArgTypes } from "./Spacing.argTypes";
import { Provider } from "../../Provider";

describe("Spacing component", () => {

  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

  describe("given no default theme is provided", () => {
    describe("when no props are provided", () => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Spacing />);

        expect(testRenderer).toMatchSnapshot();
      });
    });
  });

  describe("given a valid default theme is provided", () => {
    describe("when no props are provided", () => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Provider>
          <Spacing />
        </Provider>);

        expect(testRenderer).toMatchSnapshot();
      });
    });
    describe("when a `div` is provided as component", () => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Provider>
          <Spacing component={"div"}/>
        </Provider>);

        expect(testRenderer).toMatchSnapshot();
      });
    });
    describe("when a `span` is provided as a component", () => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Provider>
          <Spacing component={"span"}/>
        </Provider>);

        expect(testRenderer).toMatchSnapshot();
      });
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    describe.each(Object.keys(spacingArgTypes))("when a %p prop is provided", (prop) => {
      it("should render correctly", () => {
        const props = {
          [prop]: "small",
        };

        testRenderer = TestRenderer.create(<Provider>
          <Spacing {...props} />
        </Provider>);
        expect(testRenderer).toMatchSnapshot();
      });
    });
  });
});
