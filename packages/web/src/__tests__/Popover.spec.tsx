import * as React from "react";

import { expect } from "chai";
import { mount } from "enzyme";
import Popover from "../Components/Popover";

const directions: any = {
  "bottom": "bottom",
  "bottom-end": "bottom-end",
  "bottom-start": "bottom-start",
  "left": "left",
  "left-end": "left-end",
  "left-start": "left-start",
  "right": "right",
  "right-end": "right-end",
  "right-start": "right-start",
  "top": "top",
  "top-end": "top-end",
  "top-start": "top-start"
};

describe("Popover component", () => {

  /*
   *Due to Material-UI not handling the anchorEl property correctly,
   *this mock was created disabling the console.error unnecessary.
   *For more information, follow
   *https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Popper/Popper.js#L238
   */

  // tslint:disable-next-line: no-console
  const originalConsoleError = console.error;

  // tslint:disable-next-line:no-console
  afterEach(() => console.error = originalConsoleError);

  // tslint:disable-next-line: no-empty
  const mockedConsoleError = () => {};

  // tslint:disable-next-line:no-console
  beforeEach(() => console.error = mockedConsoleError);

  Object.keys(directions).forEach((direction: string) => {
    test(`should match snapshot - Any valid Popover with ${direction} direction`, () => {
      const wrapper = mount(<Popover open direction={direction as any}>
        content
      </Popover>);

      expect(wrapper).matchSnapshot(`Popover snapshot - with ${direction} direction`);
    });
  });

  test("should match snapshot - Popover with Action Link", () => {
    const wrapper = mount(<Popover open actionLink={{ "text": "Action link" }}>
      content
    </Popover>);

    expect(wrapper).matchSnapshot("Popover snapshot - with Action Link");
  });
});
