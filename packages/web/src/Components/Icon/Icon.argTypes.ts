import { iconNames } from "@naturacosmeticos/natds-icons";
import { tokens } from "@naturacosmeticos/natds-styles";
import { IIconProps } from "./Icon.props";

export const argTypes : Record<keyof IIconProps | string, unknown> = {
  name: {
    control: {
      options: Object.keys(iconNames),
      type: "select",
    },
  },
  size: {
    control: {
      options: Object.keys(tokens.iconSizes),
      type: "select",
    },
  },
};

export default argTypes;
