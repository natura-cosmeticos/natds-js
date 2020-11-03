// eslint-disable-next-line no-use-before-define
import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import Icon from "../Icon";
import { Intro } from "./index";
import { TypographyColor, TypographyVariant } from "../Typography";
import { Provider } from "../../Provider";
import { themes } from "../../Themes";
import { variants } from "./__fixtures__/variants";
import { colors } from "./__fixtures__/colors";

const TitleWithIcon = () => <>
  <Icon name="filled-action-add" size="tiny" />
    title
</>;

describe("Intro component", () => {

  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;

  describe("when no theme is explicitly provided", () => {
    describe("and titleVariant property is undefined", () => {
      it("should match snapshot", () => {
        testRenderer = TestRenderer.create(
          // eslint-disable-next-line no-undefined
          <Intro title={"Test title"} titleVariant={undefined as TypographyVariant} />,
        );
        expect(testRenderer).toMatchSnapshot();
      });
    });

    describe("when an invalid titleVariant property is provided", () => {
      it("should match snapshot", () => {
        testRenderer = TestRenderer.create(
          <Intro title={"Test title"} titleVariant={"invalid" as TypographyVariant} />,
        );
        expect(testRenderer).toMatchSnapshot();
      });
    });
  });

  describe("when a theme is explicitly provided", () => {

    const theme = themes.natura.light;

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

    describe("when titleVariant property is undefined", () => {
      it("should match snapshot", () => {
        testRenderer = TestRenderer.create(
          <Provider theme={theme}>
            {/* eslint-disable-next-line no-undefined */}
            <Intro title={"Test title"} titleVariant={undefined as TypographyVariant} />
          </Provider>,
        );
        expect(testRenderer).toMatchSnapshot();
      });
    });

    describe("when an invalid titleVariant property is provided", () => {
      it("should match snapshot", () => {
        testRenderer = TestRenderer.create(
          <Provider theme={theme}>
            <Intro title={"Test title"} titleVariant={"invalid" as TypographyVariant} />
          </Provider>,
        );
        expect(testRenderer).toMatchSnapshot();
      });
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
});
