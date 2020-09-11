import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import { IIconSizes, tokens } from "@naturacosmeticos/natds-styles";

import Icon from "../../Components/Icon";
import { Provider } from "../../Provider";
import { IThemeWeb } from "../../Themes";

describe("Icon component", () => {

  let testRenderer = {} as TestRenderer.ReactTestRenderer;

  describe("when a default icon is implicitly defined", () => {
    it("should render correctly", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      testRenderer = TestRenderer.create(<Icon/>);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when a default icon is explicitly provided", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Icon name={"filled-default-mockup"} />);

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when a valid icon name is provided", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Icon name="filled-action-add" />);
      expect(testRenderer).toMatchSnapshot();
    });
  });

  const iconSizes : string[] = Object.keys(tokens.iconSizes);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  describe.each(iconSizes)("when icon size is %p", (iconSize: keyof IIconSizes) => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Icon name="filled-action-add" size={iconSize} />);
      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when an empty theme is provided", () => {
    it("should render correctly", () => {
      testRenderer = TestRenderer.create(<Provider theme={{} as IThemeWeb}>
        <Icon name="filled-action-add" />
      </Provider>);
      expect(testRenderer).toMatchSnapshot();
    });
  });
});
