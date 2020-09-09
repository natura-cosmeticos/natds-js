import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import Container from "./Container";

describe("Container component", () => {
  it("renders correctly", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Container>Container test text</Container>,
    );

    expect(testRenderer).toMatchSnapshot();
  });
});
