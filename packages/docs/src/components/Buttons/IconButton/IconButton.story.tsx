import * as React from "react";
import { boolean, select } from "@storybook/addon-knobs";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";

import { tokens } from "@naturacosmeticos/natds-styles";
import { iconNames } from "@naturacosmeticos/natds-icons";
import { IconButton, Icon } from "@naturacosmeticos/natds-web";
import { PropTypes } from "@material-ui/core";

import IconButtonDocs from "./IconButton.docs.mdx";

export default {
  title: "Components|Buttons/IconButton",
  component: IconButton,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: ["IconButton"],
    theme: {
      context: "web",
    },
    docs: {
      page: IconButtonDocs,
    },
  },
};

const primary: PropTypes.Color = "primary";
const secondary: PropTypes.Color = "secondary";
const defaultColorPropType: PropTypes.Color = "default";

const colors: any = {
  primary,
  secondary,
  default: defaultColorPropType,
};

const sizes: any = {
  small: "small",
  medium: "medium",
};

const icons: any = Object.keys(iconNames);
const iconSizes: any = Object.keys(tokens.iconSizes);

export const Interactive = () => <IconButton
  disabled={boolean("disabled", false)}
  color={select("Colors", colors, colors.primary)}
  size={select("Size", sizes, sizes.medium)}
  children={<Icon
    name={select("Icon Name", icons, icons[0])}
    size={select("Icon Size", iconSizes, iconSizes[2])}
  />}
/>;
