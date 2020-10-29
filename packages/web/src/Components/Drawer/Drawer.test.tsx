import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { anchors } from "./__fixtures__/anchors";
import Drawer, { IDrawerProps } from "./Drawer";
import { variants } from "./__fixtures__/variants";

// eslint-disable-next-line mocha/no-skipped-tests
describe.skip("Drawer component", () => {
  Object.keys(anchors).forEach((anchor: IDrawerProps["anchor"]) => {
    it(`should match snapshot - Any valid Drawer with ${anchor} anchor`, () => {
      const component = TestRenderer.create(<Drawer open={true} anchor={anchor}>content</Drawer>);

      expect(component).toMatchSnapshot(`Drawer snapshot - with ${anchor} anchor`);
    });
  });

  Object.keys(variants).forEach((variant: IDrawerProps["variant"]) => {
    it(`should match snapshot - Any valid Drawer with ${variant} variant`, () => {
      const component = TestRenderer.create(<Drawer open={true} variant={variant}>content</Drawer>);

      expect(component).toMatchSnapshot(`Drawer snapshot - with ${variant} color`);
    });
  });
});
