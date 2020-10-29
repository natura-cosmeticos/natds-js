import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { CircularProgress } from "./CircularProgress";

describe("Circular Progress components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - empty CircularProgress", () => {
      const component = TestRenderer.create(<CircularProgress />);

      expect(component).toMatchSnapshot("CircularProgress empty snapshot");
    });

    test("should match snapshot - with variant indeterminate", () => {
      const component = TestRenderer.create(<CircularProgress variant="indeterminate" />);

      expect(component).toMatchSnapshot("With variant indeterminate snapshot");
    });

    test("should match snapshot - with variant determinate", () => {
      const component = TestRenderer.create(<CircularProgress variant="determinate" />);

      expect(component).toMatchSnapshot("With variant determinate snapshot");
    });

    test("should match snapshot - with variant static", () => {
      const component = TestRenderer.create(<CircularProgress variant="static" />);

      expect(component).toMatchSnapshot("With variant static snapshot");
    });
  });

  describe("rendering thickness", () => {
    test("should match snapshot - with variant static", () => {
      const component = TestRenderer.create(<CircularProgress thickness={3.6} />);

      expect(component).toMatchSnapshot();
    });
  });
});
