import * as React from "react";
import { expect } from "chai";
import { mount } from "enzyme";

import Drawer from "../Components/Drawer";

export const anchors: any = {
  left: "left",
  top: "top",
  right: "right",
  bottom: "bottom",
};

export const variants: any = {
  permanent: "permanent",
  persistent: "persistent",
  temporary: "temporary",
};

describe("Drawer component", () => {
  Object.keys(anchors).forEach((anchor: string) => {
    test(`should match snapshot - Any valid Drawer with ${anchor} anchor`, () => {
      const component = mount(<Drawer open={true} anchor={anchor as any}>content</Drawer>);

      expect(component).matchSnapshot(`Drawer snapshot - with ${anchor} anchor`);
    });
  });

  Object.keys(variants).forEach((variant: string) => {
    test(`should match snapshot - Any valid Drawer with ${variant} variant`, () => {
      const component = mount(<Drawer open={true} variant={variant as any}>content</Drawer>);

      expect(component).matchSnapshot(`Drawer snapshot - with ${variant} color`);
    });
  });
});
