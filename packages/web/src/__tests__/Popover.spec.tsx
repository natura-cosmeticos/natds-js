import * as React from "react";

import { expect } from "chai";
import { mount } from "enzyme";
import Popover from "../Components/Popover";

const directions: {
  "right-start": string;
  "bottom-start": string;
  top: string;
  left: string;
  bottom: string;
  "left-start": string;
  "top-start": string;
  right: string;
  "bottom-end": string;
  "right-end": string;
  "left-end": string;
  "top-end": string
} = {
  bottom: "bottom",
  "bottom-end": "bottom-end",
  "bottom-start": "bottom-start",
  left: "left",
  "left-end": "left-end",
  "left-start": "left-start",
  right: "right",
  "right-end": "right-end",
  "right-start": "right-start",
  top: "top",
  "top-end": "top-end",
  "top-start": "top-start",
};

describe("Popover component", () => {

  /**
   * Due to Material-UI not handling the anchorEl property correctly,
   * this mock was created disabling the console.error unnecessary.
   *
   * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Popper/Popper.js#L238
   */
  // eslint-disable-next-line no-console
  const originalConsoleError = console.error;

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.error = originalConsoleError;
  });

  const mockedConsoleError = () => Function.prototype();

  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.error = mockedConsoleError;
  });

  Object.keys(directions).forEach((direction: string) => {
    test(`should match snapshot - Any valid Popover with ${direction} direction`, () => {
      const wrapper = mount(<Popover open direction={direction as keyof typeof directions}>
        content
      </Popover>);

      expect(wrapper).matchSnapshot(`Popover snapshot - with ${direction} direction`);
    });
  });

  test("should match snapshot - Popover with Action Link", () => {
    const wrapper = mount(<Popover open actionLink={{ text: "Action link" }}>
      content
    </Popover>);

    expect(wrapper).matchSnapshot("Popover snapshot - with Action Link");
  });
});
