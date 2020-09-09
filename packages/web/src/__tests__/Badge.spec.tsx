import * as React from "react";
import { expect } from "chai";
import * as renderer from "react-test-renderer";

import Badge from "../Components/Badge";
import { IBadgeAnchors } from "../Components/types/IBadgeAnchors";

export const anchors: IBadgeAnchors = {
  topleft: {
    horizontal: "left",
    vertical: "top",
  },
  topright: {
    horizontal: "right",
    vertical: "top",
  },
  bottomleft: {
    horizontal: "left",
    vertical: "bottom",
  },
  bottomright: {
    horizontal: "right",
    vertical: "bottom",
  },
};

export const colors: { secondary: string; default: string; error: string; primary: string } = {
  default: "default",
  error: "error",
  primary: "primary",
  secondary: "secondary",
};

export const variants: { standard: string; dot: string } = {
  dot: "dot",
  standard: "standard",
};

export const overlaps: { rectangle: string; circle: string } = {
  circle: "circle",
  rectangle: "rectangle",
};

describe("Badge component", () => {
  Object.keys(colors).forEach((color: string) => {
    test(`should match snapshot - Any valid Badge with ${color} color`, () => {
      const component = renderer.create(<Badge color={color as keyof typeof colors}>Badge</Badge>).toJSON();

      expect(component).matchSnapshot(`Badge snapshot - with ${color} color`);
    });
  });

  Object.values(anchors).forEach((anchor) => {
    test(`should match snapshot - Any valid Badge with ${anchor} anchor`, () => {

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = renderer.create(<Badge anchorOrigin={anchor as any}>Badge</Badge>).toJSON();

      expect(component).matchSnapshot(`Badge snapshot - with ${anchor} anchor`);
    });
  });

  Object.keys(variants).forEach((variant: string) => {
    test(`should match snapshot - Any valid Badge with ${variant} variant`, () => {
      const component = renderer.create(<Badge variant={variant as keyof typeof variants}>Badge</Badge>).toJSON();

      expect(component).matchSnapshot(`Badge snapshot - with ${variant} variant`);
    });
  });

  Object.keys(overlaps).forEach((overlap: string) => {
    test(`should match snapshot - Any valid Badge with ${overlap} overlap`, () => {
      const component = renderer.create(<Badge overlap={overlap as keyof typeof overlaps}>Badge</Badge>).toJSON();

      expect(component).matchSnapshot(`Badge snapshot - with ${overlap} overlap`);
    });
  });
});
