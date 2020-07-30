import * as React from "react";
import * as renderer from "react-test-renderer";

import Container from "../../Components/Container";

describe("Container component", () => {
  it("matches default snapshot", () => {
    const wrapper = renderer.create(<Container>Container test text</Container>);

    expect(wrapper.toJSON()).toMatchSnapshot("Default Container snapshot");
  });
});
