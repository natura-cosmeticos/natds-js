import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import DrawerFooter from "./DrawerFooter";

describe("DrawerFooter component", () => {
  test("should match snapshot - DrawerFooter Custom children", () => {
    const children = <div>some custom children</div>,
      component = TestRenderer.create(<DrawerFooter>{children}</DrawerFooter>);

    expect(component).toMatchSnapshot("DrawerFooter custom children snapshot");
  });

  test("should match snapshot - DrawerFooter custom component", () => {
    const children = <div>some custom children</div>,
      component = TestRenderer.create(<DrawerFooter component="section">{children}</DrawerFooter>);

    expect(component).toMatchSnapshot("DrawerFooter with custom component snapshot");
  });
});
