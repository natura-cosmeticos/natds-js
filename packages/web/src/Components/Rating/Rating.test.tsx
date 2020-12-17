import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { sizes } from "./__fixtures__/sizes";
import { Rating } from "./Rating";
import { Provider } from "../../Provider";
import { themes } from "../../Themes";
import { IRatingSizes } from "./Rating.props";

describe("Rating component", () => {
  describe("rendering", () => {

    let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

    it("it should render each size", () => {
      Object.values(sizes).forEach((size: IRatingSizes) => {
        testRenderer = TestRenderer.create(<Rating id={size} size={size}>Mock</Rating>);

        expect(testRenderer).toMatchSnapshot("Rating Sizes");
      });
    });
    it("it should render according to theme", () => {
      testRenderer = TestRenderer.create(<Provider theme={themes.natura.dark}><Rating id={"with-theme"}>Mock</Rating></Provider>);

      expect(testRenderer).toMatchSnapshot("Rating Custom Theme");
    });
  });
});