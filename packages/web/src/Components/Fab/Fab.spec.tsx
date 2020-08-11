import * as React from "react";
import * as renderer from "react-test-renderer";

import { Fab } from ".";
import { Provider } from "../../Provider";
import { themes } from "../../Themes";
import {IFabColor, IFabSize, IFabVariant} from "./IFabProps";

describe("Fab component", () => {
  describe("rendering", () => {
    const colors: IFabColor[] = [
      "primary",
      "secondary",
      "light",
    ];
    const sizes: IFabSize[] = [
      "large",
      "medium",
      "small",
    ];
    const variants: IFabVariant[] = [
      "round", "extended",
    ];

    test("it should render with no props", () => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab>F</Fab>);

      expect(wrapper.toJSON()).toMatchSnapshot("No Props Fab");
    });

    test("it should render with Provider theme", () => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Provider theme={themes.natura.dark}><Fab>F</Fab></Provider>);

      expect(wrapper.toJSON()).toMatchSnapshot("Provider Theme Fab");
    });

    test("it should render with disabled truthy", () => {
      const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab disabled>F</Fab>);

      expect(wrapper.toJSON()).toMatchSnapshot("Disabled Fab");
    });

    test("it should render all colors", () => {
      colors.forEach((color: IFabColor) => {
        const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab color={color}>F</Fab>);

        expect(wrapper.toJSON()).toMatchSnapshot(`Color ${color} Fab`);
      });
    });

    test("it should render all sizes", () => {
      sizes.forEach((size: IFabSize) => {
        const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab size={size}>F</Fab>);

        expect(wrapper.toJSON()).toMatchSnapshot(`Size ${size} Fab`);
      });
    });

    test("it should render all variants", () => {
      variants.forEach((variant: IFabVariant) => {
        const wrapper : renderer.ReactTestRenderer = renderer.create(<Fab variant={variant}>F</Fab>);

        expect(wrapper.toJSON()).toMatchSnapshot(`Size ${variant} Fab`);
      });
    });
  });
});
