import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { ILinkProps, Link } from "./Link";
import { underlines } from "./__fixtures__/underlines";
import { variants } from "./__fixtures__/variants";
import { colors } from "./__fixtures__/colors";
import { Typography } from "../Typography";

export default {
  component: Link,
  title: "Components/Link",
} as Meta;

const Template : Story<ILinkProps> = (args: ILinkProps) => (
  <Link{...args}>{args.children}</Link>
);

export const Playground : Story<ILinkProps> = Template.bind({});
Playground.args = {
  children: "Link text",
  color: colors.default,
  href: "#",
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
  },
  onKeyPress: (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  },
  underline: underlines.none,
  variant: variants.body2,
};

export const SkipToContent : Story<ILinkProps> = Template.bind({});
SkipToContent.args = {
  ...Playground.args,
  children: "Skip to content",
  href: "#content",
  variant: variants.srOnly,
};
SkipToContent.storyName = "Skip to Content Example (for screen readers)";

export const AnchorComponent : Story<ILinkProps> = Template.bind({});
AnchorComponent.args = {
  ...Playground.args,
  component: "a",
};

export const ButtonComponent : Story<ILinkProps> = Template.bind({});
ButtonComponent.args = {
  ...Playground.args,
  component: "button",
  href: null,
};

export const Colors : Story<ILinkProps> = (args: ILinkProps) => (
  <>
    {Object.keys(colors).map((color: ILinkProps["color"], index: number) => (
      <Typography key={index} paragraph={true}>
        <Link {...args} color={color}>{color}</Link>
      </Typography>
    ))}
  </>
);
Colors.args = Playground.args;

export const InheritColor : Story<ILinkProps> = Template.bind({});
InheritColor.args = {
  ...Playground.args,
  color: colors.inherit,
};
InheritColor.parameters = {
  docs: {
    description: { story: "The `inherit` `color` property can be useful for breadcrumbs and website footers." },
  },
};

export const Variants : Story<ILinkProps> = (args: ILinkProps) => (
  <>
    {Object.keys(variants).map((variant: ILinkProps["variant"], index: number) => (
      <Typography key={index} paragraph={true}>
        <Link {...args} variant={variant}>{variant}</Link>
      </Typography>
    ))}
  </>
);
Variants.args = Playground.args;

export const Underlines : Story<ILinkProps> = (args: ILinkProps) => (
  <div>
    {Object.keys(underlines).map((underline: ILinkProps["underline"], index: number) => (
      <Typography key={index} paragraph={true}>
        <Link {...args} underline={underline}>{underline}</Link>
      </Typography>
    ))}
  </div>
);
Underlines.args = Playground.args;

export const ForBreadcrumbs: Story<ILinkProps> = Template.bind({});
ForBreadcrumbs.args = {
  ...Playground.args,
  color: colors.inherit,
  underline: underlines.hover,
};

export const ForCurrentPageOnBreadcrumbs : Story<ILinkProps> = Template.bind({});
ForCurrentPageOnBreadcrumbs.args = {
  ...ForBreadcrumbs.args,
  "aria-current": "page",
  color: colors.textPrimary,
  underline: underlines.none,
};
