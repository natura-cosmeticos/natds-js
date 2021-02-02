import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Card } from "./Card";
import { Button } from "../Button";

describe("Card components", () => {
  test("should match to snapshot - default props", () => {
    const testRenderer = TestRenderer.create(<Card />);

    expect(testRenderer).toMatchSnapshot("Card empty snapshot");
  });
  test("should match to snapshot - without elevation", () => {
    const testRenderer = TestRenderer.create(<Card elevation={0} />);

    expect(testRenderer).toMatchSnapshot("Card empty snapshot");
  });

  test("should match to snapshot - without square", () => {
    const testRenderer = TestRenderer.create(<Card square={true} />);

    expect(testRenderer).toMatchSnapshot("Card empty snapshot");
  });

  test("should match to snapshot - with children", () => {
    const testRenderer = TestRenderer.create(
      <Card>
        <Button>default</Button>
      </Card>,
    );

    expect(testRenderer).toMatchSnapshot("Card empty snapshot");
  });
});
