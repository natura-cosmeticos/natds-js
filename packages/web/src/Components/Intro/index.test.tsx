import * as React from "react";
import * as renderer from "react-test-renderer";

import { expect } from "chai";
import { themes } from "@naturacosmeticos/natds-styles";
import Icon from "../Icon";
import { Intro } from "./index";
import { TypographyColor, TypographyVariant } from "../Typography";

const variants : Record<TypographyVariant, TypographyVariant> = {
  body1: "body1",
  body2: "body2",
  button: "button",
  caption: "caption",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  inherit: "inherit",
  overline: "overline",
  srOnly: "srOnly",
  subtitle1: "subtitle1",
  subtitle2: "subtitle2",
};

const colors : Record<TypographyColor, TypographyColor> = {
  error: "error",
  inherit: "inherit",
  initial: "initial",
  primary: "primary",
  secondary: "secondary",
  textPrimary: "textPrimary",
  textSecondary: "textSecondary",
};

const theme = themes.natura.light;

const TitleWithIcon = () => <>
  <Icon name="filled-action-add" size="tiny" />
    title
</>;

describe("Intro component", () => {
  test("should match snapshot - Intro with title and without detail", () => {
    const component = renderer.create(<Intro title="title" theme={theme} />).toJSON();

    expect(component).matchSnapshot("Intro snapshot - with title and without detail");
  });

  test("should match snapshot - Intro with title and detail", () => {
    const component = renderer.create(<Intro title="title" detail="detail" theme={theme} />).toJSON();

    expect(component).matchSnapshot("Intro snapshot - with title and detail");
  });

  test("should match snapshot - Intro with title and icon", () => {
    const component = renderer.create(<Intro title={<TitleWithIcon />} theme={theme} />).toJSON();

    expect(component).matchSnapshot("Intro snapshot - with title and icon");
  });

  Object.keys(variants).forEach((variant: string) => {
    test(`should match snapshot - Any valid Intro with ${variant} titleVariant`, () => {
      const component = renderer.create(<Intro titleVariant={variant as TypographyVariant} title="title" theme={theme} />).toJSON();

      expect(component).matchSnapshot(`Intro snapshot - with ${variant} titleVariant`);
    });

    test(`should match snapshot - Any valid Intro with ${variant} detailVariant`, () => {
      const component = renderer.create(<Intro detail="detail"
        detailVariant={variant as TypographyVariant}
        title="title"
        theme={theme} />).toJSON();

      expect(component).matchSnapshot(`Intro snapshot - with ${variant} detailVariant`);
    });
  });

  Object.keys(colors).forEach((color: string) => {
    test(`should match snapshot - Any valid Intro with ${color} titleColor`, () => {
      const component = renderer.create(<Intro titleColor={color as TypographyColor} title="title" theme={theme} />).toJSON();

      expect(component).matchSnapshot(`Intro snapshot - with ${color} titleColor`);
    });

    test(`should match snapshot - Any valid Intro with ${color} detailColor`, () => {
      const component = renderer.create(<Intro detail="detail" detailColor={color as TypographyColor} title="title" theme={theme} />).toJSON();

      expect(component).matchSnapshot(`Intro snapshot - with ${color} detailColor`);
    });
  });
});
