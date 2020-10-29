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
      const testRenderer : renderer.ReactTestRenderer = renderer.create(<Fab>F</Fab>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when Natura dark theme is provided", () => {
    it("should render correctly", () => {
      const testRenderer : renderer.ReactTestRenderer = renderer.create(<Provider theme={themes.natura.dark}><Fab>F</Fab></Provider>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when Natura light theme is provided", () => {
    it("should render correctly", () => {
      const testRenderer : renderer.ReactTestRenderer = renderer.create(<Provider theme={themes.natura.light}><Fab>F</Fab></Provider>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when disabled is explicitly true", () => {
    it("should render correctly", () => {
      const testRenderer : renderer.ReactTestRenderer = renderer.create(<Fab disabled={true}>F</Fab>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when disabled is explicitly false", () => {
    it("should render correctly", () => {
      const testRenderer : renderer.ReactTestRenderer = renderer.create(<Fab disabled={false}>F</Fab>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when a color is specified", () => {

    it.each(Object.keys(colors))("should render color %p correctly", (color: FabColor) => {
      const testRenderer : renderer.ReactTestRenderer = renderer.create(<Fab color={color}>F</Fab>);

      expect(testRenderer).toMatchSnapshot();
    });

  });

  describe("when a size is specified", () => {

    it.each(Object.keys(sizes))("should render size %p correctly", (size: FabSize) => {
      const testRenderer : renderer.ReactTestRenderer = renderer.create(<Fab size={size}>F</Fab>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when a variant is specified", () => {

    it.each(Object.keys(variants))("should render variant %p correctly", (variant: FabVariant) => {
      const testRenderer : renderer.ReactTestRenderer = renderer.create(<Fab variant={variant}>F</Fab>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

});
