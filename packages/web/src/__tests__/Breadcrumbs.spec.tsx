import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";

import { Breadcrumbs, Link, Typography } from "..";

const Component = () => <>
  <Breadcrumbs>
    <Link href="#">
      <Typography>Code</Typography>
    </Link>
  </Breadcrumbs>
</>;

describe("Breadcrumbs component", () => {
  describe("rendering", () => {
    test("it should match default snapshot", () => {
      const component = mount(<Component />);

      expect(component).matchSnapshot("Breadcrumbs snapshot");
    });
  });
});
