import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { colors } from "./__fixtures__/colors";
import { underlines } from "./__fixtures__/underlines";
import { variants } from "./__fixtures__/variants";
import { Link } from "./Link";

describe("Link component", () => {
  Object.keys(colors).forEach((color: string) => {
    test(`should match snapshot - Any valid Link with ${color} color`, () => {
      const component = TestRenderer.create(<Link color={color as keyof typeof colors}>link</Link>);

      expect(component).toMatchSnapshot(`Link snapshot - with ${color} color`);
    });
  });

  Object.keys(underlines).forEach((underline: string) => {
    test(`should match snapshot - Any valid Link with ${underline} underline`, () => {
      const component = TestRenderer.create(<Link underline={underline as keyof typeof underlines}>link</Link>);

      expect(component).toMatchSnapshot(`Link snapshot - with ${underline} underline`);
    });
  });

  Object.keys(variants).forEach((variant: string) => {
    test(`should match snapshot - Any valid Link with ${variant} variant`, () => {
      const component = TestRenderer.create(<Link variant={variant as keyof typeof variants}>link</Link>);

      expect(component).toMatchSnapshot(`Link snapshot - with ${variant} variant`);
    });
  });
});
