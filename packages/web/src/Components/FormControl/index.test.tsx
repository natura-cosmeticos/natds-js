import * as React from "react";
import * as renderer from "react-test-renderer";
import FormControl from ".";

describe("FormControl component", () => {
  it("renders correctly", () => {
    const actual: renderer.ReactTestRenderer = renderer.create(<FormControl />);

    expect(actual).toMatchSnapshot();
  });
});
