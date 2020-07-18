import * as React from "react";
import * as renderer from "react-test-renderer";

import { expect } from "chai";
import Link from "../Components/Link";

const colors: any = {
  error: "error",
  inherit: "inherit",
  primary: "primary",
  secondary: "secondary",
  textPrimary: "textPrimary",
  textSecondary: "textSecondary",
};

const underlines: any = {
  always: "always",
  hover: "hover",
  none: "none",
};

const variants: any = {
  body1: "body1",
  body2: "body2",
  button: "button",
  caption: "caption",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  inherit: "inherit",
  overline: "overline",
  srOnly: "srOnly",
  subtitle1: "subtitle1",
  subtitle2: "subtitle2",
};

describe("Link component", () => {
  Object.keys(colors).forEach((color: string) => {
    test(`should match snapshot - Any valid Link with ${color} color`, () => {
      const component = renderer.create(<Link color={color as any}>link</Link>).toJSON();

      expect(component).matchSnapshot(`Link snapshot - with ${color} color`);
    });
  });

  Object.keys(underlines).forEach((underline: string) => {
    test(`should match snapshot - Any valid Link with ${underline} underline`, () => {
      const component = renderer.create(<Link underline={underline as any}>link</Link>).toJSON();

      expect(component).matchSnapshot(`Link snapshot - with ${underline} underline`);
    });
  });

  Object.keys(variants).forEach((variant: string) => {
    test(`should match snapshot - Any valid Link with ${variant} variant`, () => {
      const component = renderer.create(<Link variant={variant as any}>link</Link>).toJSON();

      expect(component).matchSnapshot(`Link snapshot - with ${variant} variant`);
    });
  });
});
