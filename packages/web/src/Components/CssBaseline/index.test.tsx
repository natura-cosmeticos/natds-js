import * as React from "react";
import * as renderer from "react-test-renderer";
import CssBaseline from ".";

describe("CssBaseline component", () => {
  it("renders correctly", () => {
    const actual = renderer.create(<React.Fragment><CssBaseline /></React.Fragment>);

    expect(actual).toMatchSnapshot();
  });
});
