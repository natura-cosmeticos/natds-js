import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { LinearProgress } from "./LinearProgress";

describe("Circular Progress components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - empty LinearProgress", () => {
      const component = TestRenderer.create(<LinearProgress />);

      expect(component).toMatchSnapshot("LinearProgress empty snapshot");
    });

    test("should match snapshot - with variant indeterminate", () => {
      const component = TestRenderer
        .create(<LinearProgress variant="indeterminate" />);

      expect(component).toMatchSnapshot("With variant indeterminate snapshot");
    });

    test("should match snapshot - with variant determinate", () => {
      const component = TestRenderer
        .create(<LinearProgress variant="determinate" value={70} />);

      expect(component).toMatchSnapshot("With variant determinate snapshot");
    });

    test("should match snapshot - with variant Buffer", () => {
      const component = TestRenderer
        .create(<LinearProgress variant="buffer" value={50} valueBuffer={70} />);

      expect(component).toMatchSnapshot("With variant buffer snapshot");
    });

    test("should match snapshot - with variant query", () => {
      const component = TestRenderer
        .create(<LinearProgress variant="query" />);

      expect(component).toMatchSnapshot("With variant query snapshot");
    });
  });
});
