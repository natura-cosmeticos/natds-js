import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import renderer from "react-test-renderer";

import CircularProgress from "../Components/CircularProgress";

describe("Circular Progress components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - empty CircularProgress", () => {
      const component = mount(<CircularProgress />);

      expect(component).matchSnapshot("CircularProgress empty snapshot");
    });

    test("should match snapshot - with variant indeterminate", () => {
      const component = renderer.
        create(<CircularProgress variant="indeterminate" />).
        toJSON();

      expect(component).to.matchSnapshot("With variant indeterminate snapshot");
    });

    test("should match snapshot - with variant determinate", () => {
      const component = renderer.
        create(<CircularProgress variant="determinate" />).
        toJSON();

      expect(component).to.matchSnapshot("With variant determinate snapshot");
    });

    test("should match snapshot - with variant static", () => {
      const component = renderer.
        create(<CircularProgress variant="static" />).
        toJSON();

      expect(component).to.matchSnapshot("With variant static snapshot");
    });
  });

  describe("rendering thickness", () => {
    test("should match snapshot - with variant static", () => {
      const component = renderer.
        create(<CircularProgress thickness={3.6} />).
        toJSON();

      expect(component).to.be.a("object");
    });
  });
});
