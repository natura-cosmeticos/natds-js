import React from "react";
import renderer from "react-test-renderer";

import { ContextualBadge, themes } from "..";
import { Provider } from "../Provider";

describe("ContextualBadge component", () => {
  describe("rendering", () => {
    const colors = [
      "primary",
      "secondary",
      "info",
      "error",
      "warning",
      "success",
      "light",
      "dark",
    ];
    const types = ["standard"];

    test("it should render each color", () => {
      colors.forEach((color) => {
        const wrapper = renderer.create(<ContextualBadge color={color}>Mock</ContextualBadge>);

        expect(wrapper.toJSON()).toMatchSnapshot("ContextualBadge Colors");
      });
    });
    test("it should render each type", () => {
      types.forEach((type) => {
        const wrapper = renderer.create(<ContextualBadge type={type}>Mock</ContextualBadge>);

        expect(wrapper.toJSON()).toMatchSnapshot("ContextualBadge Types");
      });
    });
    test("it should render the default color and default type", () => {
      const wrapper = renderer.create(<ContextualBadge>Mock</ContextualBadge>);

      expect(wrapper.toJSON()).toMatchSnapshot("ContextualBadge Default Color And Type");
    });
    test("it should render according to theme", () => {
      const wrapper = renderer.create(<Provider theme={themes.natura.dark}><ContextualBadge>Mock</ContextualBadge></Provider>);

      expect(wrapper.toJSON()).toMatchSnapshot("ContextualBadge Custom Theme");
    });
  });
});
