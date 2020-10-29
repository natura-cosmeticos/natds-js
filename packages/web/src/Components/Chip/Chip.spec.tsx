import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import { variants } from "./__fixtures__/variants";
import Chip from "./Chip";
import { Icon } from "../Icon";
import { Avatar } from "../Avatar";

describe("Chip component", () => {
  it.todo("should call onDelete");

  Object.keys(colors).forEach((color: string) => {
    it(`should match snapshot - Any valid Chip with ${color} color`, () => {
      const testRenderer = TestRenderer.create(<Chip color={color as keyof typeof colors} />).toJSON();

      expect(testRenderer).toMatchSnapshot(`Chip snapshot - with ${color} color`);
    });
  });

  Object.keys(sizes).forEach((size: string) => {
    it(`should match snapshot - Any valid Chip with ${size} size`, () => {
      const testRenderer = TestRenderer.create(<Chip size={size as keyof typeof sizes} />).toJSON();

      expect(testRenderer).toMatchSnapshot(`Chip snapshot - with ${size} size`);
    });
  });

  Object.keys(variants).forEach((variant: string) => {
    it(`should match snapshot - Any valid Chip with ${variant} variant`, () => {
      const testRenderer = TestRenderer.create(<Chip variant={variant as keyof typeof variants} />).toJSON();

      expect(testRenderer).toMatchSnapshot(`Chip snapshot - with ${variant} variant`);
    });
  });

  it("should match snapshot - Any valid Chip with Avatar", () => {
    const testRenderer = TestRenderer.create(<Chip avatar={<Avatar>XD</Avatar>} />).toJSON();

    expect(testRenderer).toMatchSnapshot("Chip snapshot - with avatar");
  });

  it("should match snapshot - Any valid Chip with Icon", () => {
    const testRenderer = TestRenderer.create(<Chip icon={<Icon name="filled-action-add" />} />).toJSON();

    expect(testRenderer).toMatchSnapshot("Chip snapshot - with icon");
  });

  it("should match snapshot - Any valid Chip with default deleteIcon", () => {
    const testRenderer = TestRenderer.create(<Chip onDelete={() => null} />).toJSON();

    expect(testRenderer).toMatchSnapshot("Chip snapshot - with default deleteIcon");
  });

  it("should match snapshot - Any valid Chip with custom deleteIcon", () => {
    const testRenderer = TestRenderer.create(<Chip onDelete={() => null} deleteIcon={<Icon name="filled-action-cancel" />} />).toJSON();

    expect(testRenderer).toMatchSnapshot("Chip snapshot - with custom deleteIcon");
  });
});
