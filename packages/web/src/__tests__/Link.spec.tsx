import * as React from "react";
import * as renderer from "react-test-renderer";

import { expect } from "chai";
import Link from "../Components/Link";

const colors: {
  secondary: string;
  textSecondary: string;
  inherit: string;
  textPrimary: string;
  error: string;
  primary: string
} = {
  error: "error",
  inherit: "inherit",
  primary: "primary",
  secondary: "secondary",
  textPrimary: "textPrimary",
  textSecondary: "textSecondary",
};

const underlines: { always: string; hover: string; none: string } = {
  always: "always",
  hover: "hover",
  none: "none",
};

const variants: {
  subtitle2: string;
  srOnly: string;
  subtitle1: string;
  body2: string;
  caption: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  button: string;
  body1: string;
  inherit: string;
  overline: string
} = {
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
      const component = renderer.create(<Link color={color as keyof typeof colors}>link</Link>).toJSON();

      expect(component).matchSnapshot(`Link snapshot - with ${color} color`);
    });
  });

  Object.keys(underlines).forEach((underline: string) => {
    test(`should match snapshot - Any valid Link with ${underline} underline`, () => {
      const component = renderer.create(<Link underline={underline as keyof typeof underlines}>link</Link>).toJSON();

      expect(component).matchSnapshot(`Link snapshot - with ${underline} underline`);
    });
  });

  Object.keys(variants).forEach((variant: string) => {
    test(`should match snapshot - Any valid Link with ${variant} variant`, () => {
      const component = renderer.create(<Link variant={variant as keyof typeof variants}>link</Link>).toJSON();

      expect(component).matchSnapshot(`Link snapshot - with ${variant} variant`);
    });
  });
});
