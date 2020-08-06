import * as React from "react";
import * as renderer from "react-test-renderer";
import { expect } from "chai";
import { mount } from "enzyme";

import DrawerBody, { DrawerBodyComponent, DrawerBodyScrollComponent } from "../Components/DrawerBody";

describe("DrawerBody component", () => {
  test("should match snapshot - DrawerBody children", () => {
    const children = <div>some custom children</div>,
      component = renderer.create(<DrawerBody>{children}</DrawerBody>);

    expect(component).matchSnapshot("DrawerBody with children snapshot");
  });

  test("should match snapshot - DrawerBody custom component", () => {
    const children = <div>some custom children</div>,
      component = renderer.create(<DrawerBody component="section">{children}</DrawerBody>);

    expect(component).matchSnapshot("DrawerBody with custom component snapshot");
  });

  test("should custom children prevail over the properties", () => {
    const children = <div className="custom">some custom children</div>,
      component = mount(<DrawerBody>{children}</DrawerBody>),
      event: { target: { scrollTop: number } } = { target: { scrollTop: 10 } };

    component.find(DrawerBodyScrollComponent).simulate("scroll", event);

    expect(component.find(DrawerBodyComponent).prop("scrolled")).to.equal(true);
  });
});
