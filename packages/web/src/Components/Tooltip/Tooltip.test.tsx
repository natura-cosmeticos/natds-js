import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { ITooltipProps, Tooltip } from ".";
import { placements } from "./__fixtures__/placements";

describe("Tooltip component", () => {
  Object.values(placements).forEach((placement: ITooltipProps["placement"]) => {
    test(`should match snapshot - Any valid Tooltip with ${placement} placement`, () => {
      const component: JSX.Element = <Tooltip title="some title" placement={placement}><div>some content</div></Tooltip>;
      const actual = TestRenderer.create(component);

      expect(actual).toMatchSnapshot(`Tooltip snapshot - with ${placement} color`);
    });
  });
});
