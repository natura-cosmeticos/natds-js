import * as React from "react";
import * as renderer from "react-test-renderer";
import Skeleton from ".";

describe("Skeleton component", () => {
  it("renders correctly", () => {
    const actual: renderer.ReactTestRenderer = renderer.create(<Skeleton />);

    expect(actual).toMatchSnapshot();
  });
});
