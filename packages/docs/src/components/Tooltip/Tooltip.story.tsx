import * as React from "react";
import { Tooltip, Fab, Icon } from "@naturacosmeticos/natds-web";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import {
  select, boolean, text, number,
} from "@storybook/addon-knobs";
import { placementList as placement } from "./sections";

import TooltipDocs from "./Tooltip.docs.mdx";

export default {
  title: "Components|Tooltip",
  component: Tooltip,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: ["Tooltip"],
    theme: {
      context: "web",
    },
    docs: {
      page: TooltipDocs,
    },
  },
};

export const Interactive = () => <Tooltip
  style={{ margin: "40px 80px" }}
  arrow={boolean("arrow", false)}
  disableFocusListener={boolean("disableFocusListener", false)}
  disableHoverListener={boolean("disableHoverListener", false)}
  disableTouchListener={boolean("disableTouchListener", false)}
  enterDelay={number("enterDelay", 0)}
  enterTouchDelay={number("enterTouchDelay", 700)}
  interactive={boolean("interactive", false)}
  leaveDelay={number("leaveDelay", 0)}
  leaveTouchDelay={number("leaveTouchDelay", 0)}
  placement={select("placement", placement, placement.bottom)}
  title={text("title", "Tooltip title")}
>
  <div><Fab children={<Icon name="outlined-action-add" />} /></div>
</Tooltip>;
