import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import { positions } from "./__fixtures__/positions";
import { Tag } from "./Tag";
import { Provider } from "../../Provider";
import { themes } from "../../Themes";
import { ITagColors, ITagSizes, ITagPositions } from "./Tag.props";

describe("Tag component", () => {
  describe("rendering", () => {

    let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

    it("should render each color", () => {
      Object.values(colors).forEach((color: ITagColors) => {
        testRenderer = TestRenderer.create(<Tag color={color} id={color}>Mock</Tag>);

        expect(testRenderer).toMatchSnapshot("Tag Colors");
      });
    });
    it("it should render each size", () => {
      Object.values(sizes).forEach((size: ITagSizes) => {
        testRenderer = TestRenderer.create(<Tag id={size} size={size}>Mock</Tag>);

        expect(testRenderer).toMatchSnapshot("Tag Sizes");
      });
    });
    it("it should render each position", () => {
      Object.values(positions).forEach((position: ITagPositions) => {
        testRenderer = TestRenderer.create(<Tag id={position} position={position}>Mock</Tag>);

        expect(testRenderer).toMatchSnapshot("Tag Positions");
      });
    });
    it("it should render the default color, default size and default position", () => {
      testRenderer = TestRenderer.create(<Tag id={"default"}>Mock</Tag>);

      expect(testRenderer).toMatchSnapshot("Tag Default Color And Type");
    });
    it("it should render according to theme", () => {
      testRenderer = TestRenderer.create(<Provider theme={themes.natura.dark}><Tag id={"with-theme"}>Mock</Tag></Provider>);

      expect(testRenderer).toMatchSnapshot("Tag Custom Theme");
    });
  });
});
