import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { colors } from "./__fixtures__/colors";
import { types } from "./__fixtures__/types";
import { ContextualBadge } from "./ContextualBadge";
import { Provider } from "../../Provider";
import { themes } from "../../Themes";
import { IContextualBadgeColors, IContextualBadgeTypes } from "./ContextualBadge.props";

describe("ContextualBadge component", () => {
  describe("rendering", () => {

    let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

    it("should render each color", () => {
      Object.values(colors).forEach((color: IContextualBadgeColors) => {
        testRenderer = TestRenderer.create(<ContextualBadge color={color} id={color}>Mock</ContextualBadge>);

        expect(testRenderer).toMatchSnapshot("ContextualBadge Colors");
      });
    });
    it("it should render each type", () => {
      Object.values(types).forEach((type: IContextualBadgeTypes) => {
        testRenderer = TestRenderer.create(<ContextualBadge id={type} type={type}>Mock</ContextualBadge>);

        expect(testRenderer).toMatchSnapshot("ContextualBadge Types");
      });
    });
    it("it should render the default color and default type", () => {
      testRenderer = TestRenderer.create(<ContextualBadge id={"default"}>Mock</ContextualBadge>);

      expect(testRenderer).toMatchSnapshot("ContextualBadge Default Color And Type");
    });
    it("it should render according to theme", () => {
      testRenderer = TestRenderer.create(<Provider theme={themes.natura.dark}><ContextualBadge id={"with-theme"}>Mock</ContextualBadge></Provider>);

      expect(testRenderer).toMatchSnapshot("ContextualBadge Custom Theme");
    });
  });
});
