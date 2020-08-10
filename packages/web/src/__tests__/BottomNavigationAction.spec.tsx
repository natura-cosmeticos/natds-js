import React from "react";
import renderer from "react-test-renderer";

import { BottomNavigationAction } from "..";

describe("BottomNavigationAction component", () => {
  describe("rendering", () => {
    test("it should match to default snapshot", () => {
      const wrapper = renderer.create(<BottomNavigationAction/>);

      expect(wrapper.toJSON()).toMatchSnapshot("BottomNavigationAction default snapshot");
    });
    test("it should match to selected snapshot", () => {
      const wrapper = renderer.create(<BottomNavigationAction selected={true}/>);

      expect(wrapper.toJSON()).toMatchSnapshot("BottomNavigationAction selected snapshot");
    });
  });
});
