import * as React from "react";
import { Story } from "@storybook/react";
import { argTypes } from "./Typography.argTypes";

import { ITypographyProps, Typography } from "./Typography";

export default {
  argTypes,
  component: Typography,
  title: "Components/Typography",
};

const Template: Story<ITypographyProps> = (args) => <Typography {...args}>{args.children}</Typography>;

export const Playground: Story<ITypographyProps> = Template.bind({});
Playground.storyName = "Playground";

// eslint-disable-next-line complexity, max-lines-per-function
export const Variants: Story<ITypographyProps> = (args) => (
  <React.Fragment>
    <Typography {...args} variant={"h1"}>h1: {args.children || "Heading 1 text"}</Typography>
    <Typography {...args} variant={"h2"}>h2: {args.children || "Heading 2 text"}</Typography>
    <Typography {...args} variant={"h3"}>h3: {args.children || "Heading 3 text"}</Typography>
    <Typography {...args} variant={"h4"}>h4: {args.children || "Heading 4 text"}</Typography>
    <Typography {...args} variant={"h5"}>h5: {args.children || "Heading 5 text"}</Typography>
    <Typography {...args} variant={"h6"}>h6: {args.children || "Heading 6 text"}</Typography>
    <Typography {...args} variant={"subtitle1"}>subtitle1: {args.children || "Subtitle 1 text"}</Typography>
    <Typography {...args} variant={"subtitle2"}>subtitle2: {args.children || "Subtitle 2 text"}</Typography>
    <Typography {...args} variant={"body1"}>body1: {args.children || "Body 1 text"}</Typography>
    <Typography {...args} variant={"body2"}>body2: {args.children || "Body 2 text"}</Typography>
    <Typography {...args} variant={"caption"}>caption: {args.children || "Caption text"}</Typography>
    <div>
      <Typography {...args} variant={"button"}>button: {args.children || "Button text"}</Typography>
    </div>
    <Typography {...args} variant={"overline"}>overline: {args.children || "Overline text"}</Typography>
  </React.Fragment>
);
// @todo rewrite Variants story to remove complexity
Variants.storyName = "Variants";

export const Alignments: Story<ITypographyProps> = (args) => (
  <React.Fragment>
    <Typography {...args} align={"left"}>left: {args.children || "Left alignment"}</Typography>
    <Typography {...args} align={"center"}>center: {args.children || "Center alignment"}</Typography>
    <Typography {...args} align={"right"}>right: {args.children || "Right alignment"}</Typography>
  </React.Fragment>
);
Alignments.storyName = "Alignments";

export const Heading1: Story<ITypographyProps> = Template.bind({});
Heading1.args = {
  children: "Typography example",
  variant: "h1",
};
Heading1.storyName = "Heading level 1";

export const Heading3: Story<ITypographyProps> = Template.bind({});
Heading3.args = {
  children: "Typography example for heading level 3 (h3)",
  variant: "h3",
};
Heading3.storyName = "Heading level 3";

export const Body1: Story<ITypographyProps> = Template.bind({});
Body1.args = {
  children: "Typography example for body1 variant",
  variant: "body1",
};

export const Caption: Story<ITypographyProps> = Template.bind({});
Caption.args = {
  children: "Typography example for caption variant",
  variant: "caption",
};

export const AppBarTitle: Story<ITypographyProps> = Template.bind({});
AppBarTitle.args = {
  children: "Typography example for AppBar contents",
  component: "h1",
  style: {
    flexGrow: 1,
  },
  variant: "h6",
};
AppBarTitle.storyName = "AppBar title";

export const ProminentAppBarTitle: Story<ITypographyProps> = Template.bind({});
ProminentAppBarTitle.args = {
  ...AppBarTitle.args,
  children: "Typography example for prominent AppBar contents",
  style: {
    ...AppBarTitle.args.style,
    alignSelf: "flex-end",
  },
};
ProminentAppBarTitle.storyName = "Prominent AppBar title";
