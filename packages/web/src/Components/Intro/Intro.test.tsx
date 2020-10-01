import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import Icon from "../Icon";
import { Intro } from "./index";
import { TypographyColor, TypographyVariant } from "../Typography";
import { Provider } from "../../Provider";
import { themes } from "../../Themes";
import { variants } from "./__fixtures__/variants";
import { colors } from "./__fixtures__/colors";

const theme = themes.natura.light;

const TitleWithIcon = () => <>
  <Icon name="filled-action-add" size="tiny" />
    title
</>;

describe("Intro component", () => {

  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

  it("should match snapshot - Intro with title and without detail", () => {
    testRenderer = TestRenderer.create(<Provider theme={theme}><Intro title="title" /></Provider>);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match snapshot - Intro with title and detail", () => {
    testRenderer = TestRenderer.create(<Provider theme={theme}><Intro title="title" detail="detail" /></Provider>);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match snapshot - Intro with title and icon", () => {
    testRenderer = TestRenderer.create(<Provider theme={theme}><Intro title={<TitleWithIcon />} /></Provider>);

    expect(testRenderer).toMatchSnapshot();
  });

  Object.keys(variants).forEach((variant: string) => {
    it(`should match snapshot - Any valid Intro with ${variant} titleVariant`, () => {
      testRenderer = TestRenderer.create(<Provider theme={theme}><Intro titleVariant={variant as TypographyVariant} title="title" /></Provider>);

      expect(testRenderer).toMatchSnapshot();
    });

    it(`should match snapshot - Any valid Intro with ${variant} detailVariant`, () => {
      testRenderer = TestRenderer.create(<Provider theme={theme}><Intro detail="detail"
        detailVariant={variant as TypographyVariant}
        title="title"/></Provider>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  Object.keys(colors).forEach((color: string) => {
    it(`should match snapshot - Any valid Intro with ${color} titleColor`, () => {
      testRenderer = TestRenderer.create(<Provider theme={theme}><Intro titleColor={color as TypographyColor} title="title" /></Provider>);

      expect(testRenderer).toMatchSnapshot();
    });

    it(`should match snapshot - Any valid Intro with ${color} detailColor`, () => {
      testRenderer = TestRenderer.create(<Provider theme={theme}><Intro detail="detail" detailColor={color as TypographyColor} title="title" /></Provider>);

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
