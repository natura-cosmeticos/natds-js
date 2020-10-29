import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import Badge from "./Badge";
import { colors } from "./__fixtures__/colors";
import { variants } from "./__fixtures__/variants";
import { overlaps } from "./__fixtures__/overlaps";
import { anchorOrigins } from "./__fixtures__/anchorOrigins";

describe("Badge component", () => {
  it("should render correctly", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<Badge />);

    expect(testRenderer).toMatchSnapshot();
  });

  Object.values(colors).forEach((color) => {
    test(`should match snapshot - Any valid Badge with ${color} color`, () => {
      const component = TestRenderer.create(<Badge color={color}>Badge</Badge>);

      expect(component).toMatchSnapshot(`Badge snapshot - with ${color} color`);
    });
  });

  Object.values(anchorOrigins).forEach((anchor) => {
    test(`should match snapshot - Any valid Badge with ${anchor} anchor`, () => {

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = TestRenderer.create(<Badge anchorOrigin={anchor}>Badge</Badge>);

      expect(component).toMatchSnapshot(`Badge snapshot - with ${anchor} anchor`);
    });
  });

  Object.values(variants).forEach((variant) => {
    test(`should match snapshot - Any valid Badge with ${variant} variant`, () => {
      const component = TestRenderer.create(<Badge variant={variant}>Badge</Badge>);

      expect(component).toMatchSnapshot(`Badge snapshot - with ${variant} variant`);
    });
  });

  Object.values(overlaps).forEach((overlap) => {
    test(`should match snapshot - Any valid Badge with ${overlap} overlap`, () => {
      const component = TestRenderer.create(<Badge overlap={overlap}>Badge</Badge>);

      expect(component).toMatchSnapshot(`Badge snapshot - with ${overlap} overlap`);
    });
  });

});
