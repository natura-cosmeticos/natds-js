import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { DrawerHeader } from "./DrawerHeader";

describe("DrawerHeader component", () => {
  it("should match snapshot - DrawerHeader Avatar Image", () => {
    const children = "some_image",
      component = TestRenderer.create(<DrawerHeader avatarSrc={children} />);

    expect(component).toMatchSnapshot("DrawerHeader with Image Avatar snapshot");
  });

  it("should match snapshot - DrawerHeader Avatar Text", () => {
    const children = "some_text",
      component = TestRenderer.create(<DrawerHeader avatarChildren={children} />);

    expect(component).toMatchSnapshot("DrawerHeader with Text Avatar snapshot");
  });

  it("should match snapshot - DrawerHeader Title", () => {
    const children = "some_title",
      component = TestRenderer.create(<DrawerHeader primary={children} />);

    expect(component).toMatchSnapshot("DrawerHeader with Title snapshot");
  });

  it("should match snapshot - DrawerHeader Subtitle", () => {
    const children = "some_title",
      component = TestRenderer.create(<DrawerHeader secondary={children} />);

    expect(component).toMatchSnapshot("DrawerHeader with Subtitle snapshot");
  });

  it("should match snapshot - DrawerHeader Custom children", () => {
    const children = <div>some custom children</div>,
      component = TestRenderer.create(<DrawerHeader>{children}</DrawerHeader>);

    expect(component).toMatchSnapshot("DrawerHeader with Custom children snapshot");
  });

  it.todo("should custom children prevail over the properties");
});
