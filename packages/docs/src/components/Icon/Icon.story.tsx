import * as React from "react";
import { select } from "@storybook/addon-knobs";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";

import { Icon } from "@naturacosmeticos/natds-web";
import { iconNames } from "@naturacosmeticos/natds-icons";
import { tokens } from "@naturacosmeticos/natds-styles";
import IconDocs from "./Icon.docs.mdx";

export default {
  "title": "Components|Icon",
  "component": Icon,
  "decorators": [
    withJest(),
    withContainer
  ],
  "parameters": {
    "jestImportPath": "web",
    "jest": ["Icon"],
    "theme": {
      "context": "web"
    },
    "docs": {
      "page": IconDocs
    }
  }
};

const icons: any = Object.keys(iconNames);
const sizes: any = Object.keys(tokens.iconSizes);

export const Interactive = () => <Icon
  name={select("icon name", icons, icons[0])}
  size={select("icon size", sizes, sizes[3])}
/>;

