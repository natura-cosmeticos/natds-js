import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { FormControlLabel } from "./FormControlLabel";
import { Radio } from "../Radio";

describe("FormControlLabel component", () => {
  describe("with Radio", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <FormControlLabel
          control={<Radio />}
          label={"Radio label"}
        />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
