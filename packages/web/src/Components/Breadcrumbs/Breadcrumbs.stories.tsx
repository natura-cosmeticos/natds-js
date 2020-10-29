import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Breadcrumbs, IBreadcrumbsProps } from "./Breadcrumbs";
import { Link } from "../Link";
import { ForBreadcrumbs, ForCurrentPageOnBreadcrumbs as LinkForCurrent } from "../Link/Link.stories";
import { Typography } from "../Typography";
import { Icon } from "../Icon";
import { Spacing } from "../Spacing";
import { TinyRightMargin } from "../Spacing/Spacing.margin.stories";
import { MicroIcon, TinyIcon } from "../Icon/Icon.stories";

export default {
  component: Breadcrumbs,
  subcomponents: { Icon, Link, Typography },
  title: "Components/Breadcrumbs",
} as Meta;

const Template : Story<IBreadcrumbsProps> = (args: IBreadcrumbsProps) => (
  <Breadcrumbs {...args}>{args.children}</Breadcrumbs>
);

export const Playground : Story<IBreadcrumbsProps> = Template.bind({});
Playground.args = {
  "aria-label": "Breadcrumbs",
  children: [
    <Link {...ForBreadcrumbs.args} key={"playground-0"} variant={"body2"}>
      Design System
    </Link>,
    <Link {...ForBreadcrumbs.args} key={"playground-1"} variant={"body2"}>
      Components
    </Link>,
    <Link {...LinkForCurrent.args} key={"playground-2"} variant={"body2"}>
      Breadcrumbs
    </Link>,
  ],
  separator: "/",
};

export const SeparatedBySlashes : Story<IBreadcrumbsProps> = Template.bind({});
SeparatedBySlashes.args = {
  ...Playground.args,
  separator: "/",
};

export const SeparatedByHyphens : Story<IBreadcrumbsProps> = Template.bind({});
SeparatedByHyphens.args = {
  ...Playground.args,
  separator: "-",
};

export const SeparatedByRightAngleQuote : Story<IBreadcrumbsProps> = Template.bind({});
SeparatedByRightAngleQuote.args = {
  ...Playground.args,
  separator: ">",
};

export const WithIconsAndBody1 : Story<IBreadcrumbsProps> = Template.bind({});
WithIconsAndBody1.args = {
  "aria-label": "Breadcrumb",
  children: [
    <Link {...ForBreadcrumbs.args} key={"with-icons-0"} style={{ display: "flex" }} variant={"body1"}>
      <Spacing display={"inline-flex"} {...TinyRightMargin.args}>
        <Icon {...TinyIcon.args} name={"outlined-navigation-home"} />
      </Spacing>
      Design System
    </Link>,
    <Link {...ForBreadcrumbs.args} key={"with-icons-1"} variant={"body1"}>
      Components
    </Link>,
    <Link {...LinkForCurrent.args} key={"playground-2"} variant={"body1"}>
      Breadcrumbs
    </Link>,
  ],
};

export const WithIconsAndBody2 : Story<IBreadcrumbsProps> = Template.bind({});
WithIconsAndBody2.args = {
  "aria-label": "Breadcrumbs",
  children: [
    <Link {...ForBreadcrumbs.args} key={"with-icons-0"} style={{ display: "flex" }} variant={"body2"}>
      <Spacing display={"inline-flex"} {...TinyRightMargin.args}>
        <Icon {...MicroIcon.args} name={"outlined-navigation-home"} />
      </Spacing>
      Design System
    </Link>,
    <Link {...ForBreadcrumbs.args} key={"with-icons-1"} variant={"body2"}>
      Components
    </Link>,
    <Link {...LinkForCurrent.args} key={"with-icons-2"} variant={"body2"}>
      Breadcrumbs
    </Link>,
  ],
};
