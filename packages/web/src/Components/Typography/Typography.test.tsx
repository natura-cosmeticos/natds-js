import * as React from "react";
import { mount } from "enzyme";
import { Typography } from ".";

describe("Typography Component", () => {
  test("It should use the default variant and pass children forward", () => {
    const component = mount(<Typography>test</Typography>),

      materialTypography = component.find("ForwardRef(Typography)");

    expect(materialTypography.prop("variant")).toBe("body1");
    expect(materialTypography.prop("children")).toBe("test");
  });

  test("It should use provided variant", () => {
    const component = mount(<Typography variant="h1">test</Typography>),

      materialTypography = component.find("ForwardRef(Typography)");

    expect(materialTypography.prop("variant")).toBe("h1");
  });

  test("It should use provided align", () => {
    const component = mount(<Typography align="center">test</Typography>),

      materialTypography = component.find("ForwardRef(Typography)");

    expect(materialTypography.prop("align")).toBe("center");
  });

  test("It should use provided classes", () => {
    const component = mount(<Typography classes={{h1: "teste"}} variant="h1">test</Typography>),

      materialTypography = component.find("h1");

    expect(materialTypography.prop("className")).toContain("teste");
  });

  test("It should use provided color", () => {
    const component = mount(<Typography color="secondary">test</Typography>),

      materialTypography = component.find("ForwardRef(Typography)");

    expect(materialTypography.prop("color")).toBe("secondary");
  });

  test("It should use provided noWrap", () => {
    const component = mount(<Typography noWrap={true}>test</Typography>),

      materialTypography = component.find("ForwardRef(Typography)");

    expect(materialTypography.prop("noWrap")).toBe(true);
  });
});
