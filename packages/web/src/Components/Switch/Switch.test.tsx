import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Switch } from "./Switch";

describe("Switch component", () => {
  describe("rendering", () => {
    test("should match to snapshot - Default", () => {
      const testRenderer = TestRenderer.create(<Switch />);

      expect(testRenderer).toMatchSnapshot("Switch default snapshot");
    });

    test("should match to snapshot - Color", () => {
      const testRenderer = TestRenderer.create(<Switch color="primary" />);

      expect(testRenderer).toMatchSnapshot("Switch color primary snapshot");
    });

    test("should match to snapshot - Checked", () => {
      const testRenderer = TestRenderer.create(<Switch checked />);

      expect(testRenderer).toMatchSnapshot("Switch checked snapshot");
    });

    test("should match to snapshot - Disabled", () => {
      const testRenderer = TestRenderer.create(<Switch checked />);

      expect(testRenderer).toMatchSnapshot("Switch disabled snapshot");
    });
  });
});
