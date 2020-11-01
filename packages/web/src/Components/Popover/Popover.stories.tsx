/* eslint-disable max-lines */
import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Popover } from "./Popover";
import { IPopoverProps } from "./Popover.props";
import { Template } from "./Template";
import { placements } from "./__fixtures__/placements";

export default {
  component: Popover,
  title: "Components/Popover",
} as Meta;

export const Playground : Story<IPopoverProps> = Template.bind({});
Playground.args = {
  children: "Content",
  placement: placements.bottom,
  id: "popover",
  maxWidth: 0,
};

export const InitiallyOpen : Story<IPopoverProps> = Template.bind({});
InitiallyOpen.args = {
  ...Playground.args,
  open: true,
};

export const WithActionLink : Story<IPopoverProps> = Template.bind({});
WithActionLink.args = {
  ...InitiallyOpen.args,
  actionLink: {
    href: "#",
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      action("actionLink.onClick");
    },
    text: "Action link",
  },
  id: "popover-with-action-link",
};

export const MaxWidthOf75Pixels : Story<IPopoverProps> = Template.bind({});
MaxWidthOf75Pixels.args = {
  ...InitiallyOpen.args,
  maxWidth: 75,
};
MaxWidthOf75Pixels.storyName = "Max-width of 75px";

export const TopPlacement : Story<IPopoverProps> = Template.bind({});
TopPlacement.args = {
  ...InitiallyOpen.args,
  id: "top-placement",
  placement: placements.top,
};

export const TopStartPlacement : Story<IPopoverProps> = Template.bind({});
TopStartPlacement.args = {
  ...InitiallyOpen.args,
  id: "top-start-placement",
  placement: placements["top-start"],
};

export const TopEndPlacement : Story<IPopoverProps> = Template.bind({});
TopEndPlacement.args = {
  ...InitiallyOpen.args,
  id: "top-end-placement",
  placement: placements["top-end"],
};

export const BottomPlacement : Story<IPopoverProps> = Template.bind({});
BottomPlacement.args = {
  ...InitiallyOpen.args,
  id: "bottom-placement",
  placement: placements.bottom,
};

export const BottomStartPlacement : Story<IPopoverProps> = Template.bind({});
BottomStartPlacement.args = {
  ...InitiallyOpen.args,
  id: "bottom-start-placement",
  placement: placements["bottom-start"],
};

export const BottomEndPlacement : Story<IPopoverProps> = Template.bind({});
BottomEndPlacement.args = {
  ...InitiallyOpen.args,
  id: "bottom-end-placement",
  placement: placements["bottom-end"],
};

export const RightPlacement : Story<IPopoverProps> = Template.bind({});
RightPlacement.args = {
  ...InitiallyOpen.args,
  id: "right-placement",
  placement: placements.right,
};

export const RightStartPlacement : Story<IPopoverProps> = Template.bind({});
RightStartPlacement.args = {
  ...InitiallyOpen.args,
  id: "right-start-placement",
  placement: placements["right-start"],
};
RightStartPlacement.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const RightEndPlacement : Story<IPopoverProps> = Template.bind({});
RightEndPlacement.args = {
  ...InitiallyOpen.args,
  id: "right-end-placement",
  placement: placements["right-end"],
};
RightEndPlacement.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const LeftPlacement : Story<IPopoverProps> = Template.bind({});
LeftPlacement.args = {
  ...InitiallyOpen.args,
  id: "left-placement",
  placement: placements.left,
};

export const LeftStartPlacement : Story<IPopoverProps> = Template.bind({});
LeftStartPlacement.args = {
  ...InitiallyOpen.args,
  id: "left-start-placement",
  placement: placements["left-start"],
};

export const LeftEndPlacement : Story<IPopoverProps> = Template.bind({});
LeftEndPlacement.args = {
  ...InitiallyOpen.args,
  id: "left-end-placement",
  placement: placements["left-end"],
};
