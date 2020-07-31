import * as React from "react";
import { select } from "@storybook/addon-knobs";
import withJest from "../../../.storybook/decorators/jest/jest";
import withContainer from "../../../.storybook/decorators/container";

import { Icon } from ".";
import { iconNames } from "@naturacosmeticos/natds-icons";
import { tokens } from "@naturacosmeticos/natds-styles";

export default {
  title: "Playground|Icon",
  component: Icon,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: ["Icon"],
    theme: {
      context: "web",
    }
  },
};

const icons: any = Object.keys(iconNames);
const sizes: any = Object.keys(tokens.iconSizes);

export const Interactive = () => <Icon
  name={select("icon name", icons, icons[0])}
  size={select("icon size", sizes, sizes[3])}
/>;
