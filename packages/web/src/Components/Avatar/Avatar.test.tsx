/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import Avatar from "./Avatar";
import { Provider } from "../../Provider";
import { IThemeWeb, themes } from "../../Themes";
import { colors } from "./__fixtures__/colors";
import { variants } from "./__fixtures__/variants";
import { AvatarColor, AvatarSize, AvatarVariant } from "./Avatar.props";
import { sizes } from "./__fixtures__/sizes";

describe("Avatar component", () => {

  const label = "A";
  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

  describe("given no theme was provided", () => {
    // @ts-ignore
    describe.each(Object.keys(colors))("when color is %p", (color: AvatarColor) => {
      it(`should render ${color} color correctly`, () => {
        testRenderer = TestRenderer.create(<Avatar color={color}>{label}</Avatar>);
        expect(testRenderer).toMatchSnapshot();
      });
    });

    // @ts-ignore
    describe.each(Object.keys(variants))("when variant is %p", (variant: AvatarVariant) => {
      it(`should render ${variant} variant correctly`, () => {
        testRenderer = TestRenderer.create(<Avatar variant={variant}>{label}</Avatar>);
      });
    });

    describe("when initials are provided as children", () => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Avatar>AB</Avatar>);
        expect(testRenderer).toMatchSnapshot();
      });
    });

    describe("when an icon is provided as children", () => {
      it("should render correctly", () => {
        const MockedIcon = () => <i/>;

        testRenderer = TestRenderer.create(<Avatar><MockedIcon /></Avatar>);
        expect(testRenderer).toMatchSnapshot();
      });
    });

    describe("when an image is provided as children", () => {
      it("should render correctly", () => {
        const image = "source/image.png";

        testRenderer = TestRenderer.create(<Avatar alt={""} src={image} />);
        expect(testRenderer).toMatchSnapshot();
      });
    });

  });

  describe("given a default theme was provided", () => {
    describe("when no props are overridden", () => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Provider><Avatar /></Provider>);
        expect(testRenderer).toMatchSnapshot();
      });
    });
  });

  describe("given a specific theme was explicitly provided", () => {

    const theme : IThemeWeb = themes.natura.light;

    describe("when no property is provided", () => {
      it("should render correctly", () => {
        testRenderer = TestRenderer.create(<Provider theme={theme}><Avatar /></Provider>);
        expect(testRenderer).toMatchSnapshot();
      });
    });

    // @ts-ignore
    describe.each(Object.keys(sizes))("when size is %p", (size: AvatarSize) => {
      it(`should render ${size} correctly`, () => {
        testRenderer = TestRenderer.create(<Provider theme={theme}><Avatar size={size} /></Provider>);
        expect(testRenderer).toMatchSnapshot();
      });
    });

    // @ts-ignore
    describe.each(Object.keys(colors))("when color is %p", (color: AvatarColor) => {
      it(`should render ${color} correctly`, () => {
        testRenderer = TestRenderer.create(<Provider theme={theme}><Avatar color={color} /></Provider>);
        expect(testRenderer).toMatchSnapshot();
      });
    });

  });

});
