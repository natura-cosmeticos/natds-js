import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Breadcrumbs } from "./Breadcrumbs";
import { Link } from "../Link";
import { Typography } from "../Typography";

describe("Breadcrumbs component", () => {
  describe("rendering", () => {
    test("should match snapshot", () => {
      const component : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <Breadcrumbs>
          <Link href="#">
            <Typography>Breadcrumbs link text</Typography>
          </Link>
        </Breadcrumbs>,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
