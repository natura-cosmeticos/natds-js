/* eslint-disable mocha/no-setup-in-describe,@typescript-eslint/ban-ts-comment */
import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import Typography from "./Typography";
import { TypographyAlign, TypographyColor, TypographyVariant } from "./Typography.props";
import { aligns } from "./__fixtures__/aligns";
import { variants } from "./__fixtures__/variants";
import { colors } from "./__fixtures__/colors";

describe("Typography component", () => {
  let testRenderer : TestRenderer.ReactTestRenderer = {} as TestRenderer.ReactTestRenderer;
  let testInstance : TestRenderer.ReactTestInstance = {} as TestRenderer.ReactTestInstance;
  let testRendererJSON : TestRenderer.ReactTestRendererJSON = {} as TestRenderer.ReactTestRendererJSON;

  describe("when default props and no children are provided", () => {
    beforeAll(() => {
      testRenderer = TestRenderer.create(
        // @ts-ignore
        <Typography />,
      );
      testInstance = testRenderer.root;
    });
    it("should render correctly and output correct props", () => {
      expect(testRenderer).toMatchSnapshot();
      expect(testInstance.props.align).toBe("inherit");
      expect(testInstance.props.children).toBeUndefined();
      expect(testInstance.props.variant).toBe("body1");
    });
  });
  describe("when default props with children are provided", () => {
    beforeAll(() => {
      testRenderer = TestRenderer.create(
        <Typography>Typography test text</Typography>,
      );
      testInstance = testRenderer.root;
    });
    it("should render correctly and output correct props", () => {
      expect(testRenderer).toMatchSnapshot();
      expect(testInstance.props.align).toBe("inherit");
      expect(testInstance.props.children).toBe("Typography test text");
      expect(testInstance.props.variant).toBe("body1");
    });
  });

  describe.each(Object.keys(aligns))("when align prop is set to %p", (actualAlign: TypographyAlign) => {
    beforeAll(() => {
      testRenderer = TestRenderer.create(
        <Typography align={actualAlign}>{actualAlign}</Typography>,
      );
      testInstance = testRenderer.root;
    });
    it(`should render and use the provided ${actualAlign} align correctly`, () => {
      expect(testRenderer).toMatchSnapshot();
      expect(testInstance.props.align).toBe(actualAlign);
    });
  });

  describe.each(Object.keys(colors))("when color prop is set to %p", (actualColor: TypographyColor) => {
    beforeAll(() => {
      testRenderer = TestRenderer.create(
        <Typography color={actualColor}>{actualColor}</Typography>,
      );
      testInstance = testRenderer.root;
    });
    it(`should render and use the provided color ${actualColor} correctly`, () => {
      expect(testRenderer).toMatchSnapshot();
      expect(testInstance.props.color).toBe(actualColor);
    });
  });
  describe("when noWrap prop is provided", () => {
    beforeAll(() => {
      testRenderer = TestRenderer.create(<Typography noWrap={true}>Test text</Typography>);
      testInstance = testRenderer.root;
    });
    it("should render and use the provided noWrap prop correctly", () => {
      expect(testRenderer).toMatchSnapshot();
      expect(testInstance.props.noWrap).toBe(true);
    });
  });

  describe.each(Object.keys(variants))("when variant prop is set to %p", (actualVariant: TypographyVariant) => {
    describe("when classes property is not provided", () => {
      beforeAll(() => {
        testRenderer = TestRenderer.create(<Typography variant={actualVariant}>{actualVariant}</Typography>);
        testInstance = testRenderer.root;
      });
      it(`should render and use the provided ${actualVariant} variant correctly`, () => {
        expect(testRenderer).toMatchSnapshot();
        expect(testInstance.props.variant).toBe(actualVariant);
      });
    });
    if (actualVariant !== "inherit") {
      describe("when classes property is provided", () => {
        const actualClasses = { [actualVariant]: "testClassName" };

        beforeAll(() => {
          testRenderer = TestRenderer.create(
            <Typography classes={actualClasses} variant={actualVariant}>{actualVariant}</Typography>,
          );
          testRendererJSON = testRenderer.toJSON() as TestRenderer.ReactTestRendererJSON;
        });
        it(`should render ${actualVariant} and use the provided class correctly`, () => {
          expect(testRenderer).toMatchSnapshot();
          expect(testRendererJSON.props.className).toContain("testClassName");
        });
      });
    }
  });
});
