/* eslint-disable @typescript-eslint/ban-ts-comment,no-undefined */
import * as React from "react";
import * as renderer from "react-test-renderer";

import { Fab } from ".";
import { Provider } from "../../Provider";
import { themes } from "../../Themes";
import { FabColor, FabSize, FabVariant } from "./Fab.props";
import colors from "./__fixtures__/colors";
import sizes from "./__fixtures__/sizes";
import variants from "./__fixtures__/variants";

describe("Fab component", () => {

  describe("when no props are provided", () => {
    it("should render correctly", () => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab>F</Fab>);

      expect(wrapper.toJSON()).toMatchSnapshot("No Props Fab");
    });
  });

  describe("when Natura dark theme is provided", () => {
    it("should render correctly", () => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Provider theme={themes.natura.dark}><Fab>F</Fab></Provider>);

      expect(wrapper.toJSON()).toMatchSnapshot("Provider Natura Dark Theme Fab");
    });
  });

  describe("when Natura light theme is provided", () => {
    it("should render correctly", () => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Provider theme={themes.natura.light}><Fab>F</Fab></Provider>);

      expect(wrapper.toJSON()).toMatchSnapshot("Provider Natura Light Theme Fab");
    });
  });

  describe("when disabled is explicitly true", () => {
    it("should render correctly", () => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab disabled={true}>F</Fab>);

      expect(wrapper.toJSON()).toMatchSnapshot("Disabled Fab");
    });
  });

  describe("when disabled is explicitly false", () => {
    it("should render correctly", () => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab disabled={false}>F</Fab>);

      expect(wrapper.toJSON()).toMatchSnapshot("Not Disabled Fab");
    });
  });

  describe("when a color is specified", () => {

    // @ts-ignore
    it.each(Object.keys(colors))("should render color %p correctly", (color: FabColor) => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab color={color}>F</Fab>);

      expect(wrapper.toJSON()).toMatchSnapshot(`Color ${color} Fab`);
    });

  });

  describe("when a size is specified", () => {

    // @ts-ignore
    it.each(Object.keys(sizes))("should render size %p correctly", (size: FabSize) => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab size={size}>F</Fab>);

      expect(wrapper.toJSON()).toMatchSnapshot(`Size ${size} Fab`);
    });
  });

  describe("when a variant is specified", () => {

    // @ts-ignore
    it.each(Object.keys(variants))("should render variant %p correctly", (variant: FabVariant) => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab variant={variant}>F</Fab>);

      expect(wrapper.toJSON()).toMatchSnapshot(`Size ${variant} Fab`);
    });
  });

});
