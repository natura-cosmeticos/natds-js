import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Popover } from "./Popover";
import { placements } from "./__fixtures__/placements";

// eslint-disable-next-line mocha/no-skipped-tests
describe.skip("Popover component", () => {

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

  Object.values(placements).forEach((direction) => {
    it(`should match snapshot - Any valid Popover with ${direction} direction`, () => {
      const testRenderer = TestRenderer.create(<Popover open={true} direction={direction}>
        content
      </Popover>);

      expect(testRenderer).toMatchSnapshot(`Popover snapshot - with ${direction} direction`);
    });
  });

  it("should match snapshot - Popover with Action Link", () => {
    const testRenderer = TestRenderer.create(<Popover open={true} actionLink={{ text: "Action link" }}>
      content
    </Popover>);

    expect(testRenderer).toMatchSnapshot("Popover snapshot - with Action Link");
  });
});
