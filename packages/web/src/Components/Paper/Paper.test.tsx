import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Paper } from "./Paper";

describe("Paper components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - default Paper", () => {
      const testRenderer = TestRenderer.create(<Paper />);

      expect(testRenderer).toMatchSnapshot("Paper default snapshot");
    });

    test("should match to snapshot - with elevation", () => {
      const testRenderer = TestRenderer.create(<Paper elevation={3} />);

      expect(testRenderer).toMatchSnapshot("Paper with elevation snapshot");
    });

    test("should match to snapshot - with variant outlined", () => {
      const testRenderer = TestRenderer.create(<Paper variant="outlined" />);

      expect(testRenderer).toMatchSnapshot("Paper with variant outlined snapshot");
    });

    test("should match to snapshot - with variant outlined square", () => {
      const testRenderer = TestRenderer.create(<Paper variant="outlined" square />);

      expect(testRenderer).toMatchSnapshot("Paper with variant outlined square snapshot");
    });
  });
});
