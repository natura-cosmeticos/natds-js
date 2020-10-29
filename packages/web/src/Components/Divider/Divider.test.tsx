import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Divider } from "./Divider";

describe("Divider component", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - Variant FullWidth Default", () => {
      const testRenderer = TestRenderer.create(<Divider />);

      expect(testRenderer).toMatchSnapshot("Divider variant fullWidth default snapshot");
    });

    test("should match to snapshot - Variant Inset", () => {
      const testRenderer = TestRenderer.create(<Divider variant="inset" />);

      expect(testRenderer).toMatchSnapshot("Divider variant inset snapshot");
    });

    test("should match to snapshot - Variant Middle", () => {
      const testRenderer = TestRenderer.create(<Divider variant="middle" />);

      expect(testRenderer).toMatchSnapshot("Divider variant middle snapshot");
    });
  });
});
