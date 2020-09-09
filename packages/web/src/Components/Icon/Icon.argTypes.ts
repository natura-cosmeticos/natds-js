import { iconNames } from "@naturacosmeticos/natds-icons";
import { tokens } from "@naturacosmeticos/natds-styles";
import { IIconProps } from "./Icon.props";

export const argTypes : Record<keyof IIconProps, unknown> = {
  className: {
    control: {
      type: "text",
    },
  },
  name: {
    control: {
      options: Object.keys(iconNames),
      type: "select",
    },
    description: "The Icon name",
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
