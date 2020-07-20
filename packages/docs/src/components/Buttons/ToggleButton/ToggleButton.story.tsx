import * as React from "react";
import { boolean, select } from "@storybook/addon-knobs";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";

import { tokens } from "@naturacosmeticos/natds-styles";
import { iconNames } from "@naturacosmeticos/natds-icons";
import { ToggleButton, Icon } from "@naturacosmeticos/natds-web";
import { PropTypes } from "@material-ui/core";

import ToggleButtonDocs from "./ToggleButton.docs.mdx";

export default {
  title: "Components|Buttons/ToggleButton",
  component: ToggleButton,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: ["ToggleButton"],
    theme: {
      context: "web",
    },
    docs: {
      page: ToggleButtonDocs,
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

export const Interactive = () => <ToggleButton
  disabled={boolean("Disabled", false)}
  checked={boolean("Checked", false)}
  color={select("Colors", colors, colors.primary)}
  size={select("Size", sizes, sizes.medium)}
  iconOn={<Icon name={select("Icon ON", icons, "filled-action-check")} size={select("Icon Size", iconSizes, iconSizes[2])} />}
  iconOff={<Icon name={select("Icon OFF", icons, "outlined-action-check")} size={select("Icon Size", iconSizes, iconSizes[2])} />}
/>;
