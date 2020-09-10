import * as React from "react";
import * as renderer from "react-test-renderer";
import ScopedCssBaseline from ".";

describe("ScopedCssBaseline component", () => {
  it("renders correctly", () => {
    const actual = renderer.create(<React.Fragment><ScopedCssBaseline /></React.Fragment>);

    expect(actual).toMatchSnapshot();
  });
});
