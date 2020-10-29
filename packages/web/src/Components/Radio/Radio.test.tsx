import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Radio } from "./Radio";

describe("Radio component", () => {
  describe("rendering", () => {
    it("should match to snapshot - Default", () => {
      const testRenderer = TestRenderer.create(<Radio />);

      expect(testRenderer).toMatchSnapshot("Radio default snapshot");
    });

    it("should match to snapshot - Color", () => {
      const testRenderer = TestRenderer.create(<Radio color="primary" />);

      expect(testRenderer).toMatchSnapshot("Radio color primary snapshot");
    });

    it("should match to snapshot - Checked", () => {
      const testRenderer = TestRenderer.create(<Radio checked />);

      expect(testRenderer).toMatchSnapshot("Radio checked snapshot");
    });

    it("should match to snapshot - Disabled", () => {
      const testRenderer = TestRenderer.create(<Radio checked />);

      expect(testRenderer).toMatchSnapshot("Radio disabled snapshot");
    });
  });
});
