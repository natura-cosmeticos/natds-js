import React from "react";
import renderer from "react-test-renderer";

import { Fab, themes } from "../";
import { Provider } from "../Provider";


describe("Fab component", () => {
  describe("rendering", () => {
    const colors = [
        "primary",
        "secondary",
        "light"
      ],

      sizes = [
        "large",
        "medium",
        "small"
      ],

      variants = [
        "round",
        "extended"
      ];

    test("it should render with no props", () => {
      const wrapper = renderer.create(<Fab>F</Fab>);

      expect(wrapper.toJSON()).toMatchSnapshot("No Props Fab");
    });

    test("it should render with Provider theme", () => {
      const wrapper = renderer.create(<Provider theme={themes.natura.dark}><Fab>F</Fab></Provider>);

      expect(wrapper.toJSON()).toMatchSnapshot("Provider Theme Fab");
    });

    test("it should render with disabled truthy", () => {
      const wrapper = renderer.create(<Fab disabled>F</Fab>);

      expect(wrapper.toJSON()).toMatchSnapshot("Disabled Fab");
    });

    test("it should render all colors", () => {
      colors.forEach((color: any) => {
        const wrapper = renderer.create(<Fab color={color}>F</Fab>);

        expect(wrapper.toJSON()).toMatchSnapshot(`Color ${color} Fab`);
      });
    });

    test("it should render all sizes", () => {
      sizes.forEach((size: any) => {
        const wrapper = renderer.create(<Fab size={size}>F</Fab>);

        expect(wrapper.toJSON()).toMatchSnapshot(`Size ${size} Fab`);
      });
    });

    test("it should render all variants", () => {
      variants.forEach((variant: any) => {
        const wrapper = renderer.create(<Fab variant={variant}>F</Fab>);

        expect(wrapper.toJSON()).toMatchSnapshot(`Size ${variant} Fab`);
      });
    });
  });
});
