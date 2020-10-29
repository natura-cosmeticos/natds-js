import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Snackbar } from "./Snackbar";

describe("Snackbar Component", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<Snackbar open={false} />);

    expect(testRenderer).toMatchSnapshot();
  });
});
