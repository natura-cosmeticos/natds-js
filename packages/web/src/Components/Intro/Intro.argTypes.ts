import { ArgType } from "@storybook/addons";
import { IIntroProps } from "./Intro.props";
import { variants } from "./__fixtures__/variants";
import { colors } from "./__fixtures__/colors";

export const argTypes : Record<keyof IIntroProps | string, ArgType> = {
  detail: {},
  detailColor: {
    control: {
      options: colors,
      type: "select",
    },
    table: {
      defaultValue: { summary: "\"textPrimary\"" },
    },
  },
  detailComponent: {
    table: {
      defaultValue: { summary: "\"p\"" },
    },
  },
  detailVariant: {
    control: {
      options: variants,
      type: "select",
    },
    table: {
      defaultValue: { summary: "\"body1\"" },
    },
  },
  title: {},
  titleColor: {
    control: {
      options: colors,
      type: "select",
    },
    table: {
      defaultValue: { summary: "\"textPrimary\"" },
    },
  },
  titleComponent: {
    table: {
      defaultValue: { summary: "\"h3\"" },
    },
  },
  titleVariant: {
    control: {
      options: variants,
      type: "select",
    },
    table: {
      defaultValue: { summary: "\"subtitle1\"" },
    },
  },
};

export default argTypes;
