import { iconNames } from "@naturacosmeticos/natds-icons";
import { tokens } from "@naturacosmeticos/natds-styles";
import { IIconProps } from "./Icon.props";
import { colors } from "./__fixtures__/colors";

export const argTypes : Record<keyof IIconProps | string, unknown> = {
  color: {
    control: {
      options: colors,
      type: "select",
    },
  },
  name: {
    control: {
      options: Object.keys(iconNames),
      type: "select",
    },
    description: "The Icon name",
    table: {
      defaultValue: {
        summary: "\"filled-default-mockup\"",
      },
    },
    type: {
      required: true,
    },
  },
  size: {
    control: {
      options: Object.keys(tokens.iconSizes),
      type: "select",
    },
    description: "The Icon size",
    type: {
      required: false,
    },
  },
};

export default argTypes;
