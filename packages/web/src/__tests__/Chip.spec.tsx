import * as React from "react";
import * as renderer from "react-test-renderer";
import { mount } from "enzyme";
import { expect } from "chai";
import { assert, spy } from "sinon";

import Chip from "../Components/Chip";
import Avatar from "../Components/Avatar";
import Icon from "../Components/Icon";

const colors: any = {
  primary: "primary",
  secondary: "secondary",
  default: "default",
};

const variants: any = {
  default: "default",
  outlined: "outlined",
};

const sizes: any = {
  small: "small",
  medium: "medium",
};

describe("Chip component", () => {
  test("Chip calls onDelete", () => {
    const onDelete = spy(),
      label = "A Chip Component",
      chip = mount(<Chip label={label} onDelete={onDelete} />);

    expect(chip.find(".MuiChip-label")).to.have.text(label);

    chip.find(".MuiChip-deleteIcon").first()
      .simulate("click");

    assert.calledOnce(onDelete);
  });

  Object.keys(colors).forEach((color: string) => {
    test(`should match snapshot - Any valid Chip with ${color} color`, () => {
      const component = renderer.create(<Chip color={color as any} />).toJSON();

      expect(component).matchSnapshot(`Chip snapshot - with ${color} color`);
    });
  });

  Object.keys(sizes).forEach((size: string) => {
    test(`should match snapshot - Any valid Chip with ${size} size`, () => {
      const component = renderer.create(<Chip size={size as any} />).toJSON();

      expect(component).matchSnapshot(`Chip snapshot - with ${size} size`);
    });
  });

  Object.keys(variants).forEach((variant: string) => {
    test(`should match snapshot - Any valid Chip with ${variant} variant`, () => {
      const component = renderer.create(<Chip variant={variant as any} />).toJSON();

      expect(component).matchSnapshot(`Chip snapshot - with ${variant} variant`);
    });
  });

  test("should match snapshot - Any valid Chip with Avatar", () => {
    const component = renderer.create(<Chip avatar={<Avatar>XD</Avatar>} />).toJSON();

    expect(component).matchSnapshot("Chip snapshot - with avatar");
  });

  test("should match snapshot - Any valid Chip with Icon", () => {
    const component = renderer.create(<Chip icon={<Icon name="filled-action-add" />} />).toJSON();

    expect(component).matchSnapshot("Chip snapshot - with icon");
  });

  test("should match snapshot - Any valid Chip with default deleteIcon", () => {
    const component = renderer.create(<Chip onDelete={() => null} />).toJSON();

    expect(component).matchSnapshot("Chip snapshot - with default deleteIcon");
  });

  test("should match snapshot - Any valid Chip with custom deleteIcon", () => {
    const component = renderer.create(<Chip onDelete={() => null} deleteIcon={<Icon name="filled-action-cancel" />} />).toJSON();

    expect(component).matchSnapshot("Chip snapshot - with custom deleteIcon");
  });
});
